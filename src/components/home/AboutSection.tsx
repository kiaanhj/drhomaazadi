import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Award, GraduationCap, Building2, Sparkles } from "lucide-react";

export default function AboutSection() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "دکترای روان‌شناسی عمومی",
      detail: "دانشگاه شهرکرد",
    },
    {
      icon: Award,
      title: "مجوز رسمی نظام روان‌شناسی",
      detail: "شماره: ۱۷۱۱۸۴۸",
    },
    {
      icon: Building2,
      title: "مدرس دانشگاه نجف‌آباد",
      detail: "تدریس در حوزه روان‌شناسی",
    },
    {
      icon: Sparkles,
      title: "مرکز مشاوره دانشگاه اصفهان",
      detail: "رویکردها: CBT، CBCT، ACT، PTC، طرحواره درمانی",
    },
  ];

  return (
    <section
      className="section-padding relative"
      aria-labelledby="about-heading"
      style={{
        background:
          "linear-gradient(135deg, #E8E4D9 0%, #D8CEBC 40%, #C9BFA8 70%, #D3C7AD 100%)",
      }}
    >
      {/* Subtle radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 85% 15%, rgba(117,68,55,0.09) 0%, transparent 65%), radial-gradient(ellipse 50% 60% at 5% 85%, rgba(40,55,74,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Photo */}
          <div className="relative flex justify-center">
            {/* Decorative offset frame */}
            <div
              className="absolute top-6 right-6 w-full h-full rounded-3xl border-2 border-brand-primary/20"
              aria-hidden="true"
            />
            <div className="relative w-full aspect-[4/5] max-w-md rounded-3xl overflow-hidden shadow-card">
              <Image
                src="/images/doctor-about.png"
                alt="دکتر هما آزادی، روان‌شناس و مشاور خانواده"
                fill
                quality={95}
                className="object-cover object-top"
              />
              {/* Bottom frosted name badge */}
              <div
                className="absolute bottom-4 right-4 left-4 rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.80)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                }}
              >
                <p className="text-sm font-bold text-brand-accent">دکتر هما آزادی</p>
                <p className="text-xs text-brand-text-muted">PhD روان‌شناسی | مشاور خانواده و زوج</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-4">
              درباره دکتر آزادی
            </p>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-brand-accent mb-6"
              style={{ lineHeight: "1.4" }}
            >
              بیش از یک دهه در کنار
              <br />
              <span className="text-brand-primary">هزاران نفر</span>
            </h2>
            <div className="divider" aria-hidden="true" />

            <p className="text-brand-text-muted leading-relaxed mb-4">
              دکتر هما آزادی با بیش از ۱۵ سال تجربه بالینی در حوزه روان‌شناسی
              خانواده و زوج‌درمانی، یکی از متخصصان برجسته این حوزه در اصفهان
              است.
            </p>
            <p className="text-brand-text-muted leading-relaxed mb-8">
              رویکرد درمانی ایشان بر اساس جدیدترین روش‌های علمی مبتنی بر شواهد
              است و با همدلی، احترام و بدون هیچ‌گونه قضاوتی ارائه می‌شود. هدف
              اصلی ایجاد فضایی امن است که در آن مراجع بتواند آزادانه صحبت کرده
              و راه‌حل‌های واقعی بیابد.
            </p>

            {/* Credentials */}
            <ul className="flex flex-col gap-4 mb-8" role="list">
              {credentials.map((cred) => (
                <li key={cred.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <cred.icon size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-accent text-sm">
                      {cred.title}
                    </p>
                    <p className="text-brand-text-muted text-sm">{cred.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="frosted-glass-btn"
              aria-label="بیشتر درباره دکتر هما آزادی بدانید"
            >
              بیشتر درباره دکتر آزادی
              <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
