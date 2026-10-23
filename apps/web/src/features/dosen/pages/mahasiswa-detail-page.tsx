import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Bell,
  BookOpen,
  ArrowLeft,
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

import { useDosenState } from "../state";

export function MahasiswaDetailPage() {
  const {
    newNote,
    setNewNote,
    openSemesterDetail,
    setOpenSemesterDetail,
    notes,
    handleAddNote,
    semesters,
  } = useDosenState();
  return (
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
            <Link
              to="/dosen/mahasiswa"
              activeOptions={{ exact: true }}
              className="ml-4 flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#8b1818] transition hover:bg-red-50 hover:text-[#701212]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Daftar Mahasiswa Bimbingan
            </Link>
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
                <p className="font-bold text-slate-900">Prof. Wisnu Jatmiko</p>
                <p className="text-[10px] text-slate-500">Dosen Pembimbing</p>
              </div>

              <Link
                to="/login"
                activeOptions={{ exact: true }}
                className="ml-1 cursor-pointer rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-700"
                title="Keluar / Logout"
              >
                <LogOut className="h-4 w-4" />
              </Link>
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
                  Modul ini berfokus pada pemantauan berkala dan pendampingan
                  akademik mahasiswa bimbingan.
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
                    Persyaratan sisa terfokus pada perampungan naskah skripsi,
                    sidang tugas akhir, dan bebas administrasi.
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
  );
}
