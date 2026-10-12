import { useState } from 'react';
import { LoginPage } from './views/LoginPage';
import { RegisterPage } from './views/RegisterPage';
import { MahasiswaDashboard } from './views/MahasiswaDashboard';
import { DosenDashboard } from './views/DosenDashboard';
import { AdminDashboard } from './views/AdminDashboard';
import { RoleSwitcher } from './components/RoleSwitcher';

type ViewMode = 'login' | 'register' | 'mahasiswa' | 'dosen' | 'admin';

export function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('login');

  return (
    <div className="relative min-h-screen bg-[#f8fafc]">
      {/* Dynamic Views */}
      {currentView === 'login' && (
        <LoginPage onNavigate={setCurrentView} />
      )}

      {currentView === 'register' && (
        <RegisterPage onNavigate={setCurrentView} />
      )}

      {currentView === 'mahasiswa' && (
        <MahasiswaDashboard 
          onBackToDosen={() => setCurrentView('dosen')} 
          onNavigate={setCurrentView} 
        />
      )}

      {currentView === 'dosen' && (
        <DosenDashboard 
          onSelectMahasiswa={() => setCurrentView('mahasiswa')} 
          onNavigate={setCurrentView} 
        />
      )}

      {currentView === 'admin' && (
        <AdminDashboard onNavigate={setCurrentView} />
      )}

      {/* Floating Demo Role Switcher for seamless testing */}
      <RoleSwitcher 
        currentView={currentView} 
        onNavigate={setCurrentView} 
      />
    </div>
  );
}

export default App;
