import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "مقالات روان‌شناسی | دکتر هما آزادی — اصفهان",
  description:
    "مقالات علمی و آموزشی در حوزه روان‌شناسی خانواده، زوج‌درمانی، مشاوره پیش از ازدواج و سلامت روان از دکتر هما آزادی.",
  alternates: {
    canonical: "https://drhomaazadi.ir/articles",
  },
};

export default function ArticlesPage() {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="pt-36 pb-16 bg-brand-surface"
        aria-labelledby="articles-heading"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <nav aria-label="مسیر ناوبری" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-brand-text-muted">
              <li>
                <Link href="/" className="hover:text-brand-primary transition-colors">
                  خانه
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-40">/</li>
              <li className="text-brand-primary font-medium" aria-current="page">
                مقالات
              </li>
            </ol>
          </nav>
          <p className="text-sm font-semibold text-brand-primary tracking-widest uppercase mb-3">
            مقالات علمی
          </p>
          <h1
            id="articles-heading"
            className="text-4xl md:text-5xl font-bold text-brand-accent mb-4"
          >
            دانش‌نامه روان‌شناسی
          </h1>
          <p className="text-brand-text-muted max-w-xl leading-relaxed text-lg">
            مقالات آموزشی و علمی برای آشنایی بیشتر با حوزه‌های مشاوره و
            روان‌شناسی. نوشته دکتر هما آزادی.
          </p>
        </div>
      </section>

      {/* ===== FEATURED ARTICLE ===== */}
      <section className="pt-12 pb-0" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 id="featured-heading" className="sr-only">مقاله ویژه</h2>
          <Link
            href={`/articles/${featured.slug}`}
            className="group block bg-brand-primary rounded-3xl p-8 md:p-12 hover:shadow-primary transition-all duration-300"
            aria-label={`مطالعه مقاله: ${featured.title}`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-xs font-semibold text-white/70 bg-white/15 px-3 py-1.5 rounded-full mb-5">
                  {featured.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-white/90 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                  مطالعه مقاله
                  <ArrowLeft size={16} aria-hidden="true" className="group-hover:-translate-x-1 transition-transform" />
                </span>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar size={14} aria-hidden="true" />
                  <time dateTime={featured.date}>{featured.date}</time>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock size={14} aria-hidden="true" />
                  <span>{featured.readTime} مطالعه</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== ARTICLES GRID ===== */}
      <section className="section-padding" aria-labelledby="articles-list-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2
            id="articles-list-heading"
            className="text-xl font-bold text-brand-accent mb-8"
          >
            همه مقالات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article) => (
              <article
                key={article.id}
                className="group bg-brand-surface rounded-3xl overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                style={{ border: "1px solid rgba(211,199,173,0.3)" }}
                aria-labelledby={`article-${article.id}-title`}
              >
                {/* Top accent */}
                <div
                  className="h-1.5 bg-gradient-to-l from-brand-primary/60 to-brand-secondary/40"
                  aria-hidden="true"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-brand-text-muted">
                      <Clock size={12} aria-hidden="true" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3
                    id={`article-${article.id}-title`}
                    className="text-base font-bold text-brand-accent mb-3 group-hover:text-brand-primary transition-colors leading-snug"
                  >
                    {article.title}
                  </h3>

                  <p className="text-sm text-brand-text-muted leading-relaxed mb-5">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-brand-text-muted/60">
                      <Calendar size={12} aria-hidden="true" />
                      <time dateTime={article.date}>{article.date}</time>
                    </div>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:gap-2 transition-all duration-200"
                      aria-label={`مطالعه مقاله: ${article.title}`}
                    >
                      بیشتر بخوانید
                      <ArrowLeft size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
