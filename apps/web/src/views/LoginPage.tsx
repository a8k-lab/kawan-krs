import React, { useState } from 'react';
import { 
  GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight, UserCheck, 
  ShieldCheck, ShieldAlert, GraduationCap as StudentIcon,
  AlertCircle, CheckCircle2, Loader2
} from 'lucide-react';

interface LoginPageProps {
  onNavigate: (view: 'login' | 'register' | 'mahasiswa' | 'dosen' | 'admin' | 'superadmin') => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('nadya.salsabila@kawankrs.ac.id');
  const [password, setPassword] = useState('SecretPassword123');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'mahasiswa' | 'dosen' | 'admin' | 'superadmin'>('mahasiswa');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSelectDemoAccount = (role: 'mahasiswa' | 'dosen' | 'admin' | 'superadmin', demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('SecretPassword123');
    setSelectedRole(role);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email.trim(),
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(result.message || 'Gagal masuk. Periksa kembali email/NIM dan password Anda.');
        setIsLoading(false);
        return;
      }

      // Simpan session token & data profil user ke localStorage
      if (result.data) {
        localStorage.setItem('kawan_krs_token', result.data.sessionToken);
        localStorage.setItem('kawan_krs_user', JSON.stringify(result.data.user));
      }

      const userName = result.data?.user?.fullName || 'Pengguna';
      const userRole = (result.data?.user?.role || 'mahasiswa').toLowerCase();
      setSuccessMessage(`Login berhasil! Selamat datang, ${userName}. Mengalihkan...`);

