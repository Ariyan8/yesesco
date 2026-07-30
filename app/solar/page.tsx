// file: app/academy/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'آموزشگاه تخصصی یلدای سهند | دوره‌های مهندسی و کاربردی انرژی خورشیدی',
  description:
    'مرکز تخصصی آموزش طراحی، نصب و راه‌اندازی نیروگاه‌های خورشیدی، شبیه‌سازی PVsyst و سیستم‌های هیبرید منطبق با استانداردهای فنی و حرفه ای و بازار کار.',
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
        ? 'border-2 border-yellow-400 shadow-xl ring-4 ring-yellow-400/10'
        : 'border border-gray-100 shadow-md hover:border-yellow-200'
    }`}
  >
    {isPopular && (
      <span className="absolute -top-4 right-8 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 px-4 py-1 text-xs font-extrabold text-slate-950 shadow-md">
        پرتقاضاترین دوره
      </span>
    )}

    <div>
      {/* Header Info */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="rounded-xl bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700 border border-yellow-200/50">
          {badge}
        </span>
        <div className="flex items-center text-sm font-medium text-gray-500">
          <svg
            className="ml-1 h-4 w-4 text-yellow-400"
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
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-700">
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
          ? 'bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/20 hover:bg-yellow-300'
          : 'bg-slate-900 text-white hover:bg-yellow-400 hover:text-slate-950'
      }`}
    >
      مشاهده جزئیات و ثبت‌نام
    </Link>
  </div>
);

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

const FAQ: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <details
          key={idx}
          className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm open:shadow-md transition-all"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <span className="text-sm md:text-base font-bold text-slate-900">
              {item.q}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200/60 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-4 text-sm md:text-base leading-relaxed text-gray-600">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
};

