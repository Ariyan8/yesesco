"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// کامپوننت آیکون تایید
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// کارت‌های آمار و ویژگی‌ها
function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/60 p-4 shadow-sm backdrop-blur-md">
      <div className="text-xs font-bold text-slate-500">{title}</div>
      <div className="mt-1 text-2xl font-black text-slate-900">{value}</div>
    </div>
  );
}

export default function SolarPage() {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <main
      dir="rtl"
      style={{ fontFamily: 'B Nazanin, "B Nazanin", "BNazanin", serif' }}
      className="min-h-screen bg-[#f9fafb] text-slate-900 selection:bg-lime-200"
    >
      {/* استایل سراسری برای اطمینان از اعمال فونت بر روی تمام المان‌ها */}
      <style jsx global>{`
        * {
          font-family: "B Nazanin", "BNazanin", serif !important;
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
          
          {/* ستون اول: توضیحات و محتوا */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex rounded-full bg-lime-100 px-4 py-1.5 text-sm font-bold text-lime-700">
                سامانه ثبت درخواست نیروگاه خورشیدی
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
                شرکت یلدای سهند؛ <br />
                <span className="text-lime-600">پیشرو در انرژی‌های تجدیدپذیر</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                جهت احداث نیروگاه خورشیدی و بهره‌مندی از مزایای سرمایه‌گذاری در این حوزه، لطفاً فرم روبه‌رو را تکمیل نمایید. کارشناسان ما پس از بررسی اولیه جهت هماهنگی‌های بعدی با شما تماس خواهند گرفت.
              </p>
            </div>

            {/* بخش آمار خلاصه */}
            <div className="grid grid-cols-3 gap-4">
              <StatCard title="پروژه‌های اجرا شده" value="+۱۵۰" />
              <StatCard title="ظرفیت (کیلووات)" value="۱۵۰۰" />
              <StatCard title="رضایت مشتریان" value="۱۰۰٪" />
            </div>

            {/* لیست ویژگی‌ها */}
            <div className="space-y-3">
              {[
                "مشاوره تخصصی و فنی رایگان",
                "برآورد دقیق بازگشت سرمایه",
                "پشتیبانی در اخذ مجوزهای قانونی",
                "تامین تجهیزات برند و استاندارد",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 text-white">
                    <CheckIcon />
                  </span>
                  <span className="text-lg font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ستون دوم: فرم Epoll */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white bg-white shadow-2xl"
          >
            {/* لودر فرم */}
            {isIframeLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-lime-500 border-t-transparent" />
                <p className="mt-4 text-lg font-bold text-slate-600">در حال بارگذاری فرم ثبت‌نام...</p>
              </div>
            )}

            <iframe
              src="https://app.epoll.ir/e/شرکت-یلدای-سهند/MjAyNjU2?Referral=iframe"
              width="100%"
              height="650px"
              title="فرم ثبت درخواست"
              onLoad={() => setIsIframeLoading(false)}
              className="border-0"
            />
          </motion.div>
        </section>

        {/* بخش فوتر ساده */}
        <footer className="mt-20 border-t border-slate-200 pt-8 text-center text-slate-500">
          <p className="text-sm font-bold">
            تمامی حقوق برای شرکت یلدای سهند محفوظ است © ۱۴۰۳
          </p>
        </footer>
      </div>
    </main>
  );
}
