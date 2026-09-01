"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Amenities", href: "#amenities" },
  { label: "Rates", href: "#rates" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy shadow-lg shadow-navy-dark/20"
            : "bg-navy/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex-shrink-0 flex items-center gap-2"
              aria-label="Cottonpatch RV Park — go to top"
            >
              <Image
                src="/images/cottonpatch-logo.png"
                alt="Cottonpatch RV Park"
                width={140}
                height={48}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors duration-200 rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="tel:+13184178435"
                className="inline-flex items-center gap-2 bg-rust hover:bg-rust-dark text-white font-semibold px-5 py-2.5 rounded-md transition-colors duration-200 text-sm"
              >
                <Phone size={15} aria-hidden="true" />
                Call to Reserve
              </a>
            </div>

            {/* Mobile: call icon + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:+13184178435"
                className="inline-flex items-center gap-1.5 bg-rust hover:bg-rust-dark text-white font-semibold px-3 py-2 rounded-md transition-colors duration-200 text-sm"
                aria-label="Call to reserve"
              >
                <Phone size={15} aria-hidden="true" />
                <span className="hidden xs:inline">Call</span>
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md text-cream/80 hover:text-cream hover:bg-navy-light transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 border-t border-navy-light/40" : "max-h-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <nav className="bg-navy px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-3 px-2 text-base font-medium text-cream/80 hover:text-cream border-b border-navy-light/30 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+13184178435"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-rust hover:bg-rust-dark text-white font-semibold px-5 py-3 rounded-md transition-colors duration-200"
            >
              <Phone size={16} aria-hidden="true" />
              Call to Reserve — (318) 417-8435
            </a>
          </nav>
        </div>
      </header>

      {/* Spacer to offset fixed header */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
}
