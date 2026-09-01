import Image from "next/image";
import {
  Zap,
  Wifi,
  WashingMachine,
  ShowerHead,
  ShoppingBag,
  UmbrellaOff,
  Utensils,
  Maximize2,
} from "lucide-react";

const iconAmenities = [
  {
    icon: Zap,
    title: "Full RV Hookups",
    desc: "30 and 50 amp electric service at every site, along with water and sewer connections.",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    desc: "Reliable internet available for all monthly guests — stay connected on-site.",
  },
  {
    icon: ShowerHead,
    title: "Private Bathrooms & Showers",
    desc: "Clean, private bathrooms and showers available 24/7 for all guests.",
  },
  {
    icon: Maximize2,
    title: "Wide, Spacious Lots",
    desc: "Generously sized RV sites designed for comfortable long-term living.",
  },
  {
    icon: Utensils,
    title: "Food Truck Area",
    desc: "Multiple food options available conveniently near the covered pavilion.",
  },
];

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
    desc: "Stock up on essentials without leaving the park. Stocked with everyday needs.",
    badge: "7 AM – 9 PM",
  },
  {
    image: "/images/06-pavilion-overview.jpg",
    icon: UmbrellaOff,
    title: "Covered Pavilion",
    desc: "A shaded outdoor gathering space perfect for relaxing or spending time with neighbors.",
    badge: "Outdoor Area",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="bg-cream-dark py-16 sm:py-20 lg:py-24"
      aria-labelledby="amenities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3 font-sans">
            What We Offer
          </p>
          <h2
            id="amenities-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-navy"
          >
            Built for Long-Term Guests
          </h2>
          <p className="mt-4 text-navy/65 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Every amenity at Cottonpatch was chosen with the monthly guest in
            mind — practical, clean, and always accessible.
          </p>
        </div>

        {/* Photo amenity cards — alternating layout */}
        <div className="space-y-10 mb-14">
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
                {/* Image */}
                <div className="relative aspect-video md:aspect-auto md:h-64 lg:h-72">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Text */}
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
              <h3 className="font-display text-base font-bold text-navy mb-1.5">
                {title}
              </h3>
              <p className="text-navy/60 text-sm font-sans leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
