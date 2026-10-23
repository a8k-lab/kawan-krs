import { BookOpen, Users, ArrowRight, Calendar } from "lucide-react";

import { useAdminState } from "../state";

export function DashboardPage() {
  const { selectedYear, setSelectedYear, logs } = useAdminState();
  return (
    <main className="space-y-6 p-6">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
            Ringkasan Eksekutif
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[11px] text-slate-400">
            Sinkronisasi Terakhir: Hari ini, 11:20 WIB
          </span>
        </div>
        <h2 className="mt-1 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
          Dashboard Akademik
        </h2>
        <p className="mt-0.5 text-xs text-slate-500">
          Kendali tata kelola kurikulum, siklus pengisian KRS, dan realisasi
          biaya perkuliahan.
        </p>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Users className="h-5 w-5" />
            </div>
            <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
              +142 Terverifikasi
            </span>
          </div>
          <div className="mt-4">
            <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Jumlah User
            </span>
            <div className="mt-1 text-3xl font-black text-slate-900">
              12.878
            </div>
            <span className="mt-1 block text-[11px] text-slate-500">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
              Mahasiswa, Dosen & Tendik
            </span>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#7a1212]">
              <Calendar className="h-5 w-5" />
            </div>
            <span className="rounded-md border border-red-200 bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-[#7a1212]">
              Aktif Berjalan
            </span>
          </div>
          <div className="mt-4">
            <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Jumlah Semester
            </span>
            <div className="mt-1 text-3xl font-black text-slate-900">
              8 Semester
            </div>
            <span className="mt-1 block text-[11px] text-slate-500">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[#7a1212]"></span>
              Periode Ganjil 2024/2025
            </span>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
              100% Terplot
            </span>
          </div>
          <div className="mt-4">
            <span className="block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Total Mata Kuliah Aktif
            </span>
            <div className="mt-1 text-3xl font-black text-slate-900">
              284 MK
            </div>
            <span className="mt-1 block text-[11px] text-slate-500">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-amber-500"></span>
              Kurikulum Berjalan 2024/2025
            </span>
          </div>
        </div>
      </div>

      {/* Monthly Academic Trend Card (Spline Chart) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Tren Aktivitas Akademik Bulanan
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Perbandingan pertumbuhan dan keaktifan mahasiswa, dosen, serta
              mata kuliah
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7a1212]"></span>{" "}
                Mahasiswa
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-800"></span>{" "}
                Dosen
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>{" "}
                Mata Kuliah
              </span>
            </div>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white py-1.5 pr-8 pl-3 text-xs font-bold text-slate-800 focus:outline-none"
            >
              <option value="2024">Tahun: 2024</option>
              <option value="2023">Tahun: 2023</option>
            </select>
          </div>
        </div>

        {/* SVG Spline Graphic Chart */}
        <div className="relative h-64 w-full sm:h-72">
          <svg viewBox="0 0 900 260" className="h-full w-full overflow-visible">
            <defs>
              <linearGradient id="gradientRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7a1212" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7a1212" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="gradientYellow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            <line
              x1="0"
              y1="50"
              x2="900"
              y2="50"
              stroke="#f1f5f9"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="0"
              y1="110"
              x2="900"
              y2="110"
              stroke="#f1f5f9"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="0"
              y1="170"
              x2="900"
              y2="170"
              stroke="#f1f5f9"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="0"
              y1="230"
              x2="900"
              y2="230"
              stroke="#e2e8f0"
              strokeWidth="1"
            />

            <path
              d="M 50 210 Q 150 200, 250 190 T 450 180 T 650 140 T 750 160 T 850 190 L 850 230 L 50 230 Z"
              fill="url(#gradientYellow)"
            />
            <path
              d="M 50 210 Q 150 200, 250 190 T 450 180 T 650 140 T 750 160 T 850 190"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
            />

            <path
              d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 65 T 750 130 T 850 175"
              fill="none"
              stroke="#1e293b"
              strokeWidth="2.5"
            />

            <path
              d="M 50 180 Q 200 170, 350 110 T 550 160 T 650 50 T 750 120 T 850 170 L 850 230 L 50 230 Z"
              fill="url(#gradientRed)"
            />
            <path
              d="M 50 180 Q 200 170, 350 110 T 550 160 T 650 50 T 750 120 T 850 170"
              fill="none"
              stroke="#7a1212"
              strokeWidth="3.5"
            />

            <circle
              cx="650"
              cy="50"
              r="5"
              fill="#7a1212"
              stroke="#fff"
              strokeWidth="2.5"
            />
            <circle
              cx="650"
              cy="65"
              r="4"
              fill="#1e293b"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="650"
              cy="140"
              r="4"
              fill="#f59e0b"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle cx="350" cy="110" r="4" fill="#7a1212" />

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
        </div>
      </div>

      {/* Recent Activity Logs */}
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

          <button
            onClick={() => alert("Membuka audit log penuh")}
            className="flex cursor-pointer items-center gap-1 text-xs font-bold text-[#7a1212] hover:text-red-900"
          >
            <span>Lihat Semua Log</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                <th className="pb-3 pl-2">Waktu</th>
                <th className="pb-3">User / Aktor</th>
                <th className="pb-3">Aksi / Event Sistem</th>
                <th className="pr-2 pb-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.map((log, idx) => (
                <tr key={idx} className="transition hover:bg-slate-50/80">
                  <td className="py-3.5 pl-2 align-top whitespace-nowrap">
                    <span className="block font-semibold text-slate-800">
                      {log.time}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {log.clock}
                    </span>
                  </td>
                  <td className="py-3.5 pr-4 align-top whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${log.avatarBg}`}
                      >
                        {log.icon ? log.icon : log.initials}
                      </div>
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
                          : "border border-amber-200 bg-amber-50 text-amber-700"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          log.statusType === "success"
                            ? "bg-emerald-500"
                            : "bg-amber-500"
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
