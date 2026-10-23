import { Search, RefreshCw, Download, Plus, Edit3, Trash2 } from "lucide-react";

import { useAdminState } from "../state";

export function BiayaPage() {
  const { searchBiaya, setSearchBiaya, biayaList, setBiayaList } =
    useAdminState();
  return (
    <main className="space-y-6 p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            <span className="text-red-700">KEUANGAN & ADMINISTRASI</span> /
            Tarif Perkuliahan
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
          onClick={() => alert("Membuka modal Tambah Biaya Semester baru")}
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
                    b.title.toLowerCase().includes(searchBiaya.toLowerCase()) ||
                    b.code.toLowerCase().includes(searchBiaya.toLowerCase())
                )
                .map((biaya, idx) => (
                  <tr key={idx} className="transition hover:bg-slate-50/80">
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
                      <span className="text-[10px] text-slate-400">/ SKS</span>
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
                          if (confirm(`Hapus konfigurasi ${biaya.code}?`)) {
                            setBiayaList(biayaList.filter((_, i) => i !== idx));
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
  );
}
