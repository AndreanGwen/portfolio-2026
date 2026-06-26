"use client";
import ShapeGrid from "@/components/ShapeGrid";
import { Bot, CodeXml, FolderKanban, Layers } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    icon: <CodeXml size={27} />,
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites using the latest web technologies.",
  },
  {
    icon: <Layers size={27} />,
    title: "UI/UX Design",
    description:
      "Creating visually appealing and user-friendly interfaces for websites and applications.",
  },
  {
    icon: <FolderKanban size={27} />,
    title: "CMS Development",
    description:
      "Building and maintaining content management systems (CMS) for websites and applications.",
  },
  {
    icon: <Bot size={27} />,
    title: "IOT Development",
    description:
      "Building prototypes and applications for Internet of Things (IoT) devices and systems.",
  },
];

export default function DevelopmentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

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

      gsap.from(".dev-title", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".dev-title",
          start: "top 90%",
        },
      });

      gsap.from(".dev-desc", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".dev-desc",
          start: "top 100%",
        },
      });

      gsap.from(".dev-number", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".dev-number",
          start: "top 85%",
        },
      });

      gsap.from(".dev-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".dev-cards",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={innerRef}
        className="w-full h-fit bg-[#e7e7e7a7] relative px-6 md:px-20 lg:px-35 py-20 overflow-hidden origin-bottom will-change-transform"
      >
        {/* ShapeGrid background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <ShapeGrid
            speed={0.5}
            squareSize={30}
            borderColor="#dadada"
            hoverFillColor="#616161"
            shape="square"
            hoverTrailAmount={0}
            direction="left"
            edgeFadeColor="#efefef"
            edgeFadeWidth={180}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4 w-full h-full justify-center pointer-events-none">
          {/* Title row */}
          <div className="flex justify-between items-start relative">
            <div className="flex flex-col gap-8 w-full">
              <h1 className="dev-title text-2xl md:text-5xl font-medium inter text-center md:text-left">
                Comprehensive design &<br />
                development solutions.
              </h1>
              <p className="dev-desc w-full md:w-1/2 text-black/50 text-center md:text-left text-xs md:text-[15px]">
                Delivering websites and applications that are fast, scalable,
                and user-focused. By combining modern development practices with
                strategic design, I help transform ideas into impactful digital
                products.
              </p>
            </div>
            <div className="dev-number text-[5rem] md:text-[6rem] text-black/10 leading-none -translate-y-2 font-jetbrains shrink-0 ml-4 hidden md:block">
              01
            </div>
          </div>

          {/* Cards */}
          <div className="dev-cards w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 pt-7">
            {data.map((item, index) => (
              <div
                key={index}
                className="dev-card w-full h-fit bg-background border-l-4 border-primary p-5 flex flex-col justify-center gap-4 pointer-events-auto"
              >
                <div className="w-15 h-15 flex justify-center items-center bg-[#f5f6f7] rounded-full shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold">{item.title}</h1>
                  <span className="text-sm text-black/50">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
