import { Phone, CheckCircle2 } from "lucide-react";

const included = [
  "Full electric hookup (30 or 50 amp)",
  "Water and sewer connections",
  "High-speed internet access",
  "24/7 laundry facility",
  "Private bathrooms and showers",
  "Access to covered pavilion and outdoor areas",
  "On-site convenience store access",
];

export default function Rates() {
  return (
    <section
      id="rates"
      className="bg-navy py-16 sm:py-20 lg:py-24"
      aria-labelledby="rates-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section label */}
          <p className="text-rust-light font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3 font-sans">
            Pricing
          </p>
          <h2
            id="rates-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Simple Monthly Pricing
          </h2>
          <p className="text-white/60 text-base sm:text-lg font-sans mb-10">
            One flat rate. No surprises.
          </p>

          {/* Rate card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 mb-8">
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-end justify-center gap-2 mb-1">
                <span className="font-display text-6xl sm:text-7xl font-bold text-white leading-none">
                  $1,000
                </span>
              </div>
              <p className="text-rust-light font-semibold tracking-wide font-sans text-lg">
                Per Month — Flat Rate
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-6" aria-hidden="true" />

            {/* What's included */}
            <p className="text-white/70 font-semibold text-xs tracking-[0.15em] uppercase mb-4 font-sans">
              Included with Every Site
            </p>
            <ul
              className="grid sm:grid-cols-2 gap-2.5 text-left mb-8"
              aria-label="What is included"
            >
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="text-green-light mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/80 text-sm font-sans">{item}</span>
                </li>
              ))}
            </ul>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-green/20 border border-green-light/30 text-green-light px-4 py-1.5 rounded-full text-sm font-medium mb-8 font-sans">
              <span className="w-2 h-2 rounded-full bg-green-light" aria-hidden="true" />
              Sites Available Now — Now Accepting Monthly Stays
            </div>

            {/* CTA */}
            <div>
              <a
                href="tel:+13184178435"
                className="inline-flex items-center justify-center gap-2.5 bg-rust hover:bg-rust-dark text-white font-bold px-10 py-4 rounded-md transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto shadow-lg"
              >
                <Phone size={18} aria-hidden="true" />
                Call (318) 417-8435
              </a>
            </div>
            <p className="text-white/35 text-xs mt-4 font-sans">
              Online booking coming soon.
            </p>
          </div>

          <p className="text-white/40 text-sm font-sans">
            Have questions? Give us a call and we&rsquo;ll walk you through
            everything.
          </p>
        </div>
      </div>
    </section>
  );
}
