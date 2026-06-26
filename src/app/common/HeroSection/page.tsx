"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DataRain from "@/app/component/DataRain/page";
import PixelTransition from "@/app/componentLive/PixelTranstition";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-image", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scale down on scroll away
  useEffect(() => {
    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);

  // Scramble text
  useEffect(() => {
    const target = "AndreanGwen";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iteration = 0;

    const interval = setInterval(() => {
      if (!titleRef.current) return;

      titleRef.current.innerText = target
        .split("")
        .map((char, index) => {
          if (index < iteration) return target[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= target.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="w-full">
      <div
        ref={innerRef}
        className="relative overflow-hidden min-h-171 border-b border-black/20 origin-bottom will-change-transform"
      >
        <DataRain />

        <div
          ref={heroRef}
          className="
            relative z-10 w-full h-full mx-auto
            flex flex-col items-center justify-center gap-10 px-6 py-24
            md:flex-row md:justify-between md:gap-20 md:px-35 md:py-0 md:min-h-171
          "
        >
          {/* IMAGE */}
          <div className="hero-image order-1 md:order-2 shrink-0 flex justify-center">
            <PixelTransition
              firstContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "3rem",
                      color: "#000000",
                      textAlign: "center",
                    }}
                  >
                    Hover or touch here!
                  </p>
                </div>
              }
              secondContent={
                <img
                  src="/profile.jpg"
                  alt="first-photo-andreangwen"
                  className="w-full h-full object-cover"
                />
              }
              gridSize={20}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />

            <div className="hidden md:block">
              <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "3rem",
                        color: "#000000",
                        textAlign: "center",
                      }}
                    >
                      Touch or hover here!
                    </p>
                  </div>
                }
                secondContent={
                  <img
                    src="/profile.jpg"
                    alt="first-photo-andreangwen"
                    className="w-full h-full object-cover"
                  />
                }
                gridSize={20}
                pixelColor="#ffffff"
                once={false}
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left w-full md:w-fit md:pr-12">
            <p className="hero-animate text-xs text-gray-400 mb-2 tracking-wide">
              // npm run dev
            </p>

            <p className="hero-animate text-xs mb-8 tracking-wide">
              <span className="text-primary">2 years</span>
              <span className="text-gray-400 mx-2">·</span>
              <span className="text-primary underline cursor-pointer">
                12 products
              </span>
              <span className="text-gray-400 mx-2">·</span>
              <span className="text-primary">1 teams scaled</span>
            </p>

            <h1 className="hero-animate text-4xl md:text-5xl font-semibold leading-none text-gray-900 mb-4 inter">
              Hello, I'm
              <br />
              <span ref={titleRef}>AndreanGwen</span>
            </h1>

            <p className="hero-animate text-sm text-gray-500 tracking-[0.18em] uppercase mb-5">
              Junior Full Stack Web Developer
            </p>

            <p className="hero-animate text-[15px] text-gray-500 leading-relaxed mb-9 max-w-xl">
              Junior Web Developer focused on MERN Stack development and IoT
              projects. Experienced in creating modern web applications and
              smart solutions through hardware-software integration.
            </p>

            <div className="hero-animate flex gap-4 flex-wrap justify-center md:justify-start">
              <Link
                href="/project"
                className="px-7 py-3 bg-primary text-white text-sm font-medium transition-colors font-jetbrains cursor-target cursor-none"
              >
                See my project
              </Link>

              <Link
                href="/resume"
                className="px-7 py-3 border border-gray-800 text-gray-800 text-sm font-medium hover:bg-gray-100 transition-colors font-jetbrains cursor-target cursor-none"
              >
                Check my resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
