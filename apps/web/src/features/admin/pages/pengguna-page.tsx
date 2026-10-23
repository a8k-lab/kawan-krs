import { Users, Search, Download, Edit3, Trash2, Filter } from "lucide-react";

import { useAdminState } from "../state";

export function PenggunaPage() {
  const { searchUsers, setSearchUsers, usersList, setUsersList } =
    useAdminState();
  return (
    <main className="space-y-6 p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            <span className="text-red-700">KEPEGAWAIAN & MAHASISWA</span> /
            Pengguna Sistem
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
                    u.name.toLowerCase().includes(searchUsers.toLowerCase()) ||
                    u.email.toLowerCase().includes(searchUsers.toLowerCase())
                )
                .map((user, idx) => (
                  <tr key={idx} className="transition hover:bg-slate-50/80">
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
                            setUsersList(usersList.filter((_, i) => i !== idx));
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
  );
}
