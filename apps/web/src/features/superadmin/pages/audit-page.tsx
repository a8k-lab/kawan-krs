import {
  Search,
  RefreshCw,
  Download,
  ChevronDown,
  Calendar,
  Clock,
  Flag,
  SlidersHorizontal,
} from "lucide-react";

import { useSuperAdminState } from "../state";

export function AuditPage() {
  const { searchLogs, setSearchLogs, auditLogs } = useSuperAdminState();
  return (
    <main className="space-y-6 p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            Portal Administrasi &gt;{" "}
            <span className="text-red-700">Audit Logs</span>
          </p>
          <div className="mt-1 flex items-center gap-3">
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
              Log Aktivitas Sistem
            </h2>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700">
              Live Monitoring
            </span>
          </div>
          <p className="mt-0.5 text-xs text-slate-500">
            Audit Trail & Rekam Jejak Sistem
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert("Data log berhasil diperbarui!")}
            className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-50"
          >
            <RefreshCw className="h-3.5 w-3.5 text-slate-500" />
            Refresh Data
          </button>

          <button
            onClick={() => alert("Mengekspor log audit ke CSV/PDF...")}
            className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#8b1818] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#721313]"
          >
            <Download className="h-3.5 w-3.5" />
            Export Log (CSV/PDF)
          </button>
        </div>
      </div>

      {/* Filter toolbar */}
      <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs md:flex-row">
        <div className="relative w-full md:flex-1">
          <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchLogs}
            onChange={(e) => setSearchLogs(e.target.value)}
            placeholder="Cari aktivitas, nama user, atau event sistem..."
            className="w-full rounded-xl border border-slate-200 py-2 pr-4 pl-10 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#8b1818] focus:ring-2 focus:ring-red-500/20 focus:outline-none"
          />
        </div>

        <div className="flex w-full items-center gap-2 md:w-auto">
          <div className="relative flex items-center">
            <SlidersHorizontal className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-400" />
            <select className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-7 pl-8 text-xs font-semibold text-slate-700 focus:outline-none">
              <option>Semua Kategori</option>
              <option>KRS System</option>
              <option>Database</option>
              <option>Security</option>
              <option>User Auth</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
          </div>

          <div className="relative flex items-center">
            <Flag className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-400" />
            <select className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-7 pl-8 text-xs font-semibold text-slate-700 focus:outline-none">
              <option>Semua Status</option>
              <option>Success</option>
              <option>Warning</option>
              <option>Failed</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
          </div>

          <div className="relative flex items-center">
            <Calendar className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-400" />
            <select className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-7 pl-8 text-xs font-semibold text-slate-700 focus:outline-none">
              <option>Semua Waktu</option>
              <option>Hari Ini</option>
              <option>7 Hari Terakhir</option>
              <option>30 Hari Terakhir</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Table Audit Logs */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50/70 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              <tr>
                <th className="py-3.5 pl-6">Waktu</th>
                <th className="py-3.5">User / Aktor</th>
                <th className="py-3.5">Aksi / Event Sistem</th>
                <th className="py-3.5 pr-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {auditLogs
                .filter(
                  (l) =>
                    l.actionTitle
                      .toLowerCase()
                      .includes(searchLogs.toLowerCase()) ||
                    l.user.toLowerCase().includes(searchLogs.toLowerCase())
                )
                .map((log, idx) => (
                  <tr key={idx} className="transition hover:bg-slate-50/80">
                    <td className="py-4 pl-6 align-top font-medium whitespace-nowrap text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <span>{log.time}</span>
                      </div>
                    </td>
                    <td className="py-4 pr-4 align-top whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        {log.avatar ? (
                          <img
                            src={log.avatar}
                            alt={log.user}
                            className="h-8 w-8 shrink-0 rounded-full object-cover"
                          />
                        ) : (
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${log.avatarBg}`}
                          >
                            {log.icon ? log.icon : log.initials}
                          </div>
                        )}
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
                    <td className="max-w-md py-4 pr-4 align-top">
                      <span className="block font-bold text-slate-900">
                        {log.actionTitle}
                      </span>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
                        {log.actionDesc}
                      </p>
                    </td>
                    <td className="py-4 pr-6 text-right align-top whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                          log.statusType === "success"
                            ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                            : log.statusType === "warning"
                              ? "border border-amber-200 bg-amber-50 text-amber-700"
                              : "border border-rose-200 bg-rose-50 text-rose-700"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            log.statusType === "success"
                              ? "bg-emerald-500"
                              : log.statusType === "warning"
                                ? "bg-amber-500"
                                : "bg-rose-500"
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

        {/* Pagination */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 p-4 text-xs text-slate-400 sm:flex-row">
          <p>Menampilkan 1-8 dari 2.450 catatan log</p>
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
              307
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
