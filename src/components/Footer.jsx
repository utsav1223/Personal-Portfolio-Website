import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: SiGithub, href: "https://github.com/utsav1223", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/utsavkrjha", label: "LinkedIn" }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-ink/50 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <div className="flex items-center gap-3">
              <span className="text-lg font-light tracking-tighter text-white">
                Utsav Kumar Jha
              </span>
              <div className="h-1 w-1 rounded-full bg-cyan-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                Engineer
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/30">
              (C) 2026 | Handcrafted with Precision
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
            <div className="flex items-center gap-6">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "#fff" }}
                    className="text-white/30 transition-colors"
                    aria-label={item.label}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 transition-colors hover:text-white"
            >
              Back to top
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-cyan-500"
              >
                ^
              </motion.span>
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center md:flex-row md:text-left">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/10">
            Based in India | Available Worldwide
          </p>
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/10">
            Built with React, Framer Motion & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
