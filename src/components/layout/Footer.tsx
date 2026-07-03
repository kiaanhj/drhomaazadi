import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Shield } from "lucide-react";
import {
  PHONE_NUMBER,
  WHATSAPP_LINK,
  EMAIL,
  ADDRESS,
  LICENSE_NUMBER,
  NEZAM_NUMBER,
  SERVICES,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="bg-brand-accent text-white/80"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        پاورقی سایت
      </h2>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="group">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-bg transition-colors duration-200">
                دکتر هما آزادی
              </h3>
              <p className="text-sm text-white/50 mb-4">
                روان‌شناس دکترا | مشاور خانواده و زوج
              </p>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm mb-6">
              ارتقای کیفیت زندگی افراد و زوج‌ها از طریق درمان علمی، همدلی و
              ایجاد فضایی امن، محرمانه و بدون قضاوت.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Shield size={14} />
              <span>شماره پروانه اشتغال: {LICENSE_NUMBER} | شماره نظام روانشناسی: {NEZAM_NUMBER}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">خدمات</h4>
            <ul className="space-y-2" role="list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">تماس با ما</h4>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  aria-label={`تماس با شماره ${PHONE_NUMBER}`}
                >
                  <Phone size={15} className="shrink-0" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  aria-label="ارسال پیام واتساپ"
                >
                  <MessageCircle size={15} className="shrink-0" />
                  <span>واتساپ</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Mail size={15} className="shrink-0" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} className="shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-brand-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-brand-primary-dark transition-all duration-200 hover:shadow-primary active:scale-95"
            >
              رزرو وقت مشاوره
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} دکتر هما آزادی — تمامی حقوق محفوظ
            است.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-white/60 transition-colors"
            >
              حریم خصوصی
            </Link>
            <span>|</span>
            <Link
              href="/sitemap.xml"
              className="hover:text-white/60 transition-colors"
            >
              نقشه سایت
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
