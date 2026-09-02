import { MapPin, Phone, HardHat } from "lucide-react";

export default function MetaLocation() {
  return (
    <section
      className="bg-cream py-10 sm:py-16 lg:py-24"
      aria-labelledby="meta-location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <HardHat size={16} className="text-rust" aria-hidden="true" />
            <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase font-sans">
              Workforce &amp; Contractor Friendly
            </p>
          </div>

          <h2
            id="meta-location-heading"
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5 md:mb-6 leading-tight"
          >
            Stay Close to the{" "}
            <span className="text-rust">Meta Data Center</span> Project
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Main copy */}
            <div className="md:col-span-2">
              <p className="text-navy/75 text-sm sm:text-lg leading-relaxed mb-4 font-sans">
                Cottonpatch RV Park is conveniently located approximately{" "}
                <strong className="text-navy font-semibold">2&nbsp;miles</strong> from
                the Meta data center project, making it an easy home base for
                contractors, project workers, and extended-stay guests working
                in the Rayville area.
              </p>
              <p className="text-navy/65 text-sm sm:text-base leading-relaxed mb-6 font-sans hidden sm:block">
                Monthly and short-term stays are both welcome. Our flat
                $1,000/month rate covers full hookups, internet, and all on-site
                amenities. Staying shorter? Call us for short-term rates and
                availability.
              </p>

              <p className="text-navy/40 text-xs font-sans italic">
                Cottonpatch RV Park is independently owned and operated. Not
                affiliated with, endorsed by, or associated with Meta Platforms,
                Inc.
              </p>
            </div>

            {/* Distance card */}
            <div className="bg-navy rounded-xl p-5 md:p-6 text-white">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <MapPin size={16} className="text-rust-light" aria-hidden="true" />
                <span className="font-semibold text-sm font-sans">Distance</span>
              </div>
              <p className="font-display text-4xl font-bold text-white mb-1">
                ~2 mi
              </p>
              <p className="text-white/60 text-sm mb-5 font-sans">
                From the Meta data center project
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white/70 text-xs font-sans uppercase tracking-wide mb-2">
                  Ask About Availability
                </p>
                <a
                  href="tel:+13184178435"
                  className="inline-flex items-center gap-2 bg-rust hover:bg-rust-dark text-white font-semibold px-5 py-3 rounded-md transition-colors duration-200 text-sm w-full justify-center"
                >
                  <Phone size={15} aria-hidden="true" />
                  Call About Availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
