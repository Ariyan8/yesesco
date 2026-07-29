"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { useRef, useState, MouseEvent, type ReactNode } from "react";

import logo1 from "../img/logo1.jpg";
import logo2 from "../img/logo2.jpg";

function SolarIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
      <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="3" />
      <path
        d="M32 6v6M32 28v6M18 20h6M40 20h6M22.5 10.5l4.2 4.2M37.3 25.3l4.2 4.2M41.5 10.5l-4.2 4.2M26.7 25.3l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 40h28l4 12H14l4-12Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M24 40V28h16v12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AcademyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
      <path
        d="M10 26l22-11 22 11-22 11-22-11Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M16 30v10c0 5 7 9 16 9s16-4 16-9V30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M54 26v16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M24 42v8c0 2 3 4 8 4s8-2 8-4v-8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/75 px-4 py-4 text-center shadow-[0_14px_40px_rgba(150,190,120,0.12)] backdrop-blur-md">
      <div className="text-2xl font-black tracking-tight text-black sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-semibold leading-5 text-black sm:text-sm">{label}</div>
    </div>
  );
}

function LogoSlot({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-[0_8px_24px_rgba(140,180,120,0.12)]">
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        className="h-full w-full object-contain p-1"
      />
    </div>
  );
}

function FeatureCard({
  href,
  title,
  description,
  icon,
  accentClass,
  glowClass,
  stats,
  logoSrc,
  logoAlt,
}: {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  accentClass: string;
  glowClass: string;
  stats: Array<{ value: string; label: string }>;
  logoSrc: StaticImageData;
  logoAlt: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  );
  const [glowStyle, setGlowStyle] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -7;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7;

    setTransformStyle(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
    setGlowStyle({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.22 });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
    setGlowStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <Link href={href} className="group block h-full w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle,
          transition: "transform 180ms ease-out, box-shadow 300ms ease, border-color 300ms ease",
        }}
        className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/75 shadow-[0_28px_90px_rgba(140,180,120,0.14)] backdrop-blur-xl"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${accentClass} opacity-90`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.65),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.45),transparent_34%)]" />
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 340px at ${glowStyle.x}% ${glowStyle.y}%, rgba(255,255,255,0.45), transparent 55%)`,
            opacity: glowStyle.opacity,
          }}
        />
        <div className={`absolute -left-16 top-[-5rem] h-56 w-56 rounded-full blur-3xl ${glowClass} opacity-35`} />
        <div className={`absolute -right-16 bottom-[-5rem] h-64 w-64 rounded-full blur-3xl ${glowClass} opacity-25`} />

        <div className="relative z-10 flex h-full min-h-[540px] flex-col justify-between p-6 text-black sm:p-8 lg:p-10">
          <div className="flex items-start justify-end">
            <LogoSlot src={logoSrc} alt={logoAlt} />
          </div>

          <div className="mx-auto w-full max-w-2xl text-center">
            <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-black/50 to-transparent" />
            <h2 className="text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-black sm:text-base lg:text-lg">
              {description}
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black shadow-[0_16px_40px_rgba(140,180,120,0.16)] transition-transform duration-300 group-hover:scale-[1.03]">
                ورود به بخش
                <ArrowIcon />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((item) => (
              <StatBox key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main
      dir="rtl"
      style={{ fontFamily: 'B Nazanin, BNazanin, "Times New Roman", serif' }}
      className="min-h-screen overflow-hidden bg-[#f8fff5] text-black selection:bg-yellow-300/40"
    >
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(74,222,128,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(253,224,71,0.18),transparent_34%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(132,204,22,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(132,204,22,0.08)_1px,transparent_1px)] [background-size:76px_76px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
          <section className="flex flex-1 items-center py-8 md:py-12">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <FeatureCard
                  href="/solar"
                  title="احداث نیروگاه‌های خورشیدی"
                  description="طراحی، مشاوره و اجرای پروژه‌های خورشیدی با تمرکز بر راندمان و آینده‌سازی در انرژی پاک."
                  icon={<SolarIcon />}
                  accentClass="from-yellow-200 via-amber-200 to-lime-200"
                  glowClass="bg-yellow-300"
                  logoSrc={logo1}
                  logoAlt="لوگو نیروگاه خورشیدی"
                  stats={[
                    { value: "200", label: "نیروگاه نصب‌شده" },
                    { value: "بیش از 10 مگاوات", label: "ظرفیت نصب‌شده" },
                  ]}
                />

                <FeatureCard
                  href="/academy"
                  title="آموزشگاه تخصصی خورشیدی"
                  description="دوره‌های کاربردی برای ورود به بازار کار و یادگیری مهارت‌های اجرایی در صنعت خورشیدی."
                  icon={<AcademyIcon />}
                  accentClass="from-emerald-200 via-green-200 to-yellow-200"
                  glowClass="bg-emerald-300"
                  logoSrc={logo2}
                  logoAlt="لوگو آموزشگاه"
                  stats={[
                    { value: "52", label: "دوره برگزارشده" },
                    { value: "1200", label: "دانش‌آموز و کارآموز" },
                  ]}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
