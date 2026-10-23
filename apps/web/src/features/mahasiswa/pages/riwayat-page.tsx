import {
  Download,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Edit3,
  Trash2,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

import { useMahasiswaState } from "../state";

export function RiwayatPage() {
  const {
    openSemester,
    setOpenSemester,
    inputMatkul,
    setInputMatkul,
    inputSks,
    setInputSks,
    inputNilai,
    setInputNilai,
    transkripSem6,
    handleAddNilai,
    handleDeleteNilai,
  } = useMahasiswaState();
  return (
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
                <span className="font-semibold text-slate-700">🛡 Reguler</span>
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
              alert("Mengunduh ringkasan transkrip & jalur kelulusan PDF...")
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
              <span className="text-xs font-normal text-slate-400">/ 4.00</span>
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
              20 <span className="text-xs font-normal text-slate-600">SKS</span>
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
                Tambahkan capaian nilai semester untuk memperbarui proyeksi IPK
                seketika.
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
                  onClick={() => setOpenSemester(openSemester === 6 ? null : 6)}
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
                      22 SKS Diselesaikan • Desain Algoritma, Sistem Operasi,
                      Grafika Komputer
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
                      21 SKS Diselesaikan • Struktur Data & Algoritma, Aljabar
                      Linier
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
                semester 7 ini akan menggenapkan total 144 SKS syarat kelulusan
                tanpa ada tanggungan semester antara.
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
                <span className="text-rose-700">• 20 SKS Berjalan (13.9%)</span>
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
                      Tercukupi total 144 SKS pasca menyelesaikan semester 7 (20
                      SKS)
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
                      Tahap Bimbingan Bab 3 & Pengumpulan Korpus Data Model AI
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
                "Pencapaian akademis Nadya sejauh ini sangat konsisten di zona
                Cumlaude. Untuk semester 7 ini, fokus utama adalah mematangkan
                pipeline eksperimen pada transformer model untuk skripsimu. Jika
                draft bab 4 dapat diselesaikan di Desember, kamu siap mendaftar
                sidang perdana di bulan Mei/Juni 2025."
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
  );
}
