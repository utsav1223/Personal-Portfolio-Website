import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${scrolled ? "py-3 sm:py-4" : "py-3 sm:py-6 md:py-8"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled ? "border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-xl" : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2">
            <span className="text-sm font-light tracking-[0.18em] text-white sm:text-xl sm:tracking-[0.4em]">
              UTSAV
            </span>
            <div className="h-1 w-1 rounded-full bg-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white xl:px-5"
              >
                {hovered === link.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 rounded-full border border-white/5 bg-white/5"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[-1] flex items-center justify-center overflow-y-auto bg-black/95 px-5 pb-10 pt-24 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex w-full max-w-sm flex-col items-center gap-6 px-2 text-center sm:gap-8">
              {links.map((link, i) => (
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-light tracking-[0.25em] text-white/40 transition-colors hover:text-white sm:text-3xl sm:tracking-widest"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
