"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavbarProps = {
  where?: string;
};

export default function Navbar({ where }: NavbarProps) {
  const navbarRef = useRef<HTMLHeadingElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // Navbar entrance
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  // Modal open/close animation
  useEffect(() => {
    if (!modalRef.current) return;

    if (open) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95, y: -8 },
        { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    } else {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -8,
        duration: 0.18,
        ease: "power2.in",
      });
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        !(e.target as Element).closest("#hamburger-btn")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const navItems = ["Home", "About", "Education", "Project", "Resume"];

  return (
    <>
      <div
        ref={navbarRef}
        className="w-full h-14 border-b border-black/10 fixed top-0 z-999 flex items-center justify-between px-7.5 text-[13px] text-(--font-secodary) backdrop-blur-sm"
      >
        {/* Logo */}
        <a
          href="/"
          className="font-jetbrains hover:text-primary flex items-center relative group"
        >
          AndreanGwen
          <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop nav */}
        <div className="font-jetbrains hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = where?.toLowerCase() === item.toLowerCase();
            return (
              <Link
                key={item}
                href={`${item == "Home" ? "/" : `/${item.toLowerCase()}`}`}
                className="relative group cursor-none cursor-target"
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 cursor-none cursor-target ${
                    isActive
                      ? "w-full bg-primary"
                      : "w-0 group-hover:w-full bg-primary"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Hamburger (mobile only) */}
        <button
          id="hamburger-btn"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile modal */}
      {open && (
        <div
          ref={modalRef}
          className="fixed top-16 right-4 z-1000 w-52 bg-white border border-black/10 rounded-xl shadow-lg overflow-hidden md:hidden"
        >
          <div className="flex flex-col py-2">
            {navItems.map((item) => {
              const isActive = where?.toLowerCase() === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`${item == "Home" ? "/" : `/${item.toLowerCase()}`}`}
                  onClick={() => setOpen(false)}
                  className={`font-jetbrains px-5 py-3 text-[13px] transition-colors duration-150 relative flex items-center gap-2 ${
                    isActive
                      ? "text-primary"
                      : "text-(--font-secodary) hover:bg-black/5"
                  }`}
                >
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  )}
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
