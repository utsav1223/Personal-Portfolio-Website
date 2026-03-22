import { motion } from "framer-motion";
import { skills } from "../data/skills.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Tooling"
    title="Technical Stack"
    subtitle="A high-performance ecosystem of modern frameworks and tools tailored for scalable product engineering."
  >
    <div className="flex flex-col gap-12">
      {skills.map((group, groupIndex) => (
        <Reveal key={group.category} delay={groupIndex * 0.1}>
          <div className="glass-card overflow-hidden border-white/5 bg-white/[0.01] p-8 md:p-10">
            
            {/* Category Header */}
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-500/60">
                  {String(groupIndex + 1).padStart(2, "0")} / Expertise
                </span>
                <h3 className="mt-2 text-3xl font-light tracking-tight text-white/90 md:text-4xl">
                  {group.category}
                </h3>
              </div>
              <div className="hidden h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent md:mx-12 md:block" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 whitespace-nowrap">
                {group.items.length} Production Ready Tools
              </p>
            </div>

            {/* Skills Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
            >
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5, 
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.2)"
                    }}
                    className="group relative flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300"
                  >
                    {/* Visual Background Glow */}
                    <div 
                      className="absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity group-hover:opacity-10"
                      style={{ backgroundColor: item.color }}
                    />

                    <div 
                      className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl transition-transform group-hover:scale-110"
                      style={{ color: item.color }}
                    >
                      <Icon />
                    </div>
                    
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors text-center">
                      {item.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;