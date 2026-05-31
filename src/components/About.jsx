import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const focusAreas = [
  {
    title: "Frontend delivery",
    description: "Responsive React interfaces with clear hierarchy, reusable components, and polished interaction details."
  },
  {
    title: "Backend workflows",
    description: "API-driven product features using Node.js, Express, PHP, MongoDB, MySQL, and authentication flows."
  },
  {
    title: "Engineering fundamentals",
    description: "A practical CS foundation across DSA, DBMS, OOP, operating systems, and computer networks."
  }
];

const educationEntries = [
  {
    institution: "Lovely Professional University Punjab",
    credential: "B.Tech Computer Science and Engineering",
    location: "Jalandhar, Punjab",
    period: "2023 - Present"
  },
  {
    institution: "DAV Public School",
    credential: "12th with Science - 70%",
    location: "Kusmunda, Chhattisgarh",
    period: "2022 - 2023"
  },
  {
    institution: "DAV Public School",
    credential: "10th with Science - 76%",
    location: "Kusmunda, Chhattisgarh",
    period: "2020 - 2021"
  }
];

const profileDetails = [
  { label: "Role", value: "Full Stack Web Developer" },
  { label: "Availability", value: "Internships and freelance projects" },
  { label: "Location", value: "India" },
  { label: "Focus", value: "React, Node.js, AI-enabled products" }
];

const specializations = [
  "Responsive UI",
  "REST APIs",
  "Authentication",
  "Databases",
  "AI features",
  "Full-stack delivery"
];

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="A developer focused on practical product execution."
    subtitle="I build clean frontend experiences and support them with dependable backend systems, databases, and real user workflows."
  >
    <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
      <Reveal delay={0.05}>
        <div className="surface-card h-full overflow-hidden p-4">
          <div className="overflow-hidden rounded-md bg-slate-100">
            <img
              src="/Utsav.jpg"
              alt="Utsav Kumar Jha"
              className="aspect-[4/4.8] w-full object-cover object-[center_16%] sm:max-h-[520px]"
            />
          </div>
          <div className="mt-4 grid gap-x-4 gap-y-0 border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {profileDetails.map((detail) => (
              <div key={detail.label} className="border-b border-slate-200 py-4">
                <p className="text-xs font-bold uppercase text-slate-500">{detail.label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6">
        <Reveal delay={0.12}>
          <div className="surface-card p-6 sm:p-8">
            <span className="section-kicker">Profile</span>
            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-3xl">
              Building interfaces, APIs, and database-backed applications with a strong learning mindset.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
              <p>
                I am Utsav, a B.Tech Computer Science student with hands-on experience across full-stack web development. I enjoy turning product ideas into usable, responsive, and maintainable applications.
              </p>
              <p>
                My project work includes authentication flows, database integration, payment workflows, dashboards, and AI-powered features. I care about simple user journeys, reliable implementation, and shipping work that feels ready to use.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {specializations.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <Reveal key={area.title} delay={0.18 + index * 0.06}>
              <div className="surface-card h-full p-5 transition hover:-translate-y-1 hover:border-teal-200">
                <p className="text-sm font-bold text-teal-700">0{index + 1}</p>
                <h3 className="mt-4 text-lg font-semibold tracking-normal text-slate-950">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>

    <Reveal delay={0.16}>
      <div className="surface-card mt-6 p-5 sm:p-6">
        <div className="flex flex-col gap-2 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-kicker">Education</span>
            <h3 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">Academic background</h3>
          </div>
          <p className="text-sm text-slate-500">Computer Science and engineering path</p>
        </div>

        <div className="divide-y divide-slate-200">
          {educationEntries.map((entry) => (
            <div
              key={`${entry.institution}-${entry.period}`}
              className="grid gap-3 py-5 md:grid-cols-[minmax(0,1fr)_220px] md:items-start"
            >
              <div>
                <h4 className="text-lg font-semibold tracking-normal text-slate-950">{entry.institution}</h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">{entry.credential}</p>
              </div>
              <div className="text-sm text-slate-500 md:text-right">
                <p className="font-semibold text-slate-700">{entry.location}</p>
                <p className="mt-1">{entry.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </Section>
);

export default About;
