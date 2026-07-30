// file: app/academy/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'آموزشگاه تخصصی یلدای سهند | دوره‌های مهندسی و کاربردی انرژی خورشیدی',
  description:
    'مرکز تخصصی آموزش طراحی، نصب و راه‌اندازی نیروگاه‌های خورشیدی، شبیه‌سازی PVsyst و سیستم‌های هیبرید منطبق با استانداردهای TVTO و بازار کار.',
};

// کارت دوره‌ها
interface CourseCardProps {
  title: string;
  badge: string;
  duration: string;
  description: string;
  features: string[];
  link: string;
  isPopular?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  badge,
  duration,
  description,
  features,
  link,
  isPopular,
}) => (
  <div
    className={`relative flex flex-col justify-between rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
      isPopular
        ? 'border-2 border-indigo-600 shadow-xl ring-4 ring-indigo-50'
        : 'border border-gray-100 shadow-md hover:border-indigo-200'
    }`}
  >
    {isPopular && (
      <span className="absolute -top-4 right-8 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-1 text-xs font-bold text-white shadow-md">
        پرتقاضاترین دوره
      </span>
    )}

    <div>
      {/* Header Info */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="rounded-xl bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
          {badge}
        </span>
        <div className="flex items-center text-sm font-medium text-gray-500">
          <svg
            className="ml-1 h-4 w-4 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {duration}
        </div>
      </div>

      <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mb-6 leading-relaxed text-gray-600 text-sm md:text-base">
        {description}
      </p>

      {/* Course Highlights */}
      <div className="mb-8 border-t border-gray-100 pt-6">
        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
          سرفصل‌ها و ویژگی‌های کلیدی:
        </h4>
        <ul className="space-y-2.5 text-sm text-gray-700">
          {features.map((feat, index) => (
            <li key={index} className="flex items-center">
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                ✓
              </span>
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <Link
      href={link}
      className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 font-bold transition-all duration-300 ${
        isPopular
          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700'
          : 'bg-slate-900 text-white hover:bg-indigo-600'
      }`}
    >
      مشاهده جزئیات و ثبت‌نام
    </Link>
  </div>
);

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-900 py-20 text-white md:py-28">
        {/* Decorative Background Effects */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="container relative mx-auto px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-xs md:text-sm font-semibold text-indigo-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            مرکز تخصصی آموزش‌های تجدیدپذیر و نیروگاهی
          </span>

          <h1 className="mx-auto max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            آکادمی تخصصی <span className="text-indigo-400">یلدای سهند</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-xl">
            تربیت مهندسان و تکنسین‌های ارشد انرژی خورشیدی؛ انتقال تجربه واقعی پروژه‌های
            صنعتی، شبیه‌سازی تخصصی و آماده‌سازی کامل برای ورود به بازار کار و مدرک TVTO.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#courses"
              className="w-full sm:w-auto rounded-2xl bg-indigo-500 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-400 hover:shadow-indigo-500/50"
            >
              مشاهده دوره‌های فعال
            </Link>
            <Link
              href="#consultation"
              className="w-full sm:w-auto rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              دریافت مشاوره رایگان
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-10 -mt-10 container mx-auto px-6">
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-xl border border-gray-100 md:grid-cols-4 md:p-8">
          {[
            { label: 'دانش‌آموخته متخصص', value: '+۵۰۰' },
            { label: 'پروژه‌های شبیه‌سازی‌شده', value: '+۱۵۰' },
            { label: 'رضایت هنرجویان', value: '۹۸٪' },
            { label: 'ساعت آموزش کارگاهی', value: '+۲,۰۰۰' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-2">
              <div className="text-2xl md:text-4xl font-extrabold text-indigo-600">
                {stat.value}
              </div>
              <div className="mt-1 text-xs md:text-sm font-medium text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COURSES SECTION */}
      <section id="courses" className="container mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            مسیرهای یادگیری تخصصی
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            دوره‌های آموزشی خورشیدی
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            دوره‌ها به‌گونه‌ای طراحی شده‌اند که تمام نیازهای نرم‌افزاری، محاسباتی و
            اجرایی شما را پوشش دهند.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Course 1 */}
          <CourseCard
            title="دوره جامع PVsyst & طراحی نیروگاه"
            badge="سطح پیشرفته و مهندسی"
            duration="۳۰ ساعت تخصصی"
            description="آموزش صفر تا صد شبیه‌سازی نیروگاه‌های متصل به شبکه (On-Grid) و منفصل (Off-Grid)، تحلیل تابش، تلفات و گزارش‌گیری استاندار جهت ارائه به ساتبا و سرمایه‌گذاران."
            features={[
              'مدل‌سازی سه‌بعدی و سایه‌اندازی (3D Shading)',
              'تحلیل مالی، IRR، LCOE و بازگشت سرمایه',
              'انتخاب آنلاین اینورترها و استرینگ‌بندی',
              'طراحی پروژه‌های واقعی صنعتی و کشاورزی',
            ]}
            link="/academy/courses/pvsyst"
            isPopular={true}
          />

          {/* Course 2 */}
          <CourseCard
            title="نصب، اجرا و راه‌اندازی سیستم‌های PV"
            badge="سطح عملیاتی و کارگاهی (TVTO)"
            duration="۵۰ ساعت (تئوری + عملی)"
            description="دوره کاملاً کاربردی و کارگاهی مطابق استاندارد سازمان آموزش فنی و حرفه‌ای کشور. آموزش سیم‌کشی، تابلو برق، اینورترهای Growatt و تست‌های تحویل."
            features={[
              'آشنایی عملی با پلتفرم‌ها و اینورترهای Growatt',
              'سیم‌کشی DC/AC، صاعقه‌گیر و سیستم ارتینگ',
              'کار با ابزارهای تست سولار و تزریق به شبکه',
              'آماده‌سازی برای آزمون رسمی و مدرک TVTO',
            ]}
            link="/academy/courses/installation"
            isPopular={false}
          />
        </div>
      </section>

      {/* 4. WHY US / ADVANTAGES */}
      <section className="bg-gradient-to-b from-indigo-50/50 to-white py-20 border-y border-indigo-100">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              چرا آکادمی یلدای سهند؟
            </h2>
            <p className="mt-3 text-gray-600">
              تفاوت ما در انتقال دانش عملیاتی از قلب پروژه‌های نیروگاهی است.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'مدرک معتبر TVTO',
                desc: 'امکان شرکت در آزمون‌های سازمان فنی و حرفه‌ای و دریافت مدرک بین‌المللی جهت رزومه و مهاجرت کاری.',
                icon: '📜',
              },
              {
                title: 'تجهیزات مدرن آموزشی',
                desc: 'تمرین بر روی تجهیزات واقعی، استراکچرهای صنعتی و اینورترهای هیبرید و متصل به شبکه Growatt.',
                icon: '⚡',
              },
              {
                title: 'پشتیبانی پروژه‌ای',
                desc: 'همراهی اساتید در اولین پروژه‌های اجرایی یا محاسباتی دانش‌آموختگان پس از اتمام دوره.',
                icon: '🤝',
              },
            ].map((adv, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-8 border border-gray-100 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 text-4xl">{adv.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-slate-800">
                  {adv.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTRUCTORS */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            کادر علمی و آموزشی
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            مدرسین دوره
          </h2>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg border border-indigo-50 flex flex-col md:flex-row items-center gap-8">
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl bg-indigo-100 border-2 border-indigo-200 flex items-center justify-center text-4xl font-black text-indigo-600">
            AS
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-slate-900">
                مهندس آریان صدرایی
              </h3>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                مدرس ارشد
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-indigo-600">
              طراح و مشاور پروژه‌های نیروگاهی خورشیدی | متخصص PVsyst & GIS
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              با سابقه طراحی و نظارت بر چندین مگاوات پروژه خورشیدی نیروگاهی و صنعتی
              در کشور. مدرس رسمی دوره‌های تخصصی انرژی تجدیدپذیر منطبق با استانداردهای
              بین‌المللی و نیازهای ساتبا.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="bg-slate-100/70 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              سوالات متداول
            </h2>
            <p className="mt-2 text-gray-600">
              پاسخ به برخی از پرسش‌های معمول هنرجویان جدید
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'آیا برای شرکت در دوره‌ها پیش‌نیاز خاصی لازم است؟',
                a: 'برای دوره نصب و راه‌اندازی، آشنایی اولیه با برق کافی است. برای دوره PVsyst، داشتن پیش‌زمینه مهندسی (برق، مکانیک، عمران یا انرژی) پیشنهاد می‌شود.',
              },
              {
                q: 'آیا مدرک اعطایی قابل ترجمه و معتبر است؟',
                a: 'بله، پس از اتمام دوره و قبولی در آزمون سازمان آموزش فنی و حرفه‌ای (TVTO)، مدرک رسمی با قابلیت ترجمه رسمی صادر می‌گردد.',
              },
              {
                q: 'آیا امکان برگزاری دوره‌ها به صورت اختصاصی یا سازمانی وجود دارد؟',
                a: 'بله، آکادمی یلدای سهند دوره‌های سفارشی‌سازی شده برای شرکت‌ها، سازمان‌ها و تیم‌های مهندسی نیز برگزار می‌کند.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl bg-white p-6 border border-gray-200 shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-800">
                  <span>{faq.q}</span>
                  <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 transition duration-300 group-open:-rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONSULTATION / CTA SECTION */}
      <section id="consultation" className="container mx-auto px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-700 to-violet-800 p-10 md:p-16 text-white shadow-2xl relative overflow-hidden text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              نیازمند مشاوره برای انتخاب دوره هستید؟
            </h2>
            <p className="mt-4 text-indigo-100 text-base leading-relaxed">
              کارشناسان آموزشی ما آماده‌اند تا با توجه به هدف شغلی و زمینه تحصیلی شما،
              بهترین مسیر یادگیری را به شما پیشنهاد دهند.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50"
            >
              تماس با مشاوره آموزش
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}