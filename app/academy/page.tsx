// file: app/academy/page.tsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'آموزشگاه یلدای سهند | دوره‌های تخصصی انرژی خورشیدی',
};

// کامپوننت معرفی یک دوره
interface CourseCardProps {
  title: string;
  shortDescription: string;
  duration: string;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, shortDescription, duration, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-indigo-100 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold text-indigo-700 mb-2">{title}</h3>
      <p className="text-sm font-medium text-gray-500 mb-4">مدت دوره: {duration}</p>
      <p className="text-gray-600 mb-6">{shortDescription}</p>
    </div>
    <Link href={link} className="inline-block">
      <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
        مشاهده جزئیات و ثبت‌نام
      </button>
    </Link>
  </div>
);

export default function AcademyPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      
      {/* عنوان اصلی */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700">آموزشگاه یلدای سهند</h1>
        <p className="text-lg text-gray-600 mt-2">تربیت متخصصین نسل آینده‌ی انرژی با تمرکز بر استانداردهای TVTO و بازار کار.</p>
      </div>

      {/* لیست دوره‌ها */}
      <div className="grid md:grid-cols-3 gap-8">
        
        <CourseCard
          title="دوره جامع PVsyst"
          shortDescription="آموزش طراحی و شبیه‌سازی سیستم‌های فتوولتائیک با استفاده از نرم‌افزار استاندارد جهانی PVsyst."
          duration="۳۰ ساعت"
          link="/academy/courses/pvsyst"
        />
        
        <CourseCard
          title="نصب و راه‌اندازی نیروگاه‌های کوچک"
          shortDescription="دوره عملیاتی مطابق با سرفصل‌های فنی و حرفه‌ای (TVTO) برای کسب گواهینامه نصاب خورشیدی."
          duration="۵۰ ساعت"
          link="/academy/courses/installation"
        />
        
        <CourseCard
          title="مهندسی GIS در انرژی‌های تجدیدپذیر"
          shortDescription="آموزش QGIS و PostGIS برای مکان‌یابی بهینه، تحلیل تابش خورشید و مدیریت پروژه‌های بزرگ."
          duration="۲۰ ساعت"
          link="/academy/courses/gis"
        />
        
      </div>

      {/* بخش مزایای آموزشگاه */}
      <div className="mt-16 bg-indigo-50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">چرا آموزشگاه یلدای سهند؟</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-none text-gray-700">
          <li className="flex items-center"><span className="text-indigo-500 text-xl ml-2">✔</span> ارائه گواهینامه معتبر TVTO</li>
          <li className="flex items-center"><span className="text-indigo-500 text-xl ml-2">✔</span> تدریس توسط متخصصین با تجربه‌ی اجرایی (مانند آقای آریان صدرایی)</li>
          <li className="flex items-center"><span className="text-indigo-500 text-xl ml-2">✔</span> تمرین عملی با تجهیزات و اینورترهای Growatt</li>
          <li className="flex items-center"><span className="text-indigo-500 text-xl ml-2">✔</span> سرفصل‌های به‌روز منطبق با نیاز بازار کار ایران</li>
        </ul>
      </div>

    </div>
  );
}
