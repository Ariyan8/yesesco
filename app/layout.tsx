import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پیمانکار احداث نیروگاه خورشیدی و آموزشگاه فنی حرفه ای یلدای سهند",
  description: "طراحی، اجرا و آموزش در حوزه انرژی خورشیدی و مهارت‌های تخصصی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-yellow-50 text-slate-800">
        <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-black text-emerald-700">
              YESESCO
            </Link>

            <nav className="flex items-center gap-2 text-sm font-medium">
              <Link
                href="/"
                className="rounded-full px-4 py-2 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                صفحه اصلی
              </Link>
              <Link
                href="/solar"
                className="rounded-full px-4 py-2 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                متقاضیان نیروگاه خورشیدی
              </Link>
              <Link
                href="/academy"
                className="rounded-full px-4 py-2 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                آموزشگاه یلدای سهند
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-emerald-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Yesesco. همه حقوق محفوظ است.
          </div>
        </footer>
      </body>
    </html>
  );
}
