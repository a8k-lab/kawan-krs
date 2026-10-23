import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UserCheck,
  ShieldCheck,
  ShieldAlert,
  GraduationCap as StudentIcon,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import React, { useState } from "react";

interface LoginPageProps {
  onNavigate: (
    view: "login" | "register" | "mahasiswa" | "dosen" | "admin" | "superadmin"
  ) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState("nadya.salsabila@kawankrs.ac.id");
  const [password, setPassword] = useState("SecretPassword123");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<
    "mahasiswa" | "dosen" | "admin" | "superadmin"
  >("mahasiswa");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSelectDemoAccount = (
    role: "mahasiswa" | "dosen" | "admin" | "superadmin",
    demoEmail: string
  ) => {
    setEmail(demoEmail);
    setPassword("SecretPassword123");
    setSelectedRole(role);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email.trim(),
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(
          result.message ||
            "Gagal masuk. Periksa kembali email/NIM dan password Anda."
        );
        setIsLoading(false);
        return;
      }

      // Simpan session token & data profil user ke localStorage
      if (result.data) {
        localStorage.setItem("kawan_krs_token", result.data.sessionToken);
        localStorage.setItem(
          "kawan_krs_user",
          JSON.stringify(result.data.user)
        );
      }

      const userName = result.data?.user?.fullName || "Pengguna";
      const userRole = (result.data?.user?.role || "mahasiswa").toLowerCase();
      setSuccessMessage(
        `Login berhasil! Selamat datang, ${userName}. Mengalihkan...`
      );

      setTimeout(() => {
        if (userRole === "superadmin") {
          onNavigate("superadmin");
        } else if (userRole === "admin") {
          onNavigate("admin");
        } else if (userRole === "dosen") {
          onNavigate("dosen");
        } else {
          onNavigate("mahasiswa");
        }
      }, 500);
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage(
        "Tidak dapat terhubung ke server API. Pastikan server backend sedang aktif di port 3001."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Left Pane - Branding */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-[#8b1818] p-12 text-white select-none lg:flex lg:w-1/2">
        <div className="pointer-events-none absolute top-0 right-0 -mt-24 -mr-24 h-[500px] w-[500px] rounded-full bg-[#a72020] opacity-40 blur-2xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 -mb-24 -ml-24 h-[450px] w-[450px] rounded-full bg-[#671010] opacity-50 blur-3xl"></div>

        {/* Top Header Logo */}
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

        {/* Center Tagline */}
        <div className="relative z-10 my-auto max-w-lg py-12">
          <h2 className="mb-6 text-5xl leading-[1.15] font-extrabold tracking-tight">
            Rencanakan
            <br />
            Studi, Wujudkan
            <br />
            Masa Depan
          </h2>
          <p className="text-lg leading-relaxed font-light text-red-100/90">
            KawanKRS membantu pengelolaan akademik yang lebih mudah dan
            terintegrasi untuk mendukung keberhasilan mahasiswa.
          </p>
        </div>

        {/* Cityscape decorative bottom */}
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

      {/* Right Pane - Login Form */}
      <div className="flex w-full items-center justify-center bg-white p-6 md:p-12 lg:w-1/2">
        <div className="w-full max-w-md">
          {/* Header Title */}
          <div className="mb-6">
            <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900">
              Masuk ke KawanKRS
            </h2>
            <p className="text-sm text-gray-500">
              Silakan masuk dengan akun akademik Anda
            </p>
          </div>

          {/* Quick Demo Autofill Selector (4 Roles) */}
          <div className="mb-6 rounded-xl border border-red-100 bg-red-50/60 p-3.5">
            <p className="mb-2 flex items-center justify-between text-xs font-semibold text-red-800">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-600"></span>
                Isi Otomatis Akun Contoh (Demo Role):
              </span>
              <span className="text-[10px] font-normal text-gray-500">
                Klik untuk mengisi form
              </span>
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {/* Mahasiswa */}
              <button
                type="button"
                onClick={() =>
                  handleSelectDemoAccount(
                    "mahasiswa",
                    "nadya.salsabila@kawankrs.ac.id"
                  )
                }
                className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-2 shadow-xs transition-all ${
                  selectedRole === "mahasiswa" && email.includes("nadya")
                    ? "border-red-700 bg-red-600 text-white ring-2 ring-red-500/30"
                    : "border-red-200 bg-white text-gray-800 hover:border-red-600 hover:bg-red-50/80"
                }`}
              >
                <StudentIcon
                  className={`mb-1 h-3.5 w-3.5 ${selectedRole === "mahasiswa" && email.includes("nadya") ? "text-white" : "text-red-700"}`}
                />
                <span className="text-[10px] font-bold">Mahasiswa</span>
                <span
                  className={`text-[8px] ${selectedRole === "mahasiswa" && email.includes("nadya") ? "text-red-100" : "text-gray-500"}`}
                >
                  Nadya
                </span>
              </button>

              {/* Dosen PA */}
              <button
                type="button"
                onClick={() =>
                  handleSelectDemoAccount(
                    "dosen",
                    "wisnu.jatmiko@kawankrs.ac.id"
                  )
                }
                className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-2 shadow-xs transition-all ${
                  selectedRole === "dosen" && email.includes("wisnu")
                    ? "border-red-700 bg-red-600 text-white ring-2 ring-red-500/30"
                    : "border-red-200 bg-white text-gray-800 hover:border-red-600 hover:bg-red-50/80"
                }`}
              >
                <UserCheck
                  className={`mb-1 h-3.5 w-3.5 ${selectedRole === "dosen" && email.includes("wisnu") ? "text-white" : "text-blue-700"}`}
                />
                <span className="text-[10px] font-bold">Dosen PA</span>
                <span
                  className={`text-[8px] ${selectedRole === "dosen" && email.includes("wisnu") ? "text-red-100" : "text-gray-500"}`}
                >
                  Prof. Wisnu
                </span>
              </button>

              {/* Admin */}
              <button
                type="button"
                onClick={() =>
                  handleSelectDemoAccount(
                    "admin",
                    "rina.marlina@kawankrs.ac.id"
                  )
                }
                className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-2 shadow-xs transition-all ${
                  selectedRole === "admin" && email.includes("rina")
                    ? "border-red-700 bg-red-600 text-white ring-2 ring-red-500/30"
                    : "border-red-200 bg-white text-gray-800 hover:border-red-600 hover:bg-red-50/80"
                }`}
              >
                <ShieldCheck
                  className={`mb-1 h-3.5 w-3.5 ${selectedRole === "admin" && email.includes("rina") ? "text-white" : "text-emerald-700"}`}
                />
                <span className="text-[10px] font-bold">Admin</span>
                <span
                  className={`text-[8px] ${selectedRole === "admin" && email.includes("rina") ? "text-red-100" : "text-gray-500"}`}
                >
                  Rina Marlina
                </span>
              </button>

              {/* Super Admin */}
              <button
                type="button"
                onClick={() =>
                  handleSelectDemoAccount(
                    "superadmin",
                    "sarah.jenkins@kawankrs.ac.id"
                  )
                }
                className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-2 shadow-xs transition-all ${
                  selectedRole === "superadmin" && email.includes("sarah")
                    ? "border-red-700 bg-red-600 text-white ring-2 ring-red-500/30"
                    : "border-red-200 bg-white text-gray-800 hover:border-red-600 hover:bg-red-50/80"
                }`}
              >
                <ShieldAlert
                  className={`mb-1 h-3.5 w-3.5 ${selectedRole === "superadmin" && email.includes("sarah") ? "text-white" : "text-purple-700"}`}
                />
                <span className="text-[10px] font-bold">Super Admin</span>
                <span
                  className={`text-[8px] ${selectedRole === "superadmin" && email.includes("sarah") ? "text-red-100" : "text-gray-500"}`}
                >
                  Dr. Sarah
                </span>
              </button>
            </div>
          </div>

