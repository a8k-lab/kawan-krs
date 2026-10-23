import { Link } from "@tanstack/react-router";
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
  Plus,
  ShieldCheck,
  LogOut,
} from "lucide-react";

import { useDosenState } from "../state";

export function MahasiswaListPage() {
  const {
    searchQuery,
    setSearchQuery,
    selectedStatus,
    setSelectedStatus,
    selectedCohort,
    setSelectedCohort,
    filteredStudents,
  } = useDosenState();
  return (
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
                alert("Mengunduh rekap monitoring bimbingan PA (Excel/PDF)...")
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
                mahasiswa bimbingan (anak wali) Fasilkom. Pantau progres SKS,
                evaluasi IRS semester berjalan, serta kesiapan tugas akhir
                secara tepat waktu.
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
                <TrendingUp className="h-3.5 w-3.5" /> +0.08 tren semester ini
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
              <Link
                to="/dosen/mahasiswa/$mahasiswaId"
                activeOptions={{ exact: true }}
                params={{ mahasiswaId: student.id }}
                className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-[#8b1818] transition hover:border-[#8b1818] hover:bg-red-50/50"
              >
                <span>Buka Detail & Jalur Kelulusan</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
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
  );
}
