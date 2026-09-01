import { DollarSign, Zap, Clock, MapPin } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "$1,000",
    label: "Per Month — Flat Rate",
    desc: "Simple, all-inclusive monthly pricing with no hidden fees.",
  },
  {
    icon: Zap,
    value: "30 & 50 Amp",
    label: "Full Hookups",
    desc: "Electric, water, and sewer at every site.",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Laundry & Bathrooms",
    desc: "On-site laundry and private bathrooms open around the clock.",
  },
  {
    icon: MapPin,
    value: "~2 Miles",
    label: "From Meta Data Center Project",
    desc: "An easy commute for contractors and project workers.",
  },
];

export default function QuickInfo() {
  return (
    <section
      id="info-strip"
      className="bg-navy text-white"
      aria-label="Quick facts about Cottonpatch RV Park"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map(({ icon: Icon, value, label, desc }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center px-4 py-6 lg:py-4 gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-rust/20 flex items-center justify-center mb-1">
                <Icon size={20} className="text-rust-light" aria-hidden="true" />
              </div>
              <p className="font-display text-2xl lg:text-3xl font-bold text-white leading-none">
                {value}
              </p>
              <p className="text-rust-light font-semibold text-xs sm:text-sm tracking-wide uppercase font-sans">
                {label}
              </p>
              <p className="text-white/55 text-xs font-sans leading-snug max-w-[180px] hidden sm:block">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
