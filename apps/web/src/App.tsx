import { useState, useEffect } from "react";

import { RoleSwitcher } from "./components/RoleSwitcher";
import { AdminDashboard } from "./views/AdminDashboard";
import { DosenDashboard } from "./views/DosenDashboard";
import { LoginPage } from "./views/LoginPage";
import { MahasiswaDashboard } from "./views/MahasiswaDashboard";
import { RegisterPage } from "./views/RegisterPage";
import { SuperAdminDashboard } from "./views/SuperAdminDashboard";

type ViewMode =
  | "login"
  | "register"
  | "mahasiswa"
  | "dosen"
  | "admin"
  | "superadmin";

export function App() {
  const [currentView, setCurrentView] = useState<ViewMode>("login");

  useEffect(() => {
    const titles: Record<ViewMode, string> = {
      login: "Kawan KRS | Masuk ke Akun",
      register: "Kawan KRS | Registrasi Akun",
      mahasiswa: "Kawan KRS | Dashboard Mahasiswa",
      dosen: "Kawan KRS | Portal Dosen Pembimbing PA",
      admin: "Kawan KRS | Dashboard Admin Akademik",
      superadmin: "Kawan KRS | Super Administrator Control",
    };
    document.title =
      titles[currentView] || "Kawan KRS | Sistem Perencanaan Studi";
  }, [currentView]);

  return (
    <div className="relative min-h-screen bg-[#f8fafc]">
      {/* Dynamic Views */}
      {currentView === "login" && <LoginPage onNavigate={setCurrentView} />}

      {currentView === "register" && (
        <RegisterPage onNavigate={setCurrentView} />
      )}

      {currentView === "mahasiswa" && (
        <MahasiswaDashboard
          onBackToDosen={() => setCurrentView("dosen")}
          onNavigate={setCurrentView}
        />
      )}

      {currentView === "dosen" && (
        <DosenDashboard onNavigate={setCurrentView} />
      )}

      {currentView === "admin" && (
        <AdminDashboard onNavigate={setCurrentView} />
      )}

      {currentView === "superadmin" && (
        <SuperAdminDashboard onNavigate={setCurrentView} />
      )}

      {/* Floating Demo Role Switcher for seamless testing */}
      <RoleSwitcher currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
}

export default App;
