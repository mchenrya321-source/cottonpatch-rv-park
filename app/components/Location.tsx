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
      className="bg-cream-dark py-16 sm:py-20 lg:py-24"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3 font-sans">
            Find Us
          </p>
          <h2
            id="location-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-navy"
          >
            Find Cottonpatch RV Park
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Info card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md shadow-navy/8 p-6 sm:p-8 flex flex-col gap-6">
            {/* Address */}
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-navy/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} className="text-navy" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-xs tracking-wide uppercase text-navy/50 mb-1 font-sans">
                  Address
                </p>
                <p className="font-display text-lg font-bold text-navy leading-tight">
                  Cottonpatch RV Park
                </p>
                <p className="text-navy/75 font-sans text-sm mt-0.5">
                  160 Caston Rd
                  <br />
                  Rayville, LA 71269
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-navy/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={18} className="text-navy" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-xs tracking-wide uppercase text-navy/50 mb-1 font-sans">
                  Phone
                </p>
                <a
                  href="tel:+13184178435"
                  className="text-rust font-bold text-lg hover:text-rust-dark transition-colors font-sans"
                >
                  (318) 417-8435
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-navy/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={18} className="text-navy" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-xs tracking-wide uppercase text-navy/50 mb-2 font-sans">
                  Hours
                </p>
                <dl className="space-y-1.5">
                  {hours.map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-4">
                      <dt className="text-navy/60 text-sm font-sans">{label}</dt>
                      <dd className="text-navy font-semibold text-sm font-sans text-right">
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
              <MapPin size={15} aria-hidden="true" />
              Get Directions
            </a>
          </div>

          {/* Embedded map */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-md shadow-navy/8 min-h-[280px] sm:min-h-[340px] bg-cream-dark">
            <iframe
              title="Cottonpatch RV Park location map"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[300px] sm:min-h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
