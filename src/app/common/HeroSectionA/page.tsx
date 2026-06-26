"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DataRain from "@/app/component/DataRain/page";
import PixelTransition from "@/app/componentLive/PixelTranstition";
import CountUp from "@/components/CountUp";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSectionA() {
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

  const stats = [
    { from: 0, to: 1.5, suffix: "+", label: "Years of Experience" },
    { from: 0, to: 8, suffix: "+", label: "Projects Completed" },
    { from: 0, to: 20, suffix: "+", label: "Github Repositories" },
  ];

  return (
    <section ref={sectionRef} className="w-full">
      <div
        ref={innerRef}
        className="relative overflow-hidden h-fit border-b border-black/20 origin-bottom will-change-transform"
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
              secondContent={
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
              firstContent={
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
              // page.about
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
              I'm AndreanGwen, a Computer Science student at Binus University
              specializing in web development and IoT development. I enjoy
              building modern web applications, developing smart connected
              systems, and turning complex ideas into efficient, user-centered
              solutions. My goal is to create technology that is not only
              functional and scalable, but also delivers meaningful value to its
              users.
            </p>

            <p className="hero-animate text-[15px] text-gray-500 leading-relaxed mb-9 max-w-xl">
              Junior Web Developer focused on MERN Stack development and IoT
              projects. Experienced in creating modern web applications and
              smart solutions through hardware-software integration.
            </p>

            <div className="flex">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="hero-animate flex flex-col items-center justify-center gap-1 py-6 px-4"
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
    </section>
  );
}
