import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { certifications } from "../data/certifications.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const Certifications = () => (
  <Section
    id="certifications"
    eyebrow="Credentials"
    title="Certifications"
    subtitle="Certificate previews from recent technical programs and professional learning tracks, presented in a layout that stays clear on every screen size."
    className="relative z-20 bg-ink"
  >
    <div className="glass-card overflow-hidden p-1.5 sm:p-2 md:p-3">
      <div className="space-y-0">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          const isLast = index === certifications.length - 1;

          return (
            <Reveal key={cert.title} delay={index * 0.08} width="100%">
              <motion.div
                whileHover={{ x: 6 }}
                className={`group px-4 py-5 transition-colors hover:rounded-[1.5rem] hover:bg-white/[0.03] sm:px-6 sm:py-6 md:px-8 md:py-7 ${
                  isLast ? "" : "border-b border-white/10"
                }`}
              >
                <div className="grid gap-5 md:grid-cols-[84px_minmax(0,1fr)] md:gap-6">
                  <div className="flex items-center justify-between gap-4 md:block">
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-white/45 md:mt-2">{cert.year}</p>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,220px)_minmax(0,1fr)_auto] xl:items-center">
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate preview`}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                          {cert.platform}
                        </p>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.28em] text-white/35">
                          Certificate Preview
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-body font-semibold normal-case tracking-tight text-white sm:text-2xl md:text-3xl">
                        {cert.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                        {cert.summary}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:items-end">
                      <div className="flex items-center gap-4 xl:justify-end">
                        <div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-2xl shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
                          style={{
                            color: cert.color,
                            backgroundColor: `${cert.color}14`,
                            borderColor: `${cert.color}44`
                          }}
                        >
                          <Icon />
                        </div>

                        <div className="flex flex-col text-left xl:text-right">
                          <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/25">
                            Verified
                          </span>
                          <span className="mt-2 text-xs text-white/45">
                            Professional Credential
                          </span>
                        </div>
                      </div>

                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-cyan-200 sm:w-auto"
                      >
                        View Certificate
                        <FiExternalLink className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </Section>
);

export default Certifications;
