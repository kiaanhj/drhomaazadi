import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Navigation,
} from "lucide-react";
import {
  PHONE_NUMBER,
  WHATSAPP_LINK,
  EMAIL,
  CLINICS,
  SESSION_INFO,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "تماس و آدرس مطب | دکتر هما آزادی — روان‌شناس اصفهان",
  description:
    "آدرس مطب‌های دکتر هما آزادی در اصفهان: مرکز باور پویا، مرکز به‌رویان، مرکز مشاوره دانشگاه اصفهان. رزرو وقت از طریق واتساپ.",
  alternates: {
    canonical: "https://drhomaazadi.ir/contact",
  },
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: "واتساپ",
    desc: "سریع‌ترین راه برای رزرو وقت",
    action: "ارسال پیام",
    href: WHATSAPP_LINK,
    external: true,
    highlight: true,
  },
  {
    icon: Phone,
    title: "تلفن",
    desc: PHONE_NUMBER,
    action: "تماس بگیرید",
    href: `tel:${PHONE_NUMBER}`,
    external: false,
    highlight: false,
  },
  {
    icon: Mail,
    title: "ایمیل",
    desc: EMAIL,
    action: "ارسال ایمیل",
    href: `mailto:${EMAIL}`,
    external: false,
    highlight: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "تماس با دکتر هما آزادی",
            url: "https://drhomaazadi.ir/contact",
            mainEntity: {
              "@type": "Physician",
              name: "دکتر هما آزادی",
              telephone: PHONE_NUMBER,
              email: EMAIL,
              address: CLINICS.map((c) => ({
                "@type": "PostalAddress",
                addressLocality: "اصفهان",
                streetAddress: c.address,
                addressCountry: "IR",
              })),
            },
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section
        className="pt-36 pb-16 bg-brand-surface"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <nav aria-label="مسیر ناوبری" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-brand-text-muted">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-primary transition-colors"
                >
                  خانه
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-40">/</li>
              <li
                className="text-brand-primary font-medium"
                aria-current="page"
              >
                تماس
              </li>
            </ol>
          </nav>
          <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">
            تماس با ما
          </p>
          <h1
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-brand-accent mb-4"
            style={{ lineHeight: "1.3" }}
          >
            برای رزرو وقت در تماس باشید
          </h1>
          <p className="text-brand-text-muted max-w-xl leading-relaxed text-lg">
            اولین قدم آسان است. کافی است یک پیام بفرستید تا زمان مناسب برای
            شما هماهنگ شود.
          </p>
        </div>
      </section>

      {/* ===== CONTACT METHODS ===== */}
      <section
        className="section-padding"
        aria-labelledby="contact-methods-heading"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2
            id="contact-methods-heading"
            className="text-2xl font-bold text-brand-accent mb-8"
          >
            روش‌های تماس
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            {contactMethods.map((m) => (
              <a
                key={m.title}
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noopener noreferrer" : undefined}
                className={`group rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1 ${
                  m.highlight
                    ? "bg-brand-primary hover:shadow-primary"
                    : "bg-brand-surface hover:bg-white hover:shadow-card"
                }`}
                aria-label={`${m.title}: ${m.action}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    m.highlight ? "bg-white/20" : "bg-brand-bg"
                  }`}
                  aria-hidden="true"
                >
                  <m.icon
                    size={24}
                    className={m.highlight ? "text-white" : "text-brand-primary"}
                  />
                </div>
                <h3
                  className={`font-bold mb-1 ${
                    m.highlight ? "text-white" : "text-brand-accent"
                  }`}
                >
                  {m.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    m.highlight ? "text-white/70" : "text-brand-text-muted"
                  }`}
                >
                  {m.desc}
                </p>
                <span
                  className={`text-sm font-semibold ${
                    m.highlight ? "text-white" : "text-brand-primary"
                  }`}
                >
                  {m.action} ←
                </span>
              </a>
            ))}
          </div>

          {/* Session info bar */}
          <div
            className="rounded-2xl px-6 py-4 flex flex-wrap gap-6 items-center"
            style={{
              background: "rgba(117,68,55,0.06)",
              border: "1px solid rgba(117,68,55,0.12)",
            }}
          >
            <div className="flex items-center gap-2 text-sm text-brand-text-muted">
              <Clock size={16} className="text-brand-primary" aria-hidden="true" />
              <span>مدت جلسه: {SESSION_INFO.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-brand-text-muted">
              <span className="text-brand-primary font-bold text-base">₺</span>
              <span>تعرفه: {SESSION_INFO.fee}</span>
            </div>
            <p className="text-xs text-brand-text-muted/60">
              {SESSION_INFO.feeNote}
            </p>
          </div>
        </div>
      </section>

      {/* ===== CLINICS ===== */}
      <section
        className="section-padding bg-brand-surface"
        aria-labelledby="clinics-heading"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2
            id="clinics-heading"
            className="text-2xl md:text-3xl font-bold text-brand-accent mb-3"
          >
            مطب‌های دکتر آزادی در اصفهان
          </h2>
          <div className="w-12 h-0.5 bg-brand-primary/30 mb-10" aria-hidden="true" />

          <div className="grid md:grid-cols-1 gap-6" role="list">
            {CLINICS.map((clinic) => (
              <article
                key={clinic.id}
                className="bg-white rounded-3xl p-8 flex flex-col md:flex-row md:items-start gap-6"
                style={{
                  boxShadow: "0 2px 16px rgba(40,55,74,0.06)",
                  border: "1px solid rgba(211,199,173,0.4)",
                }}
                aria-label={`کلینیک ${clinic.name}`}
              >
                {/* Number badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-brand-primary font-bold text-xl"
                  style={{ background: "rgba(117,68,55,0.08)" }}
                  aria-hidden="true"
                >
                  {clinic.id}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-brand-accent mb-4">
                    {clinic.name}
                  </h3>

                  <ul className="flex flex-col gap-3" role="list">
                    <li className="flex items-start gap-3">
                      <MapPin
                        size={17}
                        className="text-brand-primary shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-brand-text-muted text-sm leading-relaxed">
                        {clinic.address}
                      </p>
                    </li>

                    <li className="flex items-center gap-3">
                      <Phone
                        size={17}
                        className="text-brand-primary shrink-0"
                        aria-hidden="true"
                      />
                      <a
                        href={`tel:${clinic.phone}`}
                        className="text-brand-text-muted text-sm hover:text-brand-primary transition-colors font-medium"
                        aria-label={`تماس با ${clinic.name}: ${clinic.phone}`}
                      >
                        {clinic.phone}
                      </a>
                    </li>

                    <li className="flex items-center gap-3">
                      <Clock
                        size={17}
                        className="text-brand-primary shrink-0"
                        aria-hidden="true"
                      />
                      <p className="text-brand-text-muted text-sm">
                        {clinic.hours}
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-row md:flex-col gap-3 shrink-0">
                  <a
                    href={`tel:${clinic.phone}`}
                    className="frosted-glass-btn text-sm px-4 py-2.5"
                    aria-label={`تماس با ${clinic.name}`}
                  >
                    <Phone size={14} aria-hidden="true" />
                    تماس
                  </a>
                  <a
                    href={clinic.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="frosted-glass-btn text-sm px-4 py-2.5"
                    aria-label={`مسیریابی به ${clinic.name}`}
                  >
                    <Navigation size={14} aria-hidden="true" />
                    مسیریابی
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-brand-text-muted/60 text-sm mt-8">
            * برای اطمینان از حضور دکتر آزادی در هر مطب، لطفاً از طریق واتساپ
            یا تلفن زمان را تأیید کنید.
          </p>
        </div>
      </section>

      {/* ===== ONLINE ===== */}
      <section
        className="section-padding"
        aria-labelledby="online-heading"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2
                id="online-heading"
                className="text-2xl md:text-3xl font-bold text-brand-accent mb-4"
              >
                مشاوره آنلاین
              </h2>
              <div className="w-12 h-0.5 bg-brand-primary/30 mb-6" aria-hidden="true" />
              <p className="text-brand-text-muted leading-relaxed mb-4">
                اگر در اصفهان نیستید یا ترجیح می‌دهید از منزل مشاوره بگیرید،
                جلسات آنلاین با همان کیفیت جلسات حضوری در دسترس هستند.
              </p>
              <p className="text-brand-text-muted leading-relaxed">
                جلسات آنلاین از طریق واتساپ، تلگرام، Google Meet یا تماس
                تلفنی برگزار می‌شوند. کافی است موقع رزرو نوع مشاوره (آنلاین/حضوری)
                را ذکر کنید.
              </p>
            </div>

            <div
              className="rounded-3xl p-8 text-center"
              style={{
                background: "rgba(117,68,55,0.06)",
                border: "1px solid rgba(117,68,55,0.12)",
              }}
            >
              <p className="text-brand-primary font-bold text-lg mb-2">
                برای مراجعان سراسر ایران
              </p>
              <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                از تهران، شیراز، تبریز، مشهد یا هر شهر دیگری می‌توانید آنلاین
                مشاوره بگیرید.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="رزرو وقت مشاوره آنلاین"
              >
                <MessageCircle size={16} aria-hidden="true" />
                رزرو وقت آنلاین
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
