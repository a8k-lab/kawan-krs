import { createFileRoute } from "@tanstack/react-router";

import { BiayaPage } from "../../features/admin/pages/biaya-page";

export const Route = createFileRoute("/admin/biaya")({
  head: () => ({ meta: [{ title: "Kawan KRS | Biaya Semester & Tarif SKS" }] }),
  component: BiayaPage,
});
