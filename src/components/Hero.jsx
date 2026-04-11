import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator.jsx";

const typingPhrases = [
  "React Frontend Interfaces",
  "Scalable Backend APIs",
  "AI-Enabled Web Products"
];

const Hero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];

    if (!isDeleting && displayText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 1300);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      }, 220);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      const nextText = isDeleting
        ? currentPhrase.slice(0, displayText.length - 1)
        : currentPhrase.slice(0, displayText.length + 1);

      setDisplayText(nextText);
    }, isDeleting ? 45 : 85);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050505] pt-24 sm:pt-28 md:min-h-[100dvh] md:pt-32"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-55 brightness-[0.58]"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.62),rgba(2,6,23,0.38),rgba(2,6,23,0.9))]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Full Stack Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[clamp(2.8rem,8vw,5.4rem)] font-semibold leading-[0.95] tracking-tight text-white"
          >
            Utsav Kumar Jha
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75 }}
            className="mt-5 flex min-h-[1.8rem] items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white/55 sm:text-sm"
          >
            <span>Focused on</span>
            <span className="typing-text text-cyan-200">{displayText}</span>
            <span className="typing-caret" style={{ backgroundColor: "#bae6fd" }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg"
          >
            I build clean, responsive, and reliable web applications using modern frontend and backend technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-black transition-all hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-9"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.09] sm:w-auto sm:px-9"
            >
              Contact Me
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
