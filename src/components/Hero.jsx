import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";

const stats = [
  { value: "02", label: "Selected products" },
  { value: "17+", label: "Technical skills" },
  { value: "2026", label: "Open to work" }
];

const resumeUrl = "https://drive.google.com/file/d/1iIFDqvPmG82c4sPJRpwLOL0niqyVSYfY/view?usp=sharing";

const Hero = () => (
  <section
    id="top"
    className="relative flex min-h-[92svh] items-center overflow-hidden bg-slate-950 pb-12 pt-28 text-white sm:pt-32"
  >
    <div className="absolute inset-0 z-0">
      <video
        className="h-full w-full object-cover opacity-35 grayscale"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.95),rgba(15,23,42,0.86)_42%,rgba(15,23,42,0.58)),linear-gradient(180deg,rgba(2,6,23,0.2),rgba(2,6,23,0.95))]" />
    </div>

    <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-bold uppercase text-white/75 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-teal-300" />
          Full Stack Developer
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-none tracking-normal text-white sm:text-6xl lg:text-7xl">
          Utsav Kumar Jha
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
          I design and build responsive web products with React, Node.js, databases, and practical full-stack engineering.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100">
            View projects
            <FiArrowRight />
          </a>
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.08] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.12]">
            <FiDownload />
            Resume
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]">
            <FiMail />
            Contact
          </a>
        </div>

        <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="surface-card-dark p-4">
              <p className="text-2xl font-semibold leading-none text-white">{item.value}</p>
              <p className="mt-2 text-xs font-medium leading-5 text-white/55">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block"
      >
        <div className="surface-card-dark overflow-hidden p-4">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-md">
              <img
                src="/Utsav.jpg"
                alt="Utsav Kumar Jha"
                className="aspect-[4/4.6] w-full object-cover object-[center_14%]"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-sm font-semibold text-white">Portfolio focus</p>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Clean interfaces, reliable APIs, and database-backed user workflows.
                </p>
              </div>
              <span className="tag-dark w-fit">India</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
