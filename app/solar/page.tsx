"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Components ---

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatCard({ title, value, description }: { title: string; value: string; description: string }) {
  return (
    <div className="rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-[0_18px_50px_rgba(120,160,100,0.12)] backdrop-blur-xl">
      <div className="text-sm font-bold text-slate-500">{title}</div>
      <div className="mt-2 text-3xl font-black text-slate-900">{value}</div>
      <div className="mt-2 text-sm leading-6 text-slate-600">{description}</div>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
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

// --- Main Page Component ---

export default function SolarPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    capacity: "",
    mountType: "roof", // roof | ground
  });

  const steps = [
    {
      id: "personal",
      label: "اطلاعات فردی",
      fields: (
        <div className="space-y-4">
          <label className="block text-sm font-bold text-slate-700">نام و نام خانوادگی متقاضی</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-slate-200 bg-white/50 p-4 outline-none focus:border-lime-500"
            placeholder="مثال: آرین صدرایی"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>
      ),
    },
    {
      id: "contact",
      label: "اطلاعات تماس",
      fields: (
        <div className="space-y-4">
          <label className="block text-sm font-bold text-slate-700">شماره همراه جهت هماهنگی</label>
          <input
            type="tel"
            dir="ltr"
            className="w-full rounded-2xl border border-slate-200 bg-white/50 p-4 outline-none focus:border-lime-500 text-right"
            placeholder="0912XXXXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      ),
    },
    {
      id: "location",
      label: "محل پروژه",
      fields: (
        <div className="space-y-4">
          <label className="block text-sm font-bold text-slate-700">استان و شهر محل احداث</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-slate-200 bg-white/50 p-4 outline-none focus:border-lime-500"
            placeholder="مثال: اصفهان، آران و بیدگل"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
      ),
    },
    {
      id: "technical",
      label: "جزییات فنی",
      fields: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">نوع محل نصب</label>
            <div className="flex gap-3">
              <button
                onClick={() => setFormData({...formData, mountType: 'roof'})}
                className={`flex-1 p-4 rounded-2xl border transition-all ${formData.mountType === 'roof' ? 'bg-lime-500 text-white border-lime-600' : 'bg-white border-slate-200'}`}
              >
                پشت‌بام (سوله/مسکونی)
              </button>
              <button
                onClick={() => setFormData({...formData, mountType: 'ground'})}
                className={`flex-1 p-4 rounded-2xl border transition-all ${formData.mountType === 'ground' ? 'bg-lime-500 text-white border-lime-600' : 'bg-white border-slate-200'}`}
              >
                زمین کشاورزی/صنعتی
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">ظرفیت مد نظر (کیلووات)</label>
            <input
              type="number"
              className="w-full rounded-2xl border border-slate-200 bg-white/50 p-4 outline-none focus:border-lime-500"
              placeholder="مثال: 100"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            />
          </div>
        </div>
      ),
    },
  ];

  const nextStep = () => step < steps.length - 1 && setStep(step + 1);
  const prevStep = () => step > 0 && setStep(step - 1);
  const handleSubmit = () => alert("اطلاعات با موفقیت ثبت شد. تیم فنی با شما تماس می‌گیرد.");

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#f8fff5] text-slate-900 font-[vazir,sans-serif]"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(74,222,128,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(253,224,71,0.18),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Right Section: Hero Info */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2.5rem] border border-white/80 bg-white/70 p-7 shadow-[0_28px_90px_rgba(140,180,120,0.14)] backdrop-blur-xl sm:p-10"
          >
             <span className="inline-flex rounded-full bg-yellow-200 px-4 py-2 text-xs font-bold text-slate-900">
              ثبت درخواست احداث نیروگاه خورشیدی
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              سرمایه‌گذاری در
              <span className="mx-2 inline-block bg-gradient-to-r from-lime-600 to-emerald-500 bg-clip-text text-transparent">
                انرژی پاک
              </span>
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              برای دریافت طرح توجیهی و برآورد دقیق بازگشت سرمایه (IRR) پروژه خود، اطلاعات زیر را مرحله به مرحله تکمیل نمایید.
            </p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-lime-100">
                    <div className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-white">1</div>
                    <span className="text-sm font-bold">بررسی فنی محل پروژه</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-lime-100">
                    <div className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-white">2</div>
                    <span className="text-sm font-bold">طراحی با PVsyst و AutoCAD</span>
                </div>
            </div>
          </motion.div>

          {/* Left Section: Multi-step Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/80 shadow-[0_28px_90px_rgba(140,180,120,0.14)] backdrop-blur-xl min-h-[500px] flex flex-col"
          >
            {/* Progress Bar */}
            <div className="h-2 w-full bg-slate-100">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-lime-500 to-emerald-500"
                />
            </div>

            <div className="p-8 flex-1">
                <div className="mb-8">
                    <span className="text-xs font-bold text-lime-600 uppercase tracking-wider">مرحله {step + 1} از {steps.length}</span>
                    <h2 className="text-2xl font-black text-slate-900 mt-1">{steps[step].label}</h2>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {steps[step].fields}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-between gap-4">
                <button
                    onClick={prevStep}
                    disabled={step === 0}
                    className={`px-8 py-4 rounded-2xl font-bold transition-all ${step === 0 ? 'opacity-0' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                    قبلی
                </button>
                {step === steps.length - 1 ? (
                    <button
                        onClick={handleSubmit}
                        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-lime-600 to-emerald-600 text-white font-bold shadow-lg shadow-lime-200 hover:scale-105 transition-all"
                    >
                        ثبت نهایی درخواست
                    </button>
                ) : (
                    <button
                        onClick={nextStep}
                        className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                    >
                        مرحله بعدی
                        <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}
            </div>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="mt-16 text-center">
            <h2 className="text-3xl font-black text-slate-900">فرآیند اجرایی نیروگاه</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <ProcessStep number="01" title="بررسی محل" description="ارزیابی وضعیت تابش و سایه‌اندازی در محل پیشنهادی." />
                <ProcessStep number="02" title="طراحی مهندسی" description="تهیه نقشه‌ها و لیست تجهیزات (Inverter, Panel)." />
                <ProcessStep number="03" title="نصب و راه‌اندازی" description="اجرای پروژه طبق استانداردهای توانیر و ساتبا." />
            </div>
        </section>
      </div>
    </main>
  );
}
