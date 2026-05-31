import { FiArrowRight, FiMail } from "react-icons/fi";
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
    color: "#111827"
  }
];

const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title="Available for internships, freelance builds, and product work."
    subtitle="Reach out for full-stack development, frontend refreshes, backend workflows, or collaboration opportunities."
  >
    <Reveal>
      <div className="surface-card overflow-hidden">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
            <span className="tag-dark">Open for collaboration</span>
            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
              Let’s build a clean, reliable web product.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              I can help with React interfaces, API-driven applications, database-backed features, dashboards, and AI-assisted product workflows.
            </p>
            <a
              href="mailto:utsavjha93030@gmail.com"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              <FiMail />
              Send email
            </a>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-bold uppercase text-teal-700">Digital presence</p>
            <div className="mt-5 divide-y divide-slate-200">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-xl">
                        <Icon style={{ color: item.color }} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm font-bold text-slate-950">{item.label}</span>
                        <p className="mt-1 break-all text-sm text-slate-500">{item.value}</p>
                      </div>
                    </div>
                    <FiArrowRight className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-teal-700" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  </Section>
);

export default Contact;
