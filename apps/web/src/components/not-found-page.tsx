import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center text-slate-800">
      <h1 className="text-2xl font-bold">Halaman tidak ditemukan</h1>
      <p>Alamat yang Anda buka tidak tersedia.</p>
      <Link
        to="/login"
        className="rounded-lg bg-[#8b1818] px-4 py-2 font-semibold text-white"
      >
        Kembali ke halaman masuk
      </Link>
    </main>
  );
}
