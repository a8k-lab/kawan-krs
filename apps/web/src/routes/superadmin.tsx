import { createFileRoute } from "@tanstack/react-router";

import { SuperAdminLayout } from "../features/superadmin/super-admin-layout";

export const Route = createFileRoute("/superadmin")({
  component: SuperAdminLayout,
});
