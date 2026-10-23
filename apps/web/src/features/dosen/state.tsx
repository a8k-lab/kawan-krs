import { createContext, useContext } from "react";
import React, { useState } from "react";

export function useDosenFeatureState() {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedStatus, setSelectedStatus] = useState<
    "all" | "on-track" | "needs-help"
  >("all");

  const [selectedCohort, setSelectedCohort] = useState<string>("all");

  const [newNote, setNewNote] = useState("");

  const [openSemesterDetail, setOpenSemesterDetail] = useState<number | null>(
    6
  );

  const [notes, setNotes] = useState([
    {
      author: "Prof. Dr. Ir. Wisnu Jatmiko",
      date: "20 Sep 2024",
      text: "Bab 1 dan 2 proposal skripsi sudah baik. Pertajam rumusan masalah pada benchmark transformer model. Lanjutkan ke bimbingan metodologi minggu depan.",
      topic: "Skripsi / Tugas Akhir",
    },
    {
      author: "Prof. Dr. Ir. Wisnu Jatmiko",
      date: "12 Agu 2024",
      text: "Evaluasi KRS semester 7: Pengambilan 20 SKS disetujui, disarankan fokus penulisan naskah tugas akhir agar target lulus Juli 2025 tercapai tanpa kendala.",
      topic: "Rencana Studi",
    },
  ]);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotes([
      {
        author: "Prof. Dr. Ir. Wisnu Jatmiko",
        date: "Hari ini",
        text: newNote,
        topic: "Bimbingan PA",
      },
      ...notes,
    ]);
    setNewNote("");
    alert("Catatan bimbingan berhasil disimpan!");
  };

  const students = [
    {
      id: "1",
      name: "Nadya Salsabila",
      nim: "2106721094",
      prodi: "S1 Ilmu Komputer • Angkatan 2021",
      status: "On Track (Sem. 7)",
      statusType: "on-track",
      cohort: "2021",
      ipk: "3.78",
      sks: "124 /144",
      krsLoad: "21 SKS",
      progress: 86,
      progressText: "86% Selesai",
      coursesInfo: "6 Mata Kuliah (Termasuk Seminar Skripsi)",
      note: "Konsultasi draft proposal Skripsi bab 1-3 disetujui untuk maju seminar kolokium. Tetap kawal sitasi jurnal...",
    },
    {
      id: "2",
      name: "Dimas Farhan",
      nim: "2206834112",
      prodi: "S1 Sistem Informasi • Angkatan 2022",
      status: "Perlu Pendampingan",
      statusType: "needs-help",
      cohort: "2022",
      ipk: "2.84",
      sks: "76 /144",
      krsLoad: "18 SKS",
      progress: 52,
      progressText: "52% (Tertinggal 8 SKS)",
      warning: "5 Mata Kuliah (Mengulang Basis Data)",
      note: "Perlu bimbingan intensif manajemen waktu dan asistensi praktikum. Jadwal evaluasi UTS wajib lapor...",
    },
    {
      id: "3",
      name: "Clarissa Kusuma",
      nim: "2306912348",
      prodi: "S1 Ilmu Komputer • Angkatan 2023",
      status: "On Track (Sem. 3)",
      statusType: "on-track",
      cohort: "2023",
      ipk: "3.92",
      sks: "42 /144",
      krsLoad: "22 SKS",
      progress: 29,
      progressText: "29% Selesai",
      coursesInfo: "7 Mata Kuliah (Termasuk Algoritma)",
      note: "Pencapaian sangat memuaskan, didorong untuk mulai eksplorasi tim kompetisi Gemastik atau PKM semester depan.",
    },
    {
      id: "4",
      name: "Fajar Ardiansyah",
      nim: "2106755431",
      prodi: "S1 Ilmu Komputer • Angkatan 2021",
      status: "On Track (Sem. 7)",
      statusType: "on-track",
      cohort: "2021",
      ipk: "3.65",
      sks: "126 /144",
      krsLoad: "18 SKS",
      progress: 87,
      progressText: "87% Selesai",
      coursesInfo: "5 Mata Kuliah (Termasuk Semhas Skripsi)",
      note: "Dataset penelitian Deep Learning telah ditinjau dan disetujui. Lanjutkan bab implementasi dan uji akurasi...",
    },
    {
      id: "5",
      name: "Alya Wahyudi",
      nim: "2406123456",
      prodi: "S1 Sistem Informasi • Angkatan 2024",
      status: "Mahasiswa Baru",
      statusType: "on-track",
      cohort: "2024",
      ipk: "-",
      sks: "0 /144",
      krsLoad: "20 SKS",
      progress: 5,
      progressText: "Semester 1",
      coursesInfo: "6 Mata Kuliah Paket Kurikulum 2024",
      note: "Orientasi akademik terlaksana baik. Mahasiswa memahami aturan kehadiran 80% dan etika komunikasi.",
    },
    {
      id: "6",
      name: "Budi Santoso",
      nim: "2206432198",
      prodi: "S1 Ilmu Komputer • Angkatan 2022",
      status: "On Track (Sem. 5)",
      statusType: "on-track",
      cohort: "2022",
      ipk: "3.51",
      sks: "88 /144",
      krsLoad: "20 SKS",
      progress: 61,
      progressText: "61% Selesai",
      coursesInfo: "6 Mata Kuliah (Termasuk Rekayasa PL)",
      note: "KRS semester 5 telah disetujui penuh. Diingatkan untuk membagi waktu dengan kegiatan kepengurusan BEM.",
    },
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.nim.includes(searchQuery);
    const matchesStatus =
      selectedStatus === "all" ||
      (selectedStatus === "on-track" && student.statusType === "on-track") ||
      (selectedStatus === "needs-help" && student.statusType === "needs-help");
    const matchesCohort =
      selectedCohort === "all" || student.cohort === selectedCohort;
    return matchesSearch && matchesStatus && matchesCohort;
  });

  const semesters = [
    {
      sem: 6,
      title: "Semester 6 • Genap 2023/2024",
      sks: "20 SKS • 6 Mata Kuliah Lulus",
      ips: "3.80",
    },
    {
      sem: 5,
      title: "Semester 5 • Ganjil 2023/2024",
      sks: "20 SKS • 6 Mata Kuliah Lulus",
      ips: "3.85",
    },
    {
      sem: 4,
      title: "Semester 4 • Genap 2022/2023",
      sks: "22 SKS • 6 Mata Kuliah Lulus",
      ips: "3.90",
    },
    {
      sem: 3,
      title: "Semester 3 • Ganjil 2022/2023",
      sks: "21 SKS • 6 Mata Kuliah Lulus",
      ips: "3.75",
    },
    {
      sem: 2,
      title: "Semester 2 • Genap 2021/2022",
      sks: "21 SKS • 6 Mata Kuliah Lulus",
      ips: "3.80",
    },
    {
      sem: 1,
      title: "Semester 1 • Ganjil 2021/2022",
      sks: "20 SKS • 6 Mata Kuliah Lulus",
      ips: "3.85",
    },
  ];
  return {
    searchQuery,
    setSearchQuery,
    selectedStatus,
    setSelectedStatus,
    selectedCohort,
    setSelectedCohort,
    newNote,
    setNewNote,
    openSemesterDetail,
    setOpenSemesterDetail,
    notes,
    setNotes,
    handleAddNote,
    students,
    filteredStudents,
    semesters,
  };
}

export const DosenStateContext = createContext<ReturnType<
  typeof useDosenFeatureState
> | null>(null);

export function useDosenState() {
  const state = useContext(DosenStateContext);
  if (!state) throw new Error("useDosenState must be used within DosenLayout");
  return state;
}
