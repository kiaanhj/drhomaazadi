import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/constants";

export default function CTASection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/session-bg.jpg"
          alt=""
          fill
          quality={85}
          className="object-cover object-center"
        />
        {/* Dark warm overlay */}
        <div className="absolute inset-0 bg-brand-primary/80" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ lineHeight: "1.4" }}
        >
          قدم اول را بردارید.
          <br />
          <span className="text-white/70 text-2xl md:text-3xl font-medium">
            ما اینجاییم.
          </span>
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          مشاوره گرفتن نشانه قدرت است. امروز با یک پیام ساده، اولین قدم به
          سمت تغییر را بردارید.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn whatsapp-btn-lg"
            aria-label="رزرو وقت از طریق واتساپ"
          >
            <MessageCircle size={20} aria-hidden="true" />
            رزرو وقت از طریق واتساپ
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="frosted-glass-btn frosted-glass-btn-lg !text-white !border-white/30 hover:!border-white/60"
            aria-label={`تماس مستقیم: ${PHONE_NUMBER}`}
          >
            <Phone size={20} aria-hidden="true" />
            تماس مستقیم
          </a>
        </div>

        <p className="text-white/40 text-sm mt-8">
          پاسخگویی: شنبه تا چهارشنبه، ساعت ۹ تا ۱۸
        </p>
      </div>
    </section>
  );
}
