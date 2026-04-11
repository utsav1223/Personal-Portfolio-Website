import { motion } from "framer-motion";
import { skills } from "../data/skills.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const totalSkills = skills.reduce((count, group) => count + group.items.length, 0);

const summaryCards = [
  { value: String(skills.length).padStart(2, "0"), label: "Skill Domains" },
  { value: String(totalSkills).padStart(2, "0"), label: "Competencies" },
  { value: "Core CS", label: "Added Foundations" }
];

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Capabilities"
    title="Engineering Skills"
    subtitle="A structured view of the stack, tooling, and core computer science subjects that shape how I build full-stack products."
  >
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        {summaryCards.map((card, index) => (
          <Reveal key={card.label} delay={index * 0.08}>
            <div className="panel-muted p-5 sm:p-6">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {card.value}
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                {card.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {skills.map((group, groupIndex) => {
          const isCoreCategory = group.category === "Core CS";

          return (
            <Reveal key={group.category} delay={groupIndex * 0.08}>
              <div className={`panel-surface h-full p-6 sm:p-8 ${isCoreCategory ? "lg:col-span-2" : ""}`}>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-xl">
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300/70">
                      {String(groupIndex + 1).padStart(2, "0")} / Domain
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {group.category}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                      {group.summary}
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {group.items.length} skills
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`mt-8 grid gap-3 ${isCoreCategory ? "sm:grid-cols-2 xl:grid-cols-3" : "sm:grid-cols-2"}`}
                >
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.18)" }}
                        className="group flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4 transition-all duration-300"
                      >
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl"
                          style={{ color: item.color }}
                        >
                          <Icon />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white/85">{item.name}</p>
                          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/30">
                            {isCoreCategory ? "Core Subject" : "Production Skill"}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </Section>
);

export default Skills;
