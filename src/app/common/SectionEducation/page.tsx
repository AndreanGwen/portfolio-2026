"use client";

import { useLayoutEffect, useRef } from "react";
import DotGrid from "@/components/DotGrid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionEducation() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.set(".edu-label, .edu-title, .edu-desc", {
        y: 40,
        opacity: 0,
      });

      gsap.to(".edu-label, .edu-title, .edu-desc", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <div
        ref={innerRef}
        className="w-full h-fit relative px-6 md:px-20 lg:px-35 py-20 overflow-hidden origin-bottom will-change-transform bg-[#e7e7e7a7] border-b border-black/20"
      >
        <div className="absolute inset-0">
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
        <div className="flex flex-col justify-center h-full gap-5">
          <p className="edu-label text-xs text-black/40 tracking-wide font-jetbrains text-center md:text-left">
            // section.education
          </p>

          <div className="flex flex-col gap-2">
            <h1 className="edu-title text-3xl sm:text-4xl md:text-5xl font-medium text-center md:text-left">
              Education
            </h1>

            <p className="edu-desc w-full md:w-1/2 text-sm md:text-base text-black/50 text-center md:text-left leading-relaxed">
              A collection of my academic journey, professional certifications,
              and learning achievements that reflect continuous growth,
              technical expertise, and commitment to lifelong learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
