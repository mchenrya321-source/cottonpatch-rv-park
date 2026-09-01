import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Amenities", href: "#amenities" },
  { label: "Rates", href: "#rates" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

const hours = [
  { label: "Park", value: "Open 24 Hours" },
  { label: "Laundry", value: "24/7" },
  { label: "Bathrooms", value: "24/7" },
  { label: "Store", value: "7 AM – 9 PM" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" aria-label="Cottonpatch RV Park — go to top">
              <Image
                src="/images/cottonpatch-logo.png"
                alt="Cottonpatch RV Park"
                width={150}
                height={52}
                className="h-12 w-auto mb-4"
              />
            </a>
            <p className="text-white/55 text-sm leading-relaxed font-sans max-w-xs">
              Newly built RV park in Rayville, Louisiana. Spacious monthly sites
              with full hookups and modern amenities.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-sans">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2.5 items-start">
                <MapPin
                  size={15}
                  className="text-white/40 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-white/65 text-sm font-sans leading-snug">
                  160 Caston Rd
                  <br />
                  Rayville, LA 71269
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone
                  size={15}
                  className="text-white/40 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="tel:+13184178435"
                  className="text-rust-light hover:text-white transition-colors text-sm font-sans font-medium"
                >
                  (318) 417-8435
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm font-sans transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-sans">
              Hours
            </h3>
            <dl className="space-y-2">
              {hours.map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-white/50 text-sm font-sans">{label}</dt>
                  <dd className="text-white/80 text-sm font-sans font-medium text-right">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/35 text-xs font-sans">
            &copy; {year} Cottonpatch RV Park. All rights reserved.
          </p>
          <p className="text-white/25 text-xs font-sans">
            160 Caston Rd, Rayville, LA 71269
          </p>
        </div>
      </div>
    </footer>
  );
}
