import { createFileRoute } from "@tanstack/react-router";

import { MahasiswaDetailPage } from "../../../features/dosen/pages/mahasiswa-detail-page";

export const Route = createFileRoute("/dosen/mahasiswa/$mahasiswaId")({
  head: () => ({
    meta: [{ title: "Kawan KRS | Workspace PA - Detail Mahasiswa" }],
  }),
  component: MahasiswaDetailPage,
});
