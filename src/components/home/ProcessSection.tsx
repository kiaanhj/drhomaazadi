import { PROCESS_STEPS } from "@/lib/constants";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section
      className="section-padding bg-brand-surface"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">
            فرآیند درمان
          </p>
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-bold text-brand-accent mb-4"
          >
            مسیر تحول چگونه است؟
          </h2>
          <p className="text-brand-text-muted max-w-lg mx-auto leading-relaxed">
            از اولین تماس تا رسیدن به زندگی بهتر، در هر قدم کنارتان هستم.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 right-[12.5%] left-[12.5%] h-px bg-brand-secondary/20"
            aria-hidden="true"
          />

          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            aria-label="مراحل درمان"
          >
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.number} className="relative text-center">
                {/* Number bubble */}
                <div className="relative inline-flex items-center justify-center">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto ${
                      i === 0
                        ? "bg-brand-primary text-white shadow-primary"
                        : "bg-brand-bg border-2 border-brand-secondary/20 text-brand-secondary"
                    }`}
                    aria-hidden="true"
                  >
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-brand-accent mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold text-base px-10 py-4 rounded-full hover:bg-brand-primary-dark transition-all duration-200 hover:shadow-primary active:scale-95"
            aria-label="همین حالا شروع کنید - رزرو وقت از طریق واتساپ"
          >
            همین حالا شروع کنید
          </a>
        </div>
      </div>
    </section>
  );
}
