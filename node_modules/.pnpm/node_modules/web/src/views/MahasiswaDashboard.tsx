import React, { useState } from 'react';
import { 
  GraduationCap, Bell, ArrowLeft, Mail, Phone, UserCheck, CheckCircle2, 
  BookOpen, Lock, Send, Milestone, Shield, Award, Check, 
  FileText, ChevronDown, ChevronUp, AlertCircle, LogOut
} from 'lucide-react';

interface MahasiswaDashboardProps {
  onBackToDosen?: () => void;
  onNavigate: (view: 'login' | 'register' | 'mahasiswa' | 'dosen' | 'admin') => void;
}

export const MahasiswaDashboard: React.FC<MahasiswaDashboardProps> = ({ onBackToDosen, onNavigate }) => {
  const [openSemester, setOpenSemester] = useState<number | null>(6);
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([
    {
      author: 'Prof. Dr. Ir. Wisnu Jatmiko',
      date: '20 Sep 2024',
      text: 'Bab 1 dan 2 proposal skripsi sudah baik. Pertajam rumusan masalah pada benchmark transformer model. Lanjutkan ke bimbingan metodologi minggu depan.',
      topic: 'Skripsi / Tugas Akhir'
    },
    {
      author: 'Prof. Dr. Ir. Wisnu Jatmiko',
      date: '12 Agu 2024',
      text: 'Evaluasi KRS semester 7: Pengambilan 20 SKS disetujui, disarankan fokus penulisan naskah tugas akhir agar target lulus Juli 2025 tercapai tanpa kendala.',
      topic: 'Rencana Studi'
    }
  ]);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotes([
      {
        author: 'Prof. Dr. Ir. Wisnu Jatmiko',
        date: 'Hari ini',
        text: newNote,
        topic: 'Konsultasi Mandiri'
      },
      ...notes
    ]);
    setNewNote('');
  };

  const semesters = [
    { sem: 6, title: 'Semester 6 • Genap 2023/2024', sks: '20 SKS • 6 Mata Kuliah Lulus', ips: '3.80' },
    { sem: 5, title: 'Semester 5 • Ganjil 2023/2024', sks: '20 SKS • 6 Mata Kuliah Lulus', ips: '3.85' },
    { sem: 4, title: 'Semester 4 • Genap 2022/2023', sks: '22 SKS • 6 Mata Kuliah Lulus', ips: '3.90' },
    { sem: 3, title: 'Semester 3 • Ganjil 2022/2023', sks: '21 SKS • 6 Mata Kuliah Lulus', ips: '3.75' },
    { sem: 2, title: 'Semester 2 • Genap 2021/2022', sks: '21 SKS • 6 Mata Kuliah Lulus', ips: '3.80' },
    { sem: 1, title: 'Semester 1 • Ganjil 2021/2022', sks: '20 SKS • 6 Mata Kuliah Lulus', ips: '3.85' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#8b1818] flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-base tracking-tight text-slate-900">KawanKRS</span>
                <span className="ml-1.5 text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">Workspace PA</span>
              </div>
            </div>

            {onBackToDosen && (
              <button 
                onClick={onBackToDosen}
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#8b1818] hover:text-[#701212] ml-4 px-2.5 py-1.5 rounded-lg hover:bg-red-50 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Daftar Mahasiswa Bimbingan
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              T.A. 2024/2025 • Semester Ganjil
            </div>

            <button className="relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8b1818] rounded-full"></span>
            </button>

            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-xs font-bold text-amber-800">
                WJ
              </div>
              <div className="hidden lg:block text-left text-xs leading-tight">
                <p className="font-bold text-slate-900">Prof. Wisnu Jatmiko</p>
                <p className="text-[10px] text-slate-500">Dosen Pembimbing</p>
              </div>

              <button 
                onClick={() => onNavigate('login')}
                className="p-1.5 text-slate-400 hover:text-red-700 rounded-lg hover:bg-red-50 transition cursor-pointer ml-1"
                title="Keluar / Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sub-header meta bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Mentorship Aktif
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium text-[11px]">
            Fakultas Ilmu Komputer
          </span>
        </div>
        <span className="text-slate-400 text-[11px]">Terakhir diperbarui: Hari ini, 09:40 WIB</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 space-y-6">
        {/* Student Profile Overview Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Bio */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#8b1818] to-rose-400 flex items-center justify-center text-white text-2xl font-bold shadow-md shadow-rose-900/10 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" 
                    alt="Nadya Salsabila" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span>NS</span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>

              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Nadya Salsabila</h2>
                  <span className="px-2 py-0.5 rounded-md border border-red-200 bg-red-50 text-[#8b1818] text-xs font-bold tracking-wider">
                    NIM 2106721094
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-medium">
                  S1 Ilmu Komputer • Angkatan 2021 • <span className="font-semibold text-slate-700">Semester 7 (Ganjil 2024/2025)</span>
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" /> nadya.salsabila@ui.ac.id
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" /> +62 812-3456-7890
                  </span>
                  <span className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#8b1818]" /> Pembimbing: <strong className="text-slate-700">Prof. Wisnu Jatmiko</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: 3 Key Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full lg:w-auto">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">IPK Kumulatif</span>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  3.82 <span className="text-xs font-normal text-slate-400">/ 4.00</span>
                </div>
                <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded">
                  ★ Predikat Cumlaude
                </span>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total SKS Lulus</span>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  124 <span className="text-xs font-normal text-slate-400">/ 144 SKS</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#8b1818] h-full rounded-full" style={{ width: '86%' }}></div>
                </div>
                <span className="text-[10px] font-semibold text-slate-500 mt-1 block">86% Selesai</span>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Beban Semester 7</span>
                <div className="text-xl sm:text-2xl font-black text-[#8b1818] mt-1">
                  20 <span className="text-xs font-semibold text-slate-600">SKS Aktif</span>
                </div>
                <span className="text-[10px] font-medium text-slate-500 mt-1 block">6 Mata Kuliah</span>
              </div>
            </div>
          </div>

          {/* Bottom On-Track Banner */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs bg-emerald-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl px-6 border-b border-emerald-100">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Status Prospek: <strong>On Track — Proyeksi Lulus Semester 8 (Juli 2025)</strong></span>
            </div>
            <span className="text-slate-500 text-[11px]">
              Kebutuhan Sisa: <strong>0 SKS</strong> setelah semester 7 & 8 tuntas
            </span>
          </div>
        </div>

        {/* Two-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-6">
            {/* 1. Rencana Studi Semester Berjalan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-red-50 rounded-xl text-[#8b1818]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Rencana Studi Semester Berjalan</h3>
                    <p className="text-[11px] text-slate-500">Tahun Akademik 2024/2025 Ganjil</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-red-50 text-[#8b1818] border border-red-200 text-xs font-bold rounded-lg">
                  20 SKS Aktif
                </span>
              </div>

              {/* Course List */}
              <div className="space-y-3">
                {/* Course 1 */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-red-200 transition">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-red-700 tracking-wider uppercase block">CS401 • MATA KULIAH WAJIB AKHIR</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5">Skripsi / Tugas Akhir</h4>
                      <p className="text-xs text-slate-500 mt-1">Dosen Pembimbing: Prof. Wisnu Jatmiko</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 rounded text-slate-700">6 SKS</span>
                      <span className="block mt-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        ⚑ Fase: Proposal Disetujui
                      </span>
                    </div>
                  </div>
                </div>

                {/* Course 2 */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-red-200 transition">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase block">CS412 • PEMINATAN AI</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5">Machine Learning Lanjutan</h4>
                      <p className="text-xs text-slate-500 mt-1">Ruang Lab AI 301 • Kelas A</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 rounded text-slate-700">3 SKS</span>
                      <span className="block mt-1 text-[11px] font-semibold text-slate-600">Kehadiran: 100%</span>
                    </div>
                  </div>
                </div>

                {/* Course 3 */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-red-200 transition">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-purple-700 tracking-wider uppercase block">CS425 • WAJIB FAKULTAS</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5">Etika Profesi & Hukum Siber</h4>
                      <p className="text-xs text-slate-500 mt-1">Gedung B 2.4 • Kelas B</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 rounded text-slate-700">2 SKS</span>
                      <span className="block mt-1 text-[11px] font-semibold text-slate-600">Kehadiran: 92%</span>
                    </div>
                  </div>
                </div>

                {/* Course 4 */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-red-200 transition">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-amber-700 tracking-wider uppercase block">CS430 • PEMINATAN KHUSUS</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5">Kapita Selekta Kecerdasan Artifisial</h4>
                      <p className="text-xs text-slate-500 mt-1">Seminar Hall 1 • Kelas A</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 rounded text-slate-700">3 SKS</span>
                      <span className="block mt-1 text-[11px] font-semibold text-slate-600">Kehadiran: 100%</span>
                    </div>
                  </div>
                </div>

                {/* Course 5 */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-red-200 transition">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-700 tracking-wider uppercase block">CS450 • MBKM / MAGANG</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-0.5">Praktik Kerja Lapangan / Magang Industri</h4>
                      <p className="text-xs text-slate-500 mt-1">PT Tokopedia (Software Eng. Intern)</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 rounded text-slate-700">6 SKS</span>
                      <span className="block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Nilai A (Berjalan)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-50 rounded-xl text-slate-500 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Modul ini berfokus pada pemantauan berkala dan pendampingan akademik mahasiswa bimbingan.</span>
              </div>
            </div>

            {/* 2. Catatan Dosen Pembimbing (PA Notes) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-red-50 rounded-xl text-[#8b1818]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Catatan Dosen Pembimbing (PA Notes)</h3>
                    <p className="text-[11px] text-slate-500">Privat & Terekam Riwayatnya</p>
                  </div>
                </div>
                <Lock className="w-4 h-4 text-slate-400" />
              </div>

              {/* Form Input Catatan Baru */}
              <form onSubmit={handleAddNote} className="mb-6">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 focus-within:bg-white focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/10 transition">
                  <label className="text-[11px] font-bold text-slate-600 block mb-1.5 uppercase tracking-wide">
                    Tulis Catatan Pendampingan Baru
                  </label>
                  <textarea 
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    rows={3}
                    placeholder="Masukkan arahan riset, evaluasi beban studi, atau kesepakatan bimbingan untuk Nadya..."
                    className="w-full text-xs text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none resize-none"
                  />
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 mt-2">
                    <span className="text-[10px] text-slate-400">Tanggal otomatis tersemat</span>
                    <button 
                      type="submit"
                      className="px-3.5 py-1.5 bg-[#8b1818] hover:bg-[#721313] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      Simpan Catatan
                    </button>
                  </div>
                </div>
              </form>

              {/* Catatan Timeline */}
              <div className="space-y-4">
                {notes.map((note, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#8b1818]"></span>
                        <span className="font-bold text-slate-800">{note.author}</span>
                      </div>
                      <span className="text-[11px] text-slate-400">{note.date}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-4 border-l-2 border-slate-200">
                      "{note.text}"
                    </p>
                    <div className="pt-1">
                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-slate-200/70 text-slate-700 rounded-md">
                        Topik: {note.topic}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="space-y-6">
            {/* 1. Jalur Kelulusan Mahasiswa */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-amber-50 rounded-xl text-amber-700">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Jalur Kelulusan Mahasiswa</h3>
                    <p className="text-[11px] text-slate-500">Graduation Pathway & Pelacakan Milestone</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold rounded-lg">
                  Wisuda: Agustus 2025
                </span>
              </div>

              {/* Status Box */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-emerald-900">Prospek Kelulusan: Sangat Tinggi (Cumlaude)</h4>
                  <p className="text-xs text-emerald-800/90 mt-1 leading-relaxed">
                    Mahasiswa berada pada lintasan unggul dengan IPK 3.82. Persyaratan sisa terfokus pada perampungan naskah skripsi, sidang tugas akhir, dan bebas administrasi.
                  </p>
                </div>
              </div>

              {/* Pathway Bar */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Perjalanan SKS Kurikulum (Min. 144 SKS)</span>
                  <span className="text-[#8b1818]">144 / 144 SKS (Proyeksi 100%)</span>
                </div>
                {/* Multi-segmented bar */}
                <div className="h-3 w-full bg-slate-100 rounded-full flex overflow-hidden">
                  <div className="bg-[#8b1818]" style={{ width: '86%' }} title="124 SKS Selesai"></div>
                  <div className="bg-rose-400" style={{ width: '14%' }} title="20 SKS Berjalan"></div>
                </div>
                <div className="grid grid-cols-3 text-[10px] pt-1 text-slate-500 font-medium">
                  <div>
                    <strong className="text-slate-800 block">124 SKS Selesai</strong>
                    Semester 1 - 6
                  </div>
                  <div className="text-center">
                    <strong className="text-rose-700 block">+20 SKS Berjalan</strong>
                    Semester 7
                  </div>
                  <div className="text-right">
                    <strong className="text-emerald-700 block">0 SKS Tersisa</strong>
                    Target Lulus Sem 8
                  </div>
                </div>
              </div>

              {/* 4 Checklist Criteria */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                <div className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">MK Wajib Universitas</h5>
                    <p className="text-[10px] text-emerald-700 font-semibold">100% Selesai (24 SKS)</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">MK Wajib Fasilkom</h5>
                    <p className="text-[10px] text-emerald-700 font-semibold">100% Selesai (72 SKS)</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/50 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Tugas Akhir / Skripsi</h5>
                    <p className="text-[10px] text-amber-800 font-semibold">Sedang Berjalan (Bimbingan Bab 3)</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Kemampuan Bhs. Inggris</h5>
                    <p className="text-[10px] text-emerald-700 font-semibold">TOEFL 590 (Memenuhi Syarat)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Riwayat Studi Per Semester */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-red-50 rounded-xl text-[#8b1818]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Riwayat Studi Per Semester</h3>
                    <p className="text-[11px] text-slate-500">Transkrip capaian & indeks prestasi semester (IPS)</p>
                  </div>
                </div>
                <button 
                  onClick={() => alert('Pratinjau transkrip lengkap')}
                  className="px-2.5 py-1 text-xs font-semibold text-[#8b1818] border border-red-200 hover:bg-red-50 rounded-lg transition cursor-pointer flex items-center gap-1"
                >
                  <FileText className="w-3 h-3" />
                  Lihat Transkrip
                </button>
              </div>

              {/* Accordion Semesters */}
              <div className="space-y-2">
                {semesters.map((item) => {
                  const isOpen = openSemester === item.sem;
                  return (
                    <div 
                      key={item.sem} 
                      className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenSemester(isOpen ? null : item.sem)}
                        className="w-full p-3 bg-white hover:bg-slate-50 flex items-center justify-between text-left transition cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                            S{item.sem}
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                            <p className="text-[10px] text-slate-400">{item.sks}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#8b1818] px-2 py-0.5 bg-red-50 rounded border border-red-100">
                            IPS: {item.ips}
                          </span>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-xs space-y-2">
                          <div className="flex justify-between text-[11px] text-slate-500 pb-1 border-b border-slate-200 font-semibold">
                            <span>Mata Kuliah</span>
                            <span>Nilai / SKS</span>
                          </div>
                          <div className="flex justify-between text-slate-700">
                            <span>Struktur Data & Algoritma</span>
                            <span className="font-bold text-emerald-700">A (4 SKS)</span>
                          </div>
                          <div className="flex justify-between text-slate-700">
                            <span>Jaringan Komputer</span>
                            <span className="font-bold text-emerald-700">A (3 SKS)</span>
                          </div>
                          <div className="flex justify-between text-slate-700">
                            <span>Sistem Operasi</span>
                            <span className="font-bold text-emerald-700">A- (3 SKS)</span>
                          </div>
                          <div className="flex justify-between text-slate-700">
                            <span>Basis Data Lanjut</span>
                            <span className="font-bold text-emerald-700">A (3 SKS)</span>
                          </div>
                          <div className="flex justify-between text-slate-700">
                            <span>Pemrograman Web Lanjut</span>
                            <span className="font-bold text-emerald-700">A (4 SKS)</span>
                          </div>
                          <div className="flex justify-between text-slate-700">
                            <span>Statistika Probabilitas</span>
                            <span className="font-bold text-emerald-700">B+ (3 SKS)</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center text-xs text-slate-400">
        <p>KawanKRS Workspace • Sistem Bimbingan & Pelacakan Akademik</p>
        <p>Fakultas Ilmu Komputer</p>
      </footer>
    </div>
  );
};
