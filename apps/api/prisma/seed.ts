import { PrismaClient, RoleCode } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Memulai proses seeding database KawanKRS...");

  // 1. Bersihkan data lama
  await prisma.authUserSession.deleteMany();
  await prisma.authUserDetail.deleteMany();
  await prisma.authUser.deleteMany();
  await prisma.authRole.deleteMany();
  await prisma.acadStudyProgram.deleteMany();
  await prisma.acadFaculty.deleteMany();

  // 2. Seed Master Fakultas & Program Studi
  const fakultas = await prisma.acadFaculty.create({
    data: {
      code: "FIF",
      name: "Fakultas Informatika",
      description:
        "Fakultas yang menaungi bidang komputasi, kecerdasan buatan, dan teknologi perangkat lunak",
    },
  });
  console.log(
    `✅ Master Fakultas (${fakultas.name}, ID: ${fakultas.id}) berhasil dibuat`
  );

  const prodi = await prisma.acadStudyProgram.create({
    data: {
      facultyId: fakultas.id,
      code: "PJJ-IF",
      name: "S1 PJJ Informatika",
      degree: "S1",
    },
  });
  console.log(
    `✅ Master Program Studi (${prodi.name}, ID: ${prodi.id}) berhasil dibuat dengan relasi ke ${fakultas.name}`
  );

  // 3. Seed Master Roles
  const rolesData = [
    {
      code: RoleCode.MAHASISWA,
      name: "Mahasiswa",
      description:
        "Peran untuk mahasiswa aktif dalam pengisian dan perencanaan KRS",
    },
    {
      code: RoleCode.DOSEN,
      name: "Dosen Pembimbing Akademik",
      description:
        "Peran dosen wali untuk review dan persetujuan KRS mahasiswa",
    },
    {
      code: RoleCode.ADMIN,
      name: "Admin Akademik",
      description:
        "Peran staf BAA untuk manajemen matakuliah, biaya, dan pengguna",
    },
    {
      code: RoleCode.SUPERADMIN,
      name: "Super Administrator",
      description:
        "Peran tertinggi untuk kontrol infrastruktur dan audit logs sistem",
    },
  ];

  const rolesMap = new Map<RoleCode, number>();
  for (const r of rolesData) {
    const role = await prisma.authRole.create({ data: r });
    rolesMap.set(role.code, role.id);
  }
  console.log("✅ 4 Master Role berhasil dibuat (ID 1, 2, 3, 4)");

  // 4. Hash password default: "SecretPassword123"
  const defaultPassword = await bcrypt.hash("SecretPassword123", 10);

  // 5. Seed Dosen PA (Prof. Wisnu Jatmiko)
  const dosenUser = await prisma.authUser.create({
    data: {
      email: "wisnu.jatmiko@kawankrs.ac.id",
      password: defaultPassword,
      isActive: true,
      detail: {
        create: {
          roleId: rolesMap.get(RoleCode.DOSEN)!,
          facultyId: fakultas.id,
          studyProgramId: prodi.id,
          identifier: "197405101999031001",
          fullName: "Prof. Dr. Ir. Wisnu Jatmiko",
          title: "Prof. Dr. Ir.",
          phoneNumber: "081234567891",
        },
      },
    },
  });
  console.log(
    `✅ User Dosen PA (Prof. Wisnu Jatmiko, ID: ${dosenUser.id}, UUID: ${dosenUser.uuid}) berhasil dibuat`
  );

  // 6. Seed Mahasiswa (Nadya Salsabila, dibimbing oleh Prof. Wisnu)
  const mhsUser = await prisma.authUser.create({
    data: {
      email: "nadya.salsabila@kawankrs.ac.id",
      password: defaultPassword,
      isActive: true,
      detail: {
        create: {
          roleId: rolesMap.get(RoleCode.MAHASISWA)!,
          facultyId: fakultas.id,
          studyProgramId: prodi.id,
          identifier: "2106721094",
          fullName: "Nadya Salsabila",
          cohort: "2024",
          gpa: 3.82,
          totalCredits: 114,
          advisorId: dosenUser.id,
          phoneNumber: "081234567890",
        },
      },
    },
  });
  console.log(
    `✅ User Mahasiswa (Nadya Salsabila, ID: ${mhsUser.id}, UUID: ${mhsUser.uuid}) berhasil dibuat`
  );

  // 7. Seed Admin Akademik (Rina Marlina)
  const adminUser = await prisma.authUser.create({
    data: {
      email: "rina.marlina@kawankrs.ac.id",
      password: defaultPassword,
      isActive: true,
      detail: {
        create: {
          roleId: rolesMap.get(RoleCode.ADMIN)!,
          facultyId: fakultas.id,
          identifier: "ADM-BAA-001",
          fullName: "Rina Marlina",
          phoneNumber: "081234567892",
        },
      },
    },
  });
  console.log(
    `✅ User Admin Akademik (Rina Marlina, ID: ${adminUser.id}, UUID: ${adminUser.uuid}) berhasil dibuat`
  );

  // 8. Seed Super Admin (Dr. Sarah Jenkins)
  const superUser = await prisma.authUser.create({
    data: {
      email: "sarah.jenkins@kawankrs.ac.id",
      password: defaultPassword,
      isActive: true,
      detail: {
        create: {
          roleId: rolesMap.get(RoleCode.SUPERADMIN)!,
          identifier: "ROOT-SYS-001",
          fullName: "Dr. Sarah Jenkins",
          title: "Dr.",
          phoneNumber: "081234567893",
        },
      },
    },
  });
  console.log(
    `✅ User Super Admin (Dr. Sarah Jenkins, ID: ${superUser.id}, UUID: ${superUser.uuid}) berhasil dibuat`
  );

  console.log(
    "\n🎉 SEEDING SELESAI DENGAN SUKSES! Fakultas & Prodi telah terelasi ke data pengguna."
  );
}

main()
  .catch((e) => {
    console.error("❌ Terjadi kesalahan saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
