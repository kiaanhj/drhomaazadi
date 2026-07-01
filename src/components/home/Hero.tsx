"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";
import { WHATSAPP_LINK, STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative min-h-dvh flex flex-col justify-center pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* === BACKGROUND IMAGE === */}
      {/* Replace /images/hero-bg.jpg with your actual photo path */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          onError={() => {/* silently use fallback color */}}
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-brand-bg/70" />
        {/* Warm gradient vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 10% 60%, rgba(117,68,55,0.15) 0%, transparent 65%), radial-gradient(ellipse 50% 80% at 90% 10%, rgba(40,55,74,0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* ======= CONTENT ======= */}
          <div className="order-2 lg:order-1">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-brand-accent">
                بیش از ۱۰,۰۰۰ مراجع موفق
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-accent leading-tight mb-6"
              style={{ lineHeight: "1.35" }}
            >
              روابط سالم از یک{" "}
              <span className="text-brand-primary">تصمیم آگاهانه</span>{" "}
              آغاز می‌شوند.
            </h1>

            <p className="text-lg text-brand-text-muted leading-relaxed mb-8 max-w-lg">
              اگر در رابطه عاطفی، زندگی مشترک یا تصمیم برای ازدواج با چالش
              روبه‌رو هستید، اینجا فضایی امن، علمی و بدون قضاوت برای شنیدن،
              درک شدن و یافتن راه‌حل است.
            </p>

            {/* Trust points */}
            <ul className="flex flex-col gap-3 mb-10" role="list">
              {[
                "بیش از ۱۵ سال تجربه بالینی",
                "دکترای روان‌شناسی عمومی",
                "مشاوره حضوری و آنلاین",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-brand-primary shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-brand-text-muted font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* PRIMARY — Liquid Glass */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn whatsapp-btn-lg"
                aria-label="رزرو وقت مشاوره از طریق واتساپ"
              >
                <MessageCircle size={20} aria-hidden="true" />
                رزرو وقت مشاوره
              </a>

              {/* SECONDARY — Frosted Glass */}
              <Link
                href="/about"
                className="frosted-glass-btn frosted-glass-btn-lg"
                aria-label="آشنایی با دکتر هما آزادی"
              >
                آشنایی با دکتر آزادی
                <ArrowLeft size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* ======= DOCTOR PHOTO ======= */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-3xl border border-white/20"
                aria-hidden="true"
              />
              {/* Photo frame */}
              <div
                className="relative w-72 h-96 md:w-80 md:h-[440px] lg:w-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-card"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {/* Doctor photo — Replace /images/doctor.jpg with actual photo */}
                <Image
                  src="/images/doctor-hero.png"
                  alt="دکتر هما آزادی، روان‌شناس"
                  fill
                  priority
                  quality={95}
                  className="object-cover object-top"
                />

                {/* Credential badge at bottom */}
                <div
                  className="absolute bottom-4 right-4 left-4 rounded-2xl p-3"
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  <p className="text-xs font-bold text-brand-accent">دکتر هما آزادی</p>
                  <p className="text-xs text-brand-text-muted">
                    PhD روان‌شناسی • مدرس دانشگاه نجف‌آباد
                  </p>
                  <p className="text-xs text-brand-text-muted/60 mt-0.5">
                    رویکرد PTC | نظام: ۱۷۱۱۸۴۸
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-4"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
          aria-label="آمار و دستاوردها"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="py-6 px-4 text-center"
              style={{ background: "rgba(211,199,173,0.5)" }}
            >
              <p className="text-3xl font-bold text-brand-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-brand-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
