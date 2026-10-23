import { Outlet, Link, useLocation } from "@tanstack/react-router";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  CreditCard,
  Users,
  HelpCircle,
  Bell,
  LogOut,
} from "lucide-react";

import { AdminStateContext, useAdminFeatureState } from "./state";

export function AdminLayout() {
  const state = useAdminFeatureState();
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <AdminStateContext value={state}>
      <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans text-slate-800 lg:flex-row">
        {/* ================= LEFT MAROON SIDEBAR ================= */}
        <aside className="flex w-full shrink-0 flex-col justify-between bg-[#7a1212] text-white shadow-xl lg:w-64">
          <div>
            {/* Brand Logo Header */}
            <div className="flex items-center gap-3 border-b border-white/10 p-6">
              <div className="rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-base font-bold tracking-tight">KawanKRS</h1>
                <p className="text-[10px] font-semibold tracking-wider text-red-200 uppercase">
                  Akademik Portal
                </p>
              </div>
            </div>

            {/* Navigation Items (4 Menus) */}
            <nav className="space-y-1.5 p-4">
              <Link
                to="/admin"
                activeOptions={{ exact: true }}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition ${
                  pathname === "/admin"
                    ? "bg-white text-[#7a1212] shadow-md"
                    : "text-red-100 hover:bg-white/10"
                }`}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/admin/mata-kuliah"
                activeOptions={{ exact: true }}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition ${
                  pathname === "/admin/mata-kuliah"
                    ? "bg-white text-[#7a1212] shadow-md"
                    : "text-red-100 hover:bg-white/10"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Mata Kuliah</span>
              </Link>

              <Link
                to="/admin/biaya"
                activeOptions={{ exact: true }}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition ${
                  pathname === "/admin/biaya"
                    ? "bg-white text-[#7a1212] shadow-md"
                    : "text-red-100 hover:bg-white/10"
                }`}
              >
                <CreditCard className="h-4 w-4" />
                <span>Biaya Semester</span>
              </Link>

              <Link
                to="/admin/pengguna"
                activeOptions={{ exact: true }}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition ${
                  pathname === "/admin/pengguna"
                    ? "bg-white text-[#7a1212] shadow-md"
                    : "text-red-100 hover:bg-white/10"
                }`}
              >
                <Users className="h-4 w-4" />
                <span>User Management</span>
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
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-500">
                Dashboard Akademik
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>{" "}
                Sistem Normal
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative cursor-pointer rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#7a1212]"></span>
              </button>

              <div className="flex items-center gap-3 border-l border-slate-200 pl-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7a1212] text-xs font-bold text-white">
                  RM
                </div>
                <div className="hidden text-left text-xs leading-tight sm:block">
                  <p className="font-bold text-slate-900">
                    Rina Marlina, S.Sos.
                  </p>
                  <p className="text-[10px] text-slate-500">Admin Akademik</p>
                </div>
              </div>
            </div>
          </header>

          <Outlet />
        </div>
      </div>
    </AdminStateContext>
  );
}
