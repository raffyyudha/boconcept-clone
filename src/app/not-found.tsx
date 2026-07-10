import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-gray-900 px-4 text-center">
      <span className="text-8xl font-black text-[#1e1913]/10">404</span>
      <h1 className="text-2xl font-bold mt-4 text-[#1e1913]">Halaman Tidak Ditemukan</h1>
      <p className="text-gray-500 mt-2 max-w-sm">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-[#1e1913] text-white text-sm font-semibold rounded-lg hover:bg-[#322c25] transition-colors shadow-md"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
