import {
  GraduationCap,
  LayoutDashboard,
  Users,
  FileText,
  Bell,
  LogOut,
  HelpCircle,
  Search,
  RefreshCw,
  Download,
  Plus,
  Edit3,
  Trash2,
  ArrowRight,
  Bot,
  Key,
  UserCheck,
  Shield,
  ChevronDown,
  Filter,
  Calendar,
  Clock,
  Flag,
  SlidersHorizontal,
} from "lucide-react";
import React, { useState, useEffect } from "react";

interface SuperAdminDashboardProps {
  onNavigate: (
    view: "login" | "register" | "mahasiswa" | "dosen" | "admin" | "superadmin"
  ) => void;
}

export const SuperAdminDashboard: React.FC<SuperAdminDashboardProps> = ({
  onNavigate,
}) => {
  const [activeMenu, setActiveMenu] = useState<"dashboard" | "users" | "audit">(
    "dashboard"
  );
  const [selectedYear, setSelectedYear] = useState("2024");

  useEffect(() => {
    const titles = {
      dashboard: "Kawan KRS | Dashboard Super Admin",
      users: "Kawan KRS | Manajemen Pengguna (Super Admin)",
      audit: "Kawan KRS | Log Aktivitas Sistem & Audit Trail",
    };
    document.title = titles[activeMenu] || "Kawan KRS | Super Admin Portal";
  }, [activeMenu]);

  // Search states
  const [searchUsers, setSearchUsers] = useState("");
  const [searchLogs, setSearchLogs] = useState("");

  // 1. Data Users (Gambar 1)
  const [usersList, setUsersList] = useState([
    {
      name: "Nadya Salsabila",
      sub: "Mahasiswa Aktif",
      email: "nadya.salsabila@mhs.univ.ac.id",
      faculty: "Fakultas Ilmu Komputer",
      cohort: "2024",
      isLecturer: false,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Dimas Farhan",
      sub: "Mahasiswa Aktif",
      email: "dimas.farhan@mhs.univ.ac.id",
      faculty: "Fakultas Teknik",
      cohort: "2023",
      isLecturer: false,
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Clarissa Kusuma",
      sub: "Mahasiswa Aktif",
      email: "clarissa.kusuma@mhs.univ.ac.id",
      faculty: "Fakultas Ekonomi & Bisnis",
      cohort: "2022",
      isLecturer: false,
      initials: "CK",
      avatarBg: "bg-rose-100 text-rose-600",
    },
    {
      name: "Prof. Ahmad Pratama",
      sub: "Dosen Pembimbing Akademik",
      email: "ahmad.pratama@univ.ac.id",
      faculty: "Fakultas Ilmu Komputer",
      cohort: "Dosen",
      isLecturer: true,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Budi Santoso",
      sub: "Mahasiswa Aktif",
      email: "budi.santoso@mhs.univ.ac.id",
      faculty: "Fakultas Kedokteran",
      cohort: "2021",
      isLecturer: false,
      initials: "BS",
      avatarBg: "bg-blue-100 text-blue-700",
    },
    {
      name: "Rina Marlina",
      sub: "Dosen Pengajar",
      email: "rina.marlina@univ.ac.id",
      faculty: "Fakultas Ekonomi & Bisnis",
      cohort: "Dosen",
      isLecturer: true,
      initials: "RM",
      avatarBg: "bg-rose-100 text-rose-600",
    },
    {
      name: "Fajar Ardiansyah",
      sub: "Mahasiswa Aktif",
      email: "fajar.ardiansyah@mhs.univ.ac.id",
      faculty: "Fakultas Teknik",
      cohort: "2023",
      isLecturer: false,
      initials: "FA",
      avatarBg: "bg-blue-100 text-blue-700",
    },
    {
      name: "Alya Wahyudi",
      sub: "Mahasiswa Aktif",
      email: "alya.wahyudi@mhs.univ.ac.id",
      faculty: "Fakultas Kedokteran",
      cohort: "2024",
      isLecturer: false,
      initials: "AW",
      avatarBg: "bg-orange-100 text-orange-600",
    },
  ]);

  // 2. Data Audit Logs (Gambar 2)
  const auditLogs = [
    {
      time: "Senin, 23 Sep 2024 - 10:42 WIB",
      user: "Dr. Sarah Jenkins",
      role: "Super Administrator",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
      actionTitle: "Modified KRS Quota for CS301",
      actionDesc:
        "Kapasitas ditambah dari 120 ke 160 kursi pada Fakultas Ilmu Komputer",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024 - 10:39 WIB",
      user: "Budi Santoso",
      role: "Database Engineer",
      initials: "BS",
      avatarBg: "bg-slate-700 text-white",
      actionTitle: "Force Sync Faculty Server DB",
      actionDesc:
        "Latensi tinggi terdeteksi saat replikasi data pada PostgreSQL Primary Cluster",
      status: "Warning",
      statusType: "warning",
    },
    {
      time: "Senin, 23 Sep 2024 - 10:35 WIB",
      user: "Rina Marlina",
      role: "Staf BAA Pusat",
      initials: "RM",
      avatarBg: "bg-[#8b1818] text-white",
      actionTitle: "Bulk Approved Student Overload Requests",
      actionDesc:
        "Validasi 48 pengajuan SKS berlebih (>24 SKS) Fakultas Ekonomi & Bisnis",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024 - 10:31 WIB",
      user: "Security Bot Shield",
      role: "Automated Daemon",
      initials: "BOT",
      icon: <Bot className="h-4 w-4 text-rose-700" />,
      avatarBg: "bg-rose-100 text-rose-800",
      actionTitle: "Rate Limit Triggered",
      actionDesc:
        "Blokir 42 request/detik dari sumber otomatis bot pada Auth Gateway / KRS Endpoint",
      status: "Failed",
      statusType: "failed",
    },
    {
      time: "Senin, 23 Sep 2024 - 10:14 WIB",
      user: "Security Vault Daemon",
      role: "System Security Service",
      initials: "SEC",
      icon: <Key className="h-4 w-4 text-rose-700" />,
      avatarBg: "bg-rose-100 text-rose-800",
      actionTitle: "API Key Revocation",
      actionDesc:
        "Rotasi berkala token otentikasi konektor mobile dosen pada OAuth Server Core",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024 - 09:58 WIB",
      user: "Hendra Wijaya",
      role: "Admin Akademik",
      initials: "HW",
      avatarBg: "bg-blue-100 text-blue-800",
      actionTitle: "User Role Escalation",
      actionDesc:
        "Pemberian hak akses Admin Akademik kepada staf BAA Hendra Wijaya",
      status: "Warning",
      statusType: "warning",
    },
    {
      time: "Senin, 23 Sep 2024 - 09:22 WIB",
      user: "Prof. Ahmad Pratama",
      role: "Dosen PA",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      actionTitle: "Database Backup Snapshot Created",
      actionDesc:
        "Pembuatan snapshot harian terenkripsi selesai (Ukuran: 4.8 GB)",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024 - 08:45 WIB",
      user: "Nadya Salsabila",
      role: "Mahasiswa",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      actionTitle: "Course Schedule Publishing",
      actionDesc:
        "Publikasi jadwal kuliah Semester Ganjil 2024/2025 untuk seluruh program studi",
      status: "Success",
      statusType: "success",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans text-slate-800 lg:flex-row">
      {/* ================= LEFT MAROON SIDEBAR ================= */}
      <aside className="flex w-full shrink-0 flex-col justify-between bg-[#8b1818] text-white shadow-xl lg:w-64">
        <div>
          {/* Brand Logo Header */}
          <div className="flex items-center gap-3 border-b border-white/10 p-6">
            <div className="rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight">KawanKRS</h1>
              <p className="text-[10px] font-semibold tracking-wider text-red-200 uppercase">
                Admin Portal
              </p>
            </div>
          </div>

          {/* Navigation Items (3 Menus) */}
          <nav className="space-y-1.5 p-4">
            <button
              onClick={() => setActiveMenu("dashboard")}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-semibold transition ${
                activeMenu === "dashboard"
                  ? "bg-white/15 text-white shadow-xs backdrop-blur-xs"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveMenu("users")}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-semibold transition ${
                activeMenu === "users"
                  ? "bg-white/15 text-white shadow-xs backdrop-blur-xs"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>User Management</span>
            </button>

            <button
              onClick={() => setActiveMenu("audit")}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-semibold transition ${
                activeMenu === "audit"
                  ? "bg-white/15 text-white shadow-xs backdrop-blur-xs"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Audit Logs</span>
            </button>
          </nav>
        </div>

        {/* Bottom Sidebar Widget */}
        <div className="m-4 space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs">
          <div>
            <span className="block text-[10px] font-bold tracking-wider text-red-200/70 uppercase">
              Tahun Akademik
            </span>
            <div className="mt-0.5 flex items-center gap-1.5 font-bold text-white">
              <span>2024/2025 Ganjil</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span className="text-[10px] text-emerald-300">Aktif</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-2">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-1.5 text-[11px] text-red-200 transition hover:text-white"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Pusat Bantuan Akademik</span>
            </a>

            <button
              onClick={() => onNavigate("login")}
              className="flex cursor-pointer items-center gap-1 text-[11px] text-red-200 transition hover:text-white"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ================= RIGHT MAIN CONTENT ================= */}
      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        {/* Top Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <div>
            <h2 className="text-sm font-bold text-slate-800">
              System Infrastructure & Logs
            </h2>
            <p className="text-[11px] text-slate-400">
              Super Administrator Control Overview
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative cursor-pointer rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#7a1212]"></span>
            </button>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-3">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-slate-900 text-xs font-bold text-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                  alt="Dr. Sarah Jenkins"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span>SJ</span>
              </div>
              <div className="hidden text-left text-xs leading-tight sm:block">
                <p className="font-bold text-slate-900">Dr. Sarah Jenkins</p>
                <p className="text-[10px] text-slate-500">
                  Super Administrator
                </p>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* VIEW 1: SUPER ADMIN DASHBOARD (GAMBAR 3)                                  */}
        {/* ========================================================================= */}
        {activeMenu === "dashboard" && (
          <main className="space-y-6 p-6">
            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {/* Dosen */}
              <div className="flex items-start justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Dosen
                  </span>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-3xl font-black text-slate-900">
                      428
                    </span>
                    <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      +12 semester ini
                    </span>
                  </div>
                  <span className="mt-2 block text-[11px] text-slate-400">
                    Dosen Aktif Pengajar
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-700">
                  <UserCheck className="h-5 w-5" />
                </div>
              </div>

              {/* Mahasiswa */}
              <div className="flex items-start justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Mahasiswa
                  </span>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-3xl font-black text-slate-900">
                      12,450
                    </span>
                    <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      98.4% KRS Terisi
                    </span>
                  </div>
                  <span className="mt-2 block text-[11px] text-slate-400">
                    Mahasiswa Terdaftar
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>

              {/* Admin Akademik */}
              <div className="flex items-start justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Admin Akademik
                  </span>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-3xl font-black text-slate-900">
                      36
                    </span>
                    <span className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                      Aktif Online
                    </span>
                  </div>
                  <span className="mt-2 block text-[11px] text-slate-400">
                    Staf BAA & Fakultas
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <Shield className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* SIAKAD Traffic Spline Chart */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Tren Aktivitas & Trafik Sistem SIAKAD
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Perbandingan aktivitas pengguna bulanan selama tahun
                    akademik berjalan.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#7a1212]"></span>{" "}
                      Mahasiswa
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>{" "}
                      Dosen
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>{" "}
                      Admin
                    </span>
                  </div>

                  <div className="relative flex items-center">
                    <Calendar className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-500" />
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-1.5 pr-7 pl-8 text-xs font-semibold text-slate-800 shadow-xs focus:outline-none"
                    >
                      <option value="2024">Tahun: 2024</option>
                      <option value="2023">Tahun: 2023</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Graphic Chart with Peak Tooltip */}
              <div className="relative h-64 w-full sm:h-72">
                <svg
                  viewBox="0 0 900 260"
                  className="h-full w-full overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id="gradientSuperRed"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#7a1212"
                        stopOpacity="0.25"
                      />
                      <stop
                        offset="100%"
                        stopColor="#7a1212"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                    <linearGradient
                      id="gradientSuperBlue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#2563eb"
                        stopOpacity="0.15"
                      />
                      <stop
                        offset="100%"
                        stopColor="#2563eb"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>

                  <line
                    x1="0"
                    y1="230"
                    x2="900"
                    y2="230"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />

                  {/* Admin dashed line */}
                  <path
                    d="M 50 200 L 850 200"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />

                  {/* Dosen Blue Curve */}
                  <path
                    d="M 50 200 Q 200 190, 350 140 T 550 180 T 650 90 T 750 160 T 850 195 L 850 230 L 50 230 Z"
                    fill="url(#gradientSuperBlue)"
                  />
                  <path
                    d="M 50 200 Q 200 190, 350 140 T 550 180 T 650 90 T 750 160 T 850 195"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                  />

                  {/* Mahasiswa Red Curve */}
                  <path
                    d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 40 T 750 130 T 850 180 L 850 230 L 50 230 Z"
                    fill="url(#gradientSuperRed)"
                  />
                  <path
                    d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 40 T 750 130 T 850 180"
                    fill="none"
                    stroke="#7a1212"
                    strokeWidth="3.5"
                  />

                  {/* Vertical dashed line indicator on peak */}
                  <line
                    x1="650"
                    y1="40"
                    x2="650"
                    y2="230"
                    stroke="#7a1212"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <circle
                    cx="650"
                    cy="40"
                    r="5"
                    fill="#7a1212"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <circle
                    cx="650"
                    cy="90"
                    r="4"
                    fill="#2563eb"
                    stroke="#fff"
                    strokeWidth="2"
                  />

                  {/* X Axis labels */}
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "Mei",
                    "Jun",
                    "Jul",
                    "Agu (Puncak)",
                    "Sep",
                    "Okt",
                    "Nov",
                    "Des",
                  ].map((month, idx) => (
                    <text
                      key={month}
                      x={50 + idx * 72}
                      y="250"
                      textAnchor="middle"
                      className={`text-[10px] ${month.includes("Puncak") ? "fill-[#7a1212] font-bold" : "fill-slate-400"}`}
                    >
                      {month}
                    </text>
                  ))}
                </svg>

                {/* Floating Tooltip over peak */}
                <div className="pointer-events-none absolute top-2 left-[62%] -translate-x-1/2 rounded-xl bg-slate-900 p-2 text-[10px] text-white shadow-lg">
                  <strong className="block font-bold">
                    Agustus (Puncak KRS Ganjil)
                  </strong>
                  <span className="text-slate-300">
                    Mahasiswa: 384,120 aktivitas / bln
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Activity Table */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Log Aktivitas Sistem Terbaru
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Catatan ringkas audit trail dan kontrol konfigurasi sistem
                    akademik.
                  </p>
                </div>

                <button
                  onClick={() => setActiveMenu("audit")}
                  className="flex cursor-pointer items-center gap-1 text-xs font-bold text-[#7a1212] hover:text-red-900"
                >
                  <span>Lihat Semua Log</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      <th className="pb-3 pl-2">Waktu</th>
                      <th className="pb-3">User</th>
                      <th className="pb-3">Aksi / Event</th>
                      <th className="pr-2 pb-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {auditLogs.slice(0, 5).map((log, idx) => (
                      <tr key={idx} className="transition hover:bg-slate-50/80">
                        <td className="py-3.5 pl-2 align-top whitespace-nowrap">
                          <div className="flex items-center gap-1.5 font-medium text-slate-700">
                            <Clock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                            <span>{log.time}</span>
                          </div>
                        </td>
                        <td className="py-3.5 pr-4 align-top whitespace-nowrap">
                          <div className="flex items-center gap-2.5">
                            {log.avatar ? (
                              <img
                                src={log.avatar}
                                alt={log.user}
                                className="h-8 w-8 shrink-0 rounded-full object-cover"
                              />
                            ) : (
                              <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${log.avatarBg}`}
                              >
                                {log.icon ? log.icon : log.initials}
                              </div>
                            )}
                            <div>
                              <span className="block leading-tight font-bold text-slate-900">
                                {log.user}
                              </span>
                              <span className="text-[10px] text-slate-500">
                                {log.role}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 pr-4 align-top">
                          <span className="block font-bold text-slate-800">
                            {log.actionTitle}
                          </span>
                          <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
                            {log.actionDesc}
                          </p>
                        </td>
                        <td className="py-3.5 pr-2 text-right align-top whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                              log.statusType === "success"
                                ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                                : log.statusType === "warning"
                                  ? "border border-amber-200 bg-amber-50 text-amber-700"
                                  : "border border-rose-200 bg-rose-50 text-rose-700"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                log.statusType === "success"
                                  ? "bg-emerald-500"
                                  : log.statusType === "warning"
                                    ? "bg-amber-500"
                                    : "bg-rose-500"
                              }`}
                            ></span>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: MANAJEMEN PENGGUNA (GAMBAR 1)                                     */}
        {/* ========================================================================= */}
        {activeMenu === "users" && (
          <main className="space-y-6 p-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-slate-900">
                  Manajemen Pengguna
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  Kelola akun dan data civitas akademika
                </p>
              </div>

              <button
                onClick={() => alert("Membuka modal Tambah Pengguna baru")}
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#8b1818] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#721313]"
              >
                <Plus className="h-4 w-4" />
                Tambah Pengguna
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs md:flex-row">
              <div className="relative w-full md:flex-1">
                <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchUsers}
                  onChange={(e) => setSearchUsers(e.target.value)}
                  placeholder="Cari nama atau email pengguna..."
                  className="w-full rounded-xl border border-slate-200 py-2 pr-4 pl-10 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#8b1818] focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                />
              </div>

              <div className="flex w-full items-center gap-2 md:w-auto">
                <select className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>Semua Fakultas</option>
                  <option>Fakultas Ilmu Komputer</option>
                  <option>Fakultas Teknik</option>
                  <option>Fakultas Ekonomi & Bisnis</option>
                  <option>Fakultas Kedokteran</option>
                </select>

                <select className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>Semua Angkatan</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>Dosen</option>
                </select>

                <button
                  onClick={() => alert("Filter pengguna")}
                  className="cursor-pointer rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
                  title="Filter"
                >
                  <Filter className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Table Users */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50/70 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    <tr>
                      <th className="py-3.5 pl-6">Nama</th>
                      <th className="py-3.5">Email</th>
                      <th className="py-3.5">Fakultas</th>
                      <th className="py-3.5 text-center">Angkatan</th>
                      <th className="py-3.5 pr-6 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {usersList
                      .filter(
                        (u) =>
                          u.name
                            .toLowerCase()
                            .includes(searchUsers.toLowerCase()) ||
                          u.email
                            .toLowerCase()
                            .includes(searchUsers.toLowerCase())
                      )
                      .map((user, idx) => (
                        <tr
                          key={idx}
                          className="transition hover:bg-slate-50/80"
                        >
                          <td className="py-3.5 pl-6 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              {user.avatar ? (
                                <img
                                  src={user.avatar}
                                  alt={user.name}
                                  className="h-8 w-8 shrink-0 rounded-full object-cover"
                                />
                              ) : (
                                <div
                                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${user.avatarBg}`}
                                >
                                  {user.initials}
                                </div>
                              )}
                              <div>
                                <strong className="block leading-tight font-bold text-slate-900">
                                  {user.name}
                                </strong>
                                <span
                                  className={`text-[10px] font-medium ${user.isLecturer ? "font-semibold text-red-700" : "text-slate-400"}`}
                                >
                                  {user.sub}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 whitespace-nowrap text-slate-600">
                            {user.email}
                          </td>
                          <td className="py-3.5 whitespace-nowrap">
                            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700">
                              {user.faculty}
                            </span>
                          </td>
                          <td className="py-3.5 text-center whitespace-nowrap">
                            {user.isLecturer ? (
                              <span className="rounded-md bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-800">
                                Dosen
                              </span>
                            ) : (
                              <span className="font-bold text-slate-700">
                                {user.cohort}
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 pr-6 text-right whitespace-nowrap">
                            <button
                              onClick={() => alert(`Edit profil ${user.name}`)}
                              className="cursor-pointer p-1 text-slate-400 transition hover:text-slate-700"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Hapus pengguna ${user.name}?`)) {
                                  setUsersList(
                                    usersList.filter((_, i) => i !== idx)
                                  );
                                }
                              }}
                              className="ml-1 cursor-pointer p-1 text-slate-400 transition hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 p-4 text-xs text-slate-400 sm:flex-row">
                <p>Menampilkan 1-8 dari 1.240 pengguna</p>
                <div className="flex items-center gap-1 font-semibold">
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-500 hover:bg-slate-50">
                    ‹
                  </button>
                  <button className="cursor-pointer rounded-lg bg-[#8b1818] px-2.5 py-1 text-white">
                    1
                  </button>
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50">
                    2
                  </button>
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50">
                    3
                  </button>
                  <span className="px-1 text-slate-300">...</span>
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50">
                    155
                  </button>
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-500 hover:bg-slate-50">
                    ›
                  </button>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: AUDIT LOGS PENUH (GAMBAR 2)                                       */}
        {/* ========================================================================= */}
        {activeMenu === "audit" && (
          <main className="space-y-6 p-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  Portal Administrasi &gt;{" "}
                  <span className="text-red-700">Audit Logs</span>
                </p>
                <div className="mt-1 flex items-center gap-3">
                  <h2 className="text-2xl font-black tracking-tight text-slate-900">
                    Log Aktivitas Sistem
                  </h2>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700">
                    Live Monitoring
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-slate-500">
                  Audit Trail & Rekam Jejak Sistem
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert("Data log berhasil diperbarui!")}
                  className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-50"
                >
                  <RefreshCw className="h-3.5 w-3.5 text-slate-500" />
                  Refresh Data
                </button>

                <button
                  onClick={() => alert("Mengekspor log audit ke CSV/PDF...")}
                  className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#8b1818] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#721313]"
                >
                  <Download className="h-3.5 w-3.5" />
                  Export Log (CSV/PDF)
                </button>
              </div>
            </div>

            {/* Filter toolbar */}
            <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs md:flex-row">
              <div className="relative w-full md:flex-1">
                <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchLogs}
                  onChange={(e) => setSearchLogs(e.target.value)}
                  placeholder="Cari aktivitas, nama user, atau event sistem..."
                  className="w-full rounded-xl border border-slate-200 py-2 pr-4 pl-10 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#8b1818] focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                />
              </div>

              <div className="flex w-full items-center gap-2 md:w-auto">
                <div className="relative flex items-center">
                  <SlidersHorizontal className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-400" />
                  <select className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-7 pl-8 text-xs font-semibold text-slate-700 focus:outline-none">
                    <option>Semua Kategori</option>
                    <option>KRS System</option>
                    <option>Database</option>
                    <option>Security</option>
                    <option>User Auth</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
                </div>

                <div className="relative flex items-center">
                  <Flag className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-400" />
                  <select className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-7 pl-8 text-xs font-semibold text-slate-700 focus:outline-none">
                    <option>Semua Status</option>
                    <option>Success</option>
                    <option>Warning</option>
                    <option>Failed</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
                </div>

                <div className="relative flex items-center">
                  <Calendar className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-400" />
                  <select className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-7 pl-8 text-xs font-semibold text-slate-700 focus:outline-none">
                    <option>Semua Waktu</option>
                    <option>Hari Ini</option>
                    <option>7 Hari Terakhir</option>
                    <option>30 Hari Terakhir</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Table Audit Logs */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50/70 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    <tr>
                      <th className="py-3.5 pl-6">Waktu</th>
                      <th className="py-3.5">User / Aktor</th>
                      <th className="py-3.5">Aksi / Event Sistem</th>
                      <th className="py-3.5 pr-6 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {auditLogs
                      .filter(
                        (l) =>
                          l.actionTitle
                            .toLowerCase()
                            .includes(searchLogs.toLowerCase()) ||
                          l.user
                            .toLowerCase()
                            .includes(searchLogs.toLowerCase())
                      )
                      .map((log, idx) => (
                        <tr
                          key={idx}
                          className="transition hover:bg-slate-50/80"
                        >
                          <td className="py-4 pl-6 align-top font-medium whitespace-nowrap text-slate-600">
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                              <span>{log.time}</span>
                            </div>
                          </td>
                          <td className="py-4 pr-4 align-top whitespace-nowrap">
                            <div className="flex items-center gap-2.5">
                              {log.avatar ? (
                                <img
                                  src={log.avatar}
                                  alt={log.user}
                                  className="h-8 w-8 shrink-0 rounded-full object-cover"
                                />
                              ) : (
                                <div
                                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${log.avatarBg}`}
                                >
                                  {log.icon ? log.icon : log.initials}
                                </div>
                              )}
                              <div>
                                <span className="block leading-tight font-bold text-slate-900">
                                  {log.user}
                                </span>
                                <span className="text-[10px] text-slate-500">
                                  {log.role}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="max-w-md py-4 pr-4 align-top">
                            <span className="block font-bold text-slate-900">
                              {log.actionTitle}
                            </span>
                            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
                              {log.actionDesc}
                            </p>
                          </td>
                          <td className="py-4 pr-6 text-right align-top whitespace-nowrap">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                                log.statusType === "success"
                                  ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                                  : log.statusType === "warning"
                                    ? "border border-amber-200 bg-amber-50 text-amber-700"
                                    : "border border-rose-200 bg-rose-50 text-rose-700"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  log.statusType === "success"
                                    ? "bg-emerald-500"
                                    : log.statusType === "warning"
                                      ? "bg-amber-500"
                                      : "bg-rose-500"
                                }`}
                              ></span>
                              {log.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 p-4 text-xs text-slate-400 sm:flex-row">
                <p>Menampilkan 1-8 dari 2.450 catatan log</p>
                <div className="flex items-center gap-1 font-semibold">
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-500 hover:bg-slate-50">
                    ‹ Previous
                  </button>
                  <button className="cursor-pointer rounded-lg bg-[#8b1818] px-2.5 py-1 text-white">
                    1
                  </button>
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50">
                    2
                  </button>
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50">
                    3
                  </button>
                  <span className="px-1 text-slate-300">...</span>
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50">
                    307
                  </button>
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-500 hover:bg-slate-50">
                    Next ›
                  </button>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};
