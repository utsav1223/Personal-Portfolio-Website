import { FiArrowUp } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: SiGithub, href: "https://github.com/utsav1223", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/utsavkrjha", label: "LinkedIn" }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-950">Utsav Kumar Jha</p>
            <p className="mt-1 text-sm text-slate-500">Full Stack Developer based in India</p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-teal-200 hover:text-teal-700"
                  aria-label={item.label}
                >
                  <Icon className="text-lg" />
                </a>
              );
            })}

            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-teal-200 hover:text-teal-700"
              aria-label="Back to top"
            >
              <FiArrowUp className="text-lg" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>(C) 2026 Utsav Kumar Jha. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
