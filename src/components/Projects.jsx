import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { projects } from "../data/projects.js";
import Section from "./Section.jsx";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const closeProject = () => setActiveProject(null);

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeProject();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const stopPropagation = (event) => event.stopPropagation();

  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Selected Projects"
      subtitle="A curated set of full-stack products focused on real user flows, dependable backend execution, and clear implementation decisions."
      className="relative z-10 isolate"
    >
      <div className="relative isolate">
        <div className="grid gap-10 pb-20 sm:gap-12 md:gap-14 lg:pb-32">
          {projects.map((project, index) => {
            const stickyTop = 92 + index * 34;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveProject(project)}
                style={{ top: `${stickyTop}px`, zIndex: index + 1 }}
                className="group cursor-pointer rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(6,10,19,0.96))] p-4 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_24px_90px_rgba(2,6,23,0.55)] sm:rounded-[2rem] sm:p-5 md:p-8 lg:sticky lg:p-10"
              >
                <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5 sm:h-[320px] sm:aspect-auto md:h-[420px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
                      Case Study
                    </div>

                    <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 sm:flex">
                      <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-white">
                          Open Project
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="space-y-5 sm:space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-cyan-400/80">
                          0{index + 1} / Project
                        </span>
                        <div className="h-[1px] flex-1 bg-white/10" />
                      </div>

                      <h3 className="font-body text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[3.35rem]">
                        {project.title}
                      </h3>

                      <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                        {project.detail}
                      </p>

                      <div className="space-y-3 pt-1">
                        {project.highlights.slice(0, 3).map((highlight) => (
                          <div key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-white/58">
                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.24em] text-white/65"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3">
                        <button
                          type="button"
                          className="group/btn flex items-center gap-4 text-xs font-bold uppercase tracking-[0.25em] text-white"
                        >
                          Open Case Study
                          <span className="h-[1px] w-12 bg-white/20 transition-all group-hover/btn:w-20 group-hover/btn:bg-cyan-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[1400] overflow-y-auto overscroll-contain bg-black/88 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <div
              className="relative flex min-h-full items-start justify-center p-3 sm:p-5 lg:p-8"
              style={{
                paddingTop: "max(0.9rem, calc(env(safe-area-inset-top) + 0.5rem))",
                paddingRight: "max(0.9rem, env(safe-area-inset-right))",
                paddingBottom: "max(0.9rem, env(safe-area-inset-bottom))",
                paddingLeft: "max(0.9rem, env(safe-area-inset-left))"
              }}
            >
              <motion.div
                layoutId={activeProject.title}
                className="relative my-8 w-full max-w-[760px] overflow-hidden rounded-[1.3rem] border border-white/10 bg-[#0E1116] shadow-[0_30px_110px_rgba(0,0,0,0.56)] sm:my-10 sm:rounded-[1.6rem] md:max-w-[820px] md:rounded-[1.8rem]"
                initial={{ scale: 0.97, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.97, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                onClick={stopPropagation}
              >
                <button
                  type="button"
                  onClick={closeProject}
                  className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:border-white/20 hover:bg-white/[0.1] active:scale-[0.96] sm:right-5 sm:top-5"
                  aria-label="Close project details"
                >
                  <FiX className="text-xl" />
                </button>

                <div className="p-5 sm:p-7 md:p-9">
                  <div className="mb-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>

                  <header className="mb-8 border-b border-white/10 pb-4 pr-14 sm:mb-10 sm:pr-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">
                      Project Overview
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                      {activeProject.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                      {activeProject.detail}
                    </p>
                  </header>

                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
                    <div className="space-y-7">
                      <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                        {activeProject.description || activeProject.detail}
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white">Key Features</h4>
                        <ul className="space-y-3">
                          {activeProject.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-white/55">
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <aside className="space-y-7">
                      <div className="flex flex-col gap-3">
                        <a
                          href={activeProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-[1.02]"
                        >
                          <FiExternalLink /> Live Demo
                        </a>
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
                        >
                          <FiGithub /> Source Code
                        </a>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
