"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-bg/80 backdrop-blur-xl shadow-soft border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20"
          aria-label="ناوبری اصلی"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight group"
            aria-label="صفحه اصلی دکتر هما آزادی"
          >
            <span className="text-lg font-bold text-brand-accent group-hover:text-brand-primary transition-colors duration-200">
              دکتر هما آزادی
            </span>
            <span className="text-xs text-brand-text-muted font-medium">
              روان‌شناس | مشاور خانواده
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-brand-text-muted hover:text-brand-primary transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-primary transition-colors duration-200 font-medium"
              aria-label={`تماس: ${PHONE_NUMBER}`}
            >
              <Phone size={15} aria-hidden="true" />
              <span>{PHONE_NUMBER}</span>
            </a>
            {/* Liquid Glass CTA button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              aria-label="رزرو وقت مشاوره"
            >
              رزرو وقت
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 rounded-xl hover:bg-brand-surface transition-colors duration-200 touch-manipulation"
            aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X size={24} className="text-brand-accent" />
            ) : (
              <Menu size={24} className="text-brand-accent" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-brand-bg/95 backdrop-blur-2xl z-50 lg:hidden transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="منوی ناوبری"
      >
        {/* Close button inside */}
        <div className="flex items-center justify-between p-6 border-b border-brand-secondary/15">
          <span className="font-bold text-brand-accent">دکتر هما آزادی</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl hover:bg-brand-surface transition-colors touch-manipulation"
            aria-label="بستن منو"
          >
            <X size={20} className="text-brand-accent" />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-1" aria-label="منوی موبایل">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-brand-text py-3.5 px-4 rounded-xl hover:bg-brand-surface hover:text-brand-primary transition-all duration-200 touch-manipulation"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 right-0 left-0 p-6 border-t border-brand-secondary/15">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-3 text-brand-text-muted py-3 px-4 rounded-xl hover:bg-brand-surface transition-all mb-3 touch-manipulation"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} aria-hidden="true" />
            <span className="font-medium">{PHONE_NUMBER}</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="whatsapp-btn w-full text-center block"
          >
            رزرو وقت مشاوره
          </a>
        </div>
      </div>
    </>
  );
}
