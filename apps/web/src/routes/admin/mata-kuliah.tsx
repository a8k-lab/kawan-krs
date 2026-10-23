import { createFileRoute } from "@tanstack/react-router";

import { MataKuliahPage } from "../../features/admin/pages/mata-kuliah-page";

export const Route = createFileRoute("/admin/mata-kuliah")({
  head: () => ({ meta: [{ title: "Kawan KRS | Master Mata Kuliah" }] }),
  component: MataKuliahPage,
});
