/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect } from "react";
import useFluidCursor from "@/app/hooks/useFluidCursor";

export default function FluidBackground() {
  useEffect(() => {
    // Remove any existing canvas
    const oldCanvas = document.getElementById("fluid");
    if (oldCanvas) oldCanvas.remove();

    // Create full-page fixed canvas
    const canvas = document.createElement("canvas");
    canvas.id = "fluid";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.mixBlendMode = "normal"; // CHANGE if you want glow

    document.body.appendChild(canvas);

    // Start fluid effect
    try {
      useFluidCursor();
    } catch (err) {
      console.warn("[FluidBackground] Error:", err);
    }

    return () => {
      const c = document.getElementById("fluid");
      if (c) c.remove();
    };
  }, []);

  return null;
}
