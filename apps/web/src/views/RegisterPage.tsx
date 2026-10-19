import React, { useState } from 'react';
import { 
  GraduationCap, Mail, Lock, User, Hash, Eye, EyeOff, ArrowRight,
  AlertCircle, CheckCircle2, Loader2 
} from 'lucide-react';

interface RegisterPageProps {
  onNavigate: (view: 'login' | 'register' | 'mahasiswa' | 'dosen' | 'admin') => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    identifier: '',
    role: 'mahasiswa',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Konfirmasi password tidak cocok dengan password yang Anda masukkan.');
      return;
    }

    if (formData.password.length < 8) {
      setErrorMessage('Password minimal harus terdiri dari 8 karakter.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          identifier: formData.identifier,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(result.message || 'Pendaftaran akun gagal. Silakan periksa data Anda.');
        setIsLoading(false);
        return;
      }

      setSuccessMessage('Pendaftaran akun KawanKRS berhasil! Mengalihkan ke halaman login...');
      setTimeout(() => {
        onNavigate('login');
      }, 1500);
    } catch (err) {
      console.error('Registration error:', err);
      setErrorMessage('Tidak dapat terhubung ke server backend API. Pastikan server aktif di port 3001.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Left Pane - Branding (Same as Login) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#8b1818] flex-col justify-between p-12 text-white relative overflow-hidden select-none">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] bg-[#a72020] rounded-full opacity-40 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[450px] h-[450px] bg-[#671010] rounded-full opacity-50 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-inner">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">KawanKRS</h1>
            <p className="text-xs text-red-200">Sistem Perencanaan Studi Cerdas</p>
          </div>
        </div>

        <div className="relative z-10 my-auto py-12 max-w-lg">
          <h2 className="text-5xl font-extrabold leading-[1.15] mb-6 tracking-tight">
            Mulai Langkah<br />Akademik Terbaik<br />Bersama Kami
          </h2>
          <p className="text-lg text-red-100/90 leading-relaxed font-light">
            Daftarkan diri Anda untuk merasakan kemudahan rekomendasi rencana studi, visualisasi kelulusan, dan bimbingan terpadu.
          </p>
        </div>

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

      {/* Right Pane - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-10 bg-white overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-1.5">Buat Akun KawanKRS</h2>
            <p className="text-sm text-gray-500">Lengkapi data diri Anda untuk pendaftaran akun baru</p>
          </div>

          {/* Alert Messages */}
          {errorMessage && (
            <div className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2.5 animate-fadeIn shadow-xs">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-bold">Gagal Mendaftar</p>
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

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Nama Lengkap</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className="h-4 w-4" />
                </div>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nadya Salsabila" 
                  required
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 disabled:bg-gray-50 disabled:text-gray-400 transition-all text-gray-800"
                />
              </div>
            </div>

            {/* Role & NIM/NIP Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Peran Akun</label>
                <select 
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 disabled:bg-gray-50 disabled:text-gray-400 transition-all text-gray-800 cursor-pointer"
                >
                  <option value="mahasiswa">Mahasiswa</option>
                  <option value="dosen">Dosen Wali</option>
                  <option value="admin">Admin Akademik</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">NIM / NIP</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Hash className="h-4 w-4" />
                  </div>
                  <input 
                    type="text" 
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleChange}
                    placeholder="2106721094" 
                    required
                    disabled={isLoading}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 disabled:bg-gray-50 disabled:text-gray-400 transition-all text-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Email Akademik</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nadya.salsabila@kawankrs.ac.id" 
                  required
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 disabled:bg-gray-50 disabled:text-gray-400 transition-all text-gray-800"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimal 8 karakter" 
                  required
                  disabled={isLoading}
                  className="w-full pl-10 pr-10 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 disabled:bg-gray-50 disabled:text-gray-400 transition-all text-gray-800"
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

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Konfirmasi Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Ulangi password" 
                  required
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 disabled:bg-gray-50 disabled:text-gray-400 transition-all text-gray-800"
                />
              </div>
            </div>

            <div className="pt-1">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 accent-red-600" />
                <span className="text-xs text-gray-600">
                  Saya menyetujui Ketentuan Layanan & Kebijakan Privasi KawanKRS.
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#8b1818] hover:bg-[#721313] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-xl transition-all shadow-md shadow-red-950/10 flex justify-center items-center gap-2 cursor-pointer active:scale-[0.99] mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Mendaftarkan Akun...</span>
                </>
              ) : (
                <>
                  <span>Daftar Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Login */}
          <div className="mt-5 text-center">
            <p className="text-xs text-gray-600">
              Sudah memiliki akun?{' '}
              <button 
                type="button" 
                onClick={() => onNavigate('login')}
                className="font-bold text-red-700 hover:text-red-800 hover:underline cursor-pointer"
              >
                Masuk di sini
              </button>
            </p>
          </div>
          
          <div className="mt-8 text-center border-t border-gray-100 pt-4">
            <p className="text-[11px] text-gray-400">© 2026 KawanKRS • Sistem Cerdas Rekomendasi Rencana Studi</p>
          </div>
        </div>
      </div>
    </div>
  );
};
