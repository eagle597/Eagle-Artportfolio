/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Smooth springs for tracking
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  const springOptions = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(pointerX, springOptions);
  const cursorY = useSpring(pointerY, springOptions);

  useEffect(() => {
    // Disable on mobile/touch interfaces
    const detectMobile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsMobile(isTouch);
    };

    detectMobile();
    window.addEventListener("resize", detectMobile);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      pointerX.set(e.clientX);
      pointerY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Track interactions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive-hover")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", detectMobile);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, visible]);

  if (isMobile || !visible) return null;

  return (
    <>
      {/* Central Solid Dot */}
      <motion.div
        className="custom-cursor"
        style={{
          x: pointerX,
          y: pointerY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#ec4899" : "#6366f1",
        }}
      />
      {/* Outer Halo Ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          borderColor: isHovered ? "#ec4899" : "rgba(99, 102, 241, 0.4)",
          backgroundColor: isHovered ? "rgba(236, 72, 153, 0.05)" : "transparent",
        }}
      />
    </>
  );
};
