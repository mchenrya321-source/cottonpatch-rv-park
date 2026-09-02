import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Wide, spacious RV lots for monthly and short-term stays",
  "Full 30 & 50 amp electric with water and sewer",
  "High-speed internet available for all guests",
  "24/7 laundry facility and private bathrooms",
  "On-site convenience store, covered pavilion & food trucks",
  "Approximately 2 miles from the Meta data center project",
];

export default function Introduction() {
  return (
    <section
      className="bg-cream py-10 sm:py-16 lg:py-24"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3 font-sans">
              About the Park
            </p>
            <h2
              id="intro-heading"
              className="font-display text-2xl sm:text-4xl font-bold text-navy leading-snug mb-4 md:mb-6"
            >
              Everything You Need for a Comfortable Stay
            </h2>
            <p className="text-navy/75 text-sm sm:text-lg leading-relaxed mb-4 font-sans">
              Whether you&rsquo;re staying for a project, passing through, or
              need a longer-term home base — Cottonpatch RV Park is a newly
              built park in Rayville, Louisiana with spacious sites and
              practical amenities built for how guests actually live.
            </p>
            <p className="text-navy/65 text-sm sm:text-base leading-relaxed mb-6 md:mb-8 font-sans hidden sm:block">
              Monthly and short-term stays are both welcome. For those working
              on the nearby Meta data center project, our location approximately
              2&nbsp;miles away and flat monthly rate make us a natural fit.
            </p>

            {/* Highlight list */}
            <ul className="space-y-2" aria-label="Park highlights">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-green mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-navy/80 text-sm font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <div className="relative mt-2 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-[4/3]">
              <Image
                src="/images/07-entrance-sign.jpg"
                alt="Cottonpatch RV Park entrance sign in Rayville, Louisiana"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
