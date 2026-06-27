"use client";
import LogoLoop from "@/components/LogoLoop";
import { FaGit, FaNodeJs, FaReact } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiArduino, SiExpress, SiFigma } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const techLogos = [
    {
      node: <FaReact color="#8e9895" />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiFigma color="#8e9895" />,
      title: "Figma",
      href: "https://figma.com",
    },
    {
      node: <FaNodeJs color="#8e9895" />,
      title: "NodeJS",
      href: "https://nodejs.org/en",
    },
    {
      node: <TbBrandNextjs color="#8e9895" />,
      title: "NextJS",
      href: "https://nextjs.org",
    },
    {
      node: <TbBrandMongodb color="#8e9895" />,
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },
    {
      node: <TbBrandJavascript color="#8e9895" />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiExpress color="#8e9895" />,
      title: "ExpressJS",
      href: "https://expressjs.com/en/",
    },
    {
      node: <TbBrandTypescript color="#8e9895" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiArduino color="#8e9895" />,
      title: "Arduino",
      href: "https://www.arduino.cc",
    },
    {
      node: <TbBrandTailwind color="#8e9895" />,
      title: "Tailwind",
      href: "https://tailwindcss.com",
    },
    {
      node: <FiFramer color="#8e9895" />,
      title: "Framer",
      href: "https://www.framer.com/dictionary/framer-motion",
    },
    {
      node: <FaGit color="#8e9895" />,
      title: "Git",
      href: "https://git-scm.com",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(innerRef.current, {
        scale: 0.93,
        opacity: 0,
        borderRadius: "16px",
      });

      const entranceTl = gsap.timeline();
      entranceTl.to(innerRef.current, {
        scale: 1,
        opacity: 1,
        borderRadius: "0px",
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          if (entranceTl.progress() >= 1) {
            gsap.set(innerRef.current, {
              scale: 1 - 0.07 * self.progress,
              borderRadius: `${16 * self.progress}px`,
            });
          }
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
        <div className="w-full flex flex-col items-center gap-7">
          <p className="text-xs text-black/40 tracking-wide font-jetbrains text-center">
            // section.stack
          </p>
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="right"
            logoHeight={50}
            gap={50}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#f2f2f2"
            ariaLabel="Technology partners"
          />
          <div className="absolute dev-number text-[5rem] md:text-[6rem] text-black/10 leading-none -translate-y-2 font-jetbrains shrink-0 ml-4 hidden md:block">
            02
          </div>
        </div>
      </div>
    </div>
  );
}
