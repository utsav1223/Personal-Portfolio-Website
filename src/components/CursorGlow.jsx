import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const ringX = useMotionValue(-500);
  const ringY = useMotionValue(-500);

  const glowX = useSpring(mouseX, { stiffness: 150, damping: 30, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 150, damping: 30, mass: 0.5 });
  const smoothRingX = useSpring(ringX, { stiffness: 260, damping: 28, mass: 0.35 });
  const smoothRingY = useSpring(ringY, { stiffness: 260, damping: 28, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const interactiveSelector = "a, button, [role='button'], input, textarea, select, summary, label";

    const updateCursorMode = () => {
      const enabled = media.matches;
      setIsEnabled(enabled);
      document.body.classList.toggle("custom-cursor-active", enabled);

      if (!enabled) {
        setIsVisible(false);
        setIsInteractive(false);
        setIsPointerDown(false);
      }
    };

    const handleMove = (e) => {
      if (!media.matches) return;

      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setIsInteractive(Boolean(e.target.closest(interactiveSelector)));
    };

    const handlePointerDown = () => media.matches && setIsPointerDown(true);
    const handlePointerUp = () => media.matches && setIsPointerDown(false);
    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => media.matches && setIsVisible(true);

    updateCursorMode();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("mouseenter", handlePointerEnter);
    media.addEventListener("change", updateCursorMode);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);
      media.removeEventListener("change", updateCursorMode);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY, ringX, ringY]);

  if (!isEnabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[1100]"
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: `radial-gradient(420px circle at ${glowX}px ${glowY}px, rgba(14, 231, 255, 0.09), transparent 78%)`
        }}
        aria-hidden="true"
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[1250] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/80 bg-cyan-300/10 backdrop-blur-[2px]"
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointerDown ? 0.82 : isInteractive ? 1.45 : 1
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        style={{
          x: smoothRingX,
          y: smoothRingY,
          boxShadow: isInteractive
            ? "0 0 32px rgba(34, 211, 238, 0.35)"
            : "0 0 22px rgba(34, 211, 238, 0.18)"
        }}
        aria-hidden="true"
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[1260] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointerDown ? 0.7 : isInteractive ? 1.2 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          x: mouseX,
          y: mouseY,
          boxShadow: "0 0 18px rgba(255,255,255,0.55)"
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CursorGlow;
