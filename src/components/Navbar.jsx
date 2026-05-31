import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
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

const resumeUrl = "https://drive.google.com/file/d/1iIFDqvPmG82c4sPJRpwLOL0niqyVSYfY/view?usp=sharing";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${scrolled ? "py-3" : "py-4 sm:py-6"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border border-slate-200 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              : "border border-white/10 bg-slate-950/20 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="group flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-md text-xs font-extrabold uppercase transition-colors ${
                scrolled
                  ? "bg-slate-950 text-white"
                  : "border border-white/15 bg-white/10 text-white"
              }`}
            >
              UJ
            </div>
            <div className="flex flex-col">
              <span className={`hidden text-sm font-bold tracking-normal sm:block ${scrolled ? "text-slate-950" : "text-white"}`}>
                Utsav Kumar Jha
              </span>
              <span className={`text-[10px] font-bold uppercase ${scrolled ? "text-slate-500" : "text-white/55"}`}>
                Full Stack Developer
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-[11px] font-bold uppercase transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className={`hidden items-center gap-2 rounded-md px-4 py-2.5 text-xs font-bold transition md:inline-flex ${
              scrolled
                ? "bg-slate-950 text-white hover:bg-slate-800"
                : "border border-white/15 bg-white text-slate-950 hover:bg-white/90"
            }`}
          >
            <FiDownload />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`flex h-10 w-10 items-center justify-center rounded-md border text-xl transition lg:hidden ${
              scrolled
                ? "border-slate-200 bg-white text-slate-950"
                : "border-white/15 bg-white/10 text-white"
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
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
            className="fixed inset-0 z-[-1] overflow-y-auto bg-white px-5 pb-10 pt-28 lg:hidden"
          >
            <nav className="mx-auto flex w-full max-w-sm flex-col gap-3 px-2">
              {links.map((link, i) => (
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-base font-bold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.1 }}
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-4 text-sm font-bold text-white"
              >
                <FiDownload />
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
