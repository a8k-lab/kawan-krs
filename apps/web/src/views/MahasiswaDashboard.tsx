import {
  GraduationCap,
  Bell,
  ArrowRight,
  Download,
  Sliders,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Edit3,
  Trash2,
  ShieldCheck,
  AlertCircle,
  Clock,
  DollarSign,
  Award,
  LogOut,
} from "lucide-react";
import React, { useState, useEffect } from "react";

interface MahasiswaDashboardProps {
  onBackToDosen?: () => void;
  onNavigate: (
    view: "login" | "register" | "mahasiswa" | "dosen" | "admin"
  ) => void;
}

export const MahasiswaDashboard: React.FC<MahasiswaDashboardProps> = ({
  onNavigate,
}) => {
  // Tab: 'rekomendasi' (Image 1) or 'riwayat' (Image 2)
  const [activeTab, setActiveTab] = useState<"rekomendasi" | "riwayat">(
    "rekomendasi"
  );

  useEffect(() => {
    if (activeTab === "rekomendasi") {
      document.title = "Kawan KRS | Rekomendasi Paket KRS Cerdas";
    } else {
      document.title = "Kawan KRS | Riwayat Studi & Transkrip Mahasiswa";
    }
  }, [activeTab]);

  // State for Generator form (Tab 1)
  const [targetSks, setTargetSks] = useState(20);
  const [budget, setBudget] = useState("7.500.000");
  const [selectedSemester, setSelectedSemester] = useState(
    "Semester 8 (Genap 2024/2025)"
  );
  const [selectedPlan, setSelectedPlan] = useState<"A" | "B" | "C">("A");

  // State for Input Nilai Mandiri (Tab 2)
  const [openSemester, setOpenSemester] = useState<number | null>(6);
  const [inputMatkul, setInputMatkul] = useState("");
  const [inputSks, setInputSks] = useState("3");
  const [inputNilai, setInputNilai] = useState("A");
  const [transkripSem6, setTranskripSem6] = useState([
    {
      code: "CS310",
      name: "Pemrograman Web",
      sks: 3,
      grade: "A",
      weight: "4.00",
    },
    {
      code: "CS312",
      name: "Rekayasa Perangkat Lunak",
      sks: 4,
      grade: "A",
      weight: "4.00",
    },
    {
      code: "CS315",
      name: "Basis Data Lanjut",
      sks: 3,
      grade: "A-",
      weight: "3.70",
    },
    {
      code: "CS318",
      name: "Sistem Terdistribusi",
      sks: 3,
      grade: "B+",
      weight: "3.30",
    },
    {
      code: "CS325",
      name: "Keamanan Informasi & Jaringan",
      sks: 3,
      grade: "A",
      weight: "4.00",
    },
    {
      code: "CS330",
      name: "Etika Profesi & Hukum Siber",
      sks: 4,
      grade: "A",
      weight: "4.00",
    },
  ]);

  const handleAddNilai = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMatkul.trim()) return;
    setTranskripSem6([
      ...transkripSem6,
      {
        code: "CS" + Math.floor(300 + Math.random() * 90),
        name: inputMatkul,
        sks: parseInt(inputSks),
        grade: inputNilai,
        weight:
          inputNilai === "A" ? "4.00" : inputNilai === "A-" ? "3.70" : "3.30",
      },
    ]);
    setInputMatkul("");
    alert("Nilai mata kuliah berhasil disimpan ke simulasi transkrip!");
  };

  const handleDeleteNilai = (index: number) => {
    setTranskripSem6(transkripSem6.filter((_, idx) => idx !== index));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-16 font-sans text-slate-800">
      {/* Top Header Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-xs">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Portal Badge */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8b1818] text-white shadow-xs">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-slate-900">
                  KawanKRS
                </span>
                <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-[#8b1818]">
                  MAHASISWA PORTAL
                </span>
              </div>
            </div>
          </div>

          {/* Right Header Navigation & Profile */}
          <div className="flex items-center gap-3">
            {/* Tab Navigation Pill Switcher */}
            <div className="flex items-center rounded-xl bg-slate-100 p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab("rekomendasi")}
                className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                  activeTab === "rekomendasi"
                    ? "bg-[#8b1818] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>⚡ Rekomendasi Paket KRS</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("riwayat")}
                className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                  activeTab === "riwayat"
                    ? "bg-[#8b1818] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>📖 Riwayat Studi</span>
              </button>
            </div>

            <div className="hidden items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 md:flex">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              2024/2025 Ganjil
            </div>

            <button className="relative cursor-pointer rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#8b1818]"></span>
            </button>

            {/* Profile Nadya */}
            <div className="flex items-center gap-2.5 border-l border-slate-200 pl-3">
              <div className="relative">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-[#8b1818] to-rose-400 text-xs font-bold text-white shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="Nadya"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span>NS</span>
                </div>
                <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500"></span>
              </div>
              <div className="hidden text-left text-xs leading-tight lg:block">
                <p className="font-bold text-slate-900">Nadya Salsabila</p>
                <p className="text-[10px] text-slate-400">NIM 2106721094</p>
              </div>

              <button
                onClick={() => onNavigate("login")}
                className="ml-1 cursor-pointer rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-700"
                title="Keluar / Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* TAB 1: GENERATOR PAKET KRS CERDAS (Sesuai Gambar 1 Baru)                  */}
      {/* ========================================================================= */}
      {activeTab === "rekomendasi" && (
        <main className="mx-auto mt-6 max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div>
            <div className="mb-1 flex items-center gap-2 text-xs font-bold tracking-wider text-[#8b1818] uppercase">
              <Sparkles className="h-3.5 w-3.5 text-[#8b1818]" />
              PERENCANAAN STUDI CERDAS BERBASIS AI
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Generator Paket KRS Cerdas
            </h1>
            <p className="mt-1 max-w-3xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              Dapatkan kombinasi rekomendasi paket mata kuliah terbaik untuk
              semester Anda berdasarkan analisis riwayat studi, syarat
              prasyarat, budget biaya kuliah, dan preferensi target SKS Anda.
            </p>
          </div>

          {/* Student Mini Profile Summary */}
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#8b1818] to-rose-400 text-sm font-bold text-white">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Nadya"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span>NS</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Nadya Salsabila
                  </h3>
                  <span className="rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-bold text-[#8b1818]">
                    Mahasiswa Aktif
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  NIM 2106721094 • S1 Ilmu Komputer • Fakultas Ilmu Komputer UI
                </p>
              </div>
            </div>

            <div className="grid w-full grid-cols-3 gap-3 text-center md:w-auto">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  Indeks Prestasi Kumulatif
                </span>
                <span className="mt-0.5 block text-base font-black text-slate-900">
                  3.82{" "}
                  <span className="text-[10px] font-normal text-slate-400">
                    / 4.00
                  </span>
                </span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  SKS Telah Lulus
                </span>
                <span className="mt-0.5 block text-base font-black text-slate-900">
                  124 / 144{" "}
                  <span className="text-[10px] font-normal text-slate-400">
                    SKS
                  </span>
                </span>
                <span className="block text-[9px] font-bold text-emerald-600">
                  86.1% Kurikulum
                </span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  Beban Max Berhak
                </span>
                <span className="mt-0.5 block text-base font-black text-[#8b1818]">
                  24 SKS
                </span>
                <span className="block text-[9px] text-slate-500">
                  IPK ≥ 3.50
                </span>
              </div>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 text-xs font-semibold">
            <button className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-[#8b1818] shadow-xs">
              <Sliders className="h-3.5 w-3.5" />
              Mode 1: Formulir Parameter Studi & Budget
            </button>
            <button className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-500 transition hover:text-slate-800">
              <Sparkles className="h-3.5 w-3.5" />
              Mode 2: Deskripsi & Cerita Minat (AI)
            </button>
          </div>

          {/* Parameter Rencana Studi & Budget Card */}
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex flex-col items-start justify-between gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <div className="rounded-xl bg-red-50 p-2 text-[#8b1818]">
                  <Sliders className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Parameter Rencana Studi & Budget
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Atur batas beban SKS dan alokasi biaya UKT semester aktif
                    Anda
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="font-medium text-slate-500">
                  Target Semester:
                </span>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none"
                >
                  <option>Semester 8 (Genap 2024/2025)</option>
                  <option>Semester 7 (Ganjil 2024/2025)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Target Beban SKS Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-700">Target Beban SKS</span>
                  <span className="text-base font-black text-[#8b1818]">
                    {targetSks}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      / Max 24 SKS
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="24"
                  step="2"
                  value={targetSks}
                  onChange={(e) => setTargetSks(parseInt(e.target.value))}
                  className="w-full cursor-pointer accent-[#8b1818]"
                />
                <div className="flex justify-between text-[10px] font-medium text-slate-400">
                  <span>12 SKS (Min. Riset)</span>
                  <span>18 SKS (Standar Skripsi)</span>
                  <span className="font-bold text-[#8b1818]">
                    24 SKS (Maksimal Hak IPK)
                  </span>
                </div>
              </div>

              {/* Budget Biaya Semester / UKT */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-700">
                    Budget Biaya Semester / UKT
                  </span>
                  <span className="text-[10px] font-normal text-slate-400">
                    Tarif SKS: Rp 375.000 / SKS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 text-xs font-bold text-slate-400">
                      Rp
                    </span>
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2 pr-4 pl-9 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                    />
                  </div>
                  <span className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-[10px] font-bold text-[#8b1818]">
                    MAKSIMAL
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 italic">
                  Perkiraan tagihan normal untuk {targetSks} SKS adalah sekitar
                  Rp 7.500.000 (BOP-B/UKT Fleksibel Terbuka).
                </p>
              </div>
            </div>

            {/* Big Action Button */}
            <button
              type="button"
              onClick={() =>
                alert(
                  "Sistem AI berhasil meregenerasi 3 paket rekomendasi terbaik berdasarkan parameter!"
                )
              }
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#8b1818] py-3.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#721313] active:scale-[0.99]"
            >
              <span>⚡ Generate Rekomendasi Paket KRS</span>
            </button>
          </div>

          {/* 3 Paket Rekomendasi Terpilih Section */}
          <div className="space-y-4">
            <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center">
              <div>
                <span className="block text-[10px] font-bold tracking-wider text-[#8b1818] uppercase">
                  ✦ HASIL KOMPARASI SIMULASI AI
                </span>
                <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">
                  3 Paket Rekomendasi Terpilih untuk Semester 8
                </h3>
                <p className="text-xs text-slate-500">
                  Pilihlah salah satu skenario yang paling sejalan dengan target
                  waktu wisuda, komitmen magang, dan alokasi finansial Anda.
                </p>
              </div>
              <span className="flex shrink-0 items-center gap-1 text-[11px] text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>{" "}
                Terakhir diperbarui: Hari ini, 09:42 WIB
              </span>
            </div>

            {/* 3 Packages Cards */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {/* PAKET A - Optimal Graduation (FEATURED) */}
              <div
                className={`relative flex flex-col justify-between rounded-2xl border-2 bg-white p-5 shadow-sm transition-all ${
                  selectedPlan === "A"
                    ? "border-[#8b1818] ring-4 ring-red-500/10"
                    : "border-slate-200"
                }`}
              >
                <div className="absolute -top-3 left-4 rounded-full bg-[#8b1818] px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase">
                  ★ REKOMENDASI UTAMA • PALING OPTIMAL
                </div>

                <div>
                  <div className="mb-3 pt-2">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      PAKET A
                    </span>
                    <h4 className="mt-0.5 text-sm font-extrabold text-slate-900">
                      Optimal Graduation & Fast Track
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Menyelesaikan sisa kewajiban skripsi dengan waktu riset
                      maksimal dan persiapan sidang tepat waktu.
                    </p>
                  </div>

                  {/* Metrics Box */}
                  <div className="mb-4 grid grid-cols-3 gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center">
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Total Beban
                      </span>
                      <strong className="block text-xs text-[#8b1818]">
                        18 SKS
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Biaya UKT
                      </span>
                      <strong className="block text-xs text-slate-800">
                        Rp 6,75 Jt
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Proyeksi
                      </span>
                      <strong className="block text-xs text-slate-800">
                        Juli 2025
                      </strong>
                    </div>
                  </div>

                  {/* Course List */}
                  <div className="mb-5 space-y-2">
                    <span className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      Mata Kuliah Terdaftar (5 MK):
                    </span>
                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS402 Sidang Skripsi
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Wajib Prodi • Lab Kecerdasan Artifisial
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        6 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS432 Deep Learning Terapan
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Pilihan Jalur AI • Senin 08.00
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        3 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS445 Natural Language Proc.
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Pilihan Jalur AI • Rabu 13.30
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        3 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS490 Seminar Riset Fasilkom
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Wajib Kolokium • Kamis 10.00
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        2 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          MBKM Proyek Independen
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Riset AI Terapan • Asynchronous
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        4 SKS
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan("A");
                    alert(
                      "Paket A dipilih! Rencana studi Anda telah diselaraskan."
                    );
                  }}
                  className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#8b1818] py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#721313]"
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* PAKET B - Fokus Karir & Magang */}
              <div
                className={`flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-xs transition-all ${
                  selectedPlan === "B"
                    ? "border-[#8b1818] ring-4 ring-red-500/10"
                    : "border-slate-200"
                }`}
              >
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      PAKET B
                    </span>
                    <h4 className="mt-0.5 text-sm font-extrabold text-slate-900">
                      Fokus Karir & Magang Industri
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Untuk mahasiswa yang ingin mengonversi magang industri
                      dengan beban kuliah teori yang terkelola rapi.
                    </p>
                  </div>

                  {/* Metrics Box */}
                  <div className="mb-4 grid grid-cols-3 gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center">
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Total Beban
                      </span>
                      <strong className="block text-xs text-slate-800">
                        20 SKS
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Biaya UKT
                      </span>
                      <strong className="block text-xs text-slate-800">
                        Rp 7,20 Jt
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Proyeksi
                      </span>
                      <strong className="block text-xs text-slate-800">
                        Juli 2025
                      </strong>
                    </div>
                  </div>

                  {/* Course List */}
                  <div className="mb-5 space-y-2">
                    <span className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      Mata Kuliah Terdaftar (4 MK):
                    </span>
                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS402 Sidang Skripsi
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Wajib Prodi • Topik Case Study Mitra
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        6 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS450 PKL / Magang Lanjut
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Eksplorasi Penuh Industri Mitra
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        6 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS428 Manajemen Proyek TI
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Kelas Daring • Selasa Malam
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        4 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS435 Cloud & DevOps
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Praktikum Lab Online • Jumat 14.00
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        4 SKS
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan("B");
                    alert("Paket B dipilih!");
                  }}
                  className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-blue-50 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-100"
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* PAKET C - Pengayaan Akademik */}
              <div
                className={`flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-xs transition-all ${
                  selectedPlan === "C"
                    ? "border-[#8b1818] ring-4 ring-red-500/10"
                    : "border-slate-200"
                }`}
              >
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      PAKET C
                    </span>
                    <h4 className="mt-0.5 text-sm font-extrabold text-slate-900">
                      Pengayaan Akademik & Lanjut Studi
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Persiapan studi master / fast track, fokus pada publikasi
                      ilmiah jurnal bereputasi Scopus/Sinta.
                    </p>
                  </div>

                  {/* Metrics Box */}
                  <div className="mb-4 grid grid-cols-3 gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center">
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Total Beban
                      </span>
                      <strong className="block text-xs text-slate-800">
                        16 SKS
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Biaya UKT
                      </span>
                      <strong className="block text-xs text-slate-800">
                        Rp 5,85 Jt
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Proyeksi
                      </span>
                      <strong className="block text-xs text-slate-800">
                        Juli 2025
                      </strong>
                    </div>
                  </div>

                  {/* Course List */}
                  <div className="mb-5 space-y-2">
                    <span className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      Mata Kuliah Terdaftar (4 MK):
                    </span>
                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS402 Sidang Skripsi
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Wajib Prodi • Target Paper IEEE
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        6 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS480 Kapita Selekta AI
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Tingkat Pascasarjana • Rabu 08.00
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        4 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS485 Metodologi Riset Lanjut
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Seminar Lanjut • Kamis 13.00
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        3 SKS
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 text-xs">
                      <div>
                        <strong className="block text-[11px] text-slate-800">
                          CS492 Penulisan Ilmiah
                        </strong>
                        <span className="text-[10px] text-slate-400">
                          Review Paper • Jumat 09.00
                        </span>
                      </div>
                      <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700">
                        3 SKS
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan("C");
                    alert("Paket C dipilih!");
                  }}
                  className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-blue-50 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-100"
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Analysis Box: Mengapa Paket A Direkomendasikan Utama oleh AI */}
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="rounded-xl bg-red-50 p-2 text-[#8b1818]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    Mengapa Paket A Direkomendasikan Utama oleh AI?
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    Laporan Penjelasan Algoritmik • Confidence Score: 96.8%
                  </p>
                </div>
              </div>
              <span className="rounded border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-bold text-[#8b1818]">
                Optimal Trade-off Analisis
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 text-xs leading-relaxed md:grid-cols-3">
              <div className="space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                <span className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Award className="h-3.5 w-3.5 text-[#8b1818]" />
                  Riwayat Nilai Unggul
                </span>
                <p className="text-[11px] text-slate-600">
                  Nadya meraih nilai <strong>A (4.0)</strong> pada mata kuliah
                  prasyarat CS301 Machine Learning dan CS202 Desain & Analisis
                  Algoritma. Paket A memaksimalkan akselerasi spesialisasi NLP
                  dan Deep Learning tanpa menimbulkan friksi pemahaman materi
                  dasar.
                </p>
              </div>

              <div className="space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                <span className="flex items-center gap-1.5 font-bold text-slate-900">
                  <DollarSign className="h-3.5 w-3.5 text-[#8b1818]" />
                  Efisiensi Finansial ± 10%
                </span>
                <p className="text-[11px] text-slate-600">
                  Dengan simulasi 18 SKS, total estimasi beban biaya adalah{" "}
                  <strong>Rp 6.750.000</strong>, yaitu berada 10% di bawah pagu
                  budget Rp 7.500.000 yang Anda tetapkan, menyisakan alokasi
                  darurat untuk pendaftaran konferensi ilmiah skripsi.
                </p>
              </div>

              <div className="space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                <span className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Clock className="h-3.5 w-3.5 text-[#8b1818]" />
                  Waktu Kerja Fleksibel
                </span>
                <p className="text-[11px] text-slate-600">
                  Mata kuliah pilihan terdistribusi pada jadwal pagi (Senin &
                  Rabu), membebaskan slot sore untuk komitmen magang part-time
                  di riset AI (estimasi 20 jam/minggu) tanpa resiko bentrok
                  jadwal kehadiran fisik maupun kuis lab.
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: RIWAYAT STUDI & JALUR KELULUSAN (Sesuai Gambar 2 Baru)               */}
      {/* ========================================================================= */}
      {activeTab === "riwayat" && (
        <main className="mx-auto mt-6 max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {/* Top Bio Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex flex-col items-start justify-between gap-6 border-b border-slate-100 pb-6 lg:flex-row lg:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-[#8b1818] to-rose-400 text-xl font-bold text-white shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                    alt="Nadya"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span>NS</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      Nadya Salsabila
                    </h2>
                    <span className="rounded-md border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-bold text-[#8b1818] uppercase">
                      Cumlaude Track
                    </span>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                      Aktif Semester 7
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    NIM 2106721094 • S1 Ilmu Komputer (Angkatan 2021) •{" "}
                    <span className="font-semibold text-slate-700">
                      🛡 Reguler
                    </span>
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    👨‍🏫 Dosen Pembimbing Akademik:{" "}
                    <strong className="text-slate-800">
                      Prof. Dr. Ir. Wisnu Jatmiko, M.Eng.
                    </strong>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert(
                    "Mengunduh ringkasan transkrip & jalur kelulusan PDF..."
                  )
                }
                className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-700 shadow-xs transition hover:bg-slate-50"
              >
                <Download className="h-3.5 w-3.5 text-slate-500" />
                Unduh Ringkasan
              </button>
            </div>

            {/* 5 Stats Cards Row */}
            <div className="grid grid-cols-2 gap-3 pt-6 text-center sm:grid-cols-3 lg:grid-cols-5">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  IPK Kumulatif
                </span>
                <span className="mt-1 block text-xl font-black text-slate-900">
                  3.82{" "}
                  <span className="text-xs font-normal text-slate-400">
                    / 4.00
                  </span>
                </span>
                <span className="mt-1 block text-[9px] font-bold text-emerald-600">
                  ★ Predikat Cumlaude
                </span>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  SKS Telah Lulus
                </span>
                <span className="mt-1 block text-xl font-black text-slate-900">
                  124{" "}
                  <span className="text-xs font-normal text-slate-400">
                    / 144 SKS
                  </span>
                </span>
                <span className="mt-1 block text-[9px] font-semibold text-slate-500">
                  86.1% Selesai
                </span>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  Beban Sem. 7 (Aktif)
                </span>
                <span className="mt-1 block text-xl font-black text-[#8b1818]">
                  20{" "}
                  <span className="text-xs font-normal text-slate-600">
                    SKS
                  </span>
                </span>
                <span className="mt-1 block text-[9px] font-semibold text-slate-500">
                  5 Mata Kuliah
                </span>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  Target Lulus
                </span>
                <span className="mt-1 block text-base font-black text-slate-900">
                  Jul / Agu 2025
                </span>
                <span className="mt-1 block text-[9px] font-semibold text-emerald-700">
                  Tepat Waktu (8 Sem)
                </span>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  Sisa SKS Kurikulum
                </span>
                <span className="mt-1 block text-xl font-black text-emerald-700">
                  0{" "}
                  <span className="text-xs font-normal text-slate-500">
                    SKS Defisit
                  </span>
                </span>
                <span className="mt-1 block text-[9px] text-slate-400">
                  Tercukupi total 144 SKS
                </span>
              </div>
            </div>
          </div>

          {/* Two Columns Grid */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            {/* ================= LEFT COLUMN: RIWAYAT TRANSKRIP STUDI ================= */}
            <div className="space-y-6">
              <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Riwayat Transkrip Studi
                  </h3>
                  <p className="text-xs text-slate-500">
                    Daftar perolehan nilai resmi dan simulasi mandiri mahasiswa
                  </p>
                </div>

                {/* Input / Perbarui Nilai Mandiri */}
                <form
                  onSubmit={handleAddNilai}
                  className="space-y-3 rounded-xl border border-red-200 bg-red-50/40 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#8b1818]">
                      <span className="h-2 w-2 rounded-full bg-[#8b1818]"></span>
                      Input / Perbarui Nilai Mandiri
                    </div>
                    <span className="rounded border border-red-200 bg-white px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#8b1818] uppercase">
                      Simulasi & Riwayat
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Tambahkan capaian nilai semester untuk memperbarui proyeksi
                    IPK seketika.
                  </p>

                  <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[10px] font-bold text-slate-600 uppercase">
                        Pilih Semester Target
                      </label>
                      <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none">
                        <option>Semester 6 (Genap 2023/2024)</option>
                        <option>Semester 7 (Ganjil 2024/2025)</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-[10px] font-bold text-slate-600 uppercase">
                        Kode & Nama Mata Kuliah
                      </label>
                      <input
                        type="text"
                        value={inputMatkul}
                        onChange={(e) => setInputMatkul(e.target.value)}
                        placeholder="Contoh: CS320 Pembelajaran Mesin"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-[10px] font-bold text-slate-600 uppercase">
                        Bobot SKS
                      </label>
                      <select
                        value={inputSks}
                        onChange={(e) => setInputSks(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none"
                      >
                        <option value="2">2 SKS</option>
                        <option value="3">3 SKS</option>
                        <option value="4">4 SKS</option>
                        <option value="6">6 SKS</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-[10px] font-bold text-slate-600 uppercase">
                        Nilai Huruf
                      </label>
                      <select
                        value={inputNilai}
                        onChange={(e) => setInputNilai(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none"
                      >
                        <option value="A">A (4.00)</option>
                        <option value="A-">A- (3.70)</option>
                        <option value="B+">B+ (3.30)</option>
                        <option value="B">B (3.00)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#8b1818] py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#721313]"
                  >
                    <span>Simpan Nilai</span>
                  </button>
                </form>

                {/* Semester Accordion List */}
                <div className="space-y-3">
                  {/* Semester 6 (Expanded Table) */}
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSemester(openSemester === 6 ? null : 6)
                      }
                      className="flex w-full cursor-pointer items-center justify-between bg-white p-3.5 text-left transition hover:bg-slate-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-black text-slate-700">
                          6
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-bold text-slate-900">
                              Semester 6
                            </h4>
                            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                              Genap 2023/2024
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400">
                            20 SKS Diselesaikan • 6 Mata Kuliah
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <span className="block text-[9px] font-bold text-slate-400 uppercase">
                            IPS Semester
                          </span>
                          <span className="text-xs font-black text-[#8b1818]">
                            3.80
                          </span>
                        </div>
                        {openSemester === 6 ? (
                          <ChevronUp className="h-4 w-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {openSemester === 6 && (
                      <div className="overflow-x-auto border-t border-slate-100 bg-slate-50 p-3 text-xs">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b border-slate-200 pb-1 text-[10px] font-bold text-slate-400 uppercase">
                              <th className="pb-2">Kode & Mata Kuliah</th>
                              <th className="pb-2 text-center">SKS</th>
                              <th className="pb-2 text-center">Nilai</th>
                              <th className="pb-2 text-center">Bobot</th>
                              <th className="pb-2 text-right">Aksi</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {transkripSem6.map((course, idx) => (
                              <tr
                                key={idx}
                                className="transition hover:bg-slate-100/60"
                              >
                                <td className="py-2.5">
                                  <strong className="block text-[11px] text-slate-800">
                                    {course.code}
                                  </strong>
                                  <span className="text-[10px] text-slate-500">
                                    {course.name}
                                  </span>
                                </td>
                                <td className="py-2.5 text-center font-bold text-slate-700">
                                  {course.sks}
                                </td>
                                <td className="py-2.5 text-center font-bold text-emerald-700">
                                  {course.grade}
                                </td>
                                <td className="py-2.5 text-center text-slate-600">
                                  {course.weight}
                                </td>
                                <td className="py-2.5 text-right whitespace-nowrap">
                                  <button
                                    onClick={() => alert(`Edit ${course.name}`)}
                                    className="cursor-pointer p-1 text-slate-400 transition hover:text-slate-700"
                                  >
                                    <Edit3 className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteNilai(idx)}
                                    className="ml-1 cursor-pointer p-1 text-slate-400 transition hover:text-red-700"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Semester 5 */}
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-black text-slate-700">
                        5
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">
                            Semester 5
                          </h4>
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600">
                            Ganjil 2023/2024
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          20 SKS Diselesaikan • 6 Mata Kuliah (Kecerdasan
                          Artifisial, Jaringan Komputer, dll)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        IPS Semester
                      </span>
                      <span className="text-xs font-black text-[#8b1818]">
                        3.85
                      </span>
                    </div>
                  </div>

                  {/* Semester 4 */}
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-black text-slate-700">
                        4
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">
                            Semester 4
                          </h4>
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600">
                            Genap 2022/2023
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          22 SKS Diselesaikan • Desain Algoritma, Sistem
                          Operasi, Grafika Komputer
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        IPS Semester
                      </span>
                      <span className="text-xs font-black text-[#8b1818]">
                        3.90
                      </span>
                    </div>
                  </div>

                  {/* Semester 3 */}
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-black text-slate-700">
                        3
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">
                            Semester 3
                          </h4>
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600">
                            Ganjil 2022/2023
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          21 SKS Diselesaikan • Struktur Data & Algoritma,
                          Aljabar Linier
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        IPS Semester
                      </span>
                      <span className="text-xs font-black text-[#8b1818]">
                        3.75
                      </span>
                    </div>
                  </div>

                  {/* Semester 2 */}
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-black text-slate-700">
                        2
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">
                            Semester 2
                          </h4>
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600">
                            Genap 2021/2022
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          21 SKS Diselesaikan • Matematika Diskret, Dasar
                          Pemrograman 2, dll
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        IPS Semester
                      </span>
                      <span className="text-xs font-black text-[#8b1818]">
                        3.78
                      </span>
                    </div>
                  </div>

                  {/* Semester 1 */}
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-black text-slate-700">
                        1
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">
                            Semester 1
                          </h4>
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600">
                            Ganjil 2021/2022
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          20 SKS Diselesaikan • Dasar Pemrograman 1, Kalkulus,
                          Pengantar Sistem Digital
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        IPS Semester
                      </span>
                      <span className="text-xs font-black text-[#8b1818]">
                        3.85
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: JALUR KELULUSAN MAHASISWA ================= */}
            <div className="space-y-6">
              <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Jalur Kelulusan Mahasiswa
                  </h3>
                  <p className="text-xs text-slate-500">
                    Audit kurikulum & proyeksi penyelesaian studi tepat waktu
                  </p>
                </div>

                {/* Prospek Box */}
                <div className="space-y-1 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    STATUS PROSPEK KELULUSAN: Sangat Tinggi (Predikat Cumlaude)
                  </div>
                  <p className="text-xs leading-relaxed text-emerald-800">
                    Berada pada trajectory unggul. Menyelesaikan 20 SKS pada
                    semester 7 ini akan menggenapkan total 144 SKS syarat
                    kelulusan tanpa ada tanggungan semester antara.
                  </p>
                </div>

                {/* Progres SKS Kurikulum */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Progres SKS Kurikulum</span>
                    <span className="text-[#8b1818]">144 / 144 SKS (100%)</span>
                  </div>
                  <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="bg-[#8b1818]"
                      style={{ width: "86.1%" }}
                      title="124 SKS Lulus"
                    ></div>
                    <div
                      className="bg-rose-400"
                      style={{ width: "13.9%" }}
                      title="20 SKS Berjalan"
                    ></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-medium text-slate-400">
                    <span>• 124 SKS Lulus (86.1%)</span>
                    <span className="text-rose-700">
                      • 20 SKS Berjalan (13.9%)
                    </span>
                    <span>Target 144 SKS</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">
                        Sisa Semester
                      </span>
                      <strong className="mt-0.5 block text-sm text-slate-800">
                        1 Semester
                      </strong>
                      <span className="text-[10px] text-slate-500">
                        Semester 8 (Feb-Jul 2025)
                      </span>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">
                        Kebutuhan SKS Sem 8
                      </span>
                      <strong className="mt-0.5 block text-sm text-emerald-700">
                        0 - 4 SKS
                      </strong>
                      <span className="text-[10px] text-slate-500">
                        Hanya Sidang/Publikasi
                      </span>
                    </div>
                  </div>
                </div>

                {/* Syarat Kelulusan S1 Fasilkom */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-slate-800">
                      <BookOpen className="h-3.5 w-3.5 text-[#8b1818]" />
                      Syarat Kelulusan S1 Fasilkom
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      1 dari 2 Terpenuhi
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <div>
                        <strong className="block text-xs text-slate-800">
                          Jumlah SKS 144
                        </strong>
                        <p className="text-[10px] text-slate-400">
                          Tercukupi total 144 SKS pasca menyelesaikan semester 7
                          (20 SKS)
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold whitespace-nowrap text-emerald-700">
                      124 / 144 SKS Lulus
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-2 rounded-xl border border-amber-200 bg-amber-50/50 p-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <div>
                        <strong className="block text-xs text-slate-800">
                          Tugas Akhir / Skripsi (6 SKS)
                        </strong>
                        <p className="text-[10px] text-amber-800/80">
                          Tahap Bimbingan Bab 3 & Pengumpulan Korpus Data Model
                          AI
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold whitespace-nowrap text-amber-700">
                      Sedang Berjalan
                    </span>
                  </div>
                </div>

                {/* Catatan Konsultasi Dosen PA */}
                <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-slate-700">
                      💬 Catatan Konsultasi Dosen PA
                    </span>
                    <span className="text-[10px] text-slate-400">
                      12 Oktober 2024
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8b1818] text-xs font-bold text-white">
                      WJ
                    </div>
                    <div>
                      <strong className="block text-xs leading-tight text-slate-900">
                        Prof. Dr. Ir. Wisnu Jatmiko, M.Eng.
                      </strong>
                      <span className="text-[10px] text-slate-500">
                        Guru Besar Fasilkom UI • Dosen PA
                      </span>
                    </div>
                  </div>

                  <p className="border-l-2 border-[#8b1818] pl-3 text-xs leading-relaxed text-slate-600 italic">
                    "Pencapaian akademis Nadya sejauh ini sangat konsisten di
                    zona Cumlaude. Untuk semester 7 ini, fokus utama adalah
                    mematangkan pipeline eksperimen pada transformer model untuk
                    skripsimu. Jika draft bab 4 dapat diselesaikan di Desember,
                    kamu siap mendaftar sidang perdana di bulan Mei/Juni 2025."
                  </p>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      ✓ Disetujui untuk Akselerasi Skripsi
                    </span>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-[11px] font-bold text-[#8b1818] hover:underline"
                    >
                      Lihat Log Bimbingan →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Persistent Footer */}
      <footer className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between border-t border-slate-200 px-4 pt-6 text-xs text-slate-400 sm:px-6 lg:px-8">
        <p>
          KawanKRS • Sistem Perencanaan Studi Cerdas & Rekomendasi KRS Mahasiswa
          • Fakultas Ilmu Komputer UI
        </p>
        <span className="flex items-center gap-1.5 font-medium text-emerald-600">
          STATUS SERVER: AKTIF{" "}
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        </span>
      </footer>
    </div>
  );
};
