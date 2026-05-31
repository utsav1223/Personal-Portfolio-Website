import { FiExternalLink } from "react-icons/fi";
import { certifications } from "../data/certifications.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const Certifications = () => (
  <Section
    id="certifications"
    eyebrow="Credentials"
    title="Certifications that support the stack."
    subtitle="Recent learning across backend development, databases, algorithms, and computer systems."
  >
    <div className="grid gap-5 md:grid-cols-2">
      {certifications.map((cert, index) => {
        const Icon = cert.icon;

        return (
          <Reveal key={cert.title} delay={index * 0.05}>
            <article className="surface-card h-full overflow-hidden p-4 transition hover:-translate-y-1 hover:border-teal-200">
              <div className="overflow-hidden rounded-md bg-slate-100">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate preview`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-top"
                />
              </div>

              <div className="p-2 pt-5 sm:p-3 sm:pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-teal-700">0{index + 1} / {cert.year}</p>
                    <p className="mt-1 text-sm text-slate-500">{cert.platform}</p>
                  </div>
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border text-xl"
                    style={{
                      color: cert.color,
                      backgroundColor: `${cert.color}12`,
                      borderColor: `${cert.color}38`
                    }}
                  >
                    <Icon />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-normal text-slate-950">
                  {cert.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{cert.summary}</p>

                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button mt-6"
                >
                  View certificate
                  <FiExternalLink />
                </a>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Certifications;
