import { createFileRoute } from "@tanstack/react-router";

import { PenggunaPage } from "../../features/admin/pages/pengguna-page";

export const Route = createFileRoute("/admin/pengguna")({
  head: () => ({ meta: [{ title: "Kawan KRS | Manajemen Pengguna" }] }),
  component: PenggunaPage,
});
