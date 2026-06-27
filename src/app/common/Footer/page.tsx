"use client";
import { useEffect, useRef } from "react";
import DotGrid from "@/components/DotGrid";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-tagline", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".footer-tagline", start: "top 90%" },
      });

      gsap.from(".footer-nav", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".footer-nav", start: "top 90%" },
      });

      gsap.from(".footer-label", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".footer-label", start: "top 90%" },
      });

      gsap.from(".footer-name", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".footer-name", start: "top 95%" },
      });

      // Scale down on scroll out — sama seperti section lain
      gsap.to(innerRef.current, {
        scale: 0.93,
        borderRadius: "16px",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={innerRef}
        className="w-full h-fit relative px-6 md:px-20 lg:px-35 py-16 md:py-20 overflow-hidden origin-bottom will-change-transform"
      >
        {/* DotGrid background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <DotGrid
            dotSize={2}
            gap={30}
            baseColor="#c4c4c4"
            activeColor="#000000"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-10 md:gap-12 w-full h-full justify-center items-center">
          {/* Tagline */}
          <div className="footer-tagline font-jetbrains text-sm md:text-md text-black/60 text-center">
            writing code. solving problems.
          </div>

          {/* Nav + quote */}
          <div className="footer-nav w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 lg:gap-30 font-jetbrains text-black/80 text-sm">
            {/* Nav left */}
            <div className="flex flex-row md:flex-col gap-4 md:gap-3 flex-wrap justify-center">
              <Link href="/" className="hover:text-black transition-colors">
                home
              </Link>
              <Link
                href="/about"
                className="hover:text-black transition-colors"
              >
                about
              </Link>
              <Link
                href="/education"
                className="hover:text-black transition-colors"
              >
                education
              </Link>
              <Link
                href="/project"
                className="hover:text-black transition-colors"
              >
                project
              </Link>
              <Link
                href="/resume"
                className="hover:text-black transition-colors"
              >
                resume
              </Link>
            </div>

            {/* Quote — hidden on small mobile, shown sm+ */}
            <div className="hidden sm:block w-full md:w-65 lg:w-75 text-black/60 text-center md:text-left text-xs md:text-sm leading-relaxed">
              "Thanks for visiting. Every project here reflects a journey of
              learning, creativity, and continuous improvement."
            </div>

            {/* Nav right */}
            <div className="flex flex-row md:flex-col gap-4 md:gap-3 flex-wrap justify-center">
              <Link href="#work" className="hover:text-black transition-colors">
                work
              </Link>
              <Link
                href="#certification"
                className="hover:text-black transition-colors"
              >
                certification
              </Link>
            </div>
          </div>

          {/* Label */}
          <p className="footer-label text-xs text-gray-400 tracking-wide font-jetbrains text-center">
            // andrean.2026
          </p>

          {/* Big name */}
          <div className="footer-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none font-semibold font-jetbrains text-secondary text-center">
            AndreanGwen
          </div>
        </div>
      </div>
    </div>
  );
}
