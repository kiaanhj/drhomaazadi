import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { WHATSAPP_LINK } from "@/lib/constants";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | دکتر هما آزادی`,
    description: article.metaDesc,
    openGraph: {
      title: article.title,
      description: article.metaDesc,
      type: "article",
      publishedTime: article.date,
      authors: ["دکتر هما آزادی"],
    },
    alternates: {
      canonical: `https://drhomaazadi.ir/articles/${article.slug}`,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDesc,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "دکتر هما آزادی",
      url: "https://drhomaazadi.ir/about",
      jobTitle: "روان‌شناس",
    },
    publisher: {
      "@type": "Organization",
      name: "دکتر هما آزادی",
      url: "https://drhomaazadi.ir",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://drhomaazadi.ir/articles/${article.slug}`,
    },
    inLanguage: "fa",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "خانه", item: "https://drhomaazadi.ir" },
        { "@type": "ListItem", position: 2, name: "مقالات", item: "https://drhomaazadi.ir/articles" },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `https://drhomaazadi.ir/articles/${article.slug}`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="pt-36 pb-12 bg-brand-surface"
        aria-labelledby="article-heading"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          {/* Breadcrumb */}
          <nav aria-label="مسیر ناوبری" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-brand-text-muted flex-wrap">
              <li>
                <Link href="/" className="hover:text-brand-primary transition-colors">
                  خانه
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-40">/</li>
              <li>
                <Link href="/articles" className="hover:text-brand-primary transition-colors">
                  مقالات
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-40">/</li>
              <li className="text-brand-primary font-medium truncate max-w-[200px]" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Category */}
          <span className="inline-block text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-full mb-5">
            {article.category}
          </span>

          <h1
            id="article-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-accent mb-6"
            style={{ lineHeight: "1.4" }}
          >
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-5 text-sm text-brand-text-muted mb-8 flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="font-medium text-brand-accent">دکتر هما آزادی</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={article.date}>{article.date}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} aria-hidden="true" />
              <span>{article.readTime} مطالعه</span>
            </span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-brand-secondary/10" aria-hidden="true" />
        </div>
      </section>

      {/* ===== ARTICLE BODY ===== */}
      <article aria-label={article.title}>
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-12">
          {/* Intro */}
          <p
            className="text-lg md:text-xl text-brand-text-muted leading-[1.95] mb-12 font-medium"
            style={{ borderRight: "3px solid var(--color-primary)", paddingRight: "1.25rem" }}
          >
            {article.intro}
          </p>

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {article.sections.map((section, i) => (
              <section key={i} aria-label={section.heading}>
                <h2
                  className="text-xl md:text-2xl font-bold text-brand-accent mb-4"
                >
                  {section.heading}
                </h2>
                <div
                  className="w-10 h-0.5 mb-5"
                  style={{ background: "rgba(117,68,55,0.25)" }}
                  aria-hidden="true"
                />
                <p
                  className="text-brand-text-muted leading-[1.95] text-[1.0625rem]"
                >
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div
            className="mt-12 rounded-2xl p-6"
            style={{
              background: "rgba(117,68,55,0.06)",
              border: "1px solid rgba(117,68,55,0.12)",
            }}
          >
            <p className="text-brand-text-muted leading-relaxed text-sm md:text-base">
              <strong className="text-brand-accent font-bold">جمع‌بندی: </strong>
              {article.conclusion}
            </p>
          </div>

          {/* Author card */}
          <div
            className="mt-10 rounded-2xl p-6 flex items-center gap-5"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(211,199,173,0.5)",
              boxShadow: "0 2px 12px rgba(40,55,74,0.06)",
            }}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-sm">
              <Image
                src="/images/doctor-reading.png"
                alt="دکتر هما آزادی"
                width={56}
                height={56}
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-bold text-brand-accent text-sm">
                دکتر هما آزادی
              </p>
              <p className="text-brand-text-muted text-xs mt-0.5">
                PhD روان‌شناسی | مشاور خانواده و زوج | شماره نظام ۱۷۱۱۸۴۸
              </p>
            </div>
          </div>

          {/* CTA inline */}
          <div
            className="mt-10 rounded-3xl p-8 text-center"
            style={{
              background: "rgba(117,68,55,0.06)",
              border: "1px solid rgba(117,68,55,0.12)",
            }}
          >
            <p className="font-bold text-brand-accent text-lg mb-2">
              نیاز به مشاوره دارید؟
            </p>
            <p className="text-brand-text-muted text-sm mb-6">
              با دکتر هما آزادی در ارتباط باشید.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              aria-label="رزرو وقت مشاوره از طریق واتساپ"
            >
              <MessageCircle size={16} aria-hidden="true" />
              رزرو وقت مشاوره
            </a>
          </div>
        </div>
      </article>

      {/* ===== RELATED ARTICLES ===== */}
      {related.length > 0 && (
        <section
          className="section-padding bg-brand-surface"
          aria-labelledby="related-heading"
        >
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <h2
              id="related-heading"
              className="text-xl font-bold text-brand-accent mb-8"
            >
              مقالات مرتبط
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/articles/${rel.slug}`}
                  className="group bg-white rounded-2xl p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(211,199,173,0.4)" }}
                  aria-label={`مطالعه مقاله: ${rel.title}`}
                >
                  <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-full">
                    {rel.category}
                  </span>
                  <h3 className="font-bold text-brand-accent mt-3 mb-2 text-sm leading-snug group-hover:text-brand-primary transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-brand-text-muted leading-relaxed mb-4">
                    {rel.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary">
                    بیشتر بخوانید
                    <ArrowLeft size={12} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all duration-200"
              >
                همه مقالات
                <ArrowLeft size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
