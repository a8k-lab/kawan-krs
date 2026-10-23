import { createFileRoute } from "@tanstack/react-router";

import { PenggunaPage } from "../../features/superadmin/pages/pengguna-page";

export const Route = createFileRoute("/superadmin/pengguna")({
  head: () => ({
    meta: [{ title: "Kawan KRS | Manajemen Pengguna (Super Admin)" }],
  }),
  component: PenggunaPage,
});
