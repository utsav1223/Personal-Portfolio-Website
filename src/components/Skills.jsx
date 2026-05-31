import { skills } from "../data/skills.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const totalSkills = skills.reduce((count, group) => count + group.items.length, 0);

const summaryCards = [
  { value: String(skills.length).padStart(2, "0"), label: "Skill domains" },
  { value: `${totalSkills}+`, label: "Core competencies" },
  { value: "CS", label: "Strong fundamentals" }
];

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Capabilities"
    title="A practical stack for full-stack delivery."
    subtitle="The skills are organized by how they support real product work: interface delivery, APIs, persistence, tooling, and computer science fundamentals."
  >
    <div className="grid gap-4 md:grid-cols-3">
      {summaryCards.map((card, index) => (
        <Reveal key={card.label} delay={index * 0.05}>
          <div className="surface-card p-5">
            <p className="text-3xl font-semibold tracking-normal text-slate-950">{card.value}</p>
            <p className="mt-2 text-sm font-semibold text-slate-500">{card.label}</p>
          </div>
        </Reveal>
      ))}
    </div>

    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      {skills.map((group, groupIndex) => {
        const isCoreCategory = group.category === "Core CS";

        return (
          <Reveal key={group.category} delay={groupIndex * 0.06}>
            <div className={`surface-card h-full p-5 sm:p-6 ${isCoreCategory ? "lg:col-span-2" : ""}`}>
              <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-sm font-bold text-teal-700">0{groupIndex + 1} / {group.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">{group.category}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{group.summary}</p>
                </div>
                <span className="tag w-fit">{group.items.length} skills</span>
              </div>

              <div className={`mt-5 grid gap-x-5 gap-y-0 ${isCoreCategory ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.name} className="flex items-center gap-3 border-b border-slate-200 py-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-xl"
                        style={{ color: item.color }}
                      >
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900">{item.name}</p>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {isCoreCategory ? "Computer science" : "Product skill"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Skills;
