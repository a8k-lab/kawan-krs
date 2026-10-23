import { createFileRoute } from "@tanstack/react-router";

import { MahasiswaListPage } from "../../../features/dosen/pages/mahasiswa-list-page";

export const Route = createFileRoute("/dosen/mahasiswa/")({
  head: () => ({
    meta: [{ title: "Kawan KRS | Portal Dosen Pembimbing Akademik" }],
  }),
  component: MahasiswaListPage,
});
