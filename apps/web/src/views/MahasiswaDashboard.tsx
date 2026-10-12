import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Bell, ArrowRight, Download, Sliders, Sparkles, 
  BookOpen, CheckCircle2, ChevronDown, ChevronUp, Edit3, Trash2, 
  ShieldCheck, AlertCircle, Clock, DollarSign, Award, LogOut
} from 'lucide-react';

interface MahasiswaDashboardProps {
  onBackToDosen?: () => void;
  onNavigate: (view: 'login' | 'register' | 'mahasiswa' | 'dosen' | 'admin') => void;
}

export const MahasiswaDashboard: React.FC<MahasiswaDashboardProps> = ({ onNavigate }) => {
  // Tab: 'rekomendasi' (Image 1) or 'riwayat' (Image 2)
  const [activeTab, setActiveTab] = useState<'rekomendasi' | 'riwayat'>('rekomendasi');
  
  useEffect(() => {
    if (activeTab === 'rekomendasi') {
      document.title = 'Kawan KRS | Rekomendasi Paket KRS Cerdas';
    } else {
      document.title = 'Kawan KRS | Riwayat Studi & Transkrip Mahasiswa';
    }
  }, [activeTab]);
  
  // State for Generator form (Tab 1)
  const [targetSks, setTargetSks] = useState(20);
  const [budget, setBudget] = useState('7.500.000');
  const [selectedSemester, setSelectedSemester] = useState('Semester 8 (Genap 2024/2025)');
  const [selectedPlan, setSelectedPlan] = useState<'A' | 'B' | 'C'>('A');

  // State for Input Nilai Mandiri (Tab 2)
  const [openSemester, setOpenSemester] = useState<number | null>(6);
  const [inputMatkul, setInputMatkul] = useState('');
  const [inputSks, setInputSks] = useState('3');
  const [inputNilai, setInputNilai] = useState('A');
  const [transkripSem6, setTranskripSem6] = useState([
    { code: 'CS310', name: 'Pemrograman Web', sks: 3, grade: 'A', weight: '4.00' },
    { code: 'CS312', name: 'Rekayasa Perangkat Lunak', sks: 4, grade: 'A', weight: '4.00' },
    { code: 'CS315', name: 'Basis Data Lanjut', sks: 3, grade: 'A-', weight: '3.70' },
    { code: 'CS318', name: 'Sistem Terdistribusi', sks: 3, grade: 'B+', weight: '3.30' },
    { code: 'CS325', name: 'Keamanan Informasi & Jaringan', sks: 3, grade: 'A', weight: '4.00' },
    { code: 'CS330', name: 'Etika Profesi & Hukum Siber', sks: 4, grade: 'A', weight: '4.00' },
  ]);

  const handleAddNilai = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMatkul.trim()) return;
    setTranskripSem6([
      ...transkripSem6,
      {
        code: 'CS' + Math.floor(300 + Math.random() * 90),
        name: inputMatkul,
        sks: parseInt(inputSks),
        grade: inputNilai,
        weight: inputNilai === 'A' ? '4.00' : inputNilai === 'A-' ? '3.70' : '3.30'
      }
    ]);
    setInputMatkul('');
    alert('Nilai mata kuliah berhasil disimpan ke simulasi transkrip!');
  };

  const handleDeleteNilai = (index: number) => {
    setTranskripSem6(transkripSem6.filter((_, idx) => idx !== index));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      {/* Top Header Navbar */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Portal Badge */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#8b1818] flex items-center justify-center text-white shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-slate-900">KawanKRS</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-red-100 text-[#8b1818] rounded">MAHASISWA PORTAL</span>
              </div>
            </div>
          </div>

          {/* Right Header Navigation & Profile */}
          <div className="flex items-center gap-3">
            {/* Tab Navigation Pill Switcher */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('rekomendasi')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === 'rekomendasi'
                    ? 'bg-[#8b1818] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>⚡ Rekomendasi Paket KRS</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('riwayat')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === 'riwayat'
                    ? 'bg-[#8b1818] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>📖 Riwayat Studi</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              2024/2025 Ganjil
            </div>

            <button className="relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8b1818] rounded-full"></span>
            </button>

            {/* Profile Nadya */}
            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8b1818] to-rose-400 flex items-center justify-center text-white text-xs font-bold overflow-hidden shadow-xs">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                    alt="Nadya" 
                    className="w-full h-full object-cover" 
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                  />
                  <span>NS</span>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div className="hidden lg:block text-left text-xs leading-tight">
                <p className="font-bold text-slate-900">Nadya Salsabila</p>
                <p className="text-[10px] text-slate-400">NIM 2106721094</p>
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

      {/* ========================================================================= */}
      {/* TAB 1: GENERATOR PAKET KRS CERDAS (Sesuai Gambar 1 Baru)                  */}
      {/* ========================================================================= */}
      {activeTab === 'rekomendasi' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
          {/* Hero Header */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8b1818] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#8b1818]" />
              PERENCANAAN STUDI CERDAS BERBASIS AI
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Generator Paket KRS Cerdas
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
              Dapatkan kombinasi rekomendasi paket mata kuliah terbaik untuk semester Anda berdasarkan analisis riwayat studi, syarat prasyarat, budget biaya kuliah, dan preferensi target SKS Anda.
            </p>
          </div>

          {/* Student Mini Profile Summary */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#8b1818] to-rose-400 flex items-center justify-center text-white font-bold text-sm overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                  alt="Nadya" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
                <span>NS</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-slate-900 text-sm">Nadya Salsabila</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-red-50 text-[#8b1818] border border-red-200 rounded-full">
                    Mahasiswa Aktif
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  NIM 2106721094 • S1 Ilmu Komputer • Fakultas Ilmu Komputer UI
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full md:w-auto text-center">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Indeks Prestasi Kumulatif</span>
                <span className="text-base font-black text-slate-900 mt-0.5 block">3.82 <span className="text-[10px] text-slate-400 font-normal">/ 4.00</span></span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">SKS Telah Lulus</span>
                <span className="text-base font-black text-slate-900 mt-0.5 block">124 / 144 <span className="text-[10px] text-slate-400 font-normal">SKS</span></span>
                <span className="text-[9px] text-emerald-600 font-bold block">86.1% Kurikulum</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Beban Max Berhak</span>
                <span className="text-base font-black text-[#8b1818] mt-0.5 block">24 SKS</span>
                <span className="text-[9px] text-slate-500 block">IPK ≥ 3.50</span>
              </div>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 text-xs font-semibold">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-red-200 text-[#8b1818] shadow-xs cursor-pointer">
              <Sliders className="w-3.5 h-3.5" />
              Mode 1: Formulir Parameter Studi & Budget
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800 transition cursor-pointer">
              <Sparkles className="w-3.5 h-3.5" />
              Mode 2: Deskripsi & Cerita Minat (AI)
            </button>
          </div>

          {/* Parameter Rencana Studi & Budget Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-red-50 text-[#8b1818]">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Parameter Rencana Studi & Budget</h3>
                  <p className="text-[11px] text-slate-400">Atur batas beban SKS dan alokasi biaya UKT semester aktif Anda</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Target Semester:</span>
                <select 
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white focus:outline-none cursor-pointer"
                >
                  <option>Semester 8 (Genap 2024/2025)</option>
                  <option>Semester 7 (Ganjil 2024/2025)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Target Beban SKS Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700">Target Beban SKS</span>
                  <span className="text-base font-black text-[#8b1818]">{targetSks} <span className="text-xs font-normal text-slate-400">/ Max 24 SKS</span></span>
                </div>
                <input 
                  type="range" 
                  min="12" 
                  max="24" 
                  step="2" 
                  value={targetSks}
                  onChange={(e) => setTargetSks(parseInt(e.target.value))}
                  className="w-full accent-[#8b1818] cursor-pointer" 
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>12 SKS (Min. Riset)</span>
                  <span>18 SKS (Standar Skripsi)</span>
                  <span className="font-bold text-[#8b1818]">24 SKS (Maksimal Hak IPK)</span>
                </div>
              </div>

              {/* Budget Biaya Semester / UKT */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700">Budget Biaya Semester / UKT</span>
                  <span className="text-[10px] text-slate-400 font-normal">Tarif SKS: Rp 375.000 / SKS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">Rp</span>
                    <input 
                      type="text" 
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  <span className="px-2.5 py-1.5 rounded-lg bg-red-50 text-[#8b1818] border border-red-200 text-[10px] font-bold">
                    MAKSIMAL
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 italic">
                  Perkiraan tagihan normal untuk {targetSks} SKS adalah sekitar Rp 7.500.000 (BOP-B/UKT Fleksibel Terbuka).
                </p>
              </div>
            </div>

            {/* Big Action Button */}
            <button 
              type="button"
              onClick={() => alert('Sistem AI berhasil meregenerasi 3 paket rekomendasi terbaik berdasarkan parameter!')}
              className="w-full py-3.5 bg-[#8b1818] hover:bg-[#721313] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition cursor-pointer active:scale-[0.99]"
            >
              <span>⚡ Generate Rekomendasi Paket KRS</span>
            </button>
          </div>

          {/* 3 Paket Rekomendasi Terpilih Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
              <div>
                <span className="text-[10px] font-bold text-[#8b1818] uppercase tracking-wider block">✦ HASIL KOMPARASI SIMULASI AI</span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">3 Paket Rekomendasi Terpilih untuk Semester 8</h3>
                <p className="text-xs text-slate-500">Pilihlah salah satu skenario yang paling sejalan dengan target waktu wisuda, komitmen magang, dan alokasi finansial Anda.</p>
              </div>
              <span className="text-[11px] text-slate-400 flex items-center gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Terakhir diperbarui: Hari ini, 09:42 WIB
              </span>
            </div>

            {/* 3 Packages Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* PAKET A - Optimal Graduation (FEATURED) */}
              <div className={`bg-white rounded-2xl border-2 transition-all p-5 flex flex-col justify-between relative shadow-sm ${
                selectedPlan === 'A' ? 'border-[#8b1818] ring-4 ring-red-500/10' : 'border-slate-200'
              }`}>
                <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-[#8b1818] text-white text-[9px] font-bold tracking-wider uppercase">
                  ★ REKOMENDASI UTAMA • PALING OPTIMAL
                </div>

                <div>
                  <div className="pt-2 mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PAKET A</span>
                    <h4 className="font-extrabold text-slate-900 text-sm mt-0.5">Optimal Graduation & Fast Track</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Menyelesaikan sisa kewajiban skripsi dengan waktu riset maksimal dan persiapan sidang tepat waktu.
                    </p>
                  </div>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 rounded-xl p-2.5 text-center mb-4 border border-slate-100">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Total Beban</span>
                      <strong className="text-xs text-[#8b1818] block">18 SKS</strong>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Biaya UKT</span>
                      <strong className="text-xs text-slate-800 block">Rp 6,75 Jt</strong>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Proyeksi</span>
                      <strong className="text-xs text-slate-800 block">Juli 2025</strong>
                    </div>
                  </div>

                  {/* Course List */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Mata Kuliah Terdaftar (5 MK):
                    </span>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS402 Sidang Skripsi</strong>
                        <span className="text-[10px] text-slate-400">Wajib Prodi • Lab Kecerdasan Artifisial</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">6 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS432 Deep Learning Terapan</strong>
                        <span className="text-[10px] text-slate-400">Pilihan Jalur AI • Senin 08.00</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">3 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS445 Natural Language Proc.</strong>
                        <span className="text-[10px] text-slate-400">Pilihan Jalur AI • Rabu 13.30</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">3 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS490 Seminar Riset Fasilkom</strong>
                        <span className="text-[10px] text-slate-400">Wajib Kolokium • Kamis 10.00</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">2 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">MBKM Proyek Independen</strong>
                        <span className="text-[10px] text-slate-400">Riset AI Terapan • Asynchronous</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">4 SKS</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => {
                    setSelectedPlan('A');
                    alert('Paket A dipilih! Rencana studi Anda telah diselaraskan.');
                  }}
                  className="w-full py-2.5 bg-[#8b1818] hover:bg-[#721313] text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* PAKET B - Fokus Karir & Magang */}
              <div className={`bg-white rounded-2xl border transition-all p-5 flex flex-col justify-between shadow-xs ${
                selectedPlan === 'B' ? 'border-[#8b1818] ring-4 ring-red-500/10' : 'border-slate-200'
              }`}>
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PAKET B</span>
                    <h4 className="font-extrabold text-slate-900 text-sm mt-0.5">Fokus Karir & Magang Industri</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Untuk mahasiswa yang ingin mengonversi magang industri dengan beban kuliah teori yang terkelola rapi.
                    </p>
                  </div>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 rounded-xl p-2.5 text-center mb-4 border border-slate-100">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Total Beban</span>
                      <strong className="text-xs text-slate-800 block">20 SKS</strong>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Biaya UKT</span>
                      <strong className="text-xs text-slate-800 block">Rp 7,20 Jt</strong>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Proyeksi</span>
                      <strong className="text-xs text-slate-800 block">Juli 2025</strong>
                    </div>
                  </div>

                  {/* Course List */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Mata Kuliah Terdaftar (4 MK):
                    </span>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS402 Sidang Skripsi</strong>
                        <span className="text-[10px] text-slate-400">Wajib Prodi • Topik Case Study Mitra</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">6 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS450 PKL / Magang Lanjut</strong>
                        <span className="text-[10px] text-slate-400">Eksplorasi Penuh Industri Mitra</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">6 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS428 Manajemen Proyek TI</strong>
                        <span className="text-[10px] text-slate-400">Kelas Daring • Selasa Malam</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">4 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS435 Cloud & DevOps</strong>
                        <span className="text-[10px] text-slate-400">Praktikum Lab Online • Jumat 14.00</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">4 SKS</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => {
                    setSelectedPlan('B');
                    alert('Paket B dipilih!');
                  }}
                  className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* PAKET C - Pengayaan Akademik */}
              <div className={`bg-white rounded-2xl border transition-all p-5 flex flex-col justify-between shadow-xs ${
                selectedPlan === 'C' ? 'border-[#8b1818] ring-4 ring-red-500/10' : 'border-slate-200'
              }`}>
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PAKET C</span>
                    <h4 className="font-extrabold text-slate-900 text-sm mt-0.5">Pengayaan Akademik & Lanjut Studi</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Persiapan studi master / fast track, fokus pada publikasi ilmiah jurnal bereputasi Scopus/Sinta.
                    </p>
                  </div>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 rounded-xl p-2.5 text-center mb-4 border border-slate-100">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Total Beban</span>
                      <strong className="text-xs text-slate-800 block">16 SKS</strong>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Biaya UKT</span>
                      <strong className="text-xs text-slate-800 block">Rp 5,85 Jt</strong>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Proyeksi</span>
                      <strong className="text-xs text-slate-800 block">Juli 2025</strong>
                    </div>
                  </div>

                  {/* Course List */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Mata Kuliah Terdaftar (4 MK):
                    </span>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS402 Sidang Skripsi</strong>
                        <span className="text-[10px] text-slate-400">Wajib Prodi • Target Paper IEEE</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">6 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS480 Kapita Selekta AI</strong>
                        <span className="text-[10px] text-slate-400">Tingkat Pascasarjana • Rabu 08.00</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">4 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS485 Metodologi Riset Lanjut</strong>
                        <span className="text-[10px] text-slate-400">Seminar Lanjut • Kamis 13.00</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">3 SKS</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px]">CS492 Penulisan Ilmiah</strong>
                        <span className="text-[10px] text-slate-400">Review Paper • Jumat 09.00</span>
                      </div>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200/80 rounded text-slate-700">3 SKS</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => {
                    setSelectedPlan('C');
                    alert('Paket C dipilih!');
                  }}
                  className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Analysis Box: Mengapa Paket A Direkomendasikan Utama oleh AI */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-red-50 text-[#8b1818]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Mengapa Paket A Direkomendasikan Utama oleh AI?</h4>
                  <p className="text-[10px] text-slate-400">Laporan Penjelasan Algoritmik • Confidence Score: 96.8%</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-red-50 text-[#8b1818] border border-red-200 rounded">
                Optimal Trade-off Analisis
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#8b1818]" />
                  Riwayat Nilai Unggul
                </span>
                <p className="text-slate-600 text-[11px]">
                  Nadya meraih nilai <strong>A (4.0)</strong> pada mata kuliah prasyarat CS301 Machine Learning dan CS202 Desain & Analisis Algoritma. Paket A memaksimalkan akselerasi spesialisasi NLP dan Deep Learning tanpa menimbulkan friksi pemahaman materi dasar.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-[#8b1818]" />
                  Efisiensi Finansial ± 10%
                </span>
                <p className="text-slate-600 text-[11px]">
                  Dengan simulasi 18 SKS, total estimasi beban biaya adalah <strong>Rp 6.750.000</strong>, yaitu berada 10% di bawah pagu budget Rp 7.500.000 yang Anda tetapkan, menyisakan alokasi darurat untuk pendaftaran konferensi ilmiah skripsi.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#8b1818]" />
                  Waktu Kerja Fleksibel
                </span>
                <p className="text-slate-600 text-[11px]">
                  Mata kuliah pilihan terdistribusi pada jadwal pagi (Senin & Rabu), membebaskan slot sore untuk komitmen magang part-time di riset AI (estimasi 20 jam/minggu) tanpa resiko bentrok jadwal kehadiran fisik maupun kuis lab.
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: RIWAYAT STUDI & JALUR KELULUSAN (Sesuai Gambar 2 Baru)               */}
      {/* ========================================================================= */}
      {activeTab === 'riwayat' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
          {/* Top Bio Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#8b1818] to-rose-400 flex items-center justify-center text-white text-xl font-bold overflow-hidden shadow-xs shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" 
                    alt="Nadya" 
                    className="w-full h-full object-cover" 
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                  />
                  <span>NS</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Nadya Salsabila</h2>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-red-50 text-[#8b1818] border border-red-200 rounded-md uppercase">
                      Cumlaude Track
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                      Aktif Semester 7
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    NIM 2106721094 • S1 Ilmu Komputer (Angkatan 2021) • <span className="font-semibold text-slate-700">🛡 Reguler</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    👨‍🏫 Dosen Pembimbing Akademik: <strong className="text-slate-800">Prof. Dr. Ir. Wisnu Jatmiko, M.Eng.</strong>
                  </p>
                </div>
              </div>

              <button 
                type="button"
                onClick={() => alert('Mengunduh ringkasan transkrip & jalur kelulusan PDF...')}
                className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 transition flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                Unduh Ringkasan
              </button>
            </div>

            {/* 5 Stats Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 text-center">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">IPK Kumulatif</span>
                <span className="text-xl font-black text-slate-900 mt-1 block">3.82 <span className="text-xs font-normal text-slate-400">/ 4.00</span></span>
                <span className="text-[9px] font-bold text-emerald-600 block mt-1">★ Predikat Cumlaude</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">SKS Telah Lulus</span>
                <span className="text-xl font-black text-slate-900 mt-1 block">124 <span className="text-xs font-normal text-slate-400">/ 144 SKS</span></span>
                <span className="text-[9px] font-semibold text-slate-500 block mt-1">86.1% Selesai</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Beban Sem. 7 (Aktif)</span>
                <span className="text-xl font-black text-[#8b1818] mt-1 block">20 <span className="text-xs font-normal text-slate-600">SKS</span></span>
                <span className="text-[9px] font-semibold text-slate-500 block mt-1">5 Mata Kuliah</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Target Lulus</span>
                <span className="text-base font-black text-slate-900 mt-1 block">Jul / Agu 2025</span>
                <span className="text-[9px] font-semibold text-emerald-700 block mt-1">Tepat Waktu (8 Sem)</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Sisa SKS Kurikulum</span>
                <span className="text-xl font-black text-emerald-700 mt-1 block">0 <span className="text-xs font-normal text-slate-500">SKS Defisit</span></span>
                <span className="text-[9px] text-slate-400 block mt-1">Tercukupi total 144 SKS</span>
              </div>
            </div>
          </div>

          {/* Two Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* ================= LEFT COLUMN: RIWAYAT TRANSKRIP STUDI ================= */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Riwayat Transkrip Studi</h3>
                  <p className="text-xs text-slate-500">Daftar perolehan nilai resmi dan simulasi mandiri mahasiswa</p>
                </div>

                {/* Input / Perbarui Nilai Mandiri */}
                <form onSubmit={handleAddNilai} className="p-4 rounded-xl border border-red-200 bg-red-50/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#8b1818]">
                      <span className="w-2 h-2 rounded-full bg-[#8b1818]"></span>
                      Input / Perbarui Nilai Mandiri
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white border border-red-200 rounded text-[#8b1818]">
                      Simulasi & Riwayat
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Tambahkan capaian nilai semester untuk memperbarui proyeksi IPK seketika.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Pilih Semester Target</label>
                      <select className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-800 focus:outline-none">
                        <option>Semester 6 (Genap 2023/2024)</option>
                        <option>Semester 7 (Ganjil 2024/2025)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Kode & Nama Mata Kuliah</label>
                      <input 
                        type="text" 
                        value={inputMatkul}
                        onChange={(e) => setInputMatkul(e.target.value)}
                        placeholder="Contoh: CS320 Pembelajaran Mesin" 
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs text-slate-800 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Bobot SKS</label>
                      <select 
                        value={inputSks}
                        onChange={(e) => setInputSks(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-800 focus:outline-none"
                      >
                        <option value="2">2 SKS</option>
                        <option value="3">3 SKS</option>
                        <option value="4">4 SKS</option>
                        <option value="6">6 SKS</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 uppercase block mb-1">Nilai Huruf</label>
                      <select 
                        value={inputNilai}
                        onChange={(e) => setInputNilai(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-800 focus:outline-none"
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
                    className="w-full py-2.5 bg-[#8b1818] hover:bg-[#721313] text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Simpan Nilai</span>
                  </button>
                </form>

                {/* Semester Accordion List */}
                <div className="space-y-3">
                  {/* Semester 6 (Expanded Table) */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenSemester(openSemester === 6 ? null : 6)}
                      className="w-full p-3.5 bg-white hover:bg-slate-50 flex items-center justify-between text-left transition cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center">
                          6
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-bold text-slate-900">Semester 6</h4>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded font-medium">Genap 2023/2024</span>
                          </div>
                          <p className="text-[10px] text-slate-400">20 SKS Diselesaikan • 6 Mata Kuliah</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <span className="text-[9px] text-slate-400 uppercase font-bold block">IPS Semester</span>
                          <span className="text-xs font-black text-[#8b1818]">3.80</span>
                        </div>
                        {openSemester === 6 ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </div>
                    </button>

                    {openSemester === 6 && (
                      <div className="p-3 bg-slate-50 border-t border-slate-100 text-xs overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="text-[10px] text-slate-400 uppercase font-bold border-b border-slate-200 pb-1">
                              <th className="pb-2">Kode & Mata Kuliah</th>
                              <th className="pb-2 text-center">SKS</th>
                              <th className="pb-2 text-center">Nilai</th>
                              <th className="pb-2 text-center">Bobot</th>
                              <th className="pb-2 text-right">Aksi</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {transkripSem6.map((course, idx) => (
                              <tr key={idx} className="hover:bg-slate-100/60 transition">
                                <td className="py-2.5">
                                  <strong className="text-slate-800 block text-[11px]">{course.code}</strong>
                                  <span className="text-[10px] text-slate-500">{course.name}</span>
                                </td>
                                <td className="py-2.5 text-center font-bold text-slate-700">{course.sks}</td>
                                <td className="py-2.5 text-center font-bold text-emerald-700">{course.grade}</td>
                                <td className="py-2.5 text-center text-slate-600">{course.weight}</td>
                                <td className="py-2.5 text-right whitespace-nowrap">
                                  <button 
                                    onClick={() => alert(`Edit ${course.name}`)}
                                    className="p-1 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>
                                  <button 
                                    onClick={() => handleDeleteNilai(idx)}
                                    className="p-1 text-slate-400 hover:text-red-700 transition cursor-pointer ml-1"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
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
                  <div className="border border-slate-200 rounded-xl p-3.5 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center">5</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">Semester 5</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">Ganjil 2023/2024</span>
                        </div>
                        <p className="text-[10px] text-slate-400">20 SKS Diselesaikan • 6 Mata Kuliah (Kecerdasan Artifisial, Jaringan Komputer, dll)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">IPS Semester</span>
                      <span className="text-xs font-black text-[#8b1818]">3.85</span>
                    </div>
                  </div>

                  {/* Semester 4 */}
                  <div className="border border-slate-200 rounded-xl p-3.5 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center">4</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">Semester 4</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">Genap 2022/2023</span>
                        </div>
                        <p className="text-[10px] text-slate-400">22 SKS Diselesaikan • Desain Algoritma, Sistem Operasi, Grafika Komputer</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">IPS Semester</span>
                      <span className="text-xs font-black text-[#8b1818]">3.90</span>
                    </div>
                  </div>

                  {/* Semester 3 */}
                  <div className="border border-slate-200 rounded-xl p-3.5 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center">3</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">Semester 3</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">Ganjil 2022/2023</span>
                        </div>
                        <p className="text-[10px] text-slate-400">21 SKS Diselesaikan • Struktur Data & Algoritma, Aljabar Linier</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">IPS Semester</span>
                      <span className="text-xs font-black text-[#8b1818]">3.75</span>
                    </div>
                  </div>

                  {/* Semester 2 */}
                  <div className="border border-slate-200 rounded-xl p-3.5 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center">2</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">Semester 2</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">Genap 2021/2022</span>
                        </div>
                        <p className="text-[10px] text-slate-400">21 SKS Diselesaikan • Matematika Diskret, Dasar Pemrograman 2, dll</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">IPS Semester</span>
                      <span className="text-xs font-black text-[#8b1818]">3.78</span>
                    </div>
                  </div>

                  {/* Semester 1 */}
                  <div className="border border-slate-200 rounded-xl p-3.5 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center">1</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">Semester 1</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">Ganjil 2021/2022</span>
                        </div>
                        <p className="text-[10px] text-slate-400">20 SKS Diselesaikan • Dasar Pemrograman 1, Kalkulus, Pengantar Sistem Digital</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">IPS Semester</span>
                      <span className="text-xs font-black text-[#8b1818]">3.85</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: JALUR KELULUSAN MAHASISWA ================= */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Jalur Kelulusan Mahasiswa</h3>
                  <p className="text-xs text-slate-500">Audit kurikulum & proyeksi penyelesaian studi tepat waktu</p>
                </div>

                {/* Prospek Box */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    STATUS PROSPEK KELULUSAN: Sangat Tinggi (Predikat Cumlaude)
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Berada pada trajectory unggul. Menyelesaikan 20 SKS pada semester 7 ini akan menggenapkan total 144 SKS syarat kelulusan tanpa ada tanggungan semester antara.
                  </p>
                </div>

                {/* Progres SKS Kurikulum */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Progres SKS Kurikulum</span>
                    <span className="text-[#8b1818]">144 / 144 SKS (100%)</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full flex overflow-hidden">
                    <div className="bg-[#8b1818]" style={{ width: '86.1%' }} title="124 SKS Lulus"></div>
                    <div className="bg-rose-400" style={{ width: '13.9%' }} title="20 SKS Berjalan"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                    <span>• 124 SKS Lulus (86.1%)</span>
                    <span className="text-rose-700">• 20 SKS Berjalan (13.9%)</span>
                    <span>Target 144 SKS</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Sisa Semester</span>
                      <strong className="text-sm text-slate-800 block mt-0.5">1 Semester</strong>
                      <span className="text-[10px] text-slate-500">Semester 8 (Feb-Jul 2025)</span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Kebutuhan SKS Sem 8</span>
                      <strong className="text-sm text-emerald-700 block mt-0.5">0 - 4 SKS</strong>
                      <span className="text-[10px] text-slate-500">Hanya Sidang/Publikasi</span>
                    </div>
                  </div>
                </div>

                {/* Syarat Kelulusan S1 Fasilkom */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-800 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#8b1818]" />
                      Syarat Kelulusan S1 Fasilkom
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">1 dari 2 Terpenuhi</span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-xs text-slate-800 block">Jumlah SKS 144</strong>
                        <p className="text-[10px] text-slate-400">Tercukupi total 144 SKS pasca menyelesaikan semester 7 (20 SKS)</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 whitespace-nowrap">124 / 144 SKS Lulus</span>
                  </div>

                  <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/50 flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-xs text-slate-800 block">Tugas Akhir / Skripsi (6 SKS)</strong>
                        <p className="text-[10px] text-amber-800/80">Tahap Bimbingan Bab 3 & Pengumpulan Korpus Data Model AI</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 whitespace-nowrap">Sedang Berjalan</span>
                  </div>
                </div>

                {/* Catatan Konsultasi Dosen PA */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 flex items-center gap-1.5">
                      💬 Catatan Konsultasi Dosen PA
                    </span>
                    <span className="text-[10px] text-slate-400">12 Oktober 2024</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#8b1818] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      WJ
                    </div>
                    <div>
                      <strong className="text-xs text-slate-900 block leading-tight">Prof. Dr. Ir. Wisnu Jatmiko, M.Eng.</strong>
                      <span className="text-[10px] text-slate-500">Guru Besar Fasilkom UI • Dosen PA</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-[#8b1818] pl-3">
                    "Pencapaian akademis Nadya sejauh ini sangat konsisten di zona Cumlaude. Untuk semester 7 ini, fokus utama adalah mematangkan pipeline eksperimen pada transformer model untuk skripsimu. Jika draft bab 4 dapat diselesaikan di Desember, kamu siap mendaftar sidang perdana di bulan Mei/Juni 2025."
                  </p>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                      ✓ Disetujui untuk Akselerasi Skripsi
                    </span>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-[11px] font-bold text-[#8b1818] hover:underline">
                      Lihat Log Bimbingan →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Persistent Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center text-xs text-slate-400">
        <p>KawanKRS • Sistem Perencanaan Studi Cerdas & Rekomendasi KRS Mahasiswa • Fakultas Ilmu Komputer UI</p>
        <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
          STATUS SERVER: AKTIF <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        </span>
      </footer>
    </div>
  );
};