export default function AcademyPage() {
  const faqs: FAQItem[] = [
    {
      q: 'این دوره‌ها برای چه کسانی مناسب است؟',
      a: (
        <p>
          برای دانشجویان و فارغ‌التحصیلان برق/انرژی، تکنسین‌های تاسیسات، مجریان نیروگاه،
          و افرادی که قصد ورود سریع و حرفه‌ای به بازار کار انرژی خورشیدی را دارند.
          اگر از صفر شروع می‌کنید، مسیر پیشنهادی ما: ابتدا «نصب و اجرا» و سپس «PVsyst و طراحی نیروگاه» است.
        </p>
      ),
    },
    {
      q: 'پیش‌نیاز دوره PVsyst چیست؟',
      a: (
        <ul className="list-disc pr-5 space-y-2">
          <li>آشنایی پایه با برق (AC/DC)، توان و مفاهیم انرژی</li>
          <li>کار با کامپیوتر و فایل‌ها (در حد عمومی)</li>
          <li>
            داشتن لپ‌تاپ برای تمرین توصیه می‌شود (در بخش مشخصات سخت‌افزار، راهنمایی ارائه می‌کنیم).
          </li>
        </ul>
      ),
    },
    {
      q: 'آیا دوره‌ها پروژه‌محور هستند؟',
      a: (
        <p>
          بله. در هر دوره تمرین‌های مرحله‌به‌مرحله، کیس‌های واقعی نیروگاهی و خروجی‌های قابل ارائه
          (گزارش، لیست تجهیزات، استرینگ‌بندی، فایل‌های شبیه‌سازی) تولید می‌کنید تا برای مصاحبه،
          اجرا و یا ارائه به کارفرما آماده باشید.
        </p>
      ),
    },
    {
      q: 'پس از پایان دوره چه خروجی‌هایی دریافت می‌کنم؟',
      a: (
        <ul className="list-disc pr-5 space-y-2">
          <li>جزوه و فایل‌های تمرینی و قالب‌های گزارش‌نویسی</li>
          <li>نمونه پروژه‌های شبیه‌سازی‌شده و چک‌لیست‌های اجرایی</li>
          <li>گواهی پایان دوره  (و در صورت انتخاب مسیر فنی و حرفه ای آمادگی آزمون)</li>
        </ul>
      ),
    },
    {
      q: 'دوره نصب و اجرا دقیقاً چه چیزهایی را پوشش می‌دهد؟',
      a: (
        <ul className="list-disc pr-5 space-y-2">
          <li>اصول ایمنی، ابزارشناسی و استانداردهای پایه</li>
          <li>سیم‌کشی DC/AC، طراحی تابلو، حفاظت‌ها، ارت و صاعقه‌گیر</li>
          <li>راه‌اندازی، تست‌ها و تحویل (Commissioning) و خطایابی رایج</li>
          <li>آشنایی عملی با تجهیزات رایج بازار و نکات اجرایی کارگاهی</li>
        </ul>
      ),
    },
    {
      q: 'زمان‌بندی و نحوه برگزاری کلاس‌ها چگونه است؟',
      a: (
        <p>
          کلاس‌ها به‌صورت برنامه‌ریزی‌شده (حضوری/نیمه‌حضوری/آنلاین بسته به دوره) برگزار می‌شود.
          زمان‌بندی هر ترم قبل از ثبت‌نام اعلام می‌شود و برای شاغلین نیز گزینه‌های آخر هفته در نظر گرفته می‌شود.
        </p>
      ),
    },
    {
      q: 'آیا پشتیبانی بعد از دوره دارید؟',
      a: (
        <p>
          بله. پشتیبانی شامل رفع اشکال تمرین‌ها، بازبینی پروژه‌های اولیه هنرجو و راهنمایی مسیر ورود به بازار کار است.
          همچنین برای هنرجویانی که در پروژه واقعی درگیر شوند، چک‌لیست‌های اجرایی و نکات کنترلی ارائه می‌گردد.
        </p>
      ),
    },
    {
      q: 'برای شرکت در دوره‌ها چه تجهیزاتی لازم است؟',
      a: (
        <ul className="list-disc pr-5 space-y-2">
          <li>
            برای PVsyst: لپ‌تاپ ویندوزی با حداقل ۸GB RAM (پیشنهاد: ۱۶GB)، و فضای خالی کافی.
          </li>
          <li>
            برای نصب و اجرا: در کارگاه ابزارهای اصلی فراهم است؛ داشتن دستکش ایمنی و کفش کار توصیه می‌شود.
          </li>
        </ul>
      ),
    },
    {
      q: 'اگر هدفم ورود سریع به بازار کار باشد، چه مسیری پیشنهاد می‌دهید؟',
      a: (
        <p>
          مسیر سریع بازار کار معمولاً از «نصب و اجرا» شروع می‌شود و با «طراحی و PVsyst» تکمیل می‌گردد.
          در پایان این مسیر، هم توان اجرای میدانی دارید و هم توان طراحی/گزارش‌نویسی برای کارفرما و سرمایه‌گذار.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-zinc-900 to-yellow-950/80 py-20 text-white md:py-28">
        {/* Decorative Background Effects */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="container relative mx-auto px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-400/10 px-4 py-2 text-xs md:text-sm font-semibold text-yellow-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-yellow-300 animate-pulse" />
            مرکز تخصصی آموزش‌های تجدیدپذیر و نیروگاهی
          </span>

          <h1 className="mx-auto max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            آموزشگاه تخصصی <span className="text-yellow-300">یلدای سهند</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-xl">
            تربیت مهندسان و تکنسین‌های ارشد انرژی خورشیدی؛ انتقال تجربه واقعی پروژه‌های
            صنعتی، شبیه‌سازی تخصصی و آماده‌سازی کامل برای ورود به بازار کار و مدرک فنی و حرفه ای.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#courses"
              className="w-full sm:w-auto rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-yellow-400/25 transition-all hover:bg-yellow-300 hover:shadow-yellow-400/40"
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
              <div className="text-2xl md:text-4xl font-extrabold text-yellow-500">
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
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-500">
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
          <CourseCard
            title="دوره جامع PVsyst &  طراحی نیروگاه خورشیدی"
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
          <CourseCard
            title="نصب، اجرا و راه‌اندازی سیستم‌های فتوولتائیک"
            badge="سطح عملیاتی و کارگاهی فنی و حرفه ای"
            duration="۵۰ ساعت (تئوری + عملی)"
            description="دوره کاملاً کاربردی و کارگاهی مطابق استاندارد سازمان آموزش فنی و حرفه‌ای کشور. آموزش سیم‌کشی، تابلو برق، اینورترهای Growatt و تست‌های تحویل."
            features={[
              'آشنایی عملی با پلتفرم‌ها و اینورترهای Growatt',
              'سیم‌کشی DC/AC، صاعقه‌گیر و سیستم ارتینگ',
              'کار با ابزارهای تست سولار و تزریق به شبکه',
              'آماده‌سازی برای آزمون رسمی و مدرک فنی و حرفه ای',
            ]}
            link="/academy/courses/installation"
            isPopular={false}
          />
        </div>
      </section>

      {/* 4. WHY US / ADVANTAGES */}
      <section className="bg-gradient-to-b from-yellow-50/40 via-white to-white py-20 border-y border-yellow-100">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              چرا آموزشگاه یلدای سهند؟
            </h2>
            <p className="mt-3 text-gray-600">
              تفاوت ما در انتقال دانش عملیاتی از قلب پروژه‌های نیروگاهی است.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'مدرک معتبر فنی و حرفه ای',
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
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-500">
            کادر علمی و آموزشی
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            مدرسین دوره
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {/* Instructor 1: Dr. Naser Fathi */}
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-yellow-100 flex flex-col items-center text-center">
            <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-2xl border-2 border-yellow-300/60 shadow-md">
              <Image
                src="/img/Fathi.jpg"
                alt="دکتر ناصر فتحی"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 128px"
              />
            </div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-slate-900">
                دکتر ناصر فتحی
              </h3>
            </div>

            {/* Resume */}
            <div className="mt-5 w-full text-right">
              <p className="text-sm leading-relaxed text-gray-600">
                مدرس و پژوهشگر حوزه انرژی‌های تجدیدپذیر با تمرکز بر طراحی و ارزیابی فنی–اقتصادی
                نیروگاه‌های خورشیدی. تجربه تدریس دانشگاهی/کارگاهی و راهبری پروژه‌های شبیه‌سازی،
                استانداردسازی گزارش‌ها و تحلیل تلفات و عملکرد سیستم‌های PV.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700">
                <div className="rounded-xl bg-yellow-50 border border-yellow-200/60 px-3 py-2">
                  <span className="font-bold text-slate-900">حوزه‌ها:</span>{' '}
                  PVsyst، تحلیل تابش و تلفات، طراحی نیروگاه‌های On-Grid/Off-Grid
                </div>
                <div className="rounded-xl bg-yellow-50 border border-yellow-200/60 px-3 py-2">
                  <span className="font-bold text-slate-900">توانمندی‌ها:</span>{' '}
                  گزارش‌گیری ساتبا/سرمایه‌گذار، انتخاب تجهیزات و بهینه‌سازی استرینگ‌بندی
                </div>
              </div>
            </div>
          </div>

          {/* Instructor 2: Dr. Nazila Zarabinia */}
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-yellow-100 flex flex-col items-center text-center">
            <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-2xl border-2 border-yellow-300/60 shadow-md">
              <Image
                src="/img/Zarabinia.webp"
                alt="دکتر نازیلا ضرابی نیا"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 128px"
              />
            </div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-slate-900">
                دکتر نازیلا ضرابی نیا
              </h3>
            </div>

            {/* Resume */}
            <div className="mt-5 w-full text-right">
              <p className="text-sm leading-relaxed text-gray-600">
                متخصص آموزش و توسعه مهارت‌های مهندسی در حوزه انرژی خورشیدی با تمرکز بر
                اصول طراحی سیستم، استانداردهای ایمنی و کنترل کیفیت اجرا. تجربه آموزش
                ساختارمند، انتقال مفاهیم پیچیده به زبان ساده و همراهی هنرجویان تا رسیدن به خروجی قابل اجرا.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700">
                <div className="rounded-xl bg-yellow-50 border border-yellow-200/60 px-3 py-2">
                  <span className="font-bold text-slate-900">حوزه‌ها:</span>{' '}
                  طراحی سیستم PV، استانداردها و ایمنی، کنترل کیفیت و چک‌لیست‌های تحویل
                </div>
                <div className="rounded-xl bg-yellow-50 border border-yellow-200/60 px-3 py-2">
                  <span className="font-bold text-slate-900">توانمندی‌ها:</span>{' '}
                  آموزش پروژه‌محور، سناریوهای خطایابی رایج، آماده‌سازی هنرجو برای کارگاه و بازار کار
                </div>
              </div>
            </div>
          </div>

          {/* Instructor 3: Eng. Ariyan Sadraei */}
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-yellow-100 flex flex-col items-center text-center">
            <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-2xl border-2 border-yellow-300/60 shadow-md">
              <Image
                src="/img/Sadraei.jpg"
                alt="مهندس آریان صدرائی"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 128px"
              />
            </div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-slate-900">
                مهندس آریان صدرائی
              </h3>
            </div>

            {/* Resume */}
            <div className="mt-5 w-full text-right">
              <p className="text-sm leading-relaxed text-gray-600">
                متخصص انرژی‌های تجدیدپذیر و طراح سیستم‌های خورشیدی/هیبرید با تجربه اجرای پروژه‌های
                صنعتی و ارائه خروجی‌های مهندسی قابل اتکا. تمرکز بر معماری فنی پروژه، لیست تجهیزات،
                برآوردهای اقتصادی، و اتصال آموزش به نیاز واقعی بازار و پروژه‌های پیمانکاری.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700">
                <div className="rounded-xl bg-yellow-50 border border-yellow-200/60 px-3 py-2">
                  <span className="font-bold text-slate-900">حوزه‌ها:</span>{' '}
                  طراحی نیروگاه، سیستم‌های هیبرید، برآورد اقتصادی (IRR/LCOE)، مانیتورینگ
                </div>
                <div className="rounded-xl bg-yellow-50 border border-yellow-200/60 px-3 py-2">
                  <span className="font-bold text-slate-900">توانمندی‌ها:</span>{' '}
                  تهیه لیست تجهیزات، تحلیل سناریو، GIS/QGIS، استانداردسازی مستندات پروژه
                </div>
              </div>
            </div>
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
            <p className="mt-3 text-gray-600 text-sm md:text-base">
              پاسخ سریع به پرتکرارترین سوالات ثبت‌نام، مسیر یادگیری و خروجی دوره‌ها.
            </p>
          </div>

          <FAQ items={faqs} />
        </div>
      </section>

      {/* 7. CONSULTATION SECTION */}
      <section
        id="consultation"
        className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-zinc-900 to-yellow-950/70 py-20 text-white"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-400/10 px-4 py-2 text-xs md:text-sm font-semibold text-yellow-300 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-yellow-300 animate-pulse" />
              مشاوره تخصصی و رایگان
            </span>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              هنوز مسیر مناسب خودتان را <span className="text-yellow-300">پیدا نکرده‌اید؟</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              کارشناسان آموزشگاه یلدای سهند، با بررسی سطح دانش، هدف شغلی و زمان در دسترس شما،
              بهترین مسیر یادگیری (طراحی و PVsyst یا نصب و اجرا) را رایگان پیشنهاد می‌دهند؛
              بدون هیچ تعهدی برای ثبت‌نام.
            </p>

            {/* مراحل دریافت مشاوره */}
            <div className="mt-10 grid gap-4 text-right sm:grid-cols-3">
              {[
                {
                  step: '۱',
                  title: 'ثبت درخواست',
                  desc: 'فرم کوتاه مشاوره را تکمیل کنید.',
                },
                {
                  step: '۲',
                  title: 'تماس کارشناس',
                  desc: 'در کوتاه‌ترین زمان با شما تماس می‌گیریم.',
                },
                {
                  step: '۳',
                  title: 'مسیر پیشنهادی',
                  desc: 'دوره و برنامه مناسب شما مشخص می‌شود.',
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-sm font-black text-slate-950">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* دکمه‌های اقدام */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/solar"
                className="w-full sm:w-auto rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-yellow-400/25 transition-all hover:bg-yellow-300 hover:shadow-yellow-400/40"
              >
                تکمیل فرم مشاوره رایگان
              </Link>
              <Link
                href="tel:+984100000000"
                className="w-full sm:w-auto rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                تماس مستقیم با کارشناسان
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              اطلاعات شما محرمانه است و صرفاً برای ارائه مشاوره تخصصی استفاده می‌شود.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