      setTimeout(() => {
        if (userRole === 'superadmin') {
          onNavigate('superadmin');
        } else if (userRole === 'admin') {
          onNavigate('admin');
        } else if (userRole === 'dosen') {
          onNavigate('dosen');
        } else {
          onNavigate('mahasiswa');
        }
      }, 500);
    } catch (err) {
      console.error('Login error:', err);
      setErrorMessage('Tidak dapat terhubung ke server API. Pastikan server backend sedang aktif di port 3001.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Left Pane - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#8b1818] flex-col justify-between p-12 text-white relative overflow-hidden select-none">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] bg-[#a72020] rounded-full opacity-40 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[450px] h-[450px] bg-[#671010] rounded-full opacity-50 blur-3xl pointer-events-none"></div>
        
        {/* Top Header Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-inner">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">KawanKRS</h1>
            <p className="text-xs text-red-200">Sistem Perencanaan Studi Cerdas</p>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="relative z-10 my-auto py-12 max-w-lg">
          <h2 className="text-5xl font-extrabold leading-[1.15] mb-6 tracking-tight">
            Rencanakan<br />Studi, Wujudkan<br />Masa Depan
          </h2>
          <p className="text-lg text-red-100/90 leading-relaxed font-light">
            KawanKRS membantu pengelolaan akademik yang lebih mudah dan terintegrasi untuk mendukung keberhasilan mahasiswa.
          </p>
        </div>

        {/* Cityscape decorative bottom */}
        <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-red-200/80">
          <span>Telkom University • Fasilkom</span>
          <span>Edisi Kurikulum 2024/2025</span>
        </div>

        {/* Abstract Cityscape Graphic */}
        <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end opacity-20 pointer-events-none">
          <div className="w-16 h-12 bg-white mx-1 rounded-t-sm"></div>
          <div className="w-24 h-24 bg-white mx-1 rounded-t-sm"></div>
          <div className="w-12 h-32 bg-white mx-1 rounded-t-sm"></div>
          <div className="w-32 h-16 bg-white mx-1 rounded-t-sm"></div>
          <div className="w-20 h-28 bg-white mx-1 rounded-t-sm"></div>
          <div className="w-28 h-20 bg-white mx-1 rounded-t-sm"></div>
          <div className="w-16 h-12 bg-white mx-1 rounded-t-sm"></div>
        </div>
      </div>

      {/* Right Pane - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Header Title */}
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Masuk ke KawanKRS</h2>
            <p className="text-sm text-gray-500">Silakan masuk dengan akun akademik Anda</p>
          </div>

          {/* Quick Demo Autofill Selector (4 Roles) */}
          <div className="mb-6 p-3.5 bg-red-50/60 border border-red-100 rounded-xl">
            <p className="text-xs font-semibold text-red-800 mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                Isi Otomatis Akun Contoh (Demo Role):
              </span>
              <span className="text-[10px] text-gray-500 font-normal">Klik untuk mengisi form</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {/* Mahasiswa */}
              <button
                type="button"
                onClick={() => handleSelectDemoAccount('mahasiswa', 'nadya.salsabila@kawankrs.ac.id')}
                className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all shadow-xs cursor-pointer ${
                  selectedRole === 'mahasiswa' && email.includes('nadya')
                    ? 'bg-red-600 text-white border-red-700 ring-2 ring-red-500/30'
                    : 'bg-white border-red-200 hover:border-red-600 hover:bg-red-50/80 text-gray-800'
                }`}
              >
                <StudentIcon className={`w-3.5 h-3.5 mb-1 ${selectedRole === 'mahasiswa' && email.includes('nadya') ? 'text-white' : 'text-red-700'}`} />
                <span className="text-[10px] font-bold">Mahasiswa</span>
                <span className={`text-[8px] ${selectedRole === 'mahasiswa' && email.includes('nadya') ? 'text-red-100' : 'text-gray-500'}`}>Nadya</span>
              </button>

              {/* Dosen PA */}
              <button
                type="button"
                onClick={() => handleSelectDemoAccount('dosen', 'wisnu.jatmiko@kawankrs.ac.id')}
                className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all shadow-xs cursor-pointer ${
                  selectedRole === 'dosen' && email.includes('wisnu')
                    ? 'bg-red-600 text-white border-red-700 ring-2 ring-red-500/30'
                    : 'bg-white border-red-200 hover:border-red-600 hover:bg-red-50/80 text-gray-800'
                }`}
              >
                <UserCheck className={`w-3.5 h-3.5 mb-1 ${selectedRole === 'dosen' && email.includes('wisnu') ? 'text-white' : 'text-blue-700'}`} />
                <span className="text-[10px] font-bold">Dosen PA</span>
                <span className={`text-[8px] ${selectedRole === 'dosen' && email.includes('wisnu') ? 'text-red-100' : 'text-gray-500'}`}>Prof. Wisnu</span>
              </button>

              {/* Admin */}
              <button
                type="button"
                onClick={() => handleSelectDemoAccount('admin', 'rina.marlina@kawankrs.ac.id')}
                className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all shadow-xs cursor-pointer ${
                  selectedRole === 'admin' && email.includes('rina')
                    ? 'bg-red-600 text-white border-red-700 ring-2 ring-red-500/30'
                    : 'bg-white border-red-200 hover:border-red-600 hover:bg-red-50/80 text-gray-800'
                }`}
              >
                <ShieldCheck className={`w-3.5 h-3.5 mb-1 ${selectedRole === 'admin' && email.includes('rina') ? 'text-white' : 'text-emerald-700'}`} />
                <span className="text-[10px] font-bold">Admin</span>
                <span className={`text-[8px] ${selectedRole === 'admin' && email.includes('rina') ? 'text-red-100' : 'text-gray-500'}`}>Rina Marlina</span>
              </button>

              {/* Super Admin */}
              <button
                type="button"
                onClick={() => handleSelectDemoAccount('superadmin', 'sarah.jenkins@kawankrs.ac.id')}
                className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all shadow-xs cursor-pointer ${
                  selectedRole === 'superadmin' && email.includes('sarah')
                    ? 'bg-red-600 text-white border-red-700 ring-2 ring-red-500/30'
                    : 'bg-white border-red-200 hover:border-red-600 hover:bg-red-50/80 text-gray-800'
                }`}
              >
                <ShieldAlert className={`w-3.5 h-3.5 mb-1 ${selectedRole === 'superadmin' && email.includes('sarah') ? 'text-white' : 'text-purple-700'}`} />
                <span className="text-[10px] font-bold">Super Admin</span>
                <span className={`text-[8px] ${selectedRole === 'superadmin' && email.includes('sarah') ? 'text-red-100' : 'text-gray-500'}`}>Dr. Sarah</span>
              </button>
            </div>
          </div>

          {/* Alert Messages */}
          {errorMessage && (
            <div className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2.5 animate-fadeIn shadow-xs">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-bold">Gagal Masuk</p>
                <p className="text-red-600 mt-0.5 leading-relaxed">{errorMessage}</p>
              </div>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-start gap-2.5 animate-fadeIn shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="font-semibold leading-relaxed">{successMessage}</p>
            </div>
          )}

          {/* Form Login Asli (Email & Password) */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Email Akademik / NIM / NIP</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="nama@kawankrs.ac.id atau 2106721094" 
                  required
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 disabled:bg-gray-50 disabled:text-gray-400 transition-all text-gray-800"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="••••••••" 
                  required
                  disabled={isLoading}
                  className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 disabled:bg-gray-50 disabled:text-gray-400 transition-all text-gray-800"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 accent-red-600" />
                <span className="text-xs text-gray-600">Ingat saya</span>
              </label>
              <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs font-semibold text-red-700 hover:text-red-800">
                Lupa password?
              </a>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#8b1818] hover:bg-[#721313] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-xl transition-all shadow-md shadow-red-950/10 flex justify-center items-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memverifikasi...</span>
                </>
              ) : (
                <>
                  <span>Masuk</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Register */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              Belum memiliki akun KawanKRS?{' '}
              <button 
                type="button" 
                onClick={() => onNavigate('register')}
                className="font-bold text-red-700 hover:text-red-800 hover:underline cursor-pointer"
              >
                Daftar sekarang
              </button>
            </p>
          </div>
          
          <div className="mt-12 text-center border-t border-gray-100 pt-6">
            <p className="text-[11px] text-gray-400">© 2026 KawanKRS • Sistem Cerdas Rekomendasi Rencana Studi</p>
          </div>
        </div>
      </div>
    </div>
  );
};
