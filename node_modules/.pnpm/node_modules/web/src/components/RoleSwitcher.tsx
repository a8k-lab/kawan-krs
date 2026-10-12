import React from 'react';
import { UserCheck, ShieldCheck, GraduationCap, LogIn, UserPlus } from 'lucide-react';

interface RoleSwitcherProps {
  currentView: 'login' | 'register' | 'mahasiswa' | 'dosen' | 'admin' | 'superadmin';
  onNavigate: (view: 'login' | 'register' | 'mahasiswa' | 'dosen' | 'admin' | 'superadmin') => void;
}

export const RoleSwitcher: React.FC<RoleSwitcherProps> = ({ currentView, onNavigate }) => {
  return (
    <aside aria-label="Demo Role Switcher" className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 p-1.5 bg-slate-900/90 text-white rounded-full shadow-2xl backdrop-blur-md border border-slate-700/50 text-xs">
      <span className="hidden md:inline-block px-3 py-1 font-bold text-[10px] text-slate-400 uppercase tracking-widest border-r border-slate-700">
        Demo Mode
      </span>

      <button
        type="button"
        onClick={() => onNavigate('login')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition cursor-pointer ${
          currentView === 'login' ? 'bg-[#8b1818] text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
        title="Buka Halaman Login"
      >
        <LogIn className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Login</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate('register')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition cursor-pointer ${
          currentView === 'register' ? 'bg-[#8b1818] text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
        title="Buka Halaman Register"
      >
        <UserPlus className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Register</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate('mahasiswa')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition cursor-pointer ${
          currentView === 'mahasiswa' ? 'bg-[#8b1818] text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
        title="Buka Antarmuka Mahasiswa"
      >
        <GraduationCap className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Mahasiswa</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate('dosen')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition cursor-pointer ${
          currentView === 'dosen' ? 'bg-[#8b1818] text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
        title="Buka Antarmuka Dosen PA"
      >
        <UserCheck className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Dosen PA</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate('admin')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition cursor-pointer ${
          currentView === 'admin' ? 'bg-[#8b1818] text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
        title="Buka Antarmuka Admin Akademik"
      >
        <ShieldCheck className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Admin</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate('superadmin')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition cursor-pointer ${
          currentView === 'superadmin' ? 'bg-[#8b1818] text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
        title="Buka Antarmuka Super Admin"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
        <span className="hidden sm:inline">Super Admin</span>
      </button>
    </aside>
  );
};
