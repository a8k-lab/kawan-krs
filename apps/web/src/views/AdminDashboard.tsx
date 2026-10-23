import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  CreditCard,
  Users,
  HelpCircle,
  Bell,
  ArrowRight,
  Bot,
  Key,
  Calendar,
  LogOut,
  Search,
  RefreshCw,
  Download,
  Plus,
  Edit3,
  Trash2,
  Filter,
} from "lucide-react";
import React, { useState, useEffect } from "react";

interface AdminDashboardProps {
  onNavigate: (
    view: "login" | "register" | "mahasiswa" | "dosen" | "admin"
  ) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onNavigate,
}) => {
  const [activeMenu, setActiveMenu] = useState<
    "dashboard" | "matakuliah" | "biaya" | "users"
  >("dashboard");
  const [selectedYear, setSelectedYear] = useState("2024");

  useEffect(() => {
    const titles = {
      dashboard: "Kawan KRS | Dashboard Admin Akademik",
      matakuliah: "Kawan KRS | Master Mata Kuliah",
      biaya: "Kawan KRS | Biaya Semester & Tarif SKS",
      users: "Kawan KRS | Manajemen Pengguna",
    };
    document.title = titles[activeMenu] || "Kawan KRS | Admin Portal";
  }, [activeMenu]);

  // Search states for subpages
  const [searchMatkul, setSearchMatkul] = useState("");
  const [searchBiaya, setSearchBiaya] = useState("");
  const [searchUsers, setSearchUsers] = useState("");

  // 1. Data Biaya Semester (Gambar 1)
  const [biayaList, setBiayaList] = useState([
    {
      semester: "Semester 1",
      semColor: "bg-rose-50 text-rose-700 border-rose-200",
      code: "TRF-2024-01",
      title: "Skema Reguler Sarjana Teknik & Fasilkom",
      desc: "Termasuk laboratorium terpadu dan lisensi komputasi cloud",
      cohort: "2024",
      academicYear: "2024/2025",
      rate: "Rp 275.000",
    },
    {
      semester: "Semester 2",
      semColor: "bg-blue-50 text-blue-700 border-blue-200",
      code: "TRF-2024-02",
      title: "Skema Reguler Sarjana Sosial & Humaniora",
      desc: "Berlaku untuk mahasiswa jalur seleksi nasional SNBP/SNBT",
      cohort: "2024",
      academicYear: "2024/2025",
      rate: "Rp 250.000",
    },
    {
      semester: "Semester 3",
      semColor: "bg-rose-50 text-rose-700 border-rose-200",
      code: "TRF-2023-01",
      title: "Tarif Percepatan & Semester Antara (Remedial)",
      desc: "Batas maksimal pengambilan 9 SKS per periode pendek",
      cohort: "2023",
      academicYear: "2023/2024",
      rate: "Rp 300.000",
    },
    {
      semester: "Semester 4",
      semColor: "bg-blue-50 text-blue-700 border-blue-200",
      code: "TRF-2023-02",
      title: "Skema Standar Sarjana Angkatan 2023",
      desc: "Biaya operasional perkuliahan tatap muka & blended learning",
      cohort: "2023",
      academicYear: "2023/2024",
      rate: "Rp 260.000",
    },
    {
      semester: "Semester 5",
      semColor: "bg-rose-50 text-rose-700 border-rose-200",
      code: "TRF-2022-01",
      title: "Skema Afirmasi & Kemitraan Khusus",
      desc: "Subsidi silang universitas untuk wilayah 3T dan kemitraan PEMDA",
      cohort: "2022",
      academicYear: "2022/2023",
      rate: "Rp 220.000",
    },
    {
      semester: "Semester 6",
      semColor: "bg-blue-50 text-blue-700 border-blue-200",
      code: "TRF-2021-02",
      title: "Tarif Tingkat Akhir & Ujian Komprehensif",
      desc: "Khusus penyelesaian skripsi, seminar hasil, dan yudisium",
      cohort: "2021",
      academicYear: "2023/2024",
      rate: "Rp 200.000",
    },
  ]);

  // 2. Data Master Mata Kuliah (Gambar 2)
  const [matkulList, setMatkulList] = useState([
    {
      code: "CS101",
      name: "Pemrograman Berorientasi Objek",
      type: "3 SKS • Teori & Praktikum",
      desc: "Konsep fundamental OOP...",
      semester: "Semester 1",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "IF210",
      name: "Struktur Data & Algoritma",
      type: "4 SKS • Teori & Praktikum",
      desc: "Struktur data linier dan non-linier,...",
      semester: "Semester 3",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "SI302",
      name: "Basis Data Lanjutan",
      type: "3 SKS • Teori & Praktikum",
      desc: "Pemodelan transaksi relasional",
      semester: "Semester 5",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "DS401",
      name: "Kecerdasan Buatan",
      type: "3 SKS • Teori",
      desc: "Prinsip agen cerdas, heuristic...",
      semester: "Semester 5",
      status: "Pilihan",
      statusType: "elective",
    },
    {
      code: "IF204",
      name: "Rekayasa Perangkat Lunak",
      type: "3 SKS • Teori & Project",
      desc: "Siklus hidup SDLC, metodologi Agile...",
      semester: "Semester 4",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "TI105",
      name: "Desain Antarmuka Pengguna",
      type: "3 SKS • Praktikum",
      desc: "Prinsip Human-Computer...",
      semester: "Semester 3",
      status: "Pilihan",
      statusType: "elective",
    },
    {
      code: "CS202",
      name: "Jaringan Komputer",
      type: "3 SKS • Teori & Praktikum",
      desc: "Lapisan OSI dan TCP/IP model,...",
      semester: "Semester 4",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "IF305",
      name: "Sistem Operasi",
      type: "3 SKS • Teori & Praktikum",
      desc: "Manajemen proses, threads...",
      semester: "Semester 3",
      status: "Aktif",
      statusType: "active",
    },
  ]);

  // 3. Data User Management (Gambar 3)
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
      avatarBg: "bg-slate-200 text-slate-700",
    },
    {
      name: "Prof. Ahmad Pratama",
      sub: "Dosen Pembimbing Akademik",
      email: "ahmad.pratama@univ.ac.id",
      faculty: "Fakultas Ilmu Komputer",
      cohort: "DOSEN",
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
      avatarBg: "bg-slate-200 text-slate-700",
    },
    {
      name: "Rina Marlina",
      sub: "Dosen Pengajar",
      email: "rina.marlina@univ.ac.id",
      faculty: "Fakultas Ekonomi & Bisnis",
      cohort: "DOSEN",
      isLecturer: true,
      initials: "RM",
      avatarBg: "bg-rose-100 text-rose-800",
    },
    {
      name: "Fajar Ardiansyah",
      sub: "Mahasiswa Aktif",
      email: "fajar.ardiansyah@mhs.univ.ac.id",
      faculty: "Fakultas Teknik",
      cohort: "2023",
      isLecturer: false,
      initials: "FA",
      avatarBg: "bg-slate-200 text-slate-700",
    },
    {
      name: "Alya Wahyudi",
      sub: "Mahasiswa Aktif",
      email: "alya.wahyudi@mhs.univ.ac.id",
      faculty: "Fakultas Kedokteran",
      cohort: "2024",
      isLecturer: false,
      initials: "AW",
      avatarBg: "bg-slate-200 text-slate-700",
    },
  ]);

  // 4. Data Dashboard Logs (Gambar 4)
  const logs = [
    {
      time: "Senin, 23 Sep 2024",
      clock: "10:42 WIB",
      user: "Dr. Sarah Jenkins",
      role: "Super Administrator",
      initials: "SJ",
      avatarBg: "bg-red-800 text-white",
      actionTitle: "Modified KRS Quota for CS301",
      actionDesc:
        "Kapasitas ditambah dari 120 ke 160 kursi pada Fakultas Ilmu Komputer",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024",
      clock: "10:39 WIB",
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
      time: "Senin, 23 Sep 2024",
      clock: "10:35 WIB",
      user: "Rina Marlina",
      role: "Staf BAA Pusat",
      initials: "RM",
      avatarBg: "bg-rose-900 text-white",
      actionTitle: "Bulk Approved Student Overload Requests",
      actionDesc:
        "Validasi 48 pengajuan SKS berlebih (>24 SKS) Fakultas Ekonomi & Bisnis",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024",
      clock: "10:31 WIB",
      user: "Security Bot Shield",
      role: "Automated Daemon",
      initials: "BOT",
      icon: <Bot className="h-4 w-4 text-amber-700" />,
      avatarBg: "bg-amber-100 text-amber-800",
      actionTitle: "Rate Limit Triggered",
      actionDesc:
        "Blokir 42 request/detik dari sumber otomatis bot pada Auth Gateway / KRS EndPoint",
      status: "Warning",
      statusType: "warning",
    },
    {
      time: "Senin, 23 Sep 2024",
      clock: "10:14 WIB",
      user: "Security Vault Daemon",
      role: "System Security Service",
      initials: "SEC",
      icon: <Key className="h-4 w-4 text-slate-700" />,
      avatarBg: "bg-slate-200 text-slate-800",
      actionTitle: "API Key Revocation",
      actionDesc:
        "Rotasi berkala token otentikasi konektor mobile dosen pada OAuth Server Core",
      status: "Success",
      statusType: "success",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans text-slate-800 lg:flex-row">
      {/* ================= LEFT MAROON SIDEBAR ================= */}
      <aside className="flex w-full shrink-0 flex-col justify-between bg-[#7a1212] text-white shadow-xl lg:w-64">
        <div>
          {/* Brand Logo Header */}
          <div className="flex items-center gap-3 border-b border-white/10 p-6">
            <div className="rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight">KawanKRS</h1>
              <p className="text-[10px] font-semibold tracking-wider text-red-200 uppercase">
                Akademik Portal
              </p>
            </div>
          </div>

          {/* Navigation Items (4 Menus) */}
          <nav className="space-y-1.5 p-4">
            <button
              onClick={() => setActiveMenu("dashboard")}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition ${
                activeMenu === "dashboard"
                  ? "bg-white text-[#7a1212] shadow-md"
                  : "text-red-100 hover:bg-white/10"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveMenu("matakuliah")}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition ${
                activeMenu === "matakuliah"
                  ? "bg-white text-[#7a1212] shadow-md"
                  : "text-red-100 hover:bg-white/10"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Mata Kuliah</span>
            </button>

            <button
              onClick={() => setActiveMenu("biaya")}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition ${
                activeMenu === "biaya"
                  ? "bg-white text-[#7a1212] shadow-md"
                  : "text-red-100 hover:bg-white/10"
              }`}
            >
              <CreditCard className="h-4 w-4" />
              <span>Biaya Semester</span>
            </button>

            <button
              onClick={() => setActiveMenu("users")}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition ${
                activeMenu === "users"
                  ? "bg-white text-[#7a1212] shadow-md"
                  : "text-red-100 hover:bg-white/10"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>User Management</span>
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
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500">
              Dashboard Akademik
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>{" "}
              Sistem Normal
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative cursor-pointer rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#7a1212]"></span>
            </button>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7a1212] text-xs font-bold text-white">
                RM
              </div>
              <div className="hidden text-left text-xs leading-tight sm:block">
                <p className="font-bold text-slate-900">Rina Marlina, S.Sos.</p>
                <p className="text-[10px] text-slate-500">Admin Akademik</p>
              </div>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* VIEW 1: DASHBOARD UTAMA (GAMBAR 4)                                        */}
        {/* ========================================================================= */}
        {activeMenu === "dashboard" && (
          <main className="space-y-6 p-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  Ringkasan Eksekutif
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] text-slate-400">
                  Sinkronisasi Terakhir: Hari ini, 11:20 WIB
                </span>
              </div>
              <h2 className="mt-1 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
                Dashboard Akademik
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                Kendali tata kelola kurikulum, siklus pengisian KRS, dan
                realisasi biaya perkuliahan.
              </p>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                    +142 Terverifikasi
                  </span>
                </div>
                <div className="mt-4">
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Jumlah User
                  </span>
                  <div className="mt-1 text-3xl font-black text-slate-900">
                    12.878
                  </div>
                  <span className="mt-1 block text-[11px] text-slate-500">
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                    Mahasiswa, Dosen & Tendik
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#7a1212]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <span className="rounded-md border border-red-200 bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-[#7a1212]">
                    Aktif Berjalan
                  </span>
                </div>
                <div className="mt-4">
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Jumlah Semester
                  </span>
                  <div className="mt-1 text-3xl font-black text-slate-900">
                    8 Semester
                  </div>
                  <span className="mt-1 block text-[11px] text-slate-500">
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[#7a1212]"></span>
                    Periode Ganjil 2024/2025
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                    100% Terplot
                  </span>
                </div>
                <div className="mt-4">
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Total Mata Kuliah Aktif
                  </span>
                  <div className="mt-1 text-3xl font-black text-slate-900">
                    284 MK
                  </div>
                  <span className="mt-1 block text-[11px] text-slate-500">
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-amber-500"></span>
                    Kurikulum Berjalan 2024/2025
                  </span>
                </div>
              </div>
            </div>

            {/* Monthly Academic Trend Card (Spline Chart) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Tren Aktivitas Akademik Bulanan
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Perbandingan pertumbuhan dan keaktifan mahasiswa, dosen,
                    serta mata kuliah
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#7a1212]"></span>{" "}
                      Mahasiswa
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-800"></span>{" "}
                      Dosen
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>{" "}
                      Mata Kuliah
                    </span>
                  </div>

                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="cursor-pointer rounded-xl border border-slate-200 bg-white py-1.5 pr-8 pl-3 text-xs font-bold text-slate-800 focus:outline-none"
                  >
                    <option value="2024">Tahun: 2024</option>
                    <option value="2023">Tahun: 2023</option>
                  </select>
                </div>
              </div>

              {/* SVG Spline Graphic Chart */}
              <div className="relative h-64 w-full sm:h-72">
                <svg
                  viewBox="0 0 900 260"
                  className="h-full w-full overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id="gradientRed"
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
                      id="gradientYellow"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                      <stop
                        offset="100%"
                        stopColor="#f59e0b"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>

                  <line
                    x1="0"
                    y1="50"
                    x2="900"
                    y2="50"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="0"
                    y1="110"
                    x2="900"
                    y2="110"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="0"
                    y1="170"
                    x2="900"
                    y2="170"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="0"
                    y1="230"
                    x2="900"
                    y2="230"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />

                  <path
                    d="M 50 210 Q 150 200, 250 190 T 450 180 T 650 140 T 750 160 T 850 190 L 850 230 L 50 230 Z"
                    fill="url(#gradientYellow)"
                  />
                  <path
                    d="M 50 210 Q 150 200, 250 190 T 450 180 T 650 140 T 750 160 T 850 190"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                  />

                  <path
                    d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 65 T 750 130 T 850 175"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="2.5"
                  />

                  <path
                    d="M 50 180 Q 200 170, 350 110 T 550 160 T 650 50 T 750 120 T 850 170 L 850 230 L 50 230 Z"
                    fill="url(#gradientRed)"
                  />
                  <path
                    d="M 50 180 Q 200 170, 350 110 T 550 160 T 650 50 T 750 120 T 850 170"
                    fill="none"
                    stroke="#7a1212"
                    strokeWidth="3.5"
                  />

                  <circle
                    cx="650"
                    cy="50"
                    r="5"
                    fill="#7a1212"
                    stroke="#fff"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="650"
                    cy="65"
                    r="4"
                    fill="#1e293b"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <circle
                    cx="650"
                    cy="140"
                    r="4"
                    fill="#f59e0b"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <circle cx="350" cy="110" r="4" fill="#7a1212" />

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
              </div>
            </div>

            {/* Recent Activity Logs */}
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
                  onClick={() => alert("Membuka audit log penuh")}
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
                      <th className="pb-3">User / Aktor</th>
                      <th className="pb-3">Aksi / Event Sistem</th>
                      <th className="pr-2 pb-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {logs.map((log, idx) => (
                      <tr key={idx} className="transition hover:bg-slate-50/80">
                        <td className="py-3.5 pl-2 align-top whitespace-nowrap">
                          <span className="block font-semibold text-slate-800">
                            {log.time}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {log.clock}
                          </span>
                        </td>
                        <td className="py-3.5 pr-4 align-top whitespace-nowrap">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${log.avatarBg}`}
                            >
                              {log.icon ? log.icon : log.initials}
                            </div>
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
                                : "border border-amber-200 bg-amber-50 text-amber-700"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                log.statusType === "success"
                                  ? "bg-emerald-500"
                                  : "bg-amber-500"
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
        {/* VIEW 2: MASTER MATA KULIAH (GAMBAR 2)                                     */}
        {/* ========================================================================= */}
        {activeMenu === "matakuliah" && (
          <main className="space-y-6 p-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  <span className="text-red-700">KURIKULUM & PERKULIAHAN</span>{" "}
                  / Master Data
                </p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                  Master Mata Kuliah
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  Kelola data kurikulum, beban SKS, silabus, dan status
                  ketersediaan mata kuliah.
                </p>
              </div>

              <button
                onClick={() => alert("Membuka modal Tambah Mata Kuliah baru")}
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#8b1818] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#721313]"
              >
                <Plus className="h-4 w-4" />
                Tambah Mata Kuliah
              </button>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs md:flex-row">
              <div className="relative w-full md:flex-1">
                <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchMatkul}
                  onChange={(e) => setSearchMatkul(e.target.value)}
                  placeholder="Cari mata kuliah, kode MK, atau deskripsi..."
                  className="w-full rounded-xl border border-slate-200 py-2 pr-4 pl-10 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#8b1818] focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                />
              </div>

              <div className="flex w-full items-center gap-2 md:w-auto">
                <select className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>Semua Semester</option>
                  <option>Semester 1</option>
                  <option>Semester 3</option>
                  <option>Semester 4</option>
                  <option>Semester 5</option>
                </select>

                <select className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>Semua Status</option>
                  <option>Aktif</option>
                  <option>Pilihan</option>
                </select>

                <button
                  onClick={() =>
                    alert("Mengekspor data mata kuliah ke CSV/Excel...")
                  }
                  className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Download className="h-3.5 w-3.5 text-slate-500" />
                  Export
                </button>

                <button
                  onClick={() => setSearchMatkul("")}
                  className="cursor-pointer rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
                  title="Reset Filter"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Table Mata Kuliah */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50/70 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    <tr>
                      <th className="py-3.5 pl-6">Kode</th>
                      <th className="py-3.5">Nama Mata Kuliah</th>
                      <th className="py-3.5">Deskripsi</th>
                      <th className="py-3.5">Semester</th>
                      <th className="py-3.5">Status</th>
                      <th className="py-3.5 pr-6 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {matkulList
                      .filter(
                        (m) =>
                          m.name
                            .toLowerCase()
                            .includes(searchMatkul.toLowerCase()) ||
                          m.code
                            .toLowerCase()
                            .includes(searchMatkul.toLowerCase())
                      )
                      .map((mk, idx) => (
                        <tr
                          key={idx}
                          className="transition hover:bg-slate-50/80"
                        >
                          <td className="py-4 pl-6 font-bold whitespace-nowrap text-red-700">
                            {mk.code}
                          </td>
                          <td className="py-4 whitespace-nowrap">
                            <strong className="block font-bold text-slate-900">
                              {mk.name}
                            </strong>
                            <span className="text-[10px] text-slate-400">
                              {mk.type}
                            </span>
                          </td>
                          <td className="max-w-xs truncate py-4 text-slate-500">
                            {mk.desc}
                          </td>
                          <td className="py-4 whitespace-nowrap">
                            <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
                              {mk.semester}
                            </span>
                          </td>
                          <td className="py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                mk.statusType === "active"
                                  ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                                  : "border border-amber-200 bg-amber-50 text-amber-700"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  mk.statusType === "active"
                                    ? "bg-emerald-500"
                                    : "bg-amber-500"
                                }`}
                              ></span>
                              {mk.status}
                            </span>
                          </td>
                          <td className="py-4 pr-6 text-right whitespace-nowrap">
                            <button
                              onClick={() => alert(`Edit ${mk.name}`)}
                              className="cursor-pointer p-1 text-slate-400 transition hover:text-slate-700"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Hapus mata kuliah ${mk.name}?`)) {
                                  setMatkulList(
                                    matkulList.filter((_, i) => i !== idx)
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

              {/* Pagination Footer */}
              <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 p-4 text-xs text-slate-400 sm:flex-row">
                <p>Menampilkan 1-8 dari 284 mata kuliah</p>
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
                    36
                  </button>
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-500 hover:bg-slate-50">
                    Next ›
                  </button>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: BIAYA SEMESTER (GAMBAR 1)                                         */}
        {/* ========================================================================= */}
        {activeMenu === "biaya" && (
          <main className="space-y-6 p-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  <span className="text-red-700">KEUANGAN & ADMINISTRASI</span>{" "}
                  / Tarif Perkuliahan
                </p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                  Biaya Semester
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  Kelola konfigurasi skema biaya perkuliahan, tarif per SKS per
                  angkatan, dan penyesuaian tahun ajaran.
                </p>
              </div>

              <button
                onClick={() =>
                  alert("Membuka modal Tambah Biaya Semester baru")
                }
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#8b1818] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#721313]"
              >
                <Plus className="h-4 w-4" />
                Tambah Biaya Semester
              </button>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs md:flex-row">
              <div className="relative w-full md:flex-1">
                <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchBiaya}
                  onChange={(e) => setSearchBiaya(e.target.value)}
                  placeholder="Cari semester, kode tarif, atau tahun ajaran..."
                  className="w-full rounded-xl border border-slate-200 py-2 pr-4 pl-10 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#8b1818] focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                />
              </div>

              <div className="flex w-full items-center gap-2 md:w-auto">
                <select className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>Semua Angkatan</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>

                <select className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none">
                  <option>Semua Tahun Ajaran</option>
                  <option>2024/2025</option>
                  <option>2023/2024</option>
                  <option>2022/2023</option>
                </select>

                <button
                  onClick={() => setSearchBiaya("")}
                  className="cursor-pointer rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
                  title="Reset Filter"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>

                <button
                  onClick={() => alert("Mengekspor data tarif ke Excel...")}
                  className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Download className="h-3.5 w-3.5 text-slate-500" />
                  Ekspor
                </button>
              </div>
            </div>

            {/* Table Biaya Semester */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-200 bg-slate-50/70 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    <tr>
                      <th className="py-3.5 pl-6">Semester</th>
                      <th className="py-3.5">Kode Tarif</th>
                      <th className="py-3.5">Deskripsi Skema</th>
                      <th className="py-3.5 text-center">Angkatan</th>
                      <th className="py-3.5">Tahun Ajaran</th>
                      <th className="py-3.5">Tarif Per SKS</th>
                      <th className="py-3.5 pr-6 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {biayaList
                      .filter(
                        (b) =>
                          b.title
                            .toLowerCase()
                            .includes(searchBiaya.toLowerCase()) ||
                          b.code
                            .toLowerCase()
                            .includes(searchBiaya.toLowerCase())
                      )
                      .map((biaya, idx) => (
                        <tr
                          key={idx}
                          className="transition hover:bg-slate-50/80"
                        >
                          <td className="py-4 pl-6 whitespace-nowrap">
                            <span
                              className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${biaya.semColor}`}
                            >
                              • {biaya.semester}
                            </span>
                          </td>
                          <td className="py-4 font-bold whitespace-nowrap text-red-700">
                            {biaya.code}
                          </td>
                          <td className="max-w-sm py-4">
                            <strong className="block font-bold text-slate-900">
                              {biaya.title}
                            </strong>
                            <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">
                              {biaya.desc}
                            </p>
                          </td>
                          <td className="py-4 text-center whitespace-nowrap">
                            <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                              {biaya.cohort}
                            </span>
                          </td>
                          <td className="py-4 font-medium whitespace-nowrap text-slate-600">
                            {biaya.academicYear}
                          </td>
                          <td className="py-4 whitespace-nowrap">
                            <span className="block font-black text-slate-900">
                              {biaya.rate}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              / SKS
                            </span>
                          </td>
                          <td className="py-4 pr-6 text-right whitespace-nowrap">
                            <button
                              onClick={() => alert(`Edit ${biaya.code}`)}
                              className="cursor-pointer p-1 text-slate-400 transition hover:text-slate-700"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (
                                  confirm(`Hapus konfigurasi ${biaya.code}?`)
                                ) {
                                  setBiayaList(
                                    biayaList.filter((_, i) => i !== idx)
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

              {/* Pagination Footer */}
              <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 p-4 text-xs text-slate-400 sm:flex-row">
                <p>Menampilkan 1-6 dari 24 konfigurasi tarif</p>
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
                  <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-500 hover:bg-slate-50">
                    Next ›
                  </button>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: MANAJEMEN PENGGUNA (GAMBAR 3)                                     */}
        {/* ========================================================================= */}
        {activeMenu === "users" && (
          <main className="space-y-6 p-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  <span className="text-red-700">KEPEGAWAIAN & MAHASISWA</span>{" "}
                  / Pengguna Sistem
                </p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                  Manajemen Pengguna
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  Kelola akun dan data civitas akademika
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                  <Users className="h-3.5 w-3.5 text-slate-500" />
                  Total Terdaftar: 1.240
                </span>
                <button
                  onClick={() => alert("Mengekspor daftar pengguna...")}
                  className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-50"
                >
                  <Download className="h-3.5 w-3.5 text-slate-500" />
                  Ekspor
                </button>
              </div>
            </div>

            {/* Search and Filters */}
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
                  onClick={() => alert("Filter data pengguna")}
                  className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200"
                >
                  <Filter className="h-3.5 w-3.5" />
                  Filter
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
                                DOSEN
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

              {/* Pagination Footer */}
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
      </div>
    </div>
  );
};
