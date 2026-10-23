import {
  GraduationCap,
  Mail,
  Lock,
  User,
  Hash,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import React, { useState } from "react";

interface RegisterPageProps {
  onNavigate: (
    view: "login" | "register" | "mahasiswa" | "dosen" | "admin"
  ) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    identifier: "",
    role: "mahasiswa",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage(
        "Konfirmasi password tidak cocok dengan password yang Anda masukkan."
      );
      return;
    }

    if (formData.password.length < 8) {
      setErrorMessage("Password minimal harus terdiri dari 8 karakter.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          identifier: formData.identifier,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(
          result.message || "Pendaftaran akun gagal. Silakan periksa data Anda."
        );
        setIsLoading(false);
        return;
      }

      setSuccessMessage(
        "Pendaftaran akun KawanKRS berhasil! Mengalihkan ke halaman login..."
      );
      setTimeout(() => {
        onNavigate("login");
      }, 1500);
    } catch (err) {
      console.error("Registration error:", err);
      setErrorMessage(
        "Tidak dapat terhubung ke server backend API. Pastikan server aktif di port 3001."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Left Pane - Branding (Same as Login) */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-[#8b1818] p-12 text-white select-none lg:flex lg:w-1/2">
        <div className="pointer-events-none absolute top-0 right-0 -mt-24 -mr-24 h-[500px] w-[500px] rounded-full bg-[#a72020] opacity-40 blur-2xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 -mb-24 -ml-24 h-[450px] w-[450px] rounded-full bg-[#671010] opacity-50 blur-3xl"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-2.5 shadow-inner backdrop-blur-md">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">KawanKRS</h1>
            <p className="text-xs text-red-200">
              Sistem Perencanaan Studi Cerdas
            </p>
          </div>
        </div>

        <div className="relative z-10 my-auto max-w-lg py-12">
          <h2 className="mb-6 text-5xl leading-[1.15] font-extrabold tracking-tight">
            Mulai Langkah
            <br />
            Akademik Terbaik
            <br />
            Bersama Kami
          </h2>
          <p className="text-lg leading-relaxed font-light text-red-100/90">
            Daftarkan diri Anda untuk merasakan kemudahan rekomendasi rencana
            studi, visualisasi kelulusan, dan bimbingan terpadu.
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-8 text-xs text-red-200/80">
          <span>Telkom University • Fasilkom</span>
          <span>Edisi Kurikulum 2024/2025</span>
        </div>

        {/* Abstract Cityscape Graphic */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 flex h-32 items-end opacity-20">
          <div className="mx-1 h-12 w-16 rounded-t-sm bg-white"></div>
          <div className="mx-1 h-24 w-24 rounded-t-sm bg-white"></div>
          <div className="mx-1 h-32 w-12 rounded-t-sm bg-white"></div>
          <div className="mx-1 h-16 w-32 rounded-t-sm bg-white"></div>
          <div className="mx-1 h-28 w-20 rounded-t-sm bg-white"></div>
          <div className="mx-1 h-20 w-28 rounded-t-sm bg-white"></div>
          <div className="mx-1 h-12 w-16 rounded-t-sm bg-white"></div>
        </div>
      </div>

      {/* Right Pane - Register Form */}
      <div className="flex w-full items-center justify-center overflow-y-auto bg-white p-6 md:p-10 lg:w-1/2">
        <div className="my-auto w-full max-w-md">
          <div className="mb-6">
            <h2 className="mb-1.5 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              Buat Akun KawanKRS
            </h2>
            <p className="text-sm text-gray-500">
              Lengkapi data diri Anda untuk pendaftaran akun baru
            </p>
          </div>

          {/* Alert Messages */}
          {errorMessage && (
            <div className="animate-fadeIn mb-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700 shadow-xs">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
              <div className="flex-1">
                <p className="font-bold">Gagal Mendaftar</p>
                <p className="mt-0.5 leading-relaxed text-red-600">
                  {errorMessage}
                </p>
              </div>
            </div>
          )}

          {successMessage && (
            <div className="animate-fadeIn mb-4 flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs text-emerald-800 shadow-xs">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <p className="leading-relaxed font-semibold">{successMessage}</p>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Nama Lengkap
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nadya Salsabila"
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-gray-200 py-2 pr-4 pl-10 text-sm text-gray-800 transition-all focus:border-red-600 focus:ring-2 focus:ring-red-500/20 focus:outline-none disabled:bg-gray-50 disabled:text-gray-400"
                />
              </div>
            </div>

            {/* Role & NIM/NIP Row */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold tracking-wider text-gray-700 uppercase">
                  Peran Akun
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 transition-all focus:border-red-600 focus:ring-2 focus:ring-red-500/20 focus:outline-none disabled:bg-gray-50 disabled:text-gray-400"
                >
                  <option value="mahasiswa">Mahasiswa</option>
                  <option value="dosen">Dosen Wali</option>
                  <option value="admin">Admin Akademik</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold tracking-wider text-gray-700 uppercase">
                  NIM / NIP
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <Hash className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleChange}
                    placeholder="2106721094"
                    required
                    disabled={isLoading}
                    className="w-full rounded-lg border border-gray-200 py-2 pr-3 pl-9 text-sm text-gray-800 transition-all focus:border-red-600 focus:ring-2 focus:ring-red-500/20 focus:outline-none disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Email Akademik
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nadya.salsabila@kawankrs.ac.id"
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-gray-200 py-2 pr-4 pl-10 text-sm text-gray-800 transition-all focus:border-red-600 focus:ring-2 focus:ring-red-500/20 focus:outline-none disabled:bg-gray-50 disabled:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimal 8 karakter"
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-gray-200 py-2 pr-10 pl-10 text-sm text-gray-800 transition-all focus:border-red-600 focus:ring-2 focus:ring-red-500/20 focus:outline-none disabled:bg-gray-50 disabled:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Konfirmasi Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Ulangi password"
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-gray-200 py-2 pr-4 pl-10 text-sm text-gray-800 transition-all focus:border-red-600 focus:ring-2 focus:ring-red-500/20 focus:outline-none disabled:bg-gray-50 disabled:text-gray-400"
                />
              </div>
            </div>

            <div className="pt-1">
              <label className="flex cursor-pointer items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 accent-red-600 focus:ring-red-500"
                />
                <span className="text-xs text-gray-600">
                  Saya menyetujui Ketentuan Layanan & Kebijakan Privasi
                  KawanKRS.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#8b1818] px-4 py-2.5 font-medium text-white shadow-md shadow-red-950/10 transition-all hover:bg-[#721313] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Mendaftarkan Akun...</span>
                </>
              ) : (
                <>
                  <span>Daftar Sekarang</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Login */}
          <div className="mt-5 text-center">
            <p className="text-xs text-gray-600">
              Sudah memiliki akun?{" "}
              <button
                type="button"
                onClick={() => onNavigate("login")}
                className="cursor-pointer font-bold text-red-700 hover:text-red-800 hover:underline"
              >
                Masuk di sini
              </button>
            </p>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-4 text-center">
            <p className="text-[11px] text-gray-400">
              © 2026 KawanKRS • Sistem Cerdas Rekomendasi Rencana Studi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
