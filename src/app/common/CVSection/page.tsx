"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Download, Link } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CVSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!innerRef.current) return;
      gsap.set(innerRef.current, { opacity: 0, y: 60, scale: 0.94 });
      gsap.to(innerRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef}>
      <main className="min-h-screen px-4 sm:px-6 md:px-10 py-10 md:py-16 flex flex-col items-center justify-center gap-2">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-208 flex justify-end gap-2">
          <a
            href="_cv.pdf"
            download="_cv.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/80"
          >
            <Download size={17} />
            Download CV
          </a>
          <a
            href="_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-white transition hover:bg-white/50 border-black border-2"
          >
            <Link size={17} color="black" />
          </a>
        </div>
        <div
          ref={innerRef}
          className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-208 overflow-hidden bg-white shadow-2xl pointer-events-auto"
        >
          <iframe
            src={`_cv.pdf#toolbar=0`}
            title="Resume"
            className="block aspect-208/297 w-full border-0"
          />
        </div>
      </main>
    </div>
  );
}
