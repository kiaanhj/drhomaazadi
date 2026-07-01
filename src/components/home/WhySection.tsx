import { VALUES } from "@/lib/constants";

export default function WhySection() {
  return (
    <section
      className="section-padding bg-brand-accent text-white"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-brand-bg/60 tracking-widest uppercase mb-4">
              چرا دکتر آزادی؟
            </p>
            <h2
              id="why-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ lineHeight: "1.4" }}
            >
              یک رابطه درمانی
              <br />
              <span className="text-brand-bg">بر پایه اعتماد</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              در هر جلسه، هدف اصلی ایجاد فضایی است که در آن احساس امنیت،
              پذیرش و درک کامل داشته باشید. درمان بدون قضاوت، همدلانه و کاملاً
              مبتنی بر علم روان‌شناسی ارائه می‌شود.
            </p>
            <div className="space-y-4">
              {[
                "حریم خصوصی و محرمانگی کامل",
                "جلسات حضوری و آنلاین",
                "امکان مشاوره اضطراری",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full bg-brand-primary/80 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values grid */}
          <div
            className="grid grid-cols-2 gap-4"
            role="list"
            aria-label="ارزش‌های بنیادین"
          >
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                role="listitem"
                className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-200 ${
                  i === 0 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <h3 className="font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
