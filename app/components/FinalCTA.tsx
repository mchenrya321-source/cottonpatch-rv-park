import { Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="bg-navy py-12 sm:py-16 lg:py-24 relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #c95d2f 0%, transparent 60%), radial-gradient(circle at 80% 50%, #4a6741 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-rust-light font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3 font-sans">
          Get Started
        </p>
        <h2
          id="final-cta-heading"
          className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight"
        >
          Ready to Make Cottonpatch Your Home Base?
        </h2>
        <p className="text-white/65 text-sm sm:text-lg mb-5 font-sans">
          Monthly and short-term RV sites are available now in Rayville,
          Louisiana.
        </p>

        {/* Rate callout */}
        <div className="inline-flex items-baseline gap-2 mb-8 sm:mb-10">
          <span className="font-display text-3xl sm:text-5xl font-bold text-white">
            $1,000
          </span>
          <span className="text-white/60 text-base sm:text-lg font-sans">/month</span>
          <span className="text-white/40 text-sm font-sans">· Short-term: call for rates</span>
        </div>

        {/* Phone CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="tel:+13184178435"
            className="inline-flex items-center gap-3 bg-rust hover:bg-rust-dark text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-colors duration-200 text-lg sm:text-xl shadow-xl w-full sm:w-auto justify-center"
          >
            <Phone size={22} aria-hidden="true" />
            Call to Reserve
          </a>
          <p className="text-white/50 text-sm font-sans">
            (318) 417-8435 — Open 24 Hours
          </p>
        </div>
      </div>
    </section>
  );
}
