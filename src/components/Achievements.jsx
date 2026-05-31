import { achievements } from "../data/achievements.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const Achievements = () => (
  <Section
    id="achievements"
    eyebrow="Achievements"
    title="Evidence of steady practice."
    subtitle="Milestones that reflect consistency, problem solving, and ongoing improvement."
    className="bg-white"
  >
    <div className="grid gap-5 lg:grid-cols-2">
      {achievements.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.08} width="100%">
          <article className="surface-card h-full p-6 transition hover:-translate-y-1 hover:border-teal-200 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-teal-700">Milestone 0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal text-slate-950">
                  {item.title}
                </h3>
              </div>
              <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-600">
                {item.year}
              </span>
            </div>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              {item.description}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Achievements;
