import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FloatingOrbs from "./FloatingOrbs.jsx";
import ScrollIndicator from "./ScrollIndicator.jsx";

const heading = "Full Stack Developer Building Modern & Scalable Web Applications";
const subtitle = "I design and develop fast, scalable web apps using modern technologies like React, Node.js and AI tools.";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 20 : 40;

    if (!isDeleting && index === subtitle.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && index === 0) {
      const timeout = setTimeout(() => setIsDeleting(false), 800);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050505] pb-14 pt-24 sm:pb-20 md:min-h-[100dvh] md:pt-24 lg:pb-0 lg:pt-0"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-60 brightness-[0.7] contrast-[1.05]"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      <FloatingOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-wrap items-center gap-3 sm:mb-10 sm:gap-4"
          >
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-[9px] font-bold uppercase tracking-[0.32em] text-white/50 sm:text-[10px] sm:tracking-[0.4em]">
              Utsav Kumar Jha | Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-[clamp(2.1rem,8vw,5rem)] font-light leading-[1.05] tracking-tight text-white"
          >
            {heading.split(" ").map((word, i) => (
              <span key={i} className="mr-[0.3em] inline-block">
                <motion.span variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <div className="mt-7 min-h-[4.8em] max-w-2xl text-sm font-light leading-relaxed text-white/60 sm:min-h-[4em] sm:text-base md:mt-10 md:text-lg lg:text-xl">
            <span className="animate-pulse border-r-2 border-white/40 py-1 pr-1">
              {subtitle.slice(0, index)}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-9 flex flex-wrap gap-3 sm:mt-12 sm:gap-4 md:mt-16"
          >
            <a
              href="#projects"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-black transition-all hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] sm:w-auto sm:px-10 sm:py-5"
            >
              <span className="relative z-10">View Work</span>
              <motion.div
                animate={{ x: ["-150%", "150%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "linear"
                }}
                className="absolute inset-0 z-0 h-full w-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-black/[0.08] to-transparent"
              />
            </a>

            <a
              href="https://drive.google.com/file/d/1eSRTD49jOgrQ0KiAfssnBQKwdIjzyysy/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 sm:w-auto sm:px-10 sm:py-5"
            >
              <span className="relative z-10">Download CV</span>
              <motion.div
                animate={{ x: ["-150%", "150%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2.5,
                  ease: "linear"
                }}
                className="absolute inset-0 z-0 h-full w-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent"
              />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
