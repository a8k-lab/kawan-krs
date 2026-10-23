import { createFileRoute } from "@tanstack/react-router";

import { RegisterPage } from "../features/auth/pages/register-page";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Kawan KRS | Registrasi Akun" }] }),
  component: RegisterPage,
});
