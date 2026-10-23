import { createFileRoute } from "@tanstack/react-router";

import { LoginPage } from "../features/auth/pages/login-page";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Kawan KRS | Masuk ke Akun" }] }),
  component: LoginPage,
});
