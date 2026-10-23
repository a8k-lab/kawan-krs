import { Outlet, Link, useLocation } from "@tanstack/react-router";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  FileText,
  Bell,
  LogOut,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

import { SuperAdminStateContext, useSuperAdminFeatureState } from "./state";

export function SuperAdminLayout() {
  const state = useSuperAdminFeatureState();
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <SuperAdminStateContext value={state}>
      <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans text-slate-800 lg:flex-row">
        {/* ================= LEFT MAROON SIDEBAR ================= */}
        <aside className="flex w-full shrink-0 flex-col justify-between bg-[#8b1818] text-white shadow-xl lg:w-64">
          <div>
            {/* Brand Logo Header */}
            <div className="flex items-center gap-3 border-b border-white/10 p-6">
              <div className="rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-base font-bold tracking-tight">KawanKRS</h1>
                <p className="text-[10px] font-semibold tracking-wider text-red-200 uppercase">
                  Admin Portal
                </p>
              </div>
            </div>

            {/* Navigation Items (3 Menus) */}
            <nav className="space-y-1.5 p-4">
              <Link
                to="/superadmin"
                activeOptions={{ exact: true }}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-semibold transition ${
                  pathname === "/superadmin"
                    ? "bg-white/15 text-white shadow-xs backdrop-blur-xs"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/superadmin/pengguna"
                activeOptions={{ exact: true }}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-semibold transition ${
                  pathname === "/superadmin/pengguna"
                    ? "bg-white/15 text-white shadow-xs backdrop-blur-xs"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Users className="h-4 w-4" />
                <span>User Management</span>
              </Link>

              <Link
                to="/superadmin/audit"
                activeOptions={{ exact: true }}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-semibold transition ${
                  pathname === "/superadmin/audit"
                    ? "bg-white/15 text-white shadow-xs backdrop-blur-xs"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>Audit Logs</span>
              </Link>
            </nav>
          </div>

          {/* Bottom Sidebar Widget */}
          <div className="m-4 space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs">
            <div>
              <span className="block text-[10px] font-bold tracking-wider text-red-200/70 uppercase">
                Tahun Akademik
              </span>
              <div className="mt-0.5 flex items-center gap-1.5 font-bold text-white">
                <span>2024/2025 Ganjil</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] text-emerald-300">Aktif</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-1.5 text-[11px] text-red-200 transition hover:text-white"
              >
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Pusat Bantuan Akademik</span>
              </a>

              <Link
                to="/login"
                activeOptions={{ exact: true }}
                className="flex cursor-pointer items-center gap-1 text-[11px] text-red-200 transition hover:text-white"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Keluar</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* ================= RIGHT MAIN CONTENT ================= */}
        <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
          {/* Top Header */}
          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div>
              <h2 className="text-sm font-bold text-slate-800">
                System Infrastructure & Logs
              </h2>
              <p className="text-[11px] text-slate-400">
                Super Administrator Control Overview
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative cursor-pointer rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#7a1212]"></span>
              </button>

              <div className="flex items-center gap-3 border-l border-slate-200 pl-3">
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-slate-900 text-xs font-bold text-white">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                    alt="Dr. Sarah Jenkins"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span>SJ</span>
                </div>
                <div className="hidden text-left text-xs leading-tight sm:block">
                  <p className="font-bold text-slate-900">Dr. Sarah Jenkins</p>
                  <p className="text-[10px] text-slate-500">
                    Super Administrator
                  </p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>
          </header>

          <Outlet />
        </div>
      </div>
    </SuperAdminStateContext>
  );
}
