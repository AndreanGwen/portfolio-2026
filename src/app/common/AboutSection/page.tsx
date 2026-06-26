"use client";
import CountUp from "@/components/CountUp";
import { MoveRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { from: 0, to: 1.5, suffix: "+", label: "Years of Experience" },
  { from: 0, to: 8, suffix: "+", label: "Projects Completed" },
  { from: 0, to: 20, suffix: "+", label: "Github Repositories" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-label", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-label", start: "top 90%" },
      });
      gsap.from(".about-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-title", start: "top 90%" },
      });
      gsap.from(".about-body", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-body", start: "top 90%" },
      });
      gsap.from(".about-stats", {
        x: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-stats", start: "top 90%" },
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

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={innerRef}
        className="w-full h-fit relative px-6 md:px-20 lg:px-35 py-20 overflow-hidden origin-bottom will-change-transform"
      >
        {/* Border box*/}
        <div className="w-full border border-black/10 relative p-8 md:p-10 flex flex-col gap-8">
          {/* 02 — absolute ke border box */}
          <span className="text-[5rem] md:text-[6rem] text-black/10 leading-none font-jetbrains absolute top-0 left-0 select-none hidden md:block">
            02
          </span>

          {/* Label n Title */}
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="about-label text-xs text-black/40 tracking-wide font-jetbrains">
              // section.about
            </p>
            <h1 className="about-title text-3xl md:text-5xl font-medium inter">
              Who I Am
            </h1>
          </div>

          {/* Body */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-15 w-full">
            {/* Left */}
            <div className="about-body flex flex-col items-center md:items-start justify-between gap-6 w-full md:w-1/2">
              <p className="text-base md:text-lg text-black/60 leading-relaxed text-center md:text-left">
                I'm AndreanGwen, a Computer Science student at Binus University
                specializing in web development and IoT development. I enjoy
                building modern web applications, developing smart connected
                systems, and turning complex ideas into efficient, user-centered
                solutions. My goal is to create technology that is not only
                functional and scalable, but also delivers meaningful value to
                its users.
              </p>
              <Link
                href="/about"
                className="cursor-target py-2 px-4 w-fit border border-black/30 font-jetbrains text-sm flex items-center gap-3 hover:bg-black/5 transition-color cursor-none"
              >
                <span>More about me</span>
                <MoveRight size={16} />
              </Link>
            </div>

            {/* Right — stats */}
            <div className="about-stats flex-1 bg-[#efefef] border border-black/10 flex flex-col divide-y divide-black/10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-1 py-6 px-4"
                >
                  <span className="text-3xl md:text-4xl font-semibold inter">
                    <CountUp
                      from={stat.from}
                      to={stat.to}
                      separator=","
                      direction="up"
                      duration={2.5}
                      className="count-up-text"
                      delay={0}
                    />
                    <span className="text-primary">{stat.suffix}</span>
                  </span>
                  <span className="font-jetbrains text-xs text-black/50 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
