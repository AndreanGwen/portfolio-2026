"use client";

import { useEffect, useRef } from "react";

const CHARS = "0123456789∑∂αβγ/+−×↓↗→←·∞";
const FONT_SIZE = 28;
const COLUMN_WIDTH = 44;
const TRAIL_LEN = 8;

type DataRainBgProps = {
  charSet?: string;
  speed?: number;
  headColor?: string;
  trailColor?: string;
  bgColor?: string;
};

/**
 * DataRainBg
 *
 * Canvas-based data rain effect — drop inside any `position: relative` container.
 *
 * Props:
 *   charSet   - string of characters to sample from
 *   speed     - base fall speed multiplier (default 1)
 *   headColor - CSS color of the leading character
 *   trailColor- RGB string "r,g,b" for the trail (opacity is auto-calculated)
 *   bgColor   - background to fade into, as "r,g,b,a" string (match your section bg)
 */
export default function DataRain({
  charSet = CHARS,
  speed = 0.3,
  headColor = "rgba(30,30,30,0.22)",
  trailColor = "30,30,30",
  bgColor = "242,242,242,0.24", // #f2f2f2 with low alpha for trail fade
}: DataRainBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const containerEl = containerRef.current;
    if (!canvasEl || !containerEl) return;

    const context = canvasEl.getContext("2d");
    if (!context) return;

    const canvas = canvasEl;
    const container = containerEl;
    const ctx = context;

    let cols = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let timers: number[] = [];
    let trails: string[][] = [];

    const randomChar = () =>
      charSet[Math.floor(Math.random() * charSet.length)];

    function init() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      cols = Math.floor(canvas.width / COLUMN_WIDTH);
      drops = Array.from(
        { length: cols },
        () => -(Math.random() * (canvas.height / FONT_SIZE))
      );
      speeds = Array.from(
        { length: cols },
        () => (0.4 + Math.random() * 0.3) * speed // range lebih sempit, tidak terlalu lambat
      );
      timers = Array.from({ length: cols }, () => Math.random() * 60);
      trails = Array.from({ length: cols }, () =>
        Array.from({ length: TRAIL_LEN }, randomChar)
      );
    }

    function draw() {
      // Fade previous frame — this creates the trail dissolve effect
      ctx.fillStyle = `rgba(${bgColor})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px "Courier New", monospace`;

      for (let i = 0; i < cols; i++) {
        timers[i]++;
        if (timers[i] < 1 / speeds[i]) continue;
        timers[i] = 0;

        const x = i * COLUMN_WIDTH;
        const yHead = drops[i] * FONT_SIZE;

        // Occasionally mutate a char in the trail (shimmer effect)
        if (Math.random() < 0.08) {
          trails[i][Math.floor(Math.random() * TRAIL_LEN)] = randomChar();
        }

        // Draw trail bottom (head) → top (oldest)
        for (let t = TRAIL_LEN - 1; t >= 0; t--) {
          const yOff = yHead - (TRAIL_LEN - 1 - t) * FONT_SIZE;
          if (yOff < 0 || yOff > canvas.height) continue;

          if (t === TRAIL_LEN - 1) {
            ctx.fillStyle = headColor;
          } else {
            const ratio = t / (TRAIL_LEN - 1);
            const op = (0.08 + ratio * 0.08).toFixed(3);
            ctx.fillStyle = `rgba(${trailColor},${op})`;
          }
          ctx.fillText(trails[i][t], x, yOff);
        }

        drops[i] += 1;

        // Reset column when head is fully off-screen
        if (yHead > canvas.height + TRAIL_LEN * FONT_SIZE) {
          drops[i] = -(Math.random() * (canvas.height / FONT_SIZE));
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    init();
    draw();

    const ro = new ResizeObserver(() => init());
    ro.observe(container);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      ro.disconnect();
    };
  }, [charSet, speed, headColor, trailColor, bgColor]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
