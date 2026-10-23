import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/mahasiswa/")({
  beforeLoad: () => {
    throw redirect({ to: "/mahasiswa/rekomendasi", replace: true });
  },
});
