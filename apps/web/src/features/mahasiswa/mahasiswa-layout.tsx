import { Outlet, Link, useLocation } from "@tanstack/react-router";
import { GraduationCap, Bell, Clock, LogOut } from "lucide-react";

import { MahasiswaStateContext, useMahasiswaFeatureState } from "./state";

export function MahasiswaLayout() {
  const state = useMahasiswaFeatureState();
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <MahasiswaStateContext value={state}>
      <div className="min-h-screen bg-[#f8fafc] pb-16 font-sans text-slate-800">
        {/* Top Header Navbar */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-xs">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo & Portal Badge */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8b1818] text-white shadow-xs">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold tracking-tight text-slate-900">
                    KawanKRS
                  </span>
                  <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-[#8b1818]">
                    MAHASISWA PORTAL
                  </span>
                </div>
              </div>
            </div>

            {/* Right Header Navigation & Profile */}
            <div className="flex items-center gap-3">
              {/* Tab Navigation Pill Switcher */}
              <div className="flex items-center rounded-xl bg-slate-100 p-1 text-xs font-semibold">
                <Link
                  to="/mahasiswa/rekomendasi"
                  activeOptions={{ exact: true }}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                    pathname === "/mahasiswa/rekomendasi"
                      ? "bg-[#8b1818] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>⚡ Rekomendasi Paket KRS</span>
                </Link>
                <Link
                  to="/mahasiswa/riwayat"
                  activeOptions={{ exact: true }}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                    pathname === "/mahasiswa/riwayat"
                      ? "bg-[#8b1818] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>📖 Riwayat Studi</span>
                </Link>
              </div>

              <div className="hidden items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 md:flex">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                2024/2025 Ganjil
              </div>

              <button className="relative cursor-pointer rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#8b1818]"></span>
              </button>

              {/* Profile Nadya */}
              <div className="flex items-center gap-2.5 border-l border-slate-200 pl-3">
                <div className="relative">
                  <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-[#8b1818] to-rose-400 text-xs font-bold text-white shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                      alt="Nadya"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <span>NS</span>
                  </div>
                  <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500"></span>
                </div>
                <div className="hidden text-left text-xs leading-tight lg:block">
                  <p className="font-bold text-slate-900">Nadya Salsabila</p>
                  <p className="text-[10px] text-slate-400">NIM 2106721094</p>
                </div>

                <Link
                  to="/login"
                  activeOptions={{ exact: true }}
                  className="ml-1 cursor-pointer rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-700"
                  title="Keluar / Logout"
                >
                  <LogOut className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Outlet />

        {/* Persistent Footer */}
        <footer className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between border-t border-slate-200 px-4 pt-6 text-xs text-slate-400 sm:px-6 lg:px-8">
          <p>
            KawanKRS • Sistem Perencanaan Studi Cerdas & Rekomendasi KRS
            Mahasiswa • Fakultas Ilmu Komputer UI
          </p>
          <span className="flex items-center gap-1.5 font-medium text-emerald-600">
            STATUS SERVER: AKTIF{" "}
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          </span>
        </footer>
      </div>
    </MahasiswaStateContext>
  );
}
