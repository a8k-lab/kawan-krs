import { createFileRoute } from "@tanstack/react-router";

import { DashboardPage } from "../../features/admin/pages/dashboard-page";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Kawan KRS | Dashboard Admin Akademik" }] }),
  component: DashboardPage,
});