          {/* Alert Messages */}
          {errorMessage && (
            <div className="animate-fadeIn mb-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700 shadow-xs">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
              <div className="flex-1">
                <p className="font-bold">Gagal Masuk</p>
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

          {/* Form Login Asli (Email & Password) */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Email Akademik / NIM / NIP
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="nama@kawankrs.ac.id atau 2106721094"
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-gray-200 py-2.5 pr-4 pl-10 text-sm text-gray-800 transition-all focus:border-red-600 focus:ring-2 focus:ring-red-500/20 focus:outline-none disabled:bg-gray-50 disabled:text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full rounded-lg border border-gray-200 py-2.5 pr-10 pl-10 text-sm text-gray-800 transition-all focus:border-red-600 focus:ring-2 focus:ring-red-500/20 focus:outline-none disabled:bg-gray-50 disabled:text-gray-400"
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

            <div className="flex items-center justify-between pt-1">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-300 text-red-600 accent-red-600 focus:ring-red-500"
                />
                <span className="text-xs text-gray-600">Ingat saya</span>
              </label>
              <a
                href="#forgot"
                onClick={(e) => e.preventDefault()}
                className="text-xs font-semibold text-red-700 hover:text-red-800"
              >
                Lupa password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#8b1818] px-4 py-3 font-medium text-white shadow-md shadow-red-950/10 transition-all hover:bg-[#721313] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Memverifikasi...</span>
                </>
              ) : (
                <>
                  <span>Masuk</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Register */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              Belum memiliki akun KawanKRS?{" "}
              <button
                type="button"
                onClick={() => onNavigate("register")}
                className="cursor-pointer font-bold text-red-700 hover:text-red-800 hover:underline"
              >
                Daftar sekarang
              </button>
            </p>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6 text-center">
            <p className="text-[11px] text-gray-400">
              © 2026 KawanKRS • Sistem Cerdas Rekomendasi Rencana Studi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
