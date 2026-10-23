import { createFileRoute } from "@tanstack/react-router";

import { DashboardPage } from "../../features/superadmin/pages/dashboard-page";

export const Route = createFileRoute("/superadmin/")({
  head: () => ({ meta: [{ title: "Kawan KRS | Dashboard Super Admin" }] }),
  component: DashboardPage,
});
