import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Users,
  User,
  Home,
  Shield,
  Brain,
  HeartCrack,
  ClipboardList,
  ArrowLeft,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Users,
  User,
  Home,
  Shield,
  Brain,
  HeartCrack,
  ClipboardList,
};

export default function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="services-heading">
      {/* Misty background photo */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/services-bg.jpg"
          alt=""
          fill
          quality={85}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-bg/82" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">
            خدمات تخصصی
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-brand-accent mb-4"
          >
            چه کمکی می‌توانم به شما بکنم؟
          </h2>
          <p className="text-brand-text-muted max-w-xl mx-auto leading-relaxed">
            هر مشکل راه‌حلی دارد. در اینجا می‌توانید مشاوره تخصصی در حوزه‌های
            مختلف روان‌شناسی دریافت کنید.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Heart;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative bg-brand-surface rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer"
                aria-label={`${service.title}: ${service.shortDesc}`}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <Icon
                    size={24}
                    className="text-brand-primary"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-brand-accent mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-text-muted leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-brand-primary text-sm font-medium">
                  <span>بیشتر بدانید</span>
                  <ArrowLeft
                    size={16}
                    aria-hidden="true"
                    className="group-hover:translate-x-[-4px] transition-transform duration-200"
                  />
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 right-0 left-0 h-0.5 bg-brand-primary rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-text-muted hover:text-brand-primary transition-colors duration-200 font-medium"
            aria-label="مشاهده همه خدمات"
          >
            مشاهده همه خدمات
            <ArrowLeft size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
