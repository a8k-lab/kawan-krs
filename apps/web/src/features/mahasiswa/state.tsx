import { createContext, useContext } from "react";
import React, { useState } from "react";

export function useMahasiswaFeatureState() {
  const [targetSks, setTargetSks] = useState(20);

  const [budget, setBudget] = useState("7.500.000");

  const [selectedSemester, setSelectedSemester] = useState(
    "Semester 8 (Genap 2024/2025)"
  );

  const [selectedPlan, setSelectedPlan] = useState<"A" | "B" | "C">("A");

  const [openSemester, setOpenSemester] = useState<number | null>(6);

  const [inputMatkul, setInputMatkul] = useState("");

  const [inputSks, setInputSks] = useState("3");

  const [inputNilai, setInputNilai] = useState("A");

  const [transkripSem6, setTranskripSem6] = useState([
    {
      code: "CS310",
      name: "Pemrograman Web",
      sks: 3,
      grade: "A",
      weight: "4.00",
    },
    {
      code: "CS312",
      name: "Rekayasa Perangkat Lunak",
      sks: 4,
      grade: "A",
      weight: "4.00",
    },
    {
      code: "CS315",
      name: "Basis Data Lanjut",
      sks: 3,
      grade: "A-",
      weight: "3.70",
    },
    {
      code: "CS318",
      name: "Sistem Terdistribusi",
      sks: 3,
      grade: "B+",
      weight: "3.30",
    },
    {
      code: "CS325",
      name: "Keamanan Informasi & Jaringan",
      sks: 3,
      grade: "A",
      weight: "4.00",
    },
    {
      code: "CS330",
      name: "Etika Profesi & Hukum Siber",
      sks: 4,
      grade: "A",
      weight: "4.00",
    },
  ]);

  const handleAddNilai = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMatkul.trim()) return;
    setTranskripSem6([
      ...transkripSem6,
      {
        code: "CS" + Math.floor(300 + Math.random() * 90),
        name: inputMatkul,
        sks: parseInt(inputSks),
        grade: inputNilai,
        weight:
          inputNilai === "A" ? "4.00" : inputNilai === "A-" ? "3.70" : "3.30",
      },
    ]);
    setInputMatkul("");
    alert("Nilai mata kuliah berhasil disimpan ke simulasi transkrip!");
  };

  const handleDeleteNilai = (index: number) => {
    setTranskripSem6(transkripSem6.filter((_, idx) => idx !== index));
  };
  return {
    targetSks,
    setTargetSks,
    budget,
    setBudget,
    selectedSemester,
    setSelectedSemester,
    selectedPlan,
    setSelectedPlan,
    openSemester,
    setOpenSemester,
    inputMatkul,
    setInputMatkul,
    inputSks,
    setInputSks,
    inputNilai,
    setInputNilai,
    transkripSem6,
    setTranskripSem6,
    handleAddNilai,
    handleDeleteNilai,
  };
}

export const MahasiswaStateContext = createContext<ReturnType<
  typeof useMahasiswaFeatureState
> | null>(null);

export function useMahasiswaState() {
  const state = useContext(MahasiswaStateContext);
  if (!state)
    throw new Error("useMahasiswaState must be used within MahasiswaLayout");
  return state;
}
