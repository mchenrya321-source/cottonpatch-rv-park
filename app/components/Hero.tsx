import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Cottonpatch RV Park"
    >
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/01-pavilion-sunset-hero.jpg"
          alt="Cottonpatch RV Park pavilion at sunset, Rayville, Louisiana"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Layered overlay: darker at top/bottom, letting sunset show in middle */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,28,48,0.85) 0%, rgba(15,28,48,0.55) 45%, rgba(15,28,48,0.70) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Eyebrow */}
        <p className="inline-block text-rust-light font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-sans">
          Welcome to Cottonpatch RV Park
        </p>

        {/* Heading */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Comfortable Monthly RV&nbsp;Living in&nbsp;Rayville,{" "}
          <span className="text-rust-light">Louisiana</span>
        </h1>

        {/* Supporting text */}
        <p className="text-cream/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Newly built, spacious RV sites with full hookups, high-speed internet,
          24/7 laundry and private bathrooms — just 2&nbsp;miles from the Meta
          data center project.
        </p>

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 bg-green/30 border border-green-light/50 text-green-light px-4 py-1.5 rounded-full text-sm font-medium mb-8 font-sans">
          <span className="w-2 h-2 rounded-full bg-green-light animate-pulse" aria-hidden="true" />
          Sites Available Now
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+13184178435"
            className="inline-flex items-center gap-2.5 bg-rust hover:bg-rust-dark text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 text-base w-full sm:w-auto justify-center shadow-lg"
          >
            <Phone size={18} aria-hidden="true" />
            Call to Reserve
          </a>
          <a
            href="#amenities"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 text-base w-full sm:w-auto justify-center"
          >
            View Amenities
          </a>
        </div>

        {/* Rate teaser */}
        <p className="mt-8 text-cream/60 text-sm font-sans">
          Flat monthly rate of{" "}
          <span className="text-cream/90 font-semibold">$1,000/month</span> —
          no hidden fees.
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#info-strip"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
