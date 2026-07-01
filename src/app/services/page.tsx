import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, User, Home, Shield, Brain, ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "خدمات مشاوره | دکتر هما آزادی",
  description:
    "خدمات تخصصی دکتر هما آزادی: مشاوره پیش از ازدواج، زوج‌درمانی، مشاوره فردی، خانواده‌درمانی، سکس‌تراپی و درمان وسواس در اصفهان.",
};

const iconMap: Record<string, React.ElementType> = {
  Heart, Users, User, Home, Shield, Brain,
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-brand-surface" aria-labelledby="services-page-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <nav aria-label="مسیر ناوبری" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-brand-text-muted">
              <li><Link href="/" className="hover:text-brand-primary transition-colors">خانه</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-primary font-medium" aria-current="page">خدمات</li>
            </ol>
          </nav>
          <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">خدمات تخصصی</p>
          <h1 id="services-page-heading" className="text-4xl md:text-5xl font-bold text-brand-accent mb-4">
            چه کمکی می‌توانم به شما کنم؟
          </h1>
          <p className="text-brand-text-muted max-w-xl leading-relaxed">
            هر مشکل راه‌حلی دارد. با رویکرد علمی و همدلانه، در حوزه‌های مختلف روان‌شناسی کنارتان هستم.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Heart;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-brand-surface rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                  aria-label={`${service.title}: ${service.shortDesc}`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center shrink-0 group-hover:bg-brand-primary/10 transition-colors duration-300" aria-hidden="true">
                      <Icon size={28} className="text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-brand-accent mb-2 group-hover:text-brand-primary transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-brand-text-muted leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-2 text-brand-primary text-sm font-semibold">
                        <span>مشاهده جزئیات</span>
                        <ArrowLeft size={16} aria-hidden="true" className="group-hover:translate-x-[-4px] transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
