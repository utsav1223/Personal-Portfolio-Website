import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { projects } from "../data/projects.js";
import Section from "./Section.jsx";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const closeProject = () => setActiveProject(null);
  const stopPropagation = (event) => event.stopPropagation();

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeProject();
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

  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Selected work with clear product outcomes."
      subtitle="Two focused builds that show full-stack implementation, user workflows, database integration, and thoughtful feature delivery."
      className="bg-white"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="surface-card group overflow-hidden p-4 transition hover:-translate-y-1 hover:border-teal-200"
          >
            <div className="overflow-hidden rounded-md bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="p-2 pt-5 sm:p-3 sm:pt-6">
              <div className="flex items-center justify-between gap-3">
                <span className="tag">Case study 0{index + 1}</span>
                <span className="text-sm font-semibold text-slate-500">{project.stack[0]}</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-normal text-slate-950">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.detail}</p>

              <div className="mt-5 space-y-3 border-t border-slate-200 pt-5">
                {project.highlights.slice(0, 4).map((highlight) => (
                  <div key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                    <span>{highlight}</span>
                  </div>
                ))}
                {project.highlights.length > 4 && (
                  <p className="text-sm font-semibold text-teal-700">
                    View details for full feature set.
                  </p>
                )}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="primary-button"
                  onClick={(event) => {
                    stopPropagation(event);
                    setActiveProject(project);
                  }}
                >
                  View details
                  <FiArrowRight />
                </button>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                  onClick={stopPropagation}
                >
                  <FiExternalLink />
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                  onClick={stopPropagation}
                >
                  <FiGithub />
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[1400] overflow-hidden bg-slate-950/75 p-3 backdrop-blur-sm sm:p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <div className="flex min-h-[100svh] items-end justify-center sm:items-center">
              <motion.div
                className="surface-card relative flex max-h-[calc(100svh-1.5rem)] w-full max-w-5xl flex-col overflow-hidden sm:max-h-[calc(100svh-2.5rem)]"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={stopPropagation}
              >
                <button
                  type="button"
                  onClick={closeProject}
                  className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 sm:right-4 sm:top-4"
                  aria-label="Close project details"
                >
                  <FiX className="text-xl" />
                </button>

                <div className="min-h-0 overflow-y-auto overscroll-contain">
                  <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="bg-slate-100 p-3 sm:p-4 lg:sticky lg:top-0 lg:h-full">
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="aspect-[16/9] w-full rounded-md object-cover lg:aspect-auto lg:h-full"
                      />
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8">
                      <span className="section-kicker">Project overview</span>
                      <h2 className="mt-3 pr-12 text-2xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-3xl">
                        {activeProject.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        {activeProject.description || activeProject.detail}
                      </p>

                      <div className="mt-5 border-t border-slate-200 pt-5 sm:mt-6 sm:pt-6">
                        <h3 className="text-sm font-bold uppercase text-slate-900">Key features</h3>
                        <ul className="mt-3 space-y-3">
                          {activeProject.highlights.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                        {activeProject.stack.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                        <a
                          href={activeProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="primary-button w-full sm:w-auto"
                        >
                          <FiExternalLink />
                          Open live demo
                        </a>
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="secondary-button w-full sm:w-auto"
                        >
                          <FiGithub />
                          Source code
                        </a>
                      </div>
                    </div>
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
