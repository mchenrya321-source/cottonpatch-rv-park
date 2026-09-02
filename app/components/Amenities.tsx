import Image from "next/image";
import {
  Zap,
  Wifi,
  WashingMachine,
  ShowerHead,
  ShoppingBag,
  TreePine,
  Utensils,
  Maximize2,
} from "lucide-react";

/* Photo-backed amenity cards — shown on both mobile and desktop */
const photoAmenities = [
  {
    image: "/images/02-laundry-room.jpg",
    icon: WashingMachine,
    title: "24/7 Laundry Facility",
    desc: "On-site laundry room open around the clock — no trips to town required.",
    badge: "Open 24/7",
  },
  {
    image: "/images/03-convenience-store.jpg",
    icon: ShoppingBag,
    title: "On-Site Convenience Store",
    desc: "Stock up on essentials without leaving the park.",
    badge: "7 AM – 9 PM",
  },
  {
    image: "/images/01-pavilion-sunset-hero.jpg",
    icon: TreePine,
    title: "Covered Pavilion",
    desc: "A shaded outdoor gathering space perfect for relaxing after a long day.",
    badge: "Outdoor Area",
  },
];

/* Icon-only amenity cards */
const iconAmenities = [
  {
    icon: Zap,
    title: "Full RV Hookups",
    desc: "30 & 50 amp, water, and sewer at every site.",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    desc: "Reliable internet for all monthly and short-term guests.",
  },
  {
    icon: ShowerHead,
    title: "Private Bathrooms",
    desc: "Clean, private bathrooms and showers — open 24/7.",
  },
  {
    icon: Utensils,
    title: "Food Truck Area",
    desc: "Multiple food options near the pavilion.",
  },
  {
    icon: Maximize2,
    title: "Spacious Lots",
    desc: "Wide, pull-in-friendly sites built for comfort.",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="bg-cream-dark py-10 sm:py-16 lg:py-24"
      aria-labelledby="amenities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 lg:mb-14">
          <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-2 font-sans">
            What We Offer
          </p>
          <h2
            id="amenities-heading"
            className="font-display text-2xl sm:text-4xl font-bold text-navy"
          >
            Built for Long-Term Guests
          </h2>
          <p className="mt-2 md:mt-4 text-navy/65 text-sm sm:text-lg max-w-2xl mx-auto font-sans hidden sm:block">
            Every amenity at Cottonpatch was chosen with the monthly guest in
            mind — practical, clean, and always accessible.
          </p>
        </div>

        {/* ─── MOBILE LAYOUT ─────────────────────────────────────────────────── */}
        <div className="md:hidden space-y-4 mb-6">
          {/* Compact photo cards — 2-col grid for laundry + store, full-width for pavilion */}
          <div className="grid grid-cols-2 gap-3">
            {photoAmenities.slice(0, 2).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl overflow-hidden shadow-sm shadow-navy/5"
                >
                  <div className="relative h-28">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon size={13} className="text-rust flex-shrink-0" aria-hidden="true" />
                      <span className="text-green font-semibold text-[10px] tracking-wide uppercase font-sans">
                        {item.badge}
                      </span>
                    </div>
                    <p className="font-display text-sm font-bold text-navy leading-tight">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pavilion — full width, compact */}
          {(() => {
            const item = photoAmenities[2];
            const Icon = item.icon;
            return (
              <div className="bg-white rounded-xl overflow-hidden shadow-sm shadow-navy/5 flex">
                <div className="relative w-28 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                    sizes="112px"
                  />
                </div>
                <div className="p-3 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon size={13} className="text-rust flex-shrink-0" aria-hidden="true" />
                    <span className="text-green font-semibold text-[10px] tracking-wide uppercase font-sans">
                      {item.badge}
                    </span>
                  </div>
                  <p className="font-display text-sm font-bold text-navy leading-tight mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-navy/55 text-xs font-sans leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })()}

          {/* Compact 2-col icon grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {iconAmenities.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-3 shadow-sm shadow-navy/5 border border-cream-dark"
              >
                <div className="w-8 h-8 rounded-full bg-navy/8 flex items-center justify-center mb-2">
                  <Icon size={16} className="text-navy" aria-hidden="true" />
                </div>
                <p className="font-display text-xs font-bold text-navy mb-0.5 leading-tight">
                  {title}
                </p>
                <p className="text-navy/55 text-[11px] font-sans leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── DESKTOP LAYOUT ────────────────────────────────────────────────── */}
        <div className="hidden md:block">
          {/* Alternating photo cards */}
          <div className="space-y-10 mb-12">
            {photoAmenities.map((item, idx) => {
              const Icon = item.icon;
              const reversed = idx % 2 === 1;
              return (
                <div
                  key={item.title}
                  className={`grid md:grid-cols-2 gap-6 items-center rounded-xl overflow-hidden bg-white shadow-md shadow-navy/5 ${
                    reversed ? "md:[&>*:first-child]:order-last" : ""
                  }`}
                >
                  <div className="relative aspect-video md:aspect-auto md:h-64 lg:h-72">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-rust/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-rust" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-green tracking-wide uppercase font-sans bg-green/10 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-navy/65 font-sans text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Icon amenity grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {iconAmenities.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5 shadow-sm shadow-navy/5 border border-cream-dark hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-navy/8 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-navy" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-1.5">{title}</h3>
                <p className="text-navy/60 text-sm font-sans leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
