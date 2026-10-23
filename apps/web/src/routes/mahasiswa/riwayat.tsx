import { createFileRoute } from "@tanstack/react-router";

import { RiwayatPage } from "../../features/mahasiswa/pages/riwayat-page";

export const Route = createFileRoute("/mahasiswa/riwayat")({
  head: () => ({
    meta: [{ title: "Kawan KRS | Riwayat Studi & Transkrip Mahasiswa" }],
  }),
  component: RiwayatPage,
});
