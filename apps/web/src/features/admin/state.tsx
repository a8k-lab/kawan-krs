import { Bot, Key } from "lucide-react";
import { createContext, useContext } from "react";
import { useState } from "react";

export function useAdminFeatureState() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const [searchMatkul, setSearchMatkul] = useState("");

  const [searchBiaya, setSearchBiaya] = useState("");

  const [searchUsers, setSearchUsers] = useState("");

  const [biayaList, setBiayaList] = useState([
    {
      semester: "Semester 1",
      semColor: "bg-rose-50 text-rose-700 border-rose-200",
      code: "TRF-2024-01",
      title: "Skema Reguler Sarjana Teknik & Fasilkom",
      desc: "Termasuk laboratorium terpadu dan lisensi komputasi cloud",
      cohort: "2024",
      academicYear: "2024/2025",
      rate: "Rp 275.000",
    },
    {
      semester: "Semester 2",
      semColor: "bg-blue-50 text-blue-700 border-blue-200",
      code: "TRF-2024-02",
      title: "Skema Reguler Sarjana Sosial & Humaniora",
      desc: "Berlaku untuk mahasiswa jalur seleksi nasional SNBP/SNBT",
      cohort: "2024",
      academicYear: "2024/2025",
      rate: "Rp 250.000",
    },
    {
      semester: "Semester 3",
      semColor: "bg-rose-50 text-rose-700 border-rose-200",
      code: "TRF-2023-01",
      title: "Tarif Percepatan & Semester Antara (Remedial)",
      desc: "Batas maksimal pengambilan 9 SKS per periode pendek",
      cohort: "2023",
      academicYear: "2023/2024",
      rate: "Rp 300.000",
    },
    {
      semester: "Semester 4",
      semColor: "bg-blue-50 text-blue-700 border-blue-200",
      code: "TRF-2023-02",
      title: "Skema Standar Sarjana Angkatan 2023",
      desc: "Biaya operasional perkuliahan tatap muka & blended learning",
      cohort: "2023",
      academicYear: "2023/2024",
      rate: "Rp 260.000",
    },
    {
      semester: "Semester 5",
      semColor: "bg-rose-50 text-rose-700 border-rose-200",
      code: "TRF-2022-01",
      title: "Skema Afirmasi & Kemitraan Khusus",
      desc: "Subsidi silang universitas untuk wilayah 3T dan kemitraan PEMDA",
      cohort: "2022",
      academicYear: "2022/2023",
      rate: "Rp 220.000",
    },
    {
      semester: "Semester 6",
      semColor: "bg-blue-50 text-blue-700 border-blue-200",
      code: "TRF-2021-02",
      title: "Tarif Tingkat Akhir & Ujian Komprehensif",
      desc: "Khusus penyelesaian skripsi, seminar hasil, dan yudisium",
      cohort: "2021",
      academicYear: "2023/2024",
      rate: "Rp 200.000",
    },
  ]);

  const [matkulList, setMatkulList] = useState([
    {
      code: "CS101",
      name: "Pemrograman Berorientasi Objek",
      type: "3 SKS • Teori & Praktikum",
      desc: "Konsep fundamental OOP...",
      semester: "Semester 1",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "IF210",
      name: "Struktur Data & Algoritma",
      type: "4 SKS • Teori & Praktikum",
      desc: "Struktur data linier dan non-linier,...",
      semester: "Semester 3",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "SI302",
      name: "Basis Data Lanjutan",
      type: "3 SKS • Teori & Praktikum",
      desc: "Pemodelan transaksi relasional",
      semester: "Semester 5",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "DS401",
      name: "Kecerdasan Buatan",
      type: "3 SKS • Teori",
      desc: "Prinsip agen cerdas, heuristic...",
      semester: "Semester 5",
      status: "Pilihan",
      statusType: "elective",
    },
    {
      code: "IF204",
      name: "Rekayasa Perangkat Lunak",
      type: "3 SKS • Teori & Project",
      desc: "Siklus hidup SDLC, metodologi Agile...",
      semester: "Semester 4",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "TI105",
      name: "Desain Antarmuka Pengguna",
      type: "3 SKS • Praktikum",
      desc: "Prinsip Human-Computer...",
      semester: "Semester 3",
      status: "Pilihan",
      statusType: "elective",
    },
    {
      code: "CS202",
      name: "Jaringan Komputer",
      type: "3 SKS • Teori & Praktikum",
      desc: "Lapisan OSI dan TCP/IP model,...",
      semester: "Semester 4",
      status: "Aktif",
      statusType: "active",
    },
    {
      code: "IF305",
      name: "Sistem Operasi",
      type: "3 SKS • Teori & Praktikum",
      desc: "Manajemen proses, threads...",
      semester: "Semester 3",
      status: "Aktif",
      statusType: "active",
    },
  ]);

  const [usersList, setUsersList] = useState([
    {
      name: "Nadya Salsabila",
      sub: "Mahasiswa Aktif",
      email: "nadya.salsabila@mhs.univ.ac.id",
      faculty: "Fakultas Ilmu Komputer",
      cohort: "2024",
      isLecturer: false,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Dimas Farhan",
      sub: "Mahasiswa Aktif",
      email: "dimas.farhan@mhs.univ.ac.id",
      faculty: "Fakultas Teknik",
      cohort: "2023",
      isLecturer: false,
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Clarissa Kusuma",
      sub: "Mahasiswa Aktif",
      email: "clarissa.kusuma@mhs.univ.ac.id",
      faculty: "Fakultas Ekonomi & Bisnis",
      cohort: "2022",
      isLecturer: false,
      initials: "CK",
      avatarBg: "bg-slate-200 text-slate-700",
    },
    {
      name: "Prof. Ahmad Pratama",
      sub: "Dosen Pembimbing Akademik",
      email: "ahmad.pratama@univ.ac.id",
      faculty: "Fakultas Ilmu Komputer",
      cohort: "DOSEN",
      isLecturer: true,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Budi Santoso",
      sub: "Mahasiswa Aktif",
      email: "budi.santoso@mhs.univ.ac.id",
      faculty: "Fakultas Kedokteran",
      cohort: "2021",
      isLecturer: false,
      initials: "BS",
      avatarBg: "bg-slate-200 text-slate-700",
    },
    {
      name: "Rina Marlina",
      sub: "Dosen Pengajar",
      email: "rina.marlina@univ.ac.id",
      faculty: "Fakultas Ekonomi & Bisnis",
      cohort: "DOSEN",
      isLecturer: true,
      initials: "RM",
      avatarBg: "bg-rose-100 text-rose-800",
    },
    {
      name: "Fajar Ardiansyah",
      sub: "Mahasiswa Aktif",
      email: "fajar.ardiansyah@mhs.univ.ac.id",
      faculty: "Fakultas Teknik",
      cohort: "2023",
      isLecturer: false,
      initials: "FA",
      avatarBg: "bg-slate-200 text-slate-700",
    },
    {
      name: "Alya Wahyudi",
      sub: "Mahasiswa Aktif",
      email: "alya.wahyudi@mhs.univ.ac.id",
      faculty: "Fakultas Kedokteran",
      cohort: "2024",
      isLecturer: false,
      initials: "AW",
      avatarBg: "bg-slate-200 text-slate-700",
    },
  ]);

  const logs = [
    {
      time: "Senin, 23 Sep 2024",
      clock: "10:42 WIB",
      user: "Dr. Sarah Jenkins",
      role: "Super Administrator",
      initials: "SJ",
      avatarBg: "bg-red-800 text-white",
      actionTitle: "Modified KRS Quota for CS301",
      actionDesc:
        "Kapasitas ditambah dari 120 ke 160 kursi pada Fakultas Ilmu Komputer",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024",
      clock: "10:39 WIB",
      user: "Budi Santoso",
      role: "Database Engineer",
      initials: "BS",
      avatarBg: "bg-slate-700 text-white",
      actionTitle: "Force Sync Faculty Server DB",
      actionDesc:
        "Latensi tinggi terdeteksi saat replikasi data pada PostgreSQL Primary Cluster",
      status: "Warning",
      statusType: "warning",
    },
    {
      time: "Senin, 23 Sep 2024",
      clock: "10:35 WIB",
      user: "Rina Marlina",
      role: "Staf BAA Pusat",
      initials: "RM",
      avatarBg: "bg-rose-900 text-white",
      actionTitle: "Bulk Approved Student Overload Requests",
      actionDesc:
        "Validasi 48 pengajuan SKS berlebih (>24 SKS) Fakultas Ekonomi & Bisnis",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024",
      clock: "10:31 WIB",
      user: "Security Bot Shield",
      role: "Automated Daemon",
      initials: "BOT",
      icon: <Bot className="h-4 w-4 text-amber-700" />,
      avatarBg: "bg-amber-100 text-amber-800",
      actionTitle: "Rate Limit Triggered",
      actionDesc:
        "Blokir 42 request/detik dari sumber otomatis bot pada Auth Gateway / KRS EndPoint",
      status: "Warning",
      statusType: "warning",
    },
    {
      time: "Senin, 23 Sep 2024",
      clock: "10:14 WIB",
      user: "Security Vault Daemon",
      role: "System Security Service",
      initials: "SEC",
      icon: <Key className="h-4 w-4 text-slate-700" />,
      avatarBg: "bg-slate-200 text-slate-800",
      actionTitle: "API Key Revocation",
      actionDesc:
        "Rotasi berkala token otentikasi konektor mobile dosen pada OAuth Server Core",
      status: "Success",
      statusType: "success",
    },
  ];
  return {
    selectedYear,
    setSelectedYear,
    searchMatkul,
    setSearchMatkul,
    searchBiaya,
    setSearchBiaya,
    searchUsers,
    setSearchUsers,
    biayaList,
    setBiayaList,
    matkulList,
    setMatkulList,
    usersList,
    setUsersList,
    logs,
  };
}

export const AdminStateContext = createContext<ReturnType<
  typeof useAdminFeatureState
> | null>(null);

export function useAdminState() {
  const state = useContext(AdminStateContext);
  if (!state) throw new Error("useAdminState must be used within AdminLayout");
  return state;
}
