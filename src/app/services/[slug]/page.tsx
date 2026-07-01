import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Heart,
  Users,
  User,
  Home,
  Brain,
  HeartCrack,
  ClipboardList,
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowLeft,
  Clock,
  Banknote,
  ChevronDown,
} from "lucide-react";
import { SERVICES, WHATSAPP_LINK, PHONE_NUMBER, SESSION_INFO } from "@/lib/constants";
import CTASection from "@/components/home/CTASection";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Users,
  User,
  Home,
  Brain,
  HeartCrack,
  ClipboardList,
};

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} در اصفهان | دکتر هما آزادی`,
    description: service.metaDesc || service.desc,
    openGraph: {
      title: `${service.title} | دکتر هما آزادی — روان‌شناس اصفهان`,
      description: service.metaDesc || service.desc,
      type: "article",
    },
    alternates: {
      canonical: `https://drhomaazadi.ir/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Heart;
  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: `${service.title} | دکتر هما آزادی`,
        description: service.metaDesc || service.desc,
        url: `https://drhomaazadi.ir/services/${service.slug}`,
        inLanguage: "fa",
        about: {
          "@type": "MedicalCondition",
          name: service.title,
        },
        author: {
          "@type": "Person",
          name: "دکتر هما آزادی",
          jobTitle: "روان‌شناس",
          url: "https://drhomaazadi.ir/about",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "خانه", item: "https://drhomaazadi.ir" },
          { "@type": "ListItem", position: 2, name: "خدمات", item: "https://drhomaazadi.ir/services" },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://drhomaazadi.ir/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs?.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })) ?? [],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="pt-36 pb-20 bg-brand-surface relative overflow-hidden"
        aria-labelledby="service-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(117,68,55,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          {/* Breadcrumb */}
          <nav aria-label="مسیر ناوبری" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-brand-text-muted flex-wrap">
              <li>
                <Link href="/" className="hover:text-brand-primary transition-colors">
                  خانه
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-40">/</li>
              <li>
                <Link href="/services" className="hover:text-brand-primary transition-colors">
                  خدمات
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-40">/</li>
              <li className="text-brand-primary font-medium" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Main content */}
            <div className="lg:col-span-3">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "rgba(117,68,55,0.1)" }}
                aria-hidden="true"
              >
                <Icon size={30} className="text-brand-primary" />
              </div>

              <h1
                id="service-heading"
                className="text-4xl md:text-5xl font-bold text-brand-accent mb-5"
                style={{ lineHeight: "1.3" }}
              >
                {service.title}
              </h1>
              <p className="text-xl text-brand-text-muted leading-relaxed mb-0">
                {service.desc}
              </p>
            </div>

            {/* Booking card */}
            <aside className="lg:col-span-2">
              <div
                className="rounded-3xl p-8 sticky top-28"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 8px 32px rgba(40,55,74,0.10)",
                }}
              >
                <h2 className="font-bold text-brand-accent text-lg mb-6">
                  رزرو وقت مشاوره
                </h2>

                {/* Session info */}
                <ul className="flex flex-col gap-3 mb-6" role="list">
                  <li className="flex items-center gap-3 text-sm text-brand-text-muted">
                    <Clock size={16} className="text-brand-primary shrink-0" aria-hidden="true" />
                    <span>مدت جلسه: {SESSION_INFO.duration}</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-brand-text-muted">
                    <Banknote size={16} className="text-brand-primary shrink-0" aria-hidden="true" />
                    <span>هزینه: {SESSION_INFO.fee}</span>
                  </li>
                </ul>
                <p className="text-xs text-brand-text-muted/60 mb-6">
                  {SESSION_INFO.feeNote}
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn whatsapp-btn-lg w-full justify-center"
                    aria-label={`رزرو وقت مشاوره ${service.title} از طریق واتساپ`}
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    رزرو از طریق واتساپ
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="frosted-glass-btn frosted-glass-btn-lg w-full justify-center"
                    aria-label={`تماس مستقیم: ${PHONE_NUMBER}`}
                  >
                    <Phone size={18} aria-hidden="true" />
                    تماس مستقیم
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== LONG CONTENT ===== */}
      {service.longDesc && service.longDesc.length > 0 && (
        <article className="section-padding" aria-labelledby="article-heading">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <h2 id="article-heading" className="sr-only">
              اطلاعات تخصصی {service.title}
            </h2>
            <div className="flex flex-col gap-12">
              {service.longDesc.map((section, i) => (
                <section key={i} aria-label={section.heading}>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-accent mb-4">
                    {section.heading}
                  </h3>
                  <div
                    className="w-10 h-0.5 bg-brand-primary/30 mb-5"
                    aria-hidden="true"
                  />
                  <p className="text-brand-text-muted leading-[1.95] text-[1.0625rem]">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </article>
      )}

      {/* ===== FOR WHOM ===== */}
      {service.forWho && service.forWho.length > 0 && (
        <section
          className="section-padding bg-brand-surface"
          aria-labelledby="for-who-heading"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2
              id="for-who-heading"
              className="text-2xl md:text-3xl font-bold text-brand-accent mb-3"
            >
              این خدمت برای چه کسانی است؟
            </h2>
            <div className="w-12 h-0.5 bg-brand-primary/30 mb-8" aria-hidden="true" />
            <ul
              className="grid sm:grid-cols-2 gap-4"
              role="list"
              aria-label={`چه کسانی از ${service.title} بهره می‌برند`}
            >
              {service.forWho.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-white/70 rounded-2xl p-5"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-brand-text-muted text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== BENEFITS ===== */}
      <section className="section-padding" aria-labelledby="benefits-heading">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2
            id="benefits-heading"
            className="text-2xl md:text-3xl font-bold text-brand-accent mb-3"
          >
            چه دستاوردی خواهید داشت؟
          </h2>
          <div className="w-12 h-0.5 bg-brand-primary/30 mb-8" aria-hidden="true" />
          <ul
            className="grid sm:grid-cols-2 gap-4"
            role="list"
            aria-label="دستاوردهای مشاوره"
          >
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 bg-brand-surface rounded-2xl p-5"
              >
                <div
                  className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <CheckCircle2 size={14} className="text-brand-primary" />
                </div>
                <span className="text-brand-text-muted leading-relaxed text-sm">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      {service.faqs && service.faqs.length > 0 && (
        <section
          className="section-padding bg-brand-surface"
          aria-labelledby="service-faq-heading"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <h2
              id="service-faq-heading"
              className="text-2xl md:text-3xl font-bold text-brand-accent mb-3"
            >
              سؤالات متداول
            </h2>
            <div className="w-12 h-0.5 bg-brand-primary/30 mb-8" aria-hidden="true" />
            <dl className="flex flex-col gap-4">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white/80 rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(117,68,55,0.08)" }}
                >
                  <dt className="font-bold text-brand-accent px-6 pt-5 pb-3 text-sm md:text-base">
                    {faq.q}
                  </dt>
                  <dd className="text-brand-text-muted px-6 pb-5 text-sm leading-relaxed">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ===== OTHER SERVICES ===== */}
      <section className="section-padding" aria-labelledby="other-services-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2
            id="other-services-heading"
            className="text-2xl font-bold text-brand-accent mb-8"
          >
            سایر خدمات تخصصی
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => {
              const OtherIcon = iconMap[s.icon] || Heart;
              return (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="group bg-brand-surface rounded-2xl p-6 hover:bg-white hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  aria-label={`${s.title}: ${s.shortDesc}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center mb-4 group-hover:bg-brand-primary/10 transition-colors"
                    aria-hidden="true"
                  >
                    <OtherIcon size={20} className="text-brand-primary" />
                  </div>
                  <h3 className="font-bold text-brand-accent group-hover:text-brand-primary transition-colors mb-2 text-sm">
                    {s.title}
                  </h3>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    {s.shortDesc}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all duration-200"
            >
              مشاهده همه خدمات
              <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
