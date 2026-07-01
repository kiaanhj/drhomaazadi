import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhySection from "@/components/home/WhySection";
import ProcessSection from "@/components/home/ProcessSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "دکتر هما آزادی | روان‌شناس و مشاور خانواده در اصفهان",
  description:
    "دکتر هما آزادی، روان‌شناس دکترا با بیش از ۱۵ سال تجربه. مشاوره پیش از ازدواج، زوج‌درمانی، مشاوره فردی، خانواده‌درمانی، سکس‌تراپی و درمان وسواس در اصفهان.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
