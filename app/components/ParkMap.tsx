"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, ZoomIn, X } from "lucide-react";

export default function ParkMap() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="bg-cream py-10 sm:py-16 lg:py-24"
      aria-labelledby="map-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── MOBILE: compact stacked layout ────────────────────────────── */}
        <div className="md:hidden">
          <p className="text-rust font-semibold text-xs tracking-[0.18em] uppercase mb-2 font-sans">
            Park Layout
          </p>
          <h2
            id="map-heading"
            className="font-display text-2xl font-bold text-navy mb-3"
          >
            Spacious Sites, Thoughtfully Laid Out
          </h2>
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="relative w-full rounded-xl overflow-hidden shadow group cursor-zoom-in mb-3"
            aria-label="View park map larger"
          >
            <Image
              src="/images/04-park-map.jpg"
              alt="Cottonpatch RV Park site layout map"
              width={900}
              height={680}
              className="w-full h-auto object-contain"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/0 group-active:bg-navy/15 transition-colors flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-2 opacity-70">
                <ZoomIn size={16} className="text-navy" aria-hidden="true" />
              </div>
            </div>
          </button>
          <p className="text-navy/40 text-xs text-center mb-4 font-sans">Tap to enlarge</p>
          <a
            href="tel:+13184178435"
            className="inline-flex items-center gap-2 bg-rust hover:bg-rust-dark text-white font-semibold px-5 py-3 rounded-md transition-colors duration-200 text-sm w-full justify-center"
          >
            <Phone size={15} aria-hidden="true" />
            Call About Available Sites
          </a>
        </div>

        {/* ─── DESKTOP: side-by-side layout ───────────────────────────────── */}
        <div className="hidden md:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3 font-sans">
              Park Layout
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-5">
              Spacious Sites, Thoughtfully Laid Out
            </h2>
            <p className="text-navy/70 text-base sm:text-lg leading-relaxed mb-5 font-sans">
              Cottonpatch RV Park offers wide, pull-in-friendly sites with room
              to breathe. Every site includes full utility connections so you
              can settle in and stay comfortable for the long term.
            </p>
            <p className="text-navy/65 text-base leading-relaxed mb-8 font-sans">
              Call us to ask about current site availability and find the best
              spot for your setup.
            </p>
            <a
              href="tel:+13184178435"
              className="inline-flex items-center gap-2.5 bg-rust hover:bg-rust-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors duration-200"
            >
              <Phone size={16} aria-hidden="true" />
              Call About Available Sites
            </a>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="relative w-full rounded-xl overflow-hidden shadow-lg group cursor-zoom-in"
              aria-label="View park map larger"
            >
              <Image
                src="/images/04-park-map.jpg"
                alt="Cottonpatch RV Park site layout map"
                width={900}
                height={680}
                className="w-full h-auto object-contain"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/0 group-hover:bg-white/90 rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md">
                  <ZoomIn size={20} className="text-navy" aria-hidden="true" />
                </div>
              </div>
            </button>
            <p className="text-navy/40 text-xs text-center mt-2 font-sans">
              Click to view larger
            </p>
          </div>
        </div>
      </div>

      {/* Expanded map modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Park map enlarged view"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/04-park-map.jpg"
              alt="Cottonpatch RV Park site layout map — enlarged"
              width={1200}
              height={900}
              className="w-full h-auto object-contain rounded-lg"
              sizes="100vw"
              priority
            />
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/25 rounded-full text-white transition-colors"
              aria-label="Close map"
            >
              <X size={22} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
