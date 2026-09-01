import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Wide, spacious RV lots built for long-term comfort",
  "Full 30 & 50 amp electric service with water and sewer",
  "High-speed internet available for all guests",
  "24/7 laundry facility and private bathrooms",
  "On-site convenience store, covered pavilion & food trucks",
  "Approximately 2 miles from the Meta data center project",
];

export default function Introduction() {
  return (
    <section
      className="bg-cream py-16 sm:py-20 lg:py-24"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3 font-sans">
              About the Park
            </p>
            <h2
              id="intro-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-navy leading-snug mb-6"
            >
              Everything You Need for a Comfortable Stay
            </h2>
            <p className="text-navy/75 text-base sm:text-lg leading-relaxed mb-5 font-sans">
              Cottonpatch RV Park is a newly built park in Rayville, Louisiana,
              offering spacious monthly RV sites and practical amenities designed
              for extended stays. Whether you&rsquo;re here for work, a project,
              or just settling in for a few months, you&rsquo;ll find everything
              you need right here.
            </p>
            <p className="text-navy/75 text-base sm:text-lg leading-relaxed mb-8 font-sans">
              The park is especially convenient for those working on projects in
              the Rayville area, including the nearby Meta data center
              project — just approximately 2&nbsp;miles away. Our flat monthly
              rate and full-service hookups make it easy to focus on the work
              ahead.
            </p>

            {/* Highlight list */}
            <ul className="space-y-2.5" aria-label="Park highlights">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-green mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-navy/80 text-sm sm:text-base font-sans">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/07-entrance-sign.jpg"
                alt="Cottonpatch RV Park entrance sign in Rayville, Louisiana"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-28 h-28 bg-rust/10 rounded-xl -z-10 hidden lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 bg-navy/10 rounded-xl -z-10 hidden lg:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
