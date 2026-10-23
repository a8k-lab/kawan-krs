import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  ArrowRight,
  UserCheck,
  Shield,
  ChevronDown,
  Calendar,
  Clock,
} from "lucide-react";

import { useSuperAdminState } from "../state";

export function DashboardPage() {
  const { selectedYear, setSelectedYear, auditLogs } = useSuperAdminState();
  return (
    <main className="space-y-6 p-6">
      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Dosen */}
        <div className="flex items-start justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div>
            <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Dosen
            </span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-3xl font-black text-slate-900">428</span>
              <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                +12 semester ini
              </span>
            </div>
            <span className="mt-2 block text-[11px] text-slate-400">
              Dosen Aktif Pengajar
            </span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-700">
            <UserCheck className="h-5 w-5" />
          </div>
        </div>

        {/* Mahasiswa */}
        <div className="flex items-start justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div>
            <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Mahasiswa
            </span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-3xl font-black text-slate-900">12,450</span>
              <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                98.4% KRS Terisi
              </span>
            </div>
            <span className="mt-2 block text-[11px] text-slate-400">
              Mahasiswa Terdaftar
            </span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <GraduationCap className="h-5 w-5" />
          </div>
        </div>

        {/* Admin Akademik */}
        <div className="flex items-start justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div>
            <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Admin Akademik
            </span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-3xl font-black text-slate-900">36</span>
              <span className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                Aktif Online
              </span>
            </div>
            <span className="mt-2 block text-[11px] text-slate-400">
              Staf BAA & Fakultas
            </span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
            <Shield className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* SIAKAD Traffic Spline Chart */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Tren Aktivitas & Trafik Sistem SIAKAD
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Perbandingan aktivitas pengguna bulanan selama tahun akademik
              berjalan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7a1212]"></span>{" "}
                Mahasiswa
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>{" "}
                Dosen
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>{" "}
                Admin
              </span>
            </div>

            <div className="relative flex items-center">
              <Calendar className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-500" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-1.5 pr-7 pl-8 text-xs font-semibold text-slate-800 shadow-xs focus:outline-none"
              >
                <option value="2024">Tahun: 2024</option>
                <option value="2023">Tahun: 2023</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Graphic Chart with Peak Tooltip */}
        <div className="relative h-64 w-full sm:h-72">
          <svg viewBox="0 0 900 260" className="h-full w-full overflow-visible">
            <defs>
              <linearGradient id="gradientSuperRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7a1212" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7a1212" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient
                id="gradientSuperBlue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            <line
              x1="0"
              y1="230"
              x2="900"
              y2="230"
              stroke="#e2e8f0"
              strokeWidth="1"
            />

            {/* Admin dashed line */}
            <path
              d="M 50 200 L 850 200"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="6 6"
            />

            {/* Dosen Blue Curve */}
            <path
              d="M 50 200 Q 200 190, 350 140 T 550 180 T 650 90 T 750 160 T 850 195 L 850 230 L 50 230 Z"
              fill="url(#gradientSuperBlue)"
            />
            <path
              d="M 50 200 Q 200 190, 350 140 T 550 180 T 650 90 T 750 160 T 850 195"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.5"
            />

            {/* Mahasiswa Red Curve */}
            <path
              d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 40 T 750 130 T 850 180 L 850 230 L 50 230 Z"
              fill="url(#gradientSuperRed)"
            />
            <path
              d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 40 T 750 130 T 850 180"
              fill="none"
              stroke="#7a1212"
              strokeWidth="3.5"
            />

            {/* Vertical dashed line indicator on peak */}
            <line
              x1="650"
              y1="40"
              x2="650"
              y2="230"
              stroke="#7a1212"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <circle
              cx="650"
              cy="40"
              r="5"
              fill="#7a1212"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="650"
              cy="90"
              r="4"
              fill="#2563eb"
              stroke="#fff"
              strokeWidth="2"
            />

            {/* X Axis labels */}
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mei",
              "Jun",
              "Jul",
              "Agu (Puncak)",
              "Sep",
              "Okt",
              "Nov",
              "Des",
            ].map((month, idx) => (
              <text
                key={month}
                x={50 + idx * 72}
                y="250"
                textAnchor="middle"
                className={`text-[10px] ${month.includes("Puncak") ? "fill-[#7a1212] font-bold" : "fill-slate-400"}`}
              >
                {month}
              </text>
            ))}
          </svg>

          {/* Floating Tooltip over peak */}
          <div className="pointer-events-none absolute top-2 left-[62%] -translate-x-1/2 rounded-xl bg-slate-900 p-2 text-[10px] text-white shadow-lg">
            <strong className="block font-bold">
              Agustus (Puncak KRS Ganjil)
            </strong>
            <span className="text-slate-300">
              Mahasiswa: 384,120 aktivitas / bln
            </span>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Log Aktivitas Sistem Terbaru
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Catatan ringkas audit trail dan kontrol konfigurasi sistem
              akademik.
            </p>
          </div>

          <Link
            to="/superadmin/audit"
            activeOptions={{ exact: true }}
            className="flex cursor-pointer items-center gap-1 text-xs font-bold text-[#7a1212] hover:text-red-900"
          >
            <span>Lihat Semua Log</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                <th className="pb-3 pl-2">Waktu</th>
                <th className="pb-3">User</th>
                <th className="pb-3">Aksi / Event</th>
                <th className="pr-2 pb-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {auditLogs.slice(0, 5).map((log, idx) => (
                <tr key={idx} className="transition hover:bg-slate-50/80">
                  <td className="py-3.5 pl-2 align-top whitespace-nowrap">
                    <div className="flex items-center gap-1.5 font-medium text-slate-700">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                      <span>{log.time}</span>
                    </div>
                  </td>
                  <td className="py-3.5 pr-4 align-top whitespace-nowrap">
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
                  <td className="py-3.5 pr-4 align-top">
                    <span className="block font-bold text-slate-800">
                      {log.actionTitle}
                    </span>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
                      {log.actionDesc}
                    </p>
                  </td>
                  <td className="py-3.5 pr-2 text-right align-top whitespace-nowrap">
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
      </div>
    </main>
  );
}
