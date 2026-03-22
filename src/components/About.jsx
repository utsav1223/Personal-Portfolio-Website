import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import { achievements } from "../data/achievements.js";
import { certifications } from "../data/certifications.js";
import { projects } from "../data/projects.js";
import { skills } from "../data/skills.js";

const profileStats = [
  {
    value: String(projects.length).padStart(2, "0"),
    label: "Selected projects"
  },
  {
    value: String(certifications.length).padStart(2, "0"),
    label: "Certifications"
  },
  {
    value: String(achievements.length).padStart(2, "0"),
    label: "Achievements"
  },
  {
    value: "120+",
    label: "DSA problems solved"
  }
];

const focusAreas = [
  {
    title: "Frontend delivery",
    description: "Responsive interfaces built with React and Tailwind CSS, focused on clarity and usability."
  },
  {
    title: "Backend execution",
    description: "API-driven applications and database-backed features using Node.js, Express, MongoDB, MySQL, and PHP."
  },
  {
    title: "Problem solving",
    description: "A practical engineering mindset shaped by DSA practice, debugging discipline, and real project delivery."
  }
];

const profileDetails = [
  {
    label: "Role",
    value: "Full Stack Web Developer"
  },
  {
    label: "Education",
    value: "B.Tech CSE | Lovely Professional University"
  },
  {
    label: "Focus",
    value: "React, Node.js, AI-enabled products"
  }
];

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="Professional Profile"
    subtitle="Full stack developer focused on polished interfaces, dependable backend workflows, and practical product execution."
  >
    <div className="flex flex-col gap-10">
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={0.1}>
          <div className="glass-card h-full overflow-hidden p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-amber-100/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_35%)]" />
              <div className="relative">
                <img
                  src="/Utsav.jpg"
                  alt="Utsav portrait"
                  className="aspect-[4/5] w-full object-cover object-[center_16%] sm:h-[420px] sm:aspect-auto md:h-[500px]"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {profileDetails.map((detail) => (
                <div key={detail.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
                    {detail.label}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-white/80">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex h-full flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 md:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300/70">
                Overview
              </p>
              <h3 className="mt-4 max-w-2xl text-2xl font-body font-semibold normal-case tracking-tight text-white sm:text-4xl md:text-5xl">
                I design polished user experiences and support them with reliable full-stack engineering.
              </h3>

              <div className="mt-6 space-y-5 text-sm leading-7 text-white/65 sm:text-base md:text-lg">
                <p>
                  Hi, I am Utsav, a B.Tech Computer Science student with a strong focus on Full-Stack
                  Development. I specialize in building scalable web applications using the MERN stack and
                  have hands-on experience in designing secure backend systems, RESTful APIs, and modern,
                  responsive user interfaces.
                </p>
                <p>
                  I have worked on real-world projects involving authentication systems (JWT, OAuth), payment
                  integrations, and AI-powered solutions, which has strengthened my problem-solving and system
                  design skills. I am particularly interested in developing efficient, user-centric products and
                  continuously improving my expertise in modern web technologies and software engineering
                  practices.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {profileStats.map((stat) => (
                <div key={stat.label} className="glass-card p-5 sm:p-6">
                  <p className="text-3xl font-body font-semibold tracking-tight text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <div className="grid gap-4 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="glass-card group relative overflow-hidden p-6 transition-colors hover:border-white/20"
            >
              <div className="absolute right-6 top-6 text-4xl font-black text-white/[0.04]">
                0{index + 1}
              </div>

              <p className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300/70">
                Focus Area
              </p>
              <h3 className="relative z-10 mt-4 text-2xl font-body font-semibold normal-case tracking-tight text-white">
                {area.title}
              </h3>
              <p className="relative z-10 mt-4 text-sm leading-7 text-white/60">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h4 className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-white/30">
            Technical Stack
          </h4>
          <div className="h-[1px] w-full bg-white/10" />
        </div>

        <Reveal delay={0.3}>
          <div id="skills" className="grid gap-4 lg:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category} className="glass-card p-5 sm:p-6 md:p-8">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/25">
                      Skill Group
                    </p>
                    <h3 className="mt-3 text-2xl font-body font-semibold normal-case tracking-tight text-white">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                    {String(group.items.length).padStart(2, "0")} tools
                  </span>
                </div>

                <div className="mt-6 divide-y divide-white/5">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.name} className="flex items-start justify-between gap-4 py-4 sm:items-center">
                        <div className="flex min-w-0 items-center gap-4">
                          <div
                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-xl"
                            style={{ color: item.color }}
                          >
                            <Icon />
                          </div>
                          <span className="min-w-0 text-sm font-medium text-white/75">{item.name}</span>
                        </div>
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </Section>
);

export default About;
