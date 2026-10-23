import {
  ArrowRight,
  Sliders,
  Sparkles,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";

import { useMahasiswaState } from "../state";

export function RekomendasiPage() {
  const {
    targetSks,
    setTargetSks,
    budget,
    setBudget,
    selectedSemester,
    setSelectedSemester,
    selectedPlan,
    setSelectedPlan,
  } = useMahasiswaState();
  return (
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
          semester Anda berdasarkan analisis riwayat studi, syarat prasyarat,
          budget biaya kuliah, dan preferensi target SKS Anda.
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
            <span className="block text-[9px] text-slate-500">IPK ≥ 3.50</span>
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
                Atur batas beban SKS dan alokasi biaya UKT semester aktif Anda
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-medium text-slate-500">Target Semester:</span>
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
              Perkiraan tagihan normal untuk {targetSks} SKS adalah sekitar Rp
              7.500.000 (BOP-B/UKT Fleksibel Terbuka).
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
                  Untuk mahasiswa yang ingin mengonversi magang industri dengan
                  beban kuliah teori yang terkelola rapi.
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
              Algoritma. Paket A memaksimalkan akselerasi spesialisasi NLP dan
              Deep Learning tanpa menimbulkan friksi pemahaman materi dasar.
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
              budget Rp 7.500.000 yang Anda tetapkan, menyisakan alokasi darurat
              untuk pendaftaran konferensi ilmiah skripsi.
            </p>
          </div>

          <div className="space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
            <span className="flex items-center gap-1.5 font-bold text-slate-900">
              <Clock className="h-3.5 w-3.5 text-[#8b1818]" />
              Waktu Kerja Fleksibel
            </span>
            <p className="text-[11px] text-slate-600">
              Mata kuliah pilihan terdistribusi pada jadwal pagi (Senin & Rabu),
              membebaskan slot sore untuk komitmen magang part-time di riset AI
              (estimasi 20 jam/minggu) tanpa resiko bentrok jadwal kehadiran
              fisik maupun kuis lab.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
