import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Heart,
  Clock,
  Users,
  Shield,
  Sparkles,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";
import { LICENSE_NUMBER, VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "درباره دکتر هما آزادی | روان‌شناس اصفهان",
  description:
    "آشنایی با دکتر هما آزادی، روان‌شناس دکترا با بیش از ۱۵ سال تجربه در مشاوره خانواده و زوج‌درمانی در اصفهان. شماره نظام: " +
    LICENSE_NUMBER,
};

export default function AboutPage() {
  const highlights = [
    { icon: Clock, value: "۱۵+", label: "سال تجربه" },
    { icon: Users, value: "۱۰,۰۰۰+", label: "مراجع موفق" },
    { icon: Heart, value: "۶", label: "حوزه تخصصی" },
    { icon: Shield, value: "۱۰۰٪", label: "محرمانگی" },
  ];

  const education = [
    {
      degree: "دکترای روان‌شناسی عمومی",
      university: "دانشگاه شهرکرد",
      icon: GraduationCap,
    },
    {
      degree: "مجوز رسمی سازمان نظام روان‌شناسی",
      university: `شماره پروانه: ${LICENSE_NUMBER}`,
      icon: Award,
    },
    {
      degree: "مدرس دانشگاه",
      university: "دانشگاه نجف‌آباد",
      icon: GraduationCap,
    },
    {
      degree: "مرکز مشاوره دانشگاه اصفهان",
      university: "رویکردها: CBT، CBCT، ACT، PTC، طرحواره درمانی",
      icon: Sparkles,
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "خانه",
                item: "https://drhomaazadi.ir",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "درباره دکتر آزادی",
                item: "https://drhomaazadi.ir/about",
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        className="pt-36 pb-20 bg-brand-surface"
        aria-labelledby="about-page-heading"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <nav aria-label="مسیر ناوبری" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-brand-text-muted">
              <li>
                <Link href="/" className="hover:text-brand-primary transition-colors">
                  خانه
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-primary font-medium" aria-current="page">
                درباره دکتر آزادی
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-4">
                درباره من
              </p>
              <h1
                id="about-page-heading"
                className="text-4xl md:text-5xl font-bold text-brand-accent mb-6"
                style={{ lineHeight: "1.3" }}
              >
                دکتر هما آزادی
              </h1>
              <p className="text-xl text-brand-text-muted mb-2">
                روان‌شناس دکترا | مشاور خانواده و زوج | مدرس دانشگاه نجف‌آباد
              </p>
              <div className="divider" aria-hidden="true" />
              <p className="text-brand-text-muted leading-relaxed mb-4">
                من دکتر هما آزادی هستم، روان‌شناس با بیش از ۱۵ سال تجربه در
                حوزه مشاوره خانواده، زوج‌درمانی و مشاوره فردی. هدفم این است که
                فضایی امن، گرم و بدون قضاوت ایجاد کنم که در آن شما بتوانید
                آزادانه صحبت کنید.
              </p>
              <p className="text-brand-text-muted leading-relaxed">
                رویکرد درمانی من بر اساس جدیدترین روش‌های علمی مبتنی بر شواهد
                است. باور دارم که هر کسی، صرف نظر از مشکل و شرایطش، توانایی
                تغییر و رشد دارد. این باور قلب کار من است.
              </p>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute top-6 right-6 w-full h-full rounded-3xl border-2 border-brand-primary/15" aria-hidden="true" />
                <div
                  className="relative w-72 h-96 md:w-80 md:h-[440px] rounded-3xl overflow-hidden shadow-card"
                  aria-label="عکس دکتر هما آزادی"
                >
                  <Image
                    src="/images/doctor-about.png"
                    alt="دکتر هما آزادی، روان‌شناس و مشاور خانواده"
                    fill
                    quality={95}
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute bottom-4 right-4 left-4 rounded-2xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.82)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.6)" }}
                  >
                    <p className="text-xs font-bold text-brand-accent">دکتر هما آزادی</p>
                    <p className="text-xs text-brand-text-muted">روان‌شناس | مشاور خانواده و زوج</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-bg py-12" aria-label="آمار و دستاوردها">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <div
                  className="w-12 h-12 rounded-2xl bg-brand-surface mx-auto mb-3 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <h.icon size={22} className="text-brand-primary" />
                </div>
                <p className="text-3xl font-bold text-brand-primary mb-1">
                  {h.value}
                </p>
                <p className="text-sm text-brand-text-muted">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & License */}
      <section className="section-padding" aria-labelledby="education-heading">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2
            id="education-heading"
            className="text-2xl font-bold text-brand-accent mb-8"
          >
            تحصیلات، مجوزها و رویکرد درمانی
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-brand-surface rounded-2xl p-6 flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <edu.icon size={22} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-accent mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-brand-text-muted">{edu.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section-padding bg-brand-surface"
        aria-labelledby="values-heading"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2
            id="values-heading"
            className="text-2xl font-bold text-brand-accent mb-8 text-center"
          >
            ارزش‌های من در کار درمانی
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-brand-bg rounded-2xl p-5"
              >
                <h3 className="font-bold text-brand-primary mb-2">{v.title}</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
