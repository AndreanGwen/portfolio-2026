"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project from "@/app/data/project.json";

gsap.registerPlugin(ScrollTrigger);

export default function CardProject() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  itemsRef.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for title/desc
      gsap.set(".dev-title, .dev-desc, .dev-number", {
        y: 40,
        opacity: 0,
      });

      gsap.to(".dev-title, .dev-desc, .dev-number", {
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

      // Entrance animation per card, staggered as each enters view
      itemsRef.current.forEach((item, i) => {
        gsap.set(item, {
          y: 60,
          opacity: 0,
          scale: 0.96,
        });

        gsap.to(item, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Shrink whole section slightly when scrolled out of view (scrub)
      gsap.to(innerRef.current, {
        scale: 0.93,
        borderRadius: "16px",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="certification">
      <div
        ref={innerRef}
        className="w-full h-fit relative px-6 md:px-20 lg:px-35 py-14 md:py-20 overflow-hidden origin-bottom will-change-transform bg-[#e7e7e7a7] border-b border-black/20"
      >
        {/* Title row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative gap-6 md:gap-0">
          <div className="flex flex-col gap-4 md:gap-8 w-full">
            <h1 className="dev-title text-2xl md:text-4xl font-medium inter text-center md:text-left">
              Featured Projects
            </h1>
            <p className="dev-desc w-full md:w-1/2 text-black/50 text-center md:text-left text-xs md:text-[15px]">
              A curated collection of projects that showcase my experience in
              designing, developing, and deploying modern web applications. Each
              project reflects my approach to solving real-world problems with
              clean code, intuitive user experiences, and scalable technologies.
            </p>
          </div>
          <div className="dev-number text-[4rem] md:text-[6rem] text-black/10 leading-none md:-translate-y-2 font-jetbrains shrink-0 md:ml-4 hidden md:block">
            02
          </div>
        </div>

        {/* Content Card */}
        <div className="w-full pt-8 md:pt-10">
          <div className="flex flex-col gap-6 md:gap-8">
            {project.map((item) => (
              <a
                href={item.url}
                target="_blank"
                className="cursor-target"
                key={item?.id}
              >
                <div
                  key={item.id}
                  ref={addToRefs}
                  className="w-full border border-black/20 p-4 md:p-5 flex flex-col md:flex-row items-center gap-6 md:gap-8"
                >
                  {/* Image */}
                  <div className="w-full md:w-[38%] h-55 md:h-85 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={700}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-0">
                      <div>
                        <h2 className="text-xl md:text-2xl font-semibold">
                          {item.name}
                        </h2>

                        <p className="mt-1 text-sm text-blue-600 font-medium">
                          {item.category}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                        <span className="text-orange-500 font-semibold">
                          {item.year}
                        </span>
                        <span className="text-zinc-500">{item.type}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-zinc-500">
                      {item.description}
                    </p>

                    {/* Task */}
                    <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                      {item.task.map((task, index) => (
                        <li key={index}>
                          <span className="mr-2 text-green-500">+</span>
                          {task}
                        </li>
                      ))}
                    </ul>

                    {/* Specifications */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.specifications.map((spec) => (
                        <span
                          key={spec}
                          className="border border-zinc-300 px-2.5 py-1 text-[11px] uppercase tracking-wider text-zinc-500"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
