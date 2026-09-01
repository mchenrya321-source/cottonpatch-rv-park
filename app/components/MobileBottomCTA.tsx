"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function MobileBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past ~80% of viewport height
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="tel:+13184178435"
        className="flex items-center justify-center gap-2.5 bg-rust text-white font-bold py-4 px-6 w-full text-base shadow-[0_-4px_16px_rgba(0,0,0,0.18)]"
        tabIndex={visible ? 0 : -1}
      >
        <Phone size={17} aria-hidden="true" />
        Call to Reserve · (318) 417-8435
      </a>
    </div>
  );
}
