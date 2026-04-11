import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const focusAreas = [
  {
    title: "Polished frontend delivery",
    description: "Responsive interfaces built with React and Tailwind CSS with attention to hierarchy, usability, and consistency."
  },
  {
    title: "Reliable backend execution",
    description: "API-driven applications and database-backed features using Node.js, Express, MongoDB, MySQL, and PHP."
  },
  {
    title: "Core CS mindset",
    description: "A practical engineering approach shaped by DSA practice and strong interest in DBMS, OOP, operating systems, and networks."
  }
];

const educationEntries = [
  {
    institution: "Lovely Professional University Punjab",
    credential: "Computer Science and Engineering",
    location: "Jalandhar, Punjab",
    period: "2023 - Present"
  },
  {
    institution: "Dav Public School",
    credential: "12th with Science - Percentage: 70",
    location: "Kusmunda, Chhattisgarh",
    period: "2022 - 2023"
  },
  {
    institution: "Dav Public School",
    credential: "10th with Science - Percentage: 76",
    location: "Kusmunda, Chhattisgarh",
    period: "2020 - 2021"
  }
];

const profileDetails = [
  {
    label: "Role",
    value: "Full Stack Web Developer"
  },
  {
    label: "Availability",
    value: "Open to internships and freelance projects"
  },
  {
    label: "Location",
    value: "India"
  },
  {
    label: "Focus",
    value: "React, Node.js, AI-enabled products"
  }
];

const specializations = [
  "Responsive UI Development",
  "REST API Design",
  "Authentication Workflows",
  "Database Integration",
  "AI-Powered Features",
  "Scalable Full-Stack Delivery"
];

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="Professional Profile"
    subtitle="Full stack developer focused on polished user interfaces, dependable backend workflows, and continuous improvement through strong engineering fundamentals."
  >
    <div className="flex flex-col gap-10">
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={0.1}>
          <div className="panel-surface h-full overflow-hidden p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-amber-100/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_35%)]" />
              <div className="relative">
                <img
                  src="/Utsav.jpg"
                  alt="Utsav portrait"
                  className="aspect-[4/5] w-full object-cover object-[center_16%] sm:h-[420px] sm:aspect-auto md:h-[500px]"
                />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/80 backdrop-blur-md">
                  Full Stack Developer
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {profileDetails.map((detail) => (
                <div key={detail.label} className="panel-muted p-4">
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
          <div className="panel-surface h-full p-6 sm:p-8 md:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300/70">
              Overview
            </p>
            <h3 className="mt-4 max-w-2xl text-2xl font-body font-semibold normal-case tracking-tight text-white sm:text-4xl md:text-5xl">
              I build modern web products that balance user experience, backend reliability, and practical engineering discipline.
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/65 sm:text-base md:text-lg">
              <p>
                I am Utsav, a B.Tech Computer Science student with a strong focus on full-stack web
                development. I enjoy creating clean, responsive interfaces and supporting them with secure,
                well-structured backend systems.
              </p>
              <p>
                Through project work, I have gained hands-on experience with authentication flows, database
                integration, payment workflows, and AI-powered features. I am especially interested in
                building efficient products that feel professional, practical, and reliable in real use.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {specializations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/50"
                >
                  {item}
                </span>
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
              className="panel-surface group relative overflow-hidden p-6 transition-colors hover:border-white/20"
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

      <Reveal delay={0.28}>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h4 className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-white/30">
              Education
            </h4>
            <div className="h-[1px] w-full bg-white/10" />
          </div>

          <div className="panel-surface p-5 sm:p-6 md:p-8">
            <div className="divide-y divide-white/5">
              {educationEntries.map((entry) => (
                <div
                  key={`${entry.institution}-${entry.period}`}
                  className="grid gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,1fr)_220px] md:items-start"
                >
                  <div>
                    <h3 className="text-xl font-body font-semibold tracking-tight text-white sm:text-2xl">
                      {entry.institution}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/65 sm:text-base">
                      {entry.credential}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-sm font-semibold text-white/80 sm:text-base">{entry.location}</p>
                    <p className="mt-1 text-sm text-white/55 sm:text-base">{entry.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </Section>
);

export default About;
