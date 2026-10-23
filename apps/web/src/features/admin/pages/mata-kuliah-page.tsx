import { Search, RefreshCw, Download, Plus, Edit3, Trash2 } from "lucide-react";

import { useAdminState } from "../state";

export function MataKuliahPage() {
  const { searchMatkul, setSearchMatkul, matkulList, setMatkulList } =
    useAdminState();
  return (
    <main className="space-y-6 p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            <span className="text-red-700">KURIKULUM & PERKULIAHAN</span> /
            Master Data
          </p>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
            Master Mata Kuliah
          </h2>
          <p className="mt-0.5 text-xs text-slate-500">
            Kelola data kurikulum, beban SKS, silabus, dan status ketersediaan
            mata kuliah.
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
            onClick={() => alert("Mengekspor data mata kuliah ke CSV/Excel...")}
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
                    m.name.toLowerCase().includes(searchMatkul.toLowerCase()) ||
                    m.code.toLowerCase().includes(searchMatkul.toLowerCase())
                )
                .map((mk, idx) => (
                  <tr key={idx} className="transition hover:bg-slate-50/80">
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
  );
}
