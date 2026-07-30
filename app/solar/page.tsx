"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-[0_18px_50px_rgba(120,160,100,0.12)] backdrop-blur-xl">
      <div className="text-sm font-bold text-slate-500">{title}</div>
      <div className="mt-2 text-3xl font-black text-slate-900">{value}</div>
      <div className="mt-2 text-sm leading-6 text-slate-600">{description}</div>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(120,160,100,0.12)] backdrop-blur-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-lime-300 text-lg font-black text-slate-900">
        {number}
      </div>
      <h3 className="text-xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default function SolarPage() {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <main
      dir="rtl"
      style={{ fontFamily: 'B Nazanin, BNazanin, "Times New Roman", serif' }}
      className="min-h-screen overflow-hidden bg-[#f8fff5] text-slate-900"
    >
      {/* بک‌گراند */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(74,222,128,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(253,224,71,0.18),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* بخش توضیحات */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2.5rem] border border-white/80 bg-white/70 p-7 shadow-[0_28px_90px_rgba(140,180,120,0.14)] backdrop-blur-xl sm:p-10"
          >
            <span className="inline-flex rounded-full bg-yellow-200 px-4 py-2 text-xs font-bold text-slate-900">
              ثبت درخواست احداث نیروگاه خورشیدی
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              مسیر مطمئن برای
              <span className="mx-2 inline-block bg-gradient-to-r from-lime-600 to-emerald-500 bg-clip-text text-transparent">
                سرمایه‌گذاری خورشیدی
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
               متقاضی احداث نیروگاه خورشیدی هستید، اطلاعات اولیه خود را ثبت کنید تا
              تیم ما برای مشاوره، بررسی ظرفیت، برآورد بازدهی و شروع فرآیند اجرایی با
              شما تماس بگیرد.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <StatCard
                title="نیروگاه نصب شده"
                value="250"
                description="پروژه  اجرا شده در مقیاس‌های مختلف"
              />
              <StatCard
                title="ظرفیت نصب شده"
                value="1500 kW"
                description="مجموع ظرفیت ثبت شده در پروژه‌ها"
              />
              <StatCard
                title="دوره‌های آموزشی"
                value="52"
                description="دوره برگزار شده برای همراهی و آموزش"
              />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "مشاوره اولیه و بررسی شرایط متقاضی",
                "برآورد مالی و ظرفیت اجرایی",
                "همراهی تا انتخاب پیمانکار و اجرا",
                "مناسب برای سرمایه‌گذاران و متقاضیان شخصی",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-lime-100 bg-lime-50/70 px-4 py-3 text-sm font-semibold text-slate-900"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lime-600">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* فرم Epoll داخل iframe */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative rounded-[2.5rem] border border-white/80 bg-white/80 p-4 shadow-[0_28px_90px_rgba(140,180,120,0.14)] backdrop-blur-xl sm:p-6"
          >
            {/* لودر */}
            {isIframeLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-[2.5rem] bg-white/90 backdrop-blur-sm">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-lime-500 border-t-transparent" />
                <p className="mt-4 text-sm font-medium text-slate-600">در حال بارگذاری فرم...</p>
              </div>
            )}
            <iframe
              src="https://app.epoll.ir/e/%D8%B4%D8%B1%DA%A9%D8%AA-%DB%8C%D9%84%D8%AF%D8%A7%DB%8C-%D8%B3%D9%87%D9%86%D8%AF/MjAyNjU2?Referral=iframe"
              width="100%"
              height={600}
              title="فرم Epoll"
              loading="lazy"
              onLoad={() => setIsIframeLoading(false)}
              className="w-full rounded-2xl border-0 bg-white"
            />
          </motion.div>
        </section>

        {/* مراحل کار */}
        <section className="mt-10 rounded-[2.5rem] border border-white/80 bg-white/70 p-7 shadow-[0_28px_90px_rgba(140,180,120,0.12)] backdrop-blur-xl sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
              مراحل احداث نیروگاه
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              از ثبت درخواست تا اجرای نهایی، مسیر کار به صورت شفاف و مرحله به مرحله
              پیش می‌رود.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <ProcessStep
              number="01"
              title="ثبت اطلاعات اولیه"
              description="متقاضی فرم اولیه را تکمیل می‌کند تا اطلاعات تماس و محل اجرای پروژه ثبت شود."
            />
            <ProcessStep
              number="02"
              title="بررسی اولیه و تماس"
              description="تیم کارشناسی شرایط متقاضی را بررسی می‌کند و برای مشاوره اولیه تماس می‌گیرد."
            />
            <ProcessStep
              number="03"
              title="تحلیل فنی و اقتصادی"
              description="ظرفیت مناسب، بازدهی، هزینه اجرا و چشم‌انداز درآمد پروژه ارزیابی می‌شود."
            />
            <ProcessStep
              number="04"
              title="تکمیل مستندات"
              description="فرم‌ها، اطلاعات مالکیت، شرایط محل اجرا و مدارک موردنیاز تکمیل می‌شود."
            />
            <ProcessStep
              number="05"
              title="پیشنهاد اجرا"
              description="پیشنهاد اجرایی و زمان‌بندی تقریبی پروژه ارائه می‌شود تا متقاضی تصمیم بگیرد."
            />
            <ProcessStep
              number="06"
              title="آغاز اجرا"
              description="پس از تایید نهایی، فرآیند انتخاب پیمانکار، اجرا و پیگیری مراحل بعدی آغاز می‌شود."
            />
          </div>
        </section>
      </div>
    </main>
  );
}
