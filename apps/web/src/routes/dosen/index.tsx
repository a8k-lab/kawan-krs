import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dosen/")({
  beforeLoad: () => {
    throw redirect({ to: "/dosen/mahasiswa", replace: true });
  },
});
