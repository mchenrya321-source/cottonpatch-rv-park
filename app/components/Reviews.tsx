import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section
      className="bg-cream py-10 sm:py-14"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-rust font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase mb-3 font-sans">
            Guest Feedback
          </p>
          <h2
            id="reviews-heading"
            className="font-display text-xl sm:text-3xl font-bold text-navy mb-6"
          >
            Early Guests Love It
          </h2>

          <div className="inline-flex flex-col items-center bg-white border border-cream-dark rounded-2xl px-8 py-5 shadow-sm shadow-navy/5 mb-5">
            <div className="flex items-center gap-1 mb-2" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className="text-[#f5a623] fill-[#f5a623]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="font-display text-4xl font-bold text-navy mb-0.5">5.0</p>
            <p className="text-navy/55 text-sm font-sans">on Google</p>
            <p className="text-navy/40 text-xs mt-1 font-sans">
              Based on early guest reviews
            </p>
          </div>

          <p className="text-navy/55 text-sm font-sans max-w-sm mx-auto">
            Newly opened and already earning five stars. More reviews on the way.
          </p>
        </div>
      </div>
    </section>
  );
}
