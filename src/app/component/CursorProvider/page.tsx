"use client";
import TargetCursor from "@/components/TargetCursor";

export default function CursorProvider() {
  return (
    <TargetCursor
      spinDuration={3}
      hideDefaultCursor
      parallaxOn
      hoverDuration={0.2}
      cursorColor="#000000"
      cursorColorOnTarget="#ff7500"
    />
  );
}
