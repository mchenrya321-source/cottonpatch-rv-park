import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { label: "Park", value: "Open 24 Hours" },
  { label: "Laundry", value: "Open 24/7" },
  { label: "Bathrooms & Showers", value: "Open 24/7" },
  { label: "Convenience Store", value: "7 AM – 9 PM" },
];

export default function Location() {
  const address = "160 Caston Rd, Rayville, LA 71269";
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-91.7734!3d32.4817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s160+Caston+Rd%2C+Rayville%2C+LA+71269!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus`;

  return (
    <section
      id="location"
      className="bg-cream-dark py-10 sm:py-16 lg:py-24"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-10">
          <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-2 font-sans">
            Find Us
          </p>
          <h2
            id="location-heading"
            className="font-display text-2xl sm:text-4xl font-bold text-navy"
          >
            Find Cottonpatch RV Park
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-5 lg:gap-8 items-stretch">
          {/* Info card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md shadow-navy/8 p-5 sm:p-8 flex flex-col gap-5">
            {/* Address + Phone — side by side on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {/* Address */}
              <div className="flex gap-2.5 items-start">
                <div className="w-8 h-8 rounded-full bg-navy/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-navy" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[10px] tracking-wide uppercase text-navy/50 mb-0.5 font-sans">
                    Address
                  </p>
                  <p className="font-display text-sm md:text-lg font-bold text-navy leading-tight">
                    Cottonpatch RV Park
                  </p>
                  <p className="text-navy/70 font-sans text-xs md:text-sm mt-0.5">
                    160 Caston Rd
                    <br />
                    Rayville, LA 71269
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-2.5 items-start">
                <div className="w-8 h-8 rounded-full bg-navy/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-navy" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[10px] tracking-wide uppercase text-navy/50 mb-0.5 font-sans">
                    Phone
                  </p>
                  <a
                    href="tel:+13184178435"
                    className="text-rust font-bold text-sm md:text-lg hover:text-rust-dark transition-colors font-sans"
                  >
                    (318) 417-8435
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-2.5">
              <div className="w-8 h-8 rounded-full bg-navy/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={16} className="text-navy" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[10px] tracking-wide uppercase text-navy/50 mb-2 font-sans">
                  Hours
                </p>
                <dl className="space-y-1.5">
                  {hours.map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-3">
                      <dt className="text-navy/60 text-xs sm:text-sm font-sans">{label}</dt>
                      <dd className="text-navy font-semibold text-xs sm:text-sm font-sans text-right">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Directions CTA */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-5 py-3 rounded-md transition-colors duration-200 text-sm mt-auto"
            >
              <MapPin size={14} aria-hidden="true" />
              Get Directions
            </a>
          </div>

          {/* Embedded map */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-md shadow-navy/8 bg-cream-dark min-h-[220px] sm:min-h-[300px] lg:min-h-[0]">
            <iframe
              title="Cottonpatch RV Park location map"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "220px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[220px] sm:min-h-[320px] lg:min-h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
