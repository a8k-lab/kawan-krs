import { Bot, Key } from "lucide-react";
import { createContext, useContext } from "react";
import { useState } from "react";

export function useSuperAdminFeatureState() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const [searchUsers, setSearchUsers] = useState("");

  const [searchLogs, setSearchLogs] = useState("");

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
      avatarBg: "bg-rose-100 text-rose-600",
    },
    {
      name: "Prof. Ahmad Pratama",
      sub: "Dosen Pembimbing Akademik",
      email: "ahmad.pratama@univ.ac.id",
      faculty: "Fakultas Ilmu Komputer",
      cohort: "Dosen",
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
      avatarBg: "bg-blue-100 text-blue-700",
    },
    {
      name: "Rina Marlina",
      sub: "Dosen Pengajar",
      email: "rina.marlina@univ.ac.id",
      faculty: "Fakultas Ekonomi & Bisnis",
      cohort: "Dosen",
      isLecturer: true,
      initials: "RM",
      avatarBg: "bg-rose-100 text-rose-600",
    },
    {
      name: "Fajar Ardiansyah",
      sub: "Mahasiswa Aktif",
      email: "fajar.ardiansyah@mhs.univ.ac.id",
      faculty: "Fakultas Teknik",
      cohort: "2023",
      isLecturer: false,
      initials: "FA",
      avatarBg: "bg-blue-100 text-blue-700",
    },
    {
      name: "Alya Wahyudi",
      sub: "Mahasiswa Aktif",
      email: "alya.wahyudi@mhs.univ.ac.id",
      faculty: "Fakultas Kedokteran",
      cohort: "2024",
      isLecturer: false,
      initials: "AW",
      avatarBg: "bg-orange-100 text-orange-600",
    },
  ]);

  const auditLogs = [
    {
      time: "Senin, 23 Sep 2024 - 10:42 WIB",
      user: "Dr. Sarah Jenkins",
      role: "Super Administrator",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
      actionTitle: "Modified KRS Quota for CS301",
      actionDesc:
        "Kapasitas ditambah dari 120 ke 160 kursi pada Fakultas Ilmu Komputer",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024 - 10:39 WIB",
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
      time: "Senin, 23 Sep 2024 - 10:35 WIB",
      user: "Rina Marlina",
      role: "Staf BAA Pusat",
      initials: "RM",
      avatarBg: "bg-[#8b1818] text-white",
      actionTitle: "Bulk Approved Student Overload Requests",
      actionDesc:
        "Validasi 48 pengajuan SKS berlebih (>24 SKS) Fakultas Ekonomi & Bisnis",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024 - 10:31 WIB",
      user: "Security Bot Shield",
      role: "Automated Daemon",
      initials: "BOT",
      icon: <Bot className="h-4 w-4 text-rose-700" />,
      avatarBg: "bg-rose-100 text-rose-800",
      actionTitle: "Rate Limit Triggered",
      actionDesc:
        "Blokir 42 request/detik dari sumber otomatis bot pada Auth Gateway / KRS Endpoint",
      status: "Failed",
      statusType: "failed",
    },
    {
      time: "Senin, 23 Sep 2024 - 10:14 WIB",
      user: "Security Vault Daemon",
      role: "System Security Service",
      initials: "SEC",
      icon: <Key className="h-4 w-4 text-rose-700" />,
      avatarBg: "bg-rose-100 text-rose-800",
      actionTitle: "API Key Revocation",
      actionDesc:
        "Rotasi berkala token otentikasi konektor mobile dosen pada OAuth Server Core",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024 - 09:58 WIB",
      user: "Hendra Wijaya",
      role: "Admin Akademik",
      initials: "HW",
      avatarBg: "bg-blue-100 text-blue-800",
      actionTitle: "User Role Escalation",
      actionDesc:
        "Pemberian hak akses Admin Akademik kepada staf BAA Hendra Wijaya",
      status: "Warning",
      statusType: "warning",
    },
    {
      time: "Senin, 23 Sep 2024 - 09:22 WIB",
      user: "Prof. Ahmad Pratama",
      role: "Dosen PA",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      actionTitle: "Database Backup Snapshot Created",
      actionDesc:
        "Pembuatan snapshot harian terenkripsi selesai (Ukuran: 4.8 GB)",
      status: "Success",
      statusType: "success",
    },
    {
      time: "Senin, 23 Sep 2024 - 08:45 WIB",
      user: "Nadya Salsabila",
      role: "Mahasiswa",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      actionTitle: "Course Schedule Publishing",
      actionDesc:
        "Publikasi jadwal kuliah Semester Ganjil 2024/2025 untuk seluruh program studi",
      status: "Success",
      statusType: "success",
    },
  ];
  return {
    selectedYear,
    setSelectedYear,
    searchUsers,
    setSearchUsers,
    searchLogs,
    setSearchLogs,
    usersList,
    setUsersList,
    auditLogs,
  };
}

export const SuperAdminStateContext = createContext<ReturnType<
  typeof useSuperAdminFeatureState
> | null>(null);

export function useSuperAdminState() {
  const state = useContext(SuperAdminStateContext);
  if (!state)
    throw new Error("useSuperAdminState must be used within SuperAdminLayout");
  return state;
}
