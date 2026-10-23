import { createFileRoute } from "@tanstack/react-router";

import { AuditPage } from "../../features/superadmin/pages/audit-page";

export const Route = createFileRoute("/superadmin/audit")({
  head: () => ({
    meta: [{ title: "Kawan KRS | Log Aktivitas Sistem & Audit Trail" }],
  }),
  component: AuditPage,
});
