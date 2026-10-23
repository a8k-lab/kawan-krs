import { createFileRoute } from "@tanstack/react-router";

import { MahasiswaLayout } from "../features/mahasiswa/mahasiswa-layout";

export const Route = createFileRoute("/mahasiswa")({
  component: MahasiswaLayout,
});
