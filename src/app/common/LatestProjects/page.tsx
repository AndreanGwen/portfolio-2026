"use client";
import DotGrid from "@/components/DotGrid";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    href: "https://world-university-omega.vercel.app/",
    image:
      "https://res.cloudinary.com/dgnnshujm/image/upload/v1776187395/WEB_BNCC_knr7n7.png",
    imageAlt: "bncc-project",
    year: "2025",
    role: "Developer",
    title: "BNCC Project FrontEnd",
    description:
      "This is a final project for BNCC (Bina Nusantara Computer Club) that involves creating a website for searching and displaying details about countries. The country data is retrieved from the restcountries.com API.",
    tags: ["Next.js", "Tailwind", "REST API"],
  },
  {
    href: "https://4clover.id/",
    image:
      "https://res.cloudinary.com/dgnnshujm/image/upload/v1782386272/Desain_tanpa_judul_lvi65j.png",
    imageAlt: "4clover-project",
    year: "2025",
    role: "Full Stack Developer",
    title: "4Clover Platform",
    description:
      "A full-stack MERN platform connecting content creators with video editors. Built with Next.js, TypeScript, and MongoDB, targeting the Indonesian creator market.",
    tags: ["Next.js", "MongoDB", "Node.js"],
  },
  {
    href: "https://github.com/AndreanGwen/fe-otakunime",
    image:
      "https://res.cloudinary.com/dgnnshujm/image/upload/v1770816442/WEB_PORTO_5_j1xkwz.png",
    imageAlt: "scrapping-website",
    year: "2024",
    role: "Full Stack Developer",
    title: "Scrapping Website",
    description:
      "A website that scrapes anime information from various websites and displays it in a user-friendly interface. Built with Next.js.",
    tags: ["Next.js", "Tailwind", "Scraping"],
  },
];

export default function LatestProjects() {
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
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".lp-desc", start: "top 90%" },
      });

      gsap.from(".lp-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
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

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={innerRef}
        className="w-full h-fit relative px-6 md:px-20 lg:px-35 py-20 overflow-hidden origin-bottom will-change-transform"
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
        <div className="relative z-10 flex flex-col gap-4 w-full h-full justify-center">
          {/* Title row */}
          <div className="flex justify-between items-start relative pointer-events-none">
            <div className="flex flex-col gap-1 w-full">
              <p className="lp-label text-xs text-gray-400 mb-2 tracking-wide font-jetbrains text-center md:text-left">
                // section.project
              </p>
              <div className="flex flex-col gap-8">
                <h1 className="lp-title text-2xl md:text-5xl font-medium inter text-center md:text-left">
                  Latest Project
                </h1>
                <p className="lp-desc w-full md:w-3/4 text-black/50 text-center md:text-left text-xs md:text-[15px]">
                  A collection of recent projects that demonstrate my skills in
                  web development and IoT engineering. Built with a focus on
                  performance, usability, and real-world impact.
                </p>
              </div>
            </div>
            <div className="text-[5rem] md:text-[6rem] text-black/10 leading-none -translate-y-2 font-jetbrains shrink-0 ml-4 hidden md:block">
              03
            </div>
          </div>

          {/* Cards */}
          <div className="lp-cards w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-7 pointer-events-auto">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target lp-card w-full min-h-130 flex flex-col border border-black/20 hover:border-black/50 group overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02] bg-white/60 cursor-none"
              >
                {/* Image */}
                <div className="w-full h-56 bg-gray-500/20 flex items-center justify-center overflow-hidden">
                  <div className="w-[80%] h-[90%] relative transition-transform duration-500 ease-out group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Detail */}
                <div className="flex-1 px-7 py-6 flex flex-col gap-4 justify-between">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <div className="px-2 w-fit border-black/10 bg-black/10 border text-sm font-jetbrains">
                        {project.year}
                      </div>
                      <span className="text-sm font-jetbrains">
                        {project.role}
                      </span>
                    </div>

                    <h1 className="text-xl font-semibold inter">
                      {project.title}
                    </h1>

                    <p className="text-sm text-black/50">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 w-fit rounded-full border-black/10 bg-black/10 border text-xs font-jetbrains"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs font-semibold font-jetbrains flex items-center gap-3 mt-2">
                    <span>View project</span>
                    <MoveRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="w-full h-fit flex justify-center mt-6">
            <Link
              href="/project"
              className="cursor-target px-4 py-2 bg-primary text-white font-jetbrains flex items-center gap-2"
            >
              <span>View more projects</span>
              <MoveRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
