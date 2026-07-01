"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="faq"
      aria-labelledby="faq-heading"
    >
      {/* Warm brown background photo */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/faq-bg.webp"
          alt=""
          fill
          quality={85}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-surface/85" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">
            سؤالات متداول
          </p>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-brand-accent mb-4"
          >
            پاسخ سؤال‌های شما
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            اگر سؤالی دارید که اینجا نیست، آزادانه با ما در تماس باشید.
          </p>
        </div>

        <dl className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`bg-brand-surface rounded-2xl overflow-hidden transition-all duration-200 ${
                openIndex === i ? "shadow-card" : "hover:shadow-soft"
              }`}
            >
              <dt>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-right cursor-pointer touch-manipulation"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="font-semibold text-brand-accent text-sm md:text-base">
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      openIndex === i
                        ? "bg-brand-primary text-white"
                        : "bg-brand-bg text-brand-secondary"
                    }`}
                    aria-hidden="true"
                  >
                    {openIndex === i ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm text-brand-text-muted leading-relaxed">
                  {faq.a}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
