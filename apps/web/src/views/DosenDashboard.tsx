import React, { useState } from 'react';
import { 
  GraduationCap, Bell, Download, Search, Users, TrendingUp, CheckSquare, 
  BookOpen, AlertTriangle, ArrowRight, Plus, ShieldCheck, LogOut
} from 'lucide-react';

interface DosenDashboardProps {
  onSelectMahasiswa: () => void;
  onNavigate: (view: 'login' | 'register' | 'mahasiswa' | 'dosen' | 'admin') => void;
}

export const DosenDashboard: React.FC<DosenDashboardProps> = ({ onSelectMahasiswa, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'on-track' | 'needs-help'>('all');
  const [selectedCohort, setSelectedCohort] = useState<string>('all');

  const students = [
    {
      id: '1',
      name: 'Nadya Salsabila',
      nim: '2106721094',
      prodi: 'S1 Ilmu Komputer • Angkatan 2021',
      status: 'On Track (Sem. 7)',
      statusType: 'on-track',
      cohort: '2021',
      ipk: '3.78',
      sks: '124 /144',
      krsLoad: '21 SKS',
      progress: 86,
      progressText: '86% Selesai',
      coursesInfo: '6 Mata Kuliah (Termasuk Seminar Skripsi)',
      note: 'Konsultasi draft proposal Skripsi bab 1-3 disetujui untuk maju seminar kolokium. Tetap kawal sitasi jurnal...'
    },
    {
      id: '2',
      name: 'Dimas Farhan',
      nim: '2206834112',
      prodi: 'S1 Sistem Informasi • Angkatan 2022',
      status: 'Perlu Pendampingan',
      statusType: 'needs-help',
      cohort: '2022',
      ipk: '2.84',
      sks: '76 /144',
      krsLoad: '18 SKS',
      progress: 52,
      progressText: '52% (Tertinggal 8 SKS)',
      warning: '5 Mata Kuliah (Mengulang Basis Data)',
      note: 'Perlu bimbingan intensif manajemen waktu dan asistensi praktikum. Jadwal evaluasi UTS wajib lapor...'
    },
    {
      id: '3',
      name: 'Clarissa Kusuma',
      nim: '2306912348',
      prodi: 'S1 Ilmu Komputer • Angkatan 2023',
      status: 'On Track (Sem. 3)',
      statusType: 'on-track',
      cohort: '2023',
      ipk: '3.92',
      sks: '42 /144',
      krsLoad: '22 SKS',
      progress: 29,
      progressText: '29% Selesai',
      coursesInfo: '7 Mata Kuliah (Termasuk Algoritma)',
      note: 'Pencapaian sangat memuaskan, didorong untuk mulai eksplorasi tim kompetisi Gemastik atau PKM semester depan.'
    },
    {
      id: '4',
      name: 'Fajar Ardiansyah',
      nim: '2106755431',
      prodi: 'S1 Ilmu Komputer • Angkatan 2021',
      status: 'On Track (Sem. 7)',
      statusType: 'on-track',
      cohort: '2021',
      ipk: '3.65',
      sks: '126 /144',
      krsLoad: '18 SKS',
      progress: 87,
      progressText: '87% Selesai',
      coursesInfo: '5 Mata Kuliah (Termasuk Semhas Skripsi)',
      note: 'Dataset penelitian Deep Learning telah ditinjau dan disetujui. Lanjutkan bab implementasi dan uji akurasi...'
    },
    {
      id: '5',
      name: 'Alya Wahyudi',
      nim: '2406123456',
      prodi: 'S1 Sistem Informasi • Angkatan 2024',
      status: 'Mahasiswa Baru',
      statusType: 'on-track',
      cohort: '2024',
      ipk: '-',
      sks: '0 /144',
      krsLoad: '20 SKS',
      progress: 5,
      progressText: 'Semester 1',
      coursesInfo: '6 Mata Kuliah Paket Kurikulum 2024',
      note: 'Orientasi akademik terlaksana baik. Mahasiswa memahami aturan kehadiran 80% dan etika komunikasi.'
    },
    {
      id: '6',
      name: 'Budi Santoso',
      nim: '2206432198',
      prodi: 'S1 Ilmu Komputer • Angkatan 2022',
      status: 'On Track (Sem. 5)',
      statusType: 'on-track',
      cohort: '2022',
      ipk: '3.51',
      sks: '88 /144',
      krsLoad: '20 SKS',
      progress: 61,
      progressText: '61% Selesai',
      coursesInfo: '6 Mata Kuliah (Termasuk Rekayasa PL)',
      note: 'KRS semester 5 telah disetujui penuh. Diingatkan untuk membagi waktu dengan kegiatan kepengurusan BEM.'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.nim.includes(searchQuery);
    const matchesStatus = selectedStatus === 'all' || 
                          (selectedStatus === 'on-track' && student.statusType === 'on-track') ||
                          (selectedStatus === 'needs-help' && student.statusType === 'needs-help');
    const matchesCohort = selectedCohort === 'all' || student.cohort === selectedCohort;
    return matchesSearch && matchesStatus && matchesCohort;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#8b1818] flex items-center justify-center text-white shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-slate-900">KawanKRS</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-red-100 text-[#8b1818] rounded">PA PORTAL</span>
              </div>
              <p className="text-[10px] text-slate-400">Fakultas Ilmu Komputer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              T.A. Aktif: 2024/2025 Ganjil
            </div>

            <button 
              onClick={() => alert('Mengunduh rekap monitoring bimbingan PA (Excel/PDF)...')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              Unduh Rekap
            </button>

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        {/* Hero Welcome Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-[#8b1818] text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Portal Pendampingan Akademik Aktif
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Selamat Datang, <span className="text-[#8b1818]">Prof. Wisnu Jatmiko</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mt-1.5 leading-relaxed">
                Portal terpadu evaluasi dan monitoring kemajuan studi 18 mahasiswa bimbingan (anak wali) Fasilkom. Pantau progres SKS, evaluasi IRS semester berjalan, serta kesiapan tugas akhir secara tepat waktu.
              </p>
            </div>

            <button 
              onClick={() => alert('Membuka modal agenda konsultasi baru')}
              className="px-4 py-2.5 bg-[#8b1818] hover:bg-[#721313] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition shrink-0 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Agenda Konsultasi Baru
            </button>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Bimbingan</span>
              <div className="text-2xl font-black text-slate-900 mt-1">18 <span className="text-xs font-normal text-slate-400">Mahasiswa</span></div>
              <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 100% Terdaftar Aktif
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8b1818] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Rata-Rata IPK</span>
              <div className="text-2xl font-black text-slate-900 mt-1">3.62 <span className="text-xs font-normal text-slate-400">/ 4.00</span></div>
              <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3.5 h-3.5" /> +0.08 tren semester ini
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <span className="text-base font-bold">★</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Penyelesaian KRS</span>
              <div className="text-2xl font-black text-slate-900 mt-1">
                18/18 <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded ml-1">Terisi Penuh</span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 mt-1 block">Seluruh rencana studi telah diisi</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <CheckSquare className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Tingkat Akhir</span>
              <div className="text-2xl font-black text-[#8b1818] mt-1">4 <span className="text-xs font-normal text-slate-400">Mahasiswa</span></div>
              <span className="text-[11px] font-semibold text-amber-700 flex items-center gap-1 mt-1">
                ⚑ Target Wisuda Genap 2025
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan nama mahasiswa, NIM, atau fokus studi..." 
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#8b1818] text-slate-800 placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 text-xs font-semibold">
              <button 
                onClick={() => setSelectedStatus('all')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${
                  selectedStatus === 'all' ? 'bg-[#8b1818] text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Semua (18)
              </button>
              <button 
                onClick={() => setSelectedStatus('on-track')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedStatus === 'on-track' ? 'bg-emerald-700 text-white shadow-xs' : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                On-Track (15)
              </button>
              <button 
                onClick={() => setSelectedStatus('needs-help')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedStatus === 'needs-help' ? 'bg-amber-600 text-white shadow-xs' : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Perlu Pendampingan (3)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs overflow-x-auto pb-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">Angkatan:</span>
            <button 
              onClick={() => setSelectedCohort('all')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition cursor-pointer shrink-0 ${
                selectedCohort === 'all' ? 'bg-[#8b1818] text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Semua Angkatan
            </button>
            <button 
              onClick={() => setSelectedCohort('2024')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition cursor-pointer shrink-0 ${
                selectedCohort === '2024' ? 'bg-[#8b1818] text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              2024 (Sem 1)
            </button>
            <button 
              onClick={() => setSelectedCohort('2023')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition cursor-pointer shrink-0 ${
                selectedCohort === '2023' ? 'bg-[#8b1818] text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              2023 (Sem 3)
            </button>
            <button 
              onClick={() => setSelectedCohort('2022')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition cursor-pointer shrink-0 ${
                selectedCohort === '2022' ? 'bg-[#8b1818] text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              2022 (Sem 5)
            </button>
            <button 
              onClick={() => setSelectedCohort('2021')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition cursor-pointer shrink-0 ${
                selectedCohort === '2021' ? 'bg-[#8b1818] text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              2021 (Sem 7)
            </button>
          </div>
        </div>

        {/* Student Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStudents.map((student) => (
            <div 
              key={student.id} 
              className={`bg-white rounded-2xl border transition-all hover:shadow-md p-5 flex flex-col justify-between ${
                student.statusType === 'needs-help' ? 'border-amber-200' : 'border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      student.statusType === 'needs-help' 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {student.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm leading-snug">{student.name}</h3>
                      <p className="text-[11px] text-slate-400">{student.nim}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{student.prodi}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap shrink-0 ${
                    student.statusType === 'needs-help' 
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    {student.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 bg-slate-50/80 rounded-xl p-2.5 text-center my-3 border border-slate-100">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">IPK</span>
                    <span className="text-xs font-black text-slate-800 mt-0.5 block">{student.ipk}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">SKS Lulus</span>
                    <span className="text-xs font-black text-slate-800 mt-0.5 block">{student.sks}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">Beban KRS</span>
                    <span className="text-xs font-black text-[#8b1818] mt-0.5 block">{student.krsLoad}</span>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Progres Menuju Kelulusan</span>
                    <span className="font-bold text-slate-700">{student.progressText}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        student.statusType === 'needs-help' ? 'bg-amber-500' : 'bg-[#8b1818]'
                      }`} 
                      style={{ width: `${Math.min(student.progress, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {student.warning ? (
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold flex items-center gap-1.5 mb-3">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                    <span>{student.warning}</span>
                  </div>
                ) : (
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 text-[11px] font-medium flex items-center gap-1.5 mb-3">
                    <BookOpen className="w-3.5 h-3.5 shrink-0 text-[#8b1818]" />
                    <span>{student.coursesInfo}</span>
                  </div>
                )}

                <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4">
                  <strong className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    ! CATATAN TERAKHIR DOSEN PA:
                  </strong>
                  <p className="line-clamp-2 italic leading-relaxed text-slate-600">"{student.note}"</p>
                </div>
              </div>

              <button 
                type="button"
                onClick={() => onSelectMahasiswa()}
                className="w-full py-2 px-3 rounded-xl border border-slate-200 hover:border-[#8b1818] hover:bg-red-50/50 text-[#8b1818] text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Buka Detail & Jalur Kelulusan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination & Meta Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 text-xs text-slate-400">
          <p>Menampilkan 6 dari 18 mahasiswa bimbingan • Terakhir diperbarui: Hari ini, 09:30 WIB</p>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 cursor-pointer">‹</button>
            <button className="px-2.5 py-1 rounded-lg bg-[#8b1818] text-white font-bold cursor-pointer">1</button>
            <button className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer">2</button>
            <button className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer">3</button>
            <button className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 cursor-pointer">›</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center text-xs text-slate-400">
        <p>KawanKRS • Sistem Informasi Bimbingan Akademik & Rencana Studi Mahasiswa</p>
        <div className="flex gap-4">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-600">Panduan Dosen PA</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-600">Pusat Bantuan Akademik</a>
          <span>© 2025 Fasilkom UI</span>
        </div>
      </footer>
    </div>
  );
};
