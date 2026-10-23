import {
  GraduationCap,
  Bell,
  Download,
  Search,
  Users,
  TrendingUp,
  CheckSquare,
  BookOpen,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Plus,
  ShieldCheck,
  LogOut,
  Mail,
  Phone,
  UserCheck,
  CheckCircle2,
  Lock,
  Send,
  Milestone,
  Shield,
  Award,
  Check,
  FileText,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";
import React, { useState, useEffect } from "react";

interface DosenDashboardProps {
  onNavigate: (
    view: "login" | "register" | "mahasiswa" | "dosen" | "admin"
  ) => void;
}

export const DosenDashboard: React.FC<DosenDashboardProps> = ({
  onNavigate,
}) => {
  // Navigation inside Dosen role: null = Student List (Image 2), string = Student Detail (Image 1)
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (selectedStudentId) {
      document.title = "Kawan KRS | Workspace PA - Detail Mahasiswa";
    } else {
      document.title = "Kawan KRS | Portal Dosen Pembimbing Akademik";
    }
  }, [selectedStudentId]);

  // Filter states for Student List
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<
    "all" | "on-track" | "needs-help"
  >("all");
  const [selectedCohort, setSelectedCohort] = useState<string>("all");

  // Notes state for Student Detail (PA Notes)
  const [newNote, setNewNote] = useState("");
  const [openSemesterDetail, setOpenSemesterDetail] = useState<number | null>(
    6
  );
  const [notes, setNotes] = useState([
    {
      author: "Prof. Dr. Ir. Wisnu Jatmiko",
      date: "20 Sep 2024",
      text: "Bab 1 dan 2 proposal skripsi sudah baik. Pertajam rumusan masalah pada benchmark transformer model. Lanjutkan ke bimbingan metodologi minggu depan.",
      topic: "Skripsi / Tugas Akhir",
    },
    {
      author: "Prof. Dr. Ir. Wisnu Jatmiko",
      date: "12 Agu 2024",
      text: "Evaluasi KRS semester 7: Pengambilan 20 SKS disetujui, disarankan fokus penulisan naskah tugas akhir agar target lulus Juli 2025 tercapai tanpa kendala.",
      topic: "Rencana Studi",
    },
  ]);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotes([
      {
        author: "Prof. Dr. Ir. Wisnu Jatmiko",
        date: "Hari ini",
        text: newNote,
        topic: "Bimbingan PA",
      },
      ...notes,
    ]);
    setNewNote("");
    alert("Catatan bimbingan berhasil disimpan!");
  };

  const students = [
    {
      id: "1",
      name: "Nadya Salsabila",
      nim: "2106721094",
      prodi: "S1 Ilmu Komputer • Angkatan 2021",
      status: "On Track (Sem. 7)",
      statusType: "on-track",
      cohort: "2021",
      ipk: "3.78",
      sks: "124 /144",
      krsLoad: "21 SKS",
      progress: 86,
      progressText: "86% Selesai",
      coursesInfo: "6 Mata Kuliah (Termasuk Seminar Skripsi)",
      note: "Konsultasi draft proposal Skripsi bab 1-3 disetujui untuk maju seminar kolokium. Tetap kawal sitasi jurnal...",
    },
    {
      id: "2",
      name: "Dimas Farhan",
      nim: "2206834112",
      prodi: "S1 Sistem Informasi • Angkatan 2022",
      status: "Perlu Pendampingan",
      statusType: "needs-help",
      cohort: "2022",
      ipk: "2.84",
      sks: "76 /144",
      krsLoad: "18 SKS",
      progress: 52,
      progressText: "52% (Tertinggal 8 SKS)",
      warning: "5 Mata Kuliah (Mengulang Basis Data)",
      note: "Perlu bimbingan intensif manajemen waktu dan asistensi praktikum. Jadwal evaluasi UTS wajib lapor...",
    },
    {
      id: "3",
      name: "Clarissa Kusuma",
      nim: "2306912348",
      prodi: "S1 Ilmu Komputer • Angkatan 2023",
      status: "On Track (Sem. 3)",
      statusType: "on-track",
      cohort: "2023",
      ipk: "3.92",
      sks: "42 /144",
      krsLoad: "22 SKS",
      progress: 29,
      progressText: "29% Selesai",
      coursesInfo: "7 Mata Kuliah (Termasuk Algoritma)",
      note: "Pencapaian sangat memuaskan, didorong untuk mulai eksplorasi tim kompetisi Gemastik atau PKM semester depan.",
    },
    {
      id: "4",
      name: "Fajar Ardiansyah",
      nim: "2106755431",
      prodi: "S1 Ilmu Komputer • Angkatan 2021",
      status: "On Track (Sem. 7)",
      statusType: "on-track",
      cohort: "2021",
      ipk: "3.65",
      sks: "126 /144",
      krsLoad: "18 SKS",
      progress: 87,
      progressText: "87% Selesai",
      coursesInfo: "5 Mata Kuliah (Termasuk Semhas Skripsi)",
      note: "Dataset penelitian Deep Learning telah ditinjau dan disetujui. Lanjutkan bab implementasi dan uji akurasi...",
    },
    {
      id: "5",
      name: "Alya Wahyudi",
      nim: "2406123456",
      prodi: "S1 Sistem Informasi • Angkatan 2024",
      status: "Mahasiswa Baru",
      statusType: "on-track",
      cohort: "2024",
      ipk: "-",
      sks: "0 /144",
      krsLoad: "20 SKS",
      progress: 5,
      progressText: "Semester 1",
      coursesInfo: "6 Mata Kuliah Paket Kurikulum 2024",
      note: "Orientasi akademik terlaksana baik. Mahasiswa memahami aturan kehadiran 80% dan etika komunikasi.",
    },
    {
      id: "6",
      name: "Budi Santoso",
      nim: "2206432198",
      prodi: "S1 Ilmu Komputer • Angkatan 2022",
      status: "On Track (Sem. 5)",
      statusType: "on-track",
      cohort: "2022",
      ipk: "3.51",
      sks: "88 /144",
      krsLoad: "20 SKS",
      progress: 61,
      progressText: "61% Selesai",
      coursesInfo: "6 Mata Kuliah (Termasuk Rekayasa PL)",
      note: "KRS semester 5 telah disetujui penuh. Diingatkan untuk membagi waktu dengan kegiatan kepengurusan BEM.",
    },
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.nim.includes(searchQuery);
    const matchesStatus =
      selectedStatus === "all" ||
      (selectedStatus === "on-track" && student.statusType === "on-track") ||
      (selectedStatus === "needs-help" && student.statusType === "needs-help");
    const matchesCohort =
      selectedCohort === "all" || student.cohort === selectedCohort;
    return matchesSearch && matchesStatus && matchesCohort;
  });

  const semesters = [
    {
      sem: 6,
      title: "Semester 6 • Genap 2023/2024",
      sks: "20 SKS • 6 Mata Kuliah Lulus",
      ips: "3.80",
    },
    {
      sem: 5,
      title: "Semester 5 • Ganjil 2023/2024",
      sks: "20 SKS • 6 Mata Kuliah Lulus",
      ips: "3.85",
    },
    {
      sem: 4,
      title: "Semester 4 • Genap 2022/2023",
      sks: "22 SKS • 6 Mata Kuliah Lulus",
      ips: "3.90",
    },
    {
      sem: 3,
      title: "Semester 3 • Ganjil 2022/2023",
      sks: "21 SKS • 6 Mata Kuliah Lulus",
      ips: "3.75",
    },
    {
      sem: 2,
      title: "Semester 2 • Genap 2021/2022",
      sks: "21 SKS • 6 Mata Kuliah Lulus",
      ips: "3.80",
    },
    {
      sem: 1,
      title: "Semester 1 • Ganjil 2021/2022",
      sks: "20 SKS • 6 Mata Kuliah Lulus",
      ips: "3.85",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-16 font-sans text-slate-800">
      {/* ========================================================================= */}
      {/* TAMPILAN 1: DAFTAR MAHASISWA BIMBINGAN (PORTAL DOSEN PA - GAMBAR 2)        */}
      {/* ========================================================================= */}
      {selectedStudentId === null && (
        <>
          {/* Top Header */}
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-xs">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
                      PA PORTAL
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Fakultas Ilmu Komputer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 md:flex">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                  T.A. Aktif: 2024/2025 Ganjil
                </div>

                <button
                  onClick={() =>
                    alert(
                      "Mengunduh rekap monitoring bimbingan PA (Excel/PDF)..."
                    )
                  }
                  className="hidden cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 sm:flex"
                >
                  <Download className="h-3.5 w-3.5 text-slate-500" />
                  Unduh Rekap
                </button>

                <button className="relative cursor-pointer rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#8b1818]"></span>
                </button>

                <div className="flex items-center gap-2.5 border-l border-slate-200 pl-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-300 bg-amber-100 text-xs font-bold text-amber-800">
                    WJ
                  </div>
                  <div className="hidden text-left text-xs leading-tight lg:block">
                    <p className="font-bold text-slate-900">
                      Prof. Wisnu Jatmiko
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Dosen Pembimbing
                    </p>
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

          <main className="mx-auto mt-6 max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
            {/* Hero Welcome Banner */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="relative z-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-[#8b1818]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Portal Pendampingan Akademik Aktif
                  </div>
                  <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    Selamat Datang,{" "}
                    <span className="text-[#8b1818]">Prof. Wisnu Jatmiko</span>
                  </h1>
                  <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
                    Portal terpadu evaluasi dan monitoring kemajuan studi 18
                    mahasiswa bimbingan (anak wali) Fasilkom. Pantau progres
                    SKS, evaluasi IRS semester berjalan, serta kesiapan tugas
                    akhir secara tepat waktu.
                  </p>
                </div>

                <button
                  onClick={() => alert("Membuka modal agenda konsultasi baru")}
                  className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-[#8b1818] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#721313]"
                >
                  <Plus className="h-4 w-4" />
                  Agenda Konsultasi Baru
                </button>
              </div>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Total Bimbingan
                  </span>
                  <div className="mt-1 text-2xl font-black text-slate-900">
                    18{" "}
                    <span className="text-xs font-normal text-slate-400">
                      Mahasiswa
                    </span>
                  </div>
                  <span className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>{" "}
                    100% Terdaftar Aktif
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#8b1818]">
                  <Users className="h-5 w-5" />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Rata-Rata IPK
                  </span>
                  <div className="mt-1 text-2xl font-black text-slate-900">
                    3.62{" "}
                    <span className="text-xs font-normal text-slate-400">
                      / 4.00
                    </span>
                  </div>
                  <span className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <TrendingUp className="h-3.5 w-3.5" /> +0.08 tren semester
                    ini
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <span className="text-base font-bold">★</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Penyelesaian KRS
                  </span>
                  <div className="mt-1 text-2xl font-black text-slate-900">
                    18/18{" "}
                    <span className="ml-1 rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">
                      Terisi Penuh
                    </span>
                  </div>
                  <span className="mt-1 block text-[11px] font-medium text-slate-500">
                    Seluruh rencana studi telah diisi
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <CheckSquare className="h-5 w-5" />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Tingkat Akhir
                  </span>
                  <div className="mt-1 text-2xl font-black text-[#8b1818]">
                    4{" "}
                    <span className="text-xs font-normal text-slate-400">
                      Mahasiswa
                    </span>
                  </div>
                  <span className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-amber-700">
                    ⚑ Target Wisuda Genap 2025
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Search & Filter Controls */}
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
              <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                <div className="relative w-full md:w-96">
                  <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari berdasarkan nama mahasiswa, NIM, atau fokus studi..."
                    className="w-full rounded-xl border border-slate-200 py-2 pr-4 pl-10 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#8b1818] focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                  />
                </div>

                <div className="flex w-full items-center gap-1.5 overflow-x-auto pb-1 text-xs font-semibold md:w-auto md:pb-0">
                  <button
                    onClick={() => setSelectedStatus("all")}
                    className={`cursor-pointer rounded-lg px-3 py-1.5 whitespace-nowrap transition ${
                      selectedStatus === "all"
                        ? "bg-[#8b1818] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    Semua (18)
                  </button>
                  <button
                    onClick={() => setSelectedStatus("on-track")}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 whitespace-nowrap transition ${
                      selectedStatus === "on-track"
                        ? "bg-emerald-700 text-white shadow-xs"
                        : "border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    On-Track (15)
                  </button>
                  <button
                    onClick={() => setSelectedStatus("needs-help")}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 whitespace-nowrap transition ${
                      selectedStatus === "needs-help"
                        ? "bg-amber-600 text-white shadow-xs"
                        : "border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    Perlu Pendampingan (3)
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto border-t border-slate-100 pt-2 pb-1 text-xs">
                <span className="mr-1 shrink-0 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  Angkatan:
                </span>
                <button
                  onClick={() => setSelectedCohort("all")}
                  className={`shrink-0 cursor-pointer rounded-md px-2.5 py-1 text-[11px] font-bold transition ${
                    selectedCohort === "all"
                      ? "bg-[#8b1818] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Semua Angkatan
                </button>
                <button
                  onClick={() => setSelectedCohort("2024")}
                  className={`shrink-0 cursor-pointer rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                    selectedCohort === "2024"
                      ? "bg-[#8b1818] font-bold text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  2024 (Sem 1)
                </button>
                <button
                  onClick={() => setSelectedCohort("2023")}
                  className={`shrink-0 cursor-pointer rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                    selectedCohort === "2023"
                      ? "bg-[#8b1818] font-bold text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  2023 (Sem 3)
                </button>
                <button
                  onClick={() => setSelectedCohort("2022")}
                  className={`shrink-0 cursor-pointer rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                    selectedCohort === "2022"
                      ? "bg-[#8b1818] font-bold text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  2022 (Sem 5)
                </button>
                <button
                  onClick={() => setSelectedCohort("2021")}
                  className={`shrink-0 cursor-pointer rounded-md px-2.5 py-1 text-[11px] font-medium transition ${
                    selectedCohort === "2021"
                      ? "bg-[#8b1818] font-bold text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  2021 (Sem 7)
                </button>
              </div>
            </div>

            {/* Student Cards Grid (3 Columns) */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className={`flex flex-col justify-between rounded-2xl border bg-white p-5 transition-all hover:shadow-md ${
                    student.statusType === "needs-help"
                      ? "border-amber-200"
                      : "border-slate-200"
                  }`}
                >
                  <div>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                            student.statusType === "needs-help"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <div>
                          <h3 className="text-sm leading-snug font-bold text-slate-900">
                            {student.name}
                          </h3>
                          <p className="text-[11px] text-slate-400">
                            {student.nim}
                          </p>
                          <p className="mt-0.5 text-[10px] text-slate-500">
                            {student.prodi}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold whitespace-nowrap ${
                          student.statusType === "needs-help"
                            ? "border-amber-200 bg-amber-50 text-amber-700"
                            : "border-emerald-200 bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {student.status}
                      </span>
                    </div>

                    <div className="my-3 grid grid-cols-3 gap-2 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-center">
                      <div>
                        <span className="block text-[9px] font-bold text-slate-400 uppercase">
                          IPK
                        </span>
                        <span className="mt-0.5 block text-xs font-black text-slate-800">
                          {student.ipk}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-bold text-slate-400 uppercase">
                          SKS Lulus
                        </span>
                        <span className="mt-0.5 block text-xs font-black text-slate-800">
                          {student.sks}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-bold text-slate-400 uppercase">
                          Beban KRS
                        </span>
                        <span className="mt-0.5 block text-xs font-black text-[#8b1818]">
                          {student.krsLoad}
                        </span>
                      </div>
                    </div>

                    <div className="mb-3 space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400">
                          Progres Menuju Kelulusan
                        </span>
                        <span className="font-bold text-slate-700">
                          {student.progressText}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${
                            student.statusType === "needs-help"
                              ? "bg-amber-500"
                              : "bg-[#8b1818]"
                          }`}
                          style={{
                            width: `${Math.min(student.progress, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {student.warning ? (
                      <div className="mb-3 flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 p-2 text-[11px] font-semibold text-amber-800">
                        <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                        <span>{student.warning}</span>
                      </div>
                    ) : (
                      <div className="mb-3 flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 p-2 text-[11px] font-medium text-slate-700">
                        <BookOpen className="h-3.5 w-3.5 shrink-0 text-[#8b1818]" />
                        <span>{student.coursesInfo}</span>
                      </div>
                    )}

                    <div className="mb-4 rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-[11px] text-slate-500">
                      <strong className="mb-1 block text-[10px] font-bold tracking-wider text-slate-700 uppercase">
                        ! CATATAN TERAKHIR DOSEN PA:
                      </strong>
                      <p className="line-clamp-2 leading-relaxed text-slate-600 italic">
                        "{student.note}"
                      </p>
                    </div>
                  </div>

                  {/* Tombol Masuk ke Detail Mahasiswa Bimbingan */}
                  <button
                    type="button"
                    onClick={() => setSelectedStudentId(student.id)}
                    className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-[#8b1818] transition hover:border-[#8b1818] hover:bg-red-50/50"
                  >
                    <span>Buka Detail & Jalur Kelulusan</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination & Meta Footer */}
            <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-4 text-xs text-slate-400 sm:flex-row">
              <p>
                Menampilkan 6 dari 18 mahasiswa bimbingan • Terakhir diperbarui:
                Hari ini, 09:30 WIB
              </p>
              <div className="flex items-center gap-1">
                <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-500 hover:bg-slate-50">
                  ‹
                </button>
                <button className="cursor-pointer rounded-lg bg-[#8b1818] px-2.5 py-1 font-bold text-white">
                  1
                </button>
                <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50">
                  2
                </button>
                <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50">
                  3
                </button>
                <button className="cursor-pointer rounded-lg border border-slate-200 px-2.5 py-1 text-slate-500 hover:bg-slate-50">
                  ›
                </button>
              </div>
            </div>
          </main>

          <footer className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between border-t border-slate-200 px-4 pt-6 text-xs text-slate-400 sm:px-6 lg:px-8">
            <p>
              KawanKRS • Sistem Informasi Bimbingan Akademik & Rencana Studi
              Mahasiswa
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-slate-600"
              >
                Panduan Dosen PA
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-slate-600"
              >
                Pusat Bantuan Akademik
              </a>
              <span>© 2025 Fasilkom UI</span>
            </div>
          </footer>
        </>
      )}

      {/* ========================================================================= */}
      {/* TAMPILAN 2: DETAIL MAHASISWA BIMBINGAN (WORKSPACE PA - GAMBAR 1)           */}
      {/* ========================================================================= */}
      {selectedStudentId !== null && (
        <>
          {/* Top Navigation Bar with Back Button */}
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-xs">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8b1818] text-white shadow-xs">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-base font-bold tracking-tight text-slate-900">
                      KawanKRS
                    </span>
                    <span className="ml-1.5 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-slate-600 uppercase">
                      Workspace PA
                    </span>
                  </div>
                </div>

                {/* Back to student list button */}
                <button
                  onClick={() => setSelectedStudentId(null)}
                  className="ml-4 flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#8b1818] transition hover:bg-red-50 hover:text-[#701212]"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Daftar Mahasiswa Bimbingan
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 md:flex">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                  T.A. 2024/2025 • Semester Ganjil
                </div>

                <button className="relative cursor-pointer rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#8b1818]"></span>
                </button>

                <div className="flex items-center gap-2.5 border-l border-slate-200 pl-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-300 bg-amber-100 text-xs font-bold text-amber-800">
                    WJ
                  </div>
                  <div className="hidden text-left text-xs leading-tight lg:block">
                    <p className="font-bold text-slate-900">
                      Prof. Wisnu Jatmiko
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Dosen Pembimbing
                    </p>
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

          {/* Sub-header meta bar */}
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 pt-4 pb-2 text-xs sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>{" "}
                Mentorship Aktif
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                Fakultas Ilmu Komputer
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              Terakhir diperbarui: Hari ini, 09:40 WIB
            </span>
          </div>

          <main className="mx-auto mt-2 max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
            {/* Student Profile Overview Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-[#8b1818] to-rose-400 text-2xl font-bold text-white shadow-md shadow-rose-900/10 sm:h-20 sm:w-20">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                        alt="Nadya Salsabila"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      <span>NS</span>
                    </div>
                    <span className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500"></span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                        Nadya Salsabila
                      </h2>
                      <span className="rounded-md border border-red-200 bg-red-50 px-2 py-0.5 text-xs font-bold tracking-wider text-[#8b1818]">
                        NIM 2106721094
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-slate-500 sm:text-sm">
                      S1 Ilmu Komputer • Angkatan 2021 •{" "}
                      <span className="font-semibold text-slate-700">
                        Semester 7 (Ganjil 2024/2025)
                      </span>
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-slate-400" />{" "}
                        nadya.salsabila@ui.ac.id
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-slate-400" /> +62
                        812-3456-7890
                      </span>
                      <span className="flex items-center gap-1.5">
                        <UserCheck className="h-3.5 w-3.5 text-[#8b1818]" />{" "}
                        Pembimbing:{" "}
                        <strong className="text-slate-700">
                          Prof. Wisnu Jatmiko
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid w-full grid-cols-3 gap-3 sm:gap-4 lg:w-auto">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center sm:p-4">
                    <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      IPK Kumulatif
                    </span>
                    <div className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                      3.82{" "}
                      <span className="text-xs font-normal text-slate-400">
                        / 4.00
                      </span>
                    </div>
                    <span className="mt-1 inline-block rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                      ★ Predikat Cumlaude
                    </span>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center sm:p-4">
                    <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      Total SKS Lulus
                    </span>
                    <div className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                      124{" "}
                      <span className="text-xs font-normal text-slate-400">
                        / 144 SKS
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-[#8b1818]"
                        style={{ width: "86%" }}
                      ></div>
                    </div>
                    <span className="mt-1 block text-[10px] font-semibold text-slate-500">
                      86% Selesai
                    </span>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center sm:p-4">
                    <span className="block text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      Beban Semester 7
                    </span>
                    <div className="mt-1 text-xl font-black text-[#8b1818] sm:text-2xl">
                      20{" "}
                      <span className="text-xs font-semibold text-slate-600">
                        SKS Aktif
                      </span>
                    </div>
                    <span className="mt-1 block text-[10px] font-medium text-slate-500">
                      6 Mata Kuliah
                    </span>
                  </div>
                </div>
              </div>

              <div className="-mx-6 mt-5 -mb-6 flex flex-wrap items-center justify-between gap-3 rounded-b-2xl border-t border-b border-emerald-100 border-slate-100 bg-emerald-50/50 p-4 px-6 pt-4 text-xs">
                <div className="flex items-center gap-2 font-semibold text-emerald-800">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>
                    Status Prospek:{" "}
                    <strong>
                      On Track — Proyeksi Lulus Semester 8 (Juli 2025)
                    </strong>
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">
                  Kebutuhan Sisa: <strong>0 SKS</strong> setelah semester 7 & 8
                  tuntas
                </span>
              </div>
            </div>

            {/* Two-Column Detail Layout */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-6">
                {/* 1. Rencana Studi Semester Berjalan */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-xl bg-red-50 p-2 text-[#8b1818]">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                          Rencana Studi Semester Berjalan
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          Tahun Akademik 2024/2025 Ganjil
                        </p>
                      </div>
                    </div>
                    <span className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-bold text-[#8b1818]">
                      20 SKS Aktif
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-red-200">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="block text-[10px] font-bold tracking-wider text-red-700 uppercase">
                            CS401 • MATA KULIAH WAJIB AKHIR
                          </span>
                          <h4 className="mt-0.5 text-sm font-bold text-slate-900">
                            Skripsi / Tugas Akhir
                          </h4>
                          <p className="mt-1 text-xs text-slate-500">
                            Dosen Pembimbing: Prof. Wisnu Jatmiko
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                            6 SKS
                          </span>
                          <span className="mt-1.5 block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                            ⚑ Fase: Proposal Disetujui
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-red-200">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="block text-[10px] font-bold tracking-wider text-blue-700 uppercase">
                            CS412 • PEMINATAN AI
                          </span>
                          <h4 className="mt-0.5 text-sm font-bold text-slate-900">
                            Machine Learning Lanjutan
                          </h4>
                          <p className="mt-1 text-xs text-slate-500">
                            Ruang Lab AI 301 • Kelas A
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                            3 SKS
                          </span>
                          <span className="mt-1 block text-[11px] font-semibold text-slate-600">
                            Kehadiran: 100%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-red-200">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="block text-[10px] font-bold tracking-wider text-purple-700 uppercase">
                            CS425 • WAJIB FAKULTAS
                          </span>
                          <h4 className="mt-0.5 text-sm font-bold text-slate-900">
                            Etika Profesi & Hukum Siber
                          </h4>
                          <p className="mt-1 text-xs text-slate-500">
                            Gedung B 2.4 • Kelas B
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                            2 SKS
                          </span>
                          <span className="mt-1 block text-[11px] font-semibold text-slate-600">
                            Kehadiran: 92%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-red-200">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="block text-[10px] font-bold tracking-wider text-amber-700 uppercase">
                            CS430 • PEMINATAN KHUSUS
                          </span>
                          <h4 className="mt-0.5 text-sm font-bold text-slate-900">
                            Kapita Selekta Kecerdasan Artifisial
                          </h4>
                          <p className="mt-1 text-xs text-slate-500">
                            Seminar Hall 1 • Kelas A
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                            3 SKS
                          </span>
                          <span className="mt-1 block text-[11px] font-semibold text-slate-600">
                            Kehadiran: 100%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-red-200">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="block text-[10px] font-bold tracking-wider text-emerald-700 uppercase">
                            CS450 • MBKM / MAGANG
                          </span>
                          <h4 className="mt-0.5 text-sm font-bold text-slate-900">
                            Praktik Kerja Lapangan / Magang Industri
                          </h4>
                          <p className="mt-1 text-xs text-slate-500">
                            PT Tokopedia (Software Eng. Intern)
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                            6 SKS
                          </span>
                          <span className="mt-1 block rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                            Nilai A (Berjalan)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
                    <AlertCircle className="h-4 w-4 shrink-0 text-slate-400" />
                    <span>
                      Modul ini berfokus pada pemantauan berkala dan
                      pendampingan akademik mahasiswa bimbingan.
                    </span>
                  </div>
                </div>

                {/* 2. Catatan Dosen Pembimbing (PA Notes) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-xl bg-red-50 p-2 text-[#8b1818]">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                          Catatan Dosen Pembimbing (PA Notes)
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          Privat & Terekam Riwayatnya
                        </p>
                      </div>
                    </div>
                    <Lock className="h-4 w-4 text-slate-400" />
                  </div>

                  {/* Form Input Catatan Baru */}
                  <form onSubmit={handleAddNote} className="mb-6">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 transition focus-within:border-red-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500/10">
                      <label className="mb-1.5 block text-[11px] font-bold tracking-wide text-slate-600 uppercase">
                        Tulis Catatan Pendampingan Baru
                      </label>
                      <textarea
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        rows={3}
                        placeholder="Masukkan arahan riset, evaluasi beban studi, atau kesepakatan bimbingan untuk Nadya..."
                        className="w-full resize-none bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
                      />
                      <div className="mt-2 flex items-center justify-between border-t border-slate-200/80 pt-2">
                        <span className="text-[10px] text-slate-400">
                          Tanggal otomatis tersemat
                        </span>
                        <button
                          type="submit"
                          className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#8b1818] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#721313]"
                        >
                          <Send className="h-3 w-3" />
                          Simpan Catatan
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Histori Catatan Dosen */}
                  <div className="space-y-4">
                    {notes.map((note, idx) => (
                      <div
                        key={idx}
                        className="space-y-2 rounded-xl border border-slate-100 bg-slate-50/70 p-4"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#8b1818]"></span>
                            <span className="font-bold text-slate-800">
                              {note.author}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400">
                            {note.date}
                          </span>
                        </div>
                        <p className="border-l-2 border-slate-200 pl-4 text-xs leading-relaxed text-slate-600">
                          "{note.text}"
                        </p>
                        <div className="pt-1">
                          <span className="rounded-md bg-slate-200/70 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                            Topik: {note.topic}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* 1. Jalur Kelulusan Mahasiswa */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-xl bg-amber-50 p-2 text-amber-700">
                        <Milestone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                          Jalur Kelulusan Mahasiswa
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          Graduation Pathway & Pelacakan Milestone
                        </p>
                      </div>
                    </div>
                    <span className="rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-800">
                      Wisuda: Agustus 2025
                    </span>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <h4 className="text-xs font-bold text-emerald-900">
                        Prospek Kelulusan: Sangat Tinggi (Cumlaude)
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-emerald-800/90">
                        Mahasiswa berada pada lintasan unggul dengan IPK 3.82.
                        Persyaratan sisa terfokus pada perampungan naskah
                        skripsi, sidang tugas akhir, dan bebas administrasi.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Perjalanan SKS Kurikulum (Min. 144 SKS)</span>
                      <span className="text-[#8b1818]">
                        144 / 144 SKS (Proyeksi 100%)
                      </span>
                    </div>
                    <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="bg-[#8b1818]"
                        style={{ width: "86%" }}
                        title="124 SKS Selesai"
                      ></div>
                      <div
                        className="bg-rose-400"
                        style={{ width: "14%" }}
                        title="20 SKS Berjalan"
                      ></div>
                    </div>
                    <div className="grid grid-cols-3 pt-1 text-[10px] font-medium text-slate-500">
                      <div>
                        <strong className="block text-slate-800">
                          124 SKS Selesai
                        </strong>
                        Semester 1 - 6
                      </div>
                      <div className="text-center">
                        <strong className="block text-rose-700">
                          +20 SKS Berjalan
                        </strong>
                        Semester 7
                      </div>
                      <div className="text-right">
                        <strong className="block text-emerald-700">
                          0 SKS Tersisa
                        </strong>
                        Target Lulus Sem 8
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-800">
                          MK Wajib Universitas
                        </h5>
                        <p className="text-[10px] font-semibold text-emerald-700">
                          100% Selesai (24 SKS)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-800">
                          MK Wajib Fasilkom
                        </h5>
                        <p className="text-[10px] font-semibold text-emerald-700">
                          100% Selesai (72 SKS)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-xl border border-amber-200 bg-amber-50/50 p-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                        <Award className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-800">
                          Tugas Akhir / Skripsi
                        </h5>
                        <p className="text-[10px] font-semibold text-amber-800">
                          Sedang Berjalan (Bimbingan Bab 3)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-800">
                          Kemampuan Bhs. Inggris
                        </h5>
                        <p className="text-[10px] font-semibold text-emerald-700">
                          TOEFL 590 (Memenuhi Syarat)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Riwayat Studi Per Semester */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-xl bg-red-50 p-2 text-[#8b1818]">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                          Riwayat Studi Per Semester
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          Transkrip capaian & indeks prestasi semester (IPS)
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("Pratinjau transkrip resmi")}
                      className="flex cursor-pointer items-center gap-1 rounded-lg border border-red-200 px-2.5 py-1 text-xs font-semibold text-[#8b1818] transition hover:bg-red-50"
                    >
                      <FileText className="h-3 w-3" />
                      Lihat Transkrip
                    </button>
                  </div>

                  <div className="space-y-2">
                    {semesters.map((item) => {
                      const isOpen = openSemesterDetail === item.sem;
                      return (
                        <div
                          key={item.sem}
                          className="overflow-hidden rounded-xl border border-slate-200 transition-all"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenSemesterDetail(isOpen ? null : item.sem)
                            }
                            className="flex w-full cursor-pointer items-center justify-between bg-white p-3 text-left transition hover:bg-slate-50"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
                                S{item.sem}
                              </span>
                              <div>
                                <h4 className="text-xs font-bold text-slate-800">
                                  {item.title}
                                </h4>
                                <p className="text-[10px] text-slate-400">
                                  {item.sks}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="rounded border border-red-100 bg-red-50 px-2 py-0.5 text-xs font-bold text-[#8b1818]">
                                IPS: {item.ips}
                              </span>
                              {isOpen ? (
                                <ChevronUp className="h-4 w-4 text-slate-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-slate-400" />
                              )}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="space-y-2 border-t border-slate-100 bg-slate-50 p-3.5 text-xs">
                              <div className="flex justify-between border-b border-slate-200 pb-1 text-[11px] font-semibold text-slate-500">
                                <span>Mata Kuliah</span>
                                <span>Nilai / SKS</span>
                              </div>
                              <div className="flex justify-between text-slate-700">
                                <span>Struktur Data & Algoritma</span>
                                <span className="font-bold text-emerald-700">
                                  A (4 SKS)
                                </span>
                              </div>
                              <div className="flex justify-between text-slate-700">
                                <span>Jaringan Komputer</span>
                                <span className="font-bold text-emerald-700">
                                  A (3 SKS)
                                </span>
                              </div>
                              <div className="flex justify-between text-slate-700">
                                <span>Sistem Operasi</span>
                                <span className="font-bold text-emerald-700">
                                  A- (3 SKS)
                                </span>
                              </div>
                              <div className="flex justify-between text-slate-700">
                                <span>Basis Data Lanjut</span>
                                <span className="font-bold text-emerald-700">
                                  A (3 SKS)
                                </span>
                              </div>
                              <div className="flex justify-between text-slate-700">
                                <span>Pemrograman Web Lanjut</span>
                                <span className="font-bold text-emerald-700">
                                  A (4 SKS)
                                </span>
                              </div>
                              <div className="flex justify-between text-slate-700">
                                <span>Statistika Probabilitas</span>
                                <span className="font-bold text-emerald-700">
                                  B+ (3 SKS)
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between border-t border-slate-200 px-4 pt-6 text-xs text-slate-400 sm:px-6 lg:px-8">
            <p>KawanKRS Workspace • Sistem Bimbingan & Pelacakan Akademik</p>
            <p>Fakultas Ilmu Komputer</p>
          </footer>
        </>
      )}
    </div>
  );
};
