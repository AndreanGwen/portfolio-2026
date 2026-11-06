"use client";

import { useEffect, useRef } from "react";
import ShapeGrid from "@/components/ShapeGrid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStateContext } from "@/context/StateContext";

gsap.registerPlugin(ScrollTrigger);

export default function LearningPath() {
  const { _dark_mode } = useStateContext();
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".lp-label", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".lp-label", start: "top 90%" },
      });

      gsap.from(".lp-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".lp-title", start: "top 90%" },
      });

      gsap.from(".lp-desc", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".lp-desc", start: "top 90%" },
      });

      gsap.from(".lp-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".lp-card", start: "top 90%" },
      });

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

    const timer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={innerRef}
        className="w-full h-fit relative px-6 md:px-20 lg:px-35 py-20 overflow-hidden origin-bottom will-change-transform"
      >
        {/* ShapeGrid background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <ShapeGrid
            key={_dark_mode ? "dark" : "light"}
            speed={0.5}
            squareSize={20}
            borderColor={_dark_mode ? "#27272a" : "#dadada"}
            hoverFillColor={_dark_mode ? "#3f3f46" : "#616161"}
            shape="square"
            hoverTrailAmount={0}
            direction="right"
            edgeFadeWidth={0}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4 w-full h-full justify-center pointer-events-none">
          <div
            className={`absolute dev-number text-[5rem] md:text-[6rem] leading-none top-0 right-0 font-jetbrains shrink-0 ml-4 hidden md:block ${
              _dark_mode ? "text-white/10" : "text-black/10"
            }`}
          >
            03
          </div>
          <div className="flex flex-col gap-5">
            <p
              className={`lp-label text-xs tracking-wide font-jetbrains text-center md:text-left ${
                _dark_mode ? "text-white/40" : "text-black/40"
              }`}
            >
              // section.education
            </p>
            <div className="flex flex-col gap-4">
              <h1
                className={`lp-title text-3xl sm:text-4xl md:text-5xl text-center md:text-left ${
                  _dark_mode ? "text-white/70" : "text-gray-900"
                }`}
              >
                Learning Path
              </h1>
              <p
                className={`lp-desc text-sm w-full md:w-1/2 text-center md:text-left ${
                  _dark_mode ? "text-white/50" : "text-black/50"
                }`}
              >
                Explore my educational journey through every stage of learning,
                from school to university, highlighting the experiences,
                achievements, and knowledge gained along the way.
              </p>
            </div>
          </div>

          {/* Cards — stack vertically on mobile, row on lg+ */}
          <div className="mt-8 flex flex-col lg:flex-row lg:items-stretch gap-4 w-full">
            {/* Card University */}
            <a
              href="https://binus.ac.id/"
              target="_blank"
              rel="noopener noreferrer"
              className={`lp-card w-full lg:w-1/2 h-fit lg:h-auto p-4 flex flex-col gap-4 pointer-events-auto cursor-none cursor-target ${
                _dark_mode ? "bg-zinc-900/80" : "bg-white/70"
              }`}
            >
              <div className="flex flex-wrap items-start sm:items-center gap-2 sm:gap-4">
                <span
                  className={`px-2 py-1 text-xs text-secondary font-jetbrains whitespace-nowrap ${
                    _dark_mode ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  2025-Present
                </span>
                <span
                  className={`text-base sm:text-xl font-medium leading-snug ${
                    _dark_mode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Computer Science - BINUS University
                </span>
              </div>

              <div
                className={`text-sm ${
                  _dark_mode ? "text-white/50" : "text-black/50"
                }`}
              >
                BINUS (Bina Nusantara University) is one of Indonesia's leading
                private universities. Renowned for its technology and
                entrepreneurship-based curriculum, the university has several
                major campuses in the Greater Jakarta area (such as Kemanggisan
                and Alam Sutera) and has expanded to other cities, including
                Bandung, Malang, and Semarang.
              </div>

              <div
                className={`w-full sm:w-3/4 h-fit p-2 border flex flex-col gap-2 ${
                  _dark_mode ? "border-white/10" : "border-black/20"
                }`}
              >
                <span
                  className={`font-jetbrains text-xs ${
                    _dark_mode ? "text-white/50" : "text-black/50"
                  }`}
                >
                  Learn
                </span>
                <div className="flex flex-col">
                  {[
                    "C Programming Language",
                    "Data Structures -- AVL Tree, B-Tree, Hash Table, Heap, Linked List, and Queue",
                    "Front End Design -- HTML, CSS, and JavaScript",
                    "UI/UX Design -- Figma",
                  ].map((item) => (
                    <div
                      key={item}
                      className={`w-full h-fit px-2 py-1 flex items-start text-xs leading-relaxed font-jetbrains gap-2 ${
                        _dark_mode
                          ? "bg-green-400/10 text-white/70"
                          : "bg-green-200/20 text-black/70"
                      }`}
                    >
                      <span className="font-semibold shrink-0">+</span>
                      {item}
                    </div>
                  ))}
                </div>

                <span
                  className={`font-jetbrains text-xs ${
                    _dark_mode ? "text-white/50" : "text-black/50"
                  }`}
                >
                  Achievements
                </span>
                <div className="flex flex-col">
                  {[
                    "Seminar Certificate",
                    "TechxChange BNCC Certificate",
                    "Peduly Volunteer Certificate",
                  ].map((item) => (
                    <div
                      key={item}
                      className={`w-full h-fit px-2 py-1 flex items-start text-xs leading-relaxed font-jetbrains gap-2 ${
                        _dark_mode
                          ? "bg-blue-400/10 text-white/70"
                          : "bg-blue-200/20 text-black/70"
                      }`}
                    >
                      <span className="font-semibold shrink-0">+</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </a>

            {/* Card Vocational */}
            <a
              href="https://smk.prestasiprima.sch.id/"
              target="_blank"
              rel="noopener noreferrer"
              className={`lp-card w-full lg:w-1/2 h-fit lg:h-auto p-4 flex flex-col gap-4 pointer-events-auto cursor-none cursor-target ${
                _dark_mode ? "bg-zinc-900/80" : "bg-white/70"
              }`}
            >
              <div className="flex flex-wrap items-start sm:items-center gap-2 sm:gap-4">
                <span
                  className={`px-2 py-1 text-xs text-secondary font-jetbrains whitespace-nowrap ${
                    _dark_mode ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  2022-2025
                </span>
                <span
                  className={`text-base sm:text-xl font-medium leading-snug ${
                    _dark_mode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Computer and Network Engineering -- Prestasi Prima Vocational
                  High School
                </span>
              </div>

              <div
                className={`text-sm ${
                  _dark_mode ? "text-white/50" : "text-black/50"
                }`}
              >
                SMK Prestasi Prima is a private information technology-focused
                vocational high school located in East Jakarta. Operating under
                the auspices of the Wahana Prestasi Prima Foundation, the school
                holds an "A" accreditation and focuses on producing work-ready
                graduates through four flagship specialization programs.
              </div>

              <div
                className={`w-full sm:w-3/4 h-fit p-2 border flex flex-col gap-2 ${
                  _dark_mode ? "border-white/10" : "border-black/20"
                }`}
              >
                <span
                  className={`font-jetbrains text-xs ${
                    _dark_mode ? "text-white/50" : "text-black/50"
                  }`}
                >
                  Learn
                </span>
                <div className="flex flex-col">
                  {[
                    "Computer Networking -- Cisco, MikroTik",
                    "Hardware Maintenance and Troubleshooting",
                    "Basic Programming -- PHP",
                    "Web Development -- HTML, CSS, JavaScript",
                  ].map((item) => (
                    <div
                      key={item}
                      className={`w-full h-fit px-2 py-1 flex items-start text-xs leading-relaxed font-jetbrains gap-2 ${
                        _dark_mode
                          ? "bg-green-400/10 text-white/70"
                          : "bg-green-200/20 text-black/70"
                      }`}
                    >
                      <span className="font-semibold shrink-0">+</span>
                      {item}
                    </div>
                  ))}
                </div>

                <span
                  className={`font-jetbrains text-xs ${
                    _dark_mode ? "text-white/50" : "text-black/50"
                  }`}
                >
                  Achievements
                </span>
                <div className="flex flex-col">
                  {[
                    "GMEDIA -- PT Media Sarana Data",
                    "Indonesian Professional Certification Authority",
                  ].map((item) => (
                    <div
                      key={item}
                      className={`w-full h-fit px-2 py-1 flex items-start text-xs leading-relaxed font-jetbrains gap-2 ${
                        _dark_mode
                          ? "bg-blue-400/10 text-white/70"
                          : "bg-blue-200/20 text-black/70"
                      }`}
                    >
                      <span className="font-semibold shrink-0">+</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
