import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";

import { NotFoundPage } from "../components/not-found-page";
import { RoleSwitcher } from "../components/role-switcher";

export const Route = createRootRoute({
  head: () => ({ meta: [{ title: "Kawan KRS | Sistem Perencanaan Studi" }] }),
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

function RootLayout() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc]">
      <HeadContent />
      <Outlet />
      <RoleSwitcher />
    </div>
  );
}
