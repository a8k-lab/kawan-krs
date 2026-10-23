import { Link, useLocation } from "@tanstack/react-router";
import {
  GraduationCap,
  LogIn,
  ShieldCheck,
  UserCheck,
  UserPlus,
} from "lucide-react";

const demoViews = [
  {
    role: "login",
    to: "/login",
    label: "Login",
    title: "Buka Halaman Login",
    icon: LogIn,
  },
  {
    role: "register",
    to: "/register",
    label: "Register",
    title: "Buka Halaman Register",
    icon: UserPlus,
  },
  {
    role: "mahasiswa",
    to: "/mahasiswa/rekomendasi",
    label: "Mahasiswa",
    title: "Buka Antarmuka Mahasiswa",
    icon: GraduationCap,
  },
  {
    role: "dosen",
    to: "/dosen/mahasiswa",
    label: "Dosen PA",
    title: "Buka Antarmuka Dosen PA",
    icon: UserCheck,
  },
  {
    role: "admin",
    to: "/admin",
    label: "Admin",
    title: "Buka Antarmuka Admin Akademik",
    icon: ShieldCheck,
  },
  {
    role: "superadmin",
    to: "/superadmin",
    label: "Super Admin",
    title: "Buka Antarmuka Super Admin",
    icon: ShieldCheck,
  },
] as const;

// Demo navigation only: these links intentionally do not authenticate a user.
export function RoleSwitcher() {
  const currentView = useLocation({
    select: (location) => location.pathname.split("/")[1],
  });

  return (
    <aside
      aria-label="Demo Role Switcher"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-1.5 rounded-full border border-slate-700/50 bg-slate-900/90 p-1.5 text-xs text-white shadow-2xl backdrop-blur-md"
    >
      <span className="hidden border-r border-slate-700 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase md:inline-block">
        Demo Mode
      </span>
      {demoViews.map(({ role, to, label, title, icon: Icon }) => (
        <Link
          key={role}
          to={to}
          activeOptions={{ exact: true }}
          className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold transition ${
            currentView === role
              ? "bg-[#8b1818] text-white shadow-sm"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
          title={title}
        >
          <Icon
            className={`h-3.5 w-3.5${role === "superadmin" ? " text-rose-400" : ""}`}
          />
          <span className="hidden sm:inline">{label}</span>
        </Link>
      ))}
    </aside>
  );
}
