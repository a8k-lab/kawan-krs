import React, { useState } from 'react';
import { 
  GraduationCap, LayoutDashboard, BookOpen, CreditCard, Users, 
  HelpCircle, Bell, ArrowRight, Bot, Key, Calendar, LogOut
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (view: 'login' | 'register' | 'mahasiswa' | 'dosen' | 'admin') => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [selectedYear, setSelectedYear] = useState('2024');

  const logs = [
    {
      time: 'Senin, 23 Sep 2024',
      clock: '10:42 WIB',
      user: 'Dr. Sarah Jenkins',
      role: 'Super Administrator',
      initials: 'SJ',
      avatarBg: 'bg-red-800 text-white',
      actionTitle: 'Modified KRS Quota for CS301',
      actionDesc: 'Kapasitas ditambah dari 120 ke 160 kursi pada Fakultas Ilmu Komputer',
      status: 'Success',
      statusType: 'success'
    },
    {
      time: 'Senin, 23 Sep 2024',
      clock: '10:39 WIB',
      user: 'Budi Santoso',
      role: 'Database Engineer',
      initials: 'BS',
      avatarBg: 'bg-slate-700 text-white',
      actionTitle: 'Force Sync Faculty Server DB',
      actionDesc: 'Latensi tinggi terdeteksi saat replikasi data pada PostgreSQL Primary Cluster',
      status: 'Warning',
      statusType: 'warning'
    },
    {
      time: 'Senin, 23 Sep 2024',
      clock: '10:35 WIB',
      user: 'Rina Marlina',
      role: 'Staf BAA Pusat',
      initials: 'RM',
      avatarBg: 'bg-rose-900 text-white',
      actionTitle: 'Bulk Approved Student Overload Requests',
      actionDesc: 'Validasi 48 pengajuan SKS berlebih (>24 SKS) Fakultas Ekonomi & Bisnis',
      status: 'Success',
      statusType: 'success'
    },
    {
      time: 'Senin, 23 Sep 2024',
      clock: '10:31 WIB',
      user: 'Security Bot Shield',
      role: 'Automated Daemon',
      initials: 'BOT',
      icon: <Bot className="w-4 h-4 text-amber-700" />,
      avatarBg: 'bg-amber-100 text-amber-800',
      actionTitle: 'Rate Limit Triggered',
      actionDesc: 'Blokir 42 request/detik dari sumber otomatis bot pada Auth Gateway / KRS EndPoint',
      status: 'Warning',
      statusType: 'warning'
    },
    {
      time: 'Senin, 23 Sep 2024',
      clock: '10:14 WIB',
      user: 'Security Vault Daemon',
      role: 'System Security Service',
      initials: 'SEC',
      icon: <Key className="w-4 h-4 text-slate-700" />,
      avatarBg: 'bg-slate-200 text-slate-800',
      actionTitle: 'API Key Revocation',
      actionDesc: 'Rotasi berkala token otentikasi konektor mobile dosen pada OAuth Server Core',
      status: 'Success',
      statusType: 'success'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col lg:flex-row">
      {/* ================= LEFT MAROON SIDEBAR ================= */}
      <aside className="w-full lg:w-64 bg-[#7a1212] text-white flex flex-col justify-between shrink-0 shadow-xl">
        <div>
          {/* Brand Logo Header */}
          <div className="p-6 flex items-center gap-3 border-b border-white/10">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight">KawanKRS</h1>
              <p className="text-[10px] text-red-200 tracking-wider uppercase font-semibold">Akademik Portal</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1.5">
            <button
              onClick={() => setActiveMenu('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeMenu === 'dashboard'
                  ? 'bg-white text-[#7a1212] shadow-md'
                  : 'text-red-100 hover:bg-white/10'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveMenu('matakuliah')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition cursor-pointer ${
                activeMenu === 'matakuliah'
                  ? 'bg-white text-[#7a1212] shadow-md'
                  : 'text-red-100 hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Mata Kuliah</span>
            </button>

            <button
              onClick={() => setActiveMenu('biaya')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition cursor-pointer ${
                activeMenu === 'biaya'
                  ? 'bg-white text-[#7a1212] shadow-md'
                  : 'text-red-100 hover:bg-white/10'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Biaya Semester</span>
            </button>

            <button
              onClick={() => setActiveMenu('users')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition cursor-pointer ${
                activeMenu === 'users'
                  ? 'bg-white text-[#7a1212] shadow-md'
                  : 'text-red-100 hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>User Management</span>
            </button>
          </nav>
        </div>

        {/* Bottom Sidebar Widget */}
        <div className="p-4 m-4 rounded-2xl bg-black/20 border border-white/10 text-xs space-y-3">
          <div>
            <span className="text-[10px] text-red-200/70 font-bold uppercase tracking-wider block">Tahun Akademik</span>
            <div className="flex items-center gap-1.5 font-bold text-white mt-0.5">
              <span>2024/2025 Ganjil</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[10px] text-emerald-300">Aktif</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-1.5 text-[11px] text-red-200 hover:text-white transition"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Bantuan</span>
            </a>

            <button 
              onClick={() => onNavigate('login')}
              className="flex items-center gap-1 text-[11px] text-red-200 hover:text-white transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ================= RIGHT MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Ringkasan Eksekutif</span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] text-slate-400">Sinkronisasi Terakhir: Hari ini, 11:20 WIB</span>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Dashboard Akademik</h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Sistem Normal
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Kendali tata kelola kurikulum, siklus pengisian KRS, dan realisasi biaya perkuliahan.</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#7a1212] rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <div className="w-9 h-9 rounded-full bg-[#7a1212] text-white flex items-center justify-center font-bold text-xs">
                RM
              </div>
              <div className="hidden sm:block text-left text-xs leading-tight">
                <p className="font-bold text-slate-900">Rina Marlina, S.Sos.</p>
                <p className="text-[10px] text-slate-500">Admin Akademik</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-6 space-y-6">
          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                  +142 Terverifikasi
                </span>
              </div>
              <div className="mt-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Jumlah User</span>
                <div className="text-3xl font-black text-slate-900 mt-1">12.878</div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>
                  Mahasiswa, Dosen & Tendik
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#7a1212] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 bg-rose-50 text-[#7a1212] border border-red-200 rounded-md">
                  Aktif Berjalan
                </span>
              </div>
              <div className="mt-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Jumlah Semester</span>
                <div className="text-3xl font-black text-slate-900 mt-1">8 Semester</div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#7a1212] mr-1.5"></span>
                  Periode Ganjil 2024/2025
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                  100% Terplot
                </span>
              </div>
              <div className="mt-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Mata Kuliah Aktif</span>
                <div className="text-3xl font-black text-slate-900 mt-1">284 MK</div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>
                  Kurikulum Berjalan 2024/2025
                </span>
              </div>
            </div>
          </div>

          {/* Monthly Academic Trend Card (Spline Chart) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Tren Aktivitas Akademik Bulanan</h3>
                <p className="text-xs text-slate-500 mt-0.5">Perbandingan pertumbuhan dan keaktifan mahasiswa, dosen, serta mata kuliah</p>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7a1212]"></span> Mahasiswa
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span> Dosen
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Mata Kuliah
                  </span>
                </div>

                <div className="relative">
                  <select 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="pl-3 pr-8 py-1.5 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-800 focus:outline-none cursor-pointer"
                  >
                    <option value="2024">Tahun: 2024</option>
                    <option value="2023">Tahun: 2023</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SVG Visual Graphic Chart */}
            <div className="w-full h-64 sm:h-72 relative">
              <svg viewBox="0 0 900 260" className="w-full h-full overflow-visible">
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

                {/* Horizontal grid lines */}
                <line x1="0" y1="50" x2="900" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="110" x2="900" y2="110" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="170" x2="900" y2="170" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="230" x2="900" y2="230" stroke="#e2e8f0" strokeWidth="1" />

                {/* Yellow Area & Line (Mata Kuliah) */}
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

                {/* Navy Line (Dosen) */}
                <path 
                  d="M 50 190 Q 200 180, 350 120 T 550 170 T 650 65 T 750 130 T 850 175" 
                  fill="none" 
                  stroke="#1e293b" 
                  strokeWidth="2.5" 
                />

                {/* Red Area & Line (Mahasiswa - Peak in Aug) */}
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

                {/* Highlight Point on Peak (Agu Puncak) */}
                <circle cx="650" cy="50" r="5" fill="#7a1212" stroke="#fff" strokeWidth="2.5" />
                <circle cx="650" cy="65" r="4" fill="#1e293b" stroke="#fff" strokeWidth="2" />
                <circle cx="650" cy="140" r="4" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                
                {/* Secondary Peak dot */}
                <circle cx="350" cy="110" r="4" fill="#7a1212" />

                {/* X Axis labels */}
                {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu (Puncak)', 'Sep', 'Okt', 'Nov', 'Des'].map((month, idx) => (
                  <text 
                    key={month} 
                    x={50 + idx * 72} 
                    y="250" 
                    textAnchor="middle" 
                    className={`text-[10px] ${month.includes('Puncak') ? 'fill-[#7a1212] font-bold' : 'fill-slate-400'}`}
                  >
                    {month}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          {/* Recent System Activity Logs */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Log Aktivitas Sistem Terbaru</h3>
                <p className="text-xs text-slate-500 mt-0.5">Catatan ringkas audit trail dan kontrol konfigurasi sistem akademik.</p>
              </div>

              <button 
                onClick={() => alert('Membuka audit log penuh')}
                className="text-xs font-bold text-[#7a1212] hover:text-red-900 flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Semua Log</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                    <th className="pb-3 pl-2">Waktu</th>
                    <th className="pb-3">User / Aktor</th>
                    <th className="pb-3">Aksi / Event Sistem</th>
                    <th className="pb-3 pr-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {logs.map((log, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      {/* Waktu */}
                      <td className="py-3.5 pl-2 align-top whitespace-nowrap">
                        <span className="font-semibold text-slate-800 block">{log.time}</span>
                        <span className="text-[11px] text-slate-400">{log.clock}</span>
                      </td>

                      {/* User / Aktor */}
                      <td className="py-3.5 align-top whitespace-nowrap pr-4">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${log.avatarBg}`}>
                            {log.icon ? log.icon : log.initials}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block leading-tight">{log.user}</span>
                            <span className="text-[10px] text-slate-500">{log.role}</span>
                          </div>
                        </div>
                      </td>

                      {/* Aksi / Event */}
                      <td className="py-3.5 align-top pr-4">
                        <span className="font-bold text-slate-800 block">{log.actionTitle}</span>
                        <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">{log.actionDesc}</p>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 pr-2 align-top text-right whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          log.statusType === 'success' 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            log.statusType === 'success' ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}></span>
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
      </div>
    </div>
  );
};
