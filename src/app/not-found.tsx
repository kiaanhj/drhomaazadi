import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-dvh flex items-center justify-center pt-20">
      <div className="text-center px-6">
        <p className="text-8xl font-bold text-brand-primary/20 mb-4" aria-hidden="true">
          ۴۰۴
        </p>
        <h1 className="text-3xl font-bold text-brand-accent mb-4">
          صفحه پیدا نشد
        </h1>
        <p className="text-brand-text-muted mb-8 max-w-md mx-auto">
          صفحه‌ای که دنبال آن می‌گردید وجود ندارد یا جابجا شده است.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-primary-dark transition-all duration-200 active:scale-95"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </section>
  );
}
