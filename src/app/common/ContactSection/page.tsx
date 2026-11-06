"use client";

import { useEffect, useRef } from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStateContext } from "@/context/StateContext";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const { _dark_mode } = useStateContext();
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const linkClass = `contact-link py-2 px-4 w-fit border font-jetbrains text-sm flex items-center gap-3 transition-colors cursor-none cursor-target ${
    _dark_mode
      ? "border-white/30 text-white hover:bg-white/10"
      : "border-black/30 text-gray-900 hover:bg-black/5"
  }`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate in: label
      gsap.from(".contact-label", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-label", start: "top 90%" },
      });

      // Animate in: title
      gsap.from(".contact-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-title", start: "top 90%" },
      });

      // Animate in: description
      gsap.from(".contact-desc", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-desc", start: "top 90%" },
      });

      // Animate in: social links stagger
      gsap.from(".contact-link", {
        y: 20,
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "back.out(1.5)",
        stagger: 0.1,
        delay: 0.15,
        scrollTrigger: { trigger: ".contact-links", start: "top 90%" },
      });

      // Scale down when scrolling out (same as AboutSection)
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
        className={`w-full h-fit relative px-6 md:px-20 lg:px-35 py-20 overflow-hidden origin-bottom will-change-transform border-b transition-colors ${
          _dark_mode
            ? "bg-zinc-900 border-white/10"
            : "bg-[#e7e7e7a7] border-black/20"
        }`}
      >
        <div
          className={`w-full border relative p-6 sm:p-8 md:p-10 flex flex-col gap-8 items-center ${
            _dark_mode ? "border-white/10" : "border-black/10"
          }`}
        >
          {/* Section number */}
          <span
            className={`text-[5rem] md:text-[6rem] leading-none font-jetbrains absolute top-0 select-none hidden md:block ${
              _dark_mode ? "text-white/10" : "text-black/10"
            }`}
          >
            04
          </span>

          <div className="flex flex-col gap-6 w-full md:w-1/2 items-center text-center">
            {/* Label + Title */}
            <div className="flex flex-col gap-1">
              <p
                className={`contact-label text-xs tracking-wide font-jetbrains ${
                  _dark_mode ? "text-white/40" : "text-black/40"
                }`}
              >
                // section.contact
              </p>
              <h1
                className={`contact-title text-2xl sm:text-3xl md:text-5xl font-medium inter ${
                  _dark_mode ? "text-white/70" : "text-gray-900"
                }`}
              >
                Connect With Me
              </h1>
            </div>

            {/* Description */}
            <p
              className={`contact-desc text-sm sm:text-base md:text-lg leading-relaxed ${
                _dark_mode ? "text-white/60" : "text-black/60"
              }`}
            >
              Looking for a passionate developer to bring your ideas to life?
              Whether it&apos;s a web application, mobile app, or IoT project,
              I&apos;m ready to help. Let&apos;s create something impactful
              together.
            </p>

            {/* Social links */}
            <div className="contact-links flex flex-wrap justify-center gap-3 sm:gap-4 items-center w-full">
              <a
                href="https://github.com/AndreanGwen"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <FiGithub />
                <span>Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/andrean-satriya-gwen-222358331"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/andreangwen/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <FiInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
