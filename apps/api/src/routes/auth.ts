import { RoleCode } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Hono } from "hono";

import { prisma } from "../lib/prisma.js";

export const authRoutes = new Hono();

// Helper untuk mapping string role ke RoleCode enum
function mapRoleCode(roleStr: string): RoleCode {
  const normalized = roleStr.toUpperCase();
  if (
    normalized === "DOSEN" ||
    normalized === "DOSEN WALI" ||
    normalized === "DOSEN PA"
  ) {
    return RoleCode.DOSEN;
  }
  if (normalized === "ADMIN" || normalized === "ADMIN AKADEMIK") {
    return RoleCode.ADMIN;
  }
  if (normalized === "SUPERADMIN" || normalized === "SUPER ADMINISTRATOR") {
    return RoleCode.SUPERADMIN;
  }
  return RoleCode.MAHASISWA;
}

/**
 * 1. POST /api/auth/register
 * Mendaftarkan akun baru (auth_users + auth_user_details)
 */
authRoutes.post("/register", async (c) => {
  try {
    const body = await c.req.json();
    const { fullName, identifier, email, password, role } = body;

    // Validasi input dasar
    if (!fullName || !identifier || !email || !password) {
      return c.json(
        {
          success: false,
          message:
            "Mohon lengkapi seluruh field (Nama, NIM/NIP, Email, Password)",
        },
        400
      );
    }

    if (password.length < 8) {
      return c.json(
        {
          success: false,
          message: "Password minimal terdiri dari 8 karakter",
        },
        400
      );
    }

    // Cek apakah email sudah terdaftar
    const existingEmail = await prisma.authUser.findUnique({
      where: { email: email.toLowerCase().trim() },
    });
    if (existingEmail) {
      return c.json(
        {
          success: false,
          message:
            "Email akademik ini sudah terdaftar. Silakan masuk menggunakan akun tersebut.",
        },
        400
      );
    }

    // Cek apakah identifier (NIM/NIP) sudah terdaftar
    const existingIdentifier = await prisma.authUserDetail.findUnique({
      where: { identifier: identifier.trim() },
    });
    if (existingIdentifier) {
      return c.json(
        {
          success: false,
          message: "NIM atau NIP ini sudah terdaftar dalam sistem.",
        },
        400
      );
    }

    // Cari role yang bersesuaian di auth_roles
    const targetRoleCode = mapRoleCode(role || "mahasiswa");
    const authRole = await prisma.authRole.findUnique({
      where: { code: targetRoleCode },
    });

    if (!authRole) {
      return c.json(
        {
          success: false,
          message: "Role yang dipilih tidak valid dalam sistem.",
        },
        400
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat akun di auth_users dan profil di auth_user_details
    const newUser = await prisma.authUser.create({
      data: {
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        isActive: true,
        detail: {
          create: {
            roleId: authRole.id,
            identifier: identifier.trim(),
            fullName: fullName.trim(),
            cohort:
              targetRoleCode === RoleCode.MAHASISWA
                ? new Date().getFullYear().toString()
                : null,
          },
        },
      },
      include: {
        detail: {
          include: {
            role: true,
          },
        },
      },
    });

    return c.json(
      {
        success: true,
        message: "Pendaftaran akun KawanKRS berhasil! Silakan masuk.",
        data: {
          id: newUser.id,
          uuid: newUser.uuid,
          email: newUser.email,
          fullName: newUser.detail?.fullName,
          identifier: newUser.detail?.identifier,
          role: newUser.detail?.role.code,
        },
      },
      201
    );
  } catch (error) {
    console.error("Error in /register:", error);
    return c.json(
      {
        success: false,
        message: "Terjadi kesalahan pada server saat registrasi",
      },
      500
    );
  }
});

/**
 * 2. POST /api/auth/login
 * Masuk menggunakan Email Akademik ATAU NIM/NIP + Password
 */
authRoutes.post("/login", async (c) => {
  try {
    const body = await c.req.json();
    const { identifier, password } = body;

    if (!identifier || !password) {
      return c.json(
        {
          success: false,
          message: "Mohon masukkan Email/NIM/NIP dan Password",
        },
        400
      );
    }

    const trimmedIdentifier = identifier.trim();

    // Cari user berdasarkan email ATAU identifier (NIM/NIP) di auth_user_details
    const user = await prisma.authUser.findFirst({
      where: {
        deletedAt: null,
        OR: [
          { email: trimmedIdentifier.toLowerCase() },
          { detail: { identifier: trimmedIdentifier, deletedAt: null } },
        ],
      },
      include: {
        detail: {
          include: {
            role: true,
            faculty: true,
            studyProgram: true,
            advisor: {
              include: {
                detail: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return c.json(
        {
          success: false,
          message: "Akun dengan Email atau NIM/NIP tersebut tidak ditemukan",
        },
        401
      );
    }

    if (!user.isActive) {
      return c.json(
        {
          success: false,
          message: "Akun Anda dinonaktifkan. Silakan hubungi Admin Akademik.",
        },
        403
      );
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return c.json(
        {
          success: false,
          message: "Password yang Anda masukkan salah",
        },
        401
      );
    }

    // Catat session login di auth_user_sessions (expiresAt dalam epoch detik)
    const sessionToken = crypto.randomUUID();
    const sessionHash = await bcrypt.hash(sessionToken, 10);
    const expiresAt = BigInt(
      Math.floor((Date.now() + 7 * 24 * 60 * 60 * 1000) / 1000)
    );

    await prisma.authUserSession.create({
      data: {
        userId: user.id,
        refreshTokenHash: sessionHash,
        userAgent: c.req.header("User-Agent") || "Unknown Device",
        ipAddress: c.req.header("x-forwarded-for") || "127.0.0.1",
        expiresAt,
      },
    });

    return c.json({
      success: true,
      message: "Login berhasil",
      data: {
        sessionToken,
        user: {
          id: user.id,
          uuid: user.uuid,
          email: user.email,
          role: user.detail?.role.code.toLowerCase(), // 'mahasiswa' | 'dosen' | 'admin' | 'superadmin'
          fullName: user.detail?.fullName,
          identifier: user.detail?.identifier,
          faculty: user.detail?.faculty
            ? {
                id: user.detail.faculty.id,
                uuid: user.detail.faculty.uuid,
                code: user.detail.faculty.code,
                name: user.detail.faculty.name,
              }
            : null,
          studyProgram: user.detail?.studyProgram
            ? {
                id: user.detail.studyProgram.id,
                uuid: user.detail.studyProgram.uuid,
                code: user.detail.studyProgram.code,
                name: user.detail.studyProgram.name,
                degree: user.detail.studyProgram.degree,
              }
            : null,
          cohort: user.detail?.cohort,
          gpa: user.detail?.gpa ? user.detail.gpa.toString() : null,
          totalCredits: user.detail?.totalCredits,
          title: user.detail?.title,
          advisor: user.detail?.advisor
            ? {
                id: user.detail.advisor.id,
                uuid: user.detail.advisor.uuid,
                fullName: user.detail.advisor.detail?.fullName,
                title: user.detail.advisor.detail?.title,
              }
            : null,
        },
      },
    });
  } catch (error) {
    console.error("Error in /login:", error);
    return c.json(
      {
        success: false,
        message: "Terjadi kesalahan pada server saat login",
      },
      500
    );
  }
});
