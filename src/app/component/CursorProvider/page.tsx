"use client";
import TargetCursor from "@/components/TargetCursor";
import { useStateContext } from "@/context/StateContext";

export default function CursorProvider() {
  const { _dark_mode, _handle_set_dark_mode } = useStateContext();
  return (
    <TargetCursor
      spinDuration={3}
      hideDefaultCursor
      parallaxOn
      hoverDuration={0.2}
      cursorColor={`${_dark_mode ? "#ffffff" : "#000000"}`}
      cursorColorOnTarget="#ff7500"
    />
  );
}
