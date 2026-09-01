"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/01-pavilion-sunset-hero.jpg",
    alt: "Cottonpatch RV Park pavilion at sunset",
    caption: "Pavilion at Sunset",
  },
  {
    src: "/images/05-pavilion-rv-area.jpg",
    alt: "Pavilion and RV area overview at Cottonpatch RV Park",
    caption: "Pavilion & RV Area",
  },
  {
    src: "/images/06-pavilion-overview.jpg",
    alt: "Overview of the covered pavilion at Cottonpatch RV Park",
    caption: "Covered Pavilion",
  },
  {
    src: "/images/02-laundry-room.jpg",
    alt: "On-site laundry room at Cottonpatch RV Park",
    caption: "24/7 Laundry Room",
  },
  {
    src: "/images/03-convenience-store.jpg",
    alt: "On-site convenience store at Cottonpatch RV Park",
    caption: "On-Site Convenience Store",
  },
  {
    src: "/images/07-entrance-sign.jpg",
    alt: "Cottonpatch RV Park entrance sign in Rayville, Louisiana",
    caption: "Park Entrance",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next]);

  return (
    <section
      id="gallery"
      className="bg-cream-dark py-16 sm:py-20 lg:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3 font-sans">
            Photo Gallery
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-navy"
          >
            See the Park
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {images.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => openLightbox(idx)}
              className="block w-full rounded-xl overflow-hidden relative group cursor-zoom-in break-inside-avoid"
              aria-label={`View larger: ${img.caption}`}
            >
              <div className="relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 rounded-xl flex items-end p-3">
                  <span className="text-white text-xs font-sans font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-navy/60 px-2 py-1 rounded-md">
                    {img.caption}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${images[lightboxIndex].caption}`}
          onClick={closeLightbox}
        >
          {/* Image container */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              sizes="100vw"
              priority
            />
            {/* Caption */}
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/80 text-sm font-sans bg-black/40 px-3 py-1 rounded-full whitespace-nowrap">
              {images[lightboxIndex].caption}
            </p>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-sans">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}
