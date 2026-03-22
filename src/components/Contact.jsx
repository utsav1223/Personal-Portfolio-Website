import { motion } from "framer-motion";
import { SiGmail, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const contacts = [
  {
    label: "Email",
    value: "utsavjha93030@gmail.com",
    href: "mailto:utsavjha93030@gmail.com",
    icon: SiGmail,
    color: "#EA4335"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/utsavkrjha",
    href: "https://www.linkedin.com/in/utsavkrjha",
    icon: FaLinkedin,
    color: "#0077B5"
  },
  {
    label: "GitHub",
    value: "github.com/utsav1223",
    href: "https://github.com/utsav1223",
    icon: SiGithub,
    color: "#ffffff"
  }
];

const Contact = () => (
  <Section
    id="contact"
    eyebrow="Availability: Open for Collaboration"
    title="Start a Project"
    subtitle="Available for full-stack engineering roles, freelance builds, and thoughtful product collaborations."
  >
    <div className="mx-auto mt-10 max-w-6xl pb-14 sm:mt-20 sm:pb-24">
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal delay={0.1}>
          <div className="flex flex-col space-y-6 sm:space-y-10">
            <h3 className="text-[clamp(2.5rem,14vw,7rem)] font-light leading-[0.95] text-white">
              Let's build <br />
              <span className="font-serif italic text-white/20">something</span> bold.
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                Available for New Work | 2026
              </p>
            </div>

            <p className="max-w-md text-base font-light leading-relaxed text-white/50 sm:text-lg">
              If you need a reliable developer for a polished web product, scalable backend flow, or a responsive frontend refresh, I would be glad to connect.
            </p>

            <div className="pt-2 sm:pt-4">
              <a
                href="mailto:utsavjha93030@gmail.com"
                className="group inline-flex w-full max-w-xl flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.05] sm:max-w-max sm:px-6"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-cyan-400/80 transition-transform group-hover:-translate-y-1">
                  Direct Email
                </span>
                <span className="mt-2 break-all text-xl font-light text-white underline decoration-1 decoration-white/10 underline-offset-[12px] transition-all group-hover:decoration-cyan-400 sm:text-2xl">
                  utsavjha93030@gmail.com
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="space-y-4">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 sm:mb-8">
            Digital Presence
          </p>
          <div className="grid gap-3">
            {contacts.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.label} delay={0.2 + index * 0.1} x={30}>
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 12 }}
                    className="glass-card group flex flex-col gap-4 p-5 transition-all hover:border-white/20 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between sm:p-6"
                  >
                    <div className="flex min-w-0 items-center gap-4 sm:gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/5 transition-all group-hover:border-cyan-500/30 group-hover:bg-white/10">
                        <Icon
                          className="text-xl transition-colors group-hover:text-white"
                          style={{ color: item.color }}
                        />
                      </div>
                      <div className="flex min-w-0 flex-col">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 transition-colors group-hover:text-cyan-400/60">
                          {item.label}
                        </span>
                        <span className="break-all text-sm font-medium text-white/60 transition-colors group-hover:text-white">
                          {item.value}
                        </span>
                      </div>
                    </div>

                    <svg
                      className="h-5 w-5 text-cyan-400 opacity-70 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:-translate-x-4 sm:opacity-0 sm:group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Contact;
