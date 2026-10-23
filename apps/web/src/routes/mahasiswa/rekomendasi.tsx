import { createFileRoute } from "@tanstack/react-router";

import { RekomendasiPage } from "../../features/mahasiswa/pages/rekomendasi-page";

export const Route = createFileRoute("/mahasiswa/rekomendasi")({
  head: () => ({
    meta: [{ title: "Kawan KRS | Rekomendasi Paket KRS Cerdas" }],
  }),
  component: RekomendasiPage,
});
