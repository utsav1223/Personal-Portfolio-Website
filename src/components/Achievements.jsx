import { motion } from "framer-motion";
import { achievements } from "../data/achievements.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const Achievements = () => {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Selected Achievements"
      subtitle="Two milestones that reflect consistent learning, problem solving, and hands-on execution."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.1} width="100%">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card group relative flex h-full min-h-[240px] flex-col overflow-hidden p-5 transition-all duration-500 hover:border-white/20 sm:min-h-[320px] sm:p-8 md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-amber-100/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute right-5 top-5 text-5xl font-black text-white/[0.04] sm:right-6 sm:top-6 sm:text-6xl">
                0{index + 1}
              </div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-cyan-300/70">
                      Achievement 0{index + 1}
                    </p>
                    <h3 className="mt-4 text-xl font-body font-semibold normal-case tracking-tight text-white sm:text-2xl md:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-white/45">{item.year}</span>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:mt-8 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-auto pt-10">
                  <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
                      Selected Milestone
                    </span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
