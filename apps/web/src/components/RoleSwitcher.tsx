import {
  UserCheck,
  ShieldCheck,
  GraduationCap,
  LogIn,
  UserPlus,
} from "lucide-react";
import React from "react";

interface RoleSwitcherProps {
  currentView:
    | "login"
    | "register"
    | "mahasiswa"
    | "dosen"
    | "admin"
    | "superadmin";
  onNavigate: (
    view: "login" | "register" | "mahasiswa" | "dosen" | "admin" | "superadmin"
  ) => void;
}

export const RoleSwitcher: React.FC<RoleSwitcherProps> = ({
  currentView,
  onNavigate,
}) => {
  return (
    <aside
      aria-label="Demo Role Switcher"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-1.5 rounded-full border border-slate-700/50 bg-slate-900/90 p-1.5 text-xs text-white shadow-2xl backdrop-blur-md"
    >
      <span className="hidden border-r border-slate-700 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase md:inline-block">
        Demo Mode
      </span>

      <button
        type="button"
        onClick={() => onNavigate("login")}
        className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold transition ${
          currentView === "login"
            ? "bg-[#8b1818] text-white shadow-sm"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`}
        title="Buka Halaman Login"
      >
        <LogIn className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Login</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate("register")}
        className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold transition ${
          currentView === "register"
            ? "bg-[#8b1818] text-white shadow-sm"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`}
        title="Buka Halaman Register"
      >
        <UserPlus className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Register</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate("mahasiswa")}
        className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold transition ${
          currentView === "mahasiswa"
            ? "bg-[#8b1818] text-white shadow-sm"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`}
        title="Buka Antarmuka Mahasiswa"
      >
        <GraduationCap className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Mahasiswa</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate("dosen")}
        className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold transition ${
          currentView === "dosen"
            ? "bg-[#8b1818] text-white shadow-sm"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`}
        title="Buka Antarmuka Dosen PA"
      >
        <UserCheck className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Dosen PA</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate("admin")}
        className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold transition ${
          currentView === "admin"
            ? "bg-[#8b1818] text-white shadow-sm"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`}
        title="Buka Antarmuka Admin Akademik"
      >
        <ShieldCheck className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Admin</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate("superadmin")}
        className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold transition ${
          currentView === "superadmin"
            ? "bg-[#8b1818] text-white shadow-sm"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`}
        title="Buka Antarmuka Super Admin"
      >
        <ShieldCheck className="h-3.5 w-3.5 text-rose-400" />
        <span className="hidden sm:inline">Super Admin</span>
      </button>
    </aside>
  );
};
