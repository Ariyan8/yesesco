// file: app/academy/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'آموزشگاه یلدای سهند  |  دوره‌های تخصصی انرژی خورشیدی',
  description:
    'آموزشگاه یلدای سهند؛ دوره‌های تخصصی انرژی خورشیدی، PVsyst، نصب نیروگاه‌های کوچک و GIS با رویکرد بازار کار و TVTO.',
};

interface CourseCardProps {
  title: string;
  shortDescription: string;
  duration: string;
  link: string;
  level?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  shortDescription,
  duration,
  link,
  level = 'حرفه‌ای',
}) => (
  <div className="group h-full rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="mb-5 flex items-center justify-between gap-3">
      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
        {level}
      </span>
      <span className="text-sm font-medium text-gray-500">مدت: {duration}</span>
    </div>

    <h3 className="mb-3 text-2xl font-bold text-slate-800">{title}</h3>
    <p className="mb-6 leading-8 text-gray-600">{shortDescription}</p>

    <Link
      href={link}
      className="mt-auto inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition-colors duration-300 hover:bg-indigo-700"
    >
      مشاهده جزئیات و ثبت‌نام
    </Link>
  </div>
);

export default function AcademyPage() {
  return (
    <main className="bg-gradient-to-b from-white via-indigo-50/40 to-white">
      <section className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            آموزش تخصصی انرژی‌های تجدیدپذیر
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            آموزشگاه یلدای سهند
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            مسیر حرفه‌ای یادگیری برای مهندسان، تکنسین‌ها و علاقه‌مندان حوزه خورشیدی؛
            با تمرکز بر مهارت عملی، استانداردهای TVTO و نیاز واقعی بازار کار.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              مشاوره و ثبت‌نام
            </Link>
            <Link
              href="/academy/courses"
              className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
            >
              مشاهده همه دوره‌ها
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          {[
            'آموزش کاربردی و پروژه‌محور',
            'مطابق با استانداردهای TVTO',
            'مناسب ورود به بازار کار',
            'پشتیبانی و مسیر یادگیری حرفه‌ای',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-indigo-100 bg-white p-5 text-center shadow-sm"
            >
              <p className="font-semibold text-slate-800">{item}</p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900">دوره‌های منتخب</h2>
            <p className="mt-3 text-gray-600">
              دوره‌هایی که برای شروع یا ارتقای تخصص شما در صنعت انرژی طراحی شده‌اند.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <CourseCard
              title="دوره جامع PVsyst"
              shortDescription="آموزش طراحی، تحلیل و شبیه‌سازی سیستم‌های فتوولتائیک با PVsyst از سطح پایه تا حرفه‌ای."
              duration="۳۰ ساعت"
              link="/academy/courses/pvsyst"
            />

            <CourseCard
              title="نصب و راه‌اندازی نیروگاه‌های کوچک"
              shortDescription="دوره عملیاتی برای نصب، تست و راه‌اندازی سیستم‌های خورشیدی کوچک مطابق نیاز بازار و TVTO."
              duration="۵۰ ساعت"
              link="/academy/courses/installation"
            />

            <CourseCard
              title="مهندسی GIS در انرژی‌های تجدیدپذیر"
              shortDescription="آموزش QGIS و PostGIS برای مکان‌یابی بهینه، تحلیل تابش و تصمیم‌گیری در پروژه‌های انرژی."
              duration="۲۰ ساعت"
              link="/academy/courses/gis"
            />
          </div>
        </div>

        {/* Why us */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-indigo-100">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              چرا آموزشگاه یلدای سهند؟
            </h2>
            <div className="space-y-4 text-gray-700 leading-8">
              <p>• آموزش توسط متخصصان با تجربه اجرایی در پروژه‌های واقعی</p>
              <p>• تمرکز بر مهارت‌های قابل استفاده در بازار کار ایران</p>
              <p>• ترکیب آموزش تئوری، کارگاهی و پروژه‌محور</p>
              <p>• معرفی مسیر ورود به صنعت انرژی خورشیدی و فرصت‌های شغلی</p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">مسیر یادگیری حرفه‌ای</h2>
            <p className="mb-6 leading-8 text-indigo-50">
              از مبانی تا اجرای پروژه، آموزش‌ها به‌صورت مرحله‌ای طراحی شده‌اند تا
              هنرجو بتواند در پایان دوره، توانایی تحلیل، طراحی و اجرای پروژه‌های
              خورشیدی را کسب کند.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
            >
              دریافت مشاوره
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
