import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import Reveal from "@/components/reveal";
import CertificateCard from "@/components/certificate-card";
import {
  DownloadIcon,
  ExternalLinkIcon,
  GithubIcon,
  GraduationIcon,
  LinkedinIcon,
  MailIcon,
  ShieldIcon,
} from "@/components/icons";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { BASE_PATH } from "@/lib/site";

const PROFILE = {
  name: "Nanthaphat Phetsanghan",
  handle: "lsupwp",
  title: "Cybersecurity Student & Security Developer",
  bio: "Undergraduate student in Cybersecurity at Khon Kaen University. Deep interest in Penetration Testing, Web Exploitation, building Security Automation Tools with Python & Go, applying AI / Local LLMs in security, and Linux system administration.",
};

const EMAIL = "lsupwp@gmail.com";
const SOCIALS = {
  github: "https://github.com/lsupwp",
  linkedin: "https://th.linkedin.com/in/nanthaphat-phetsanghan-2287ba2b7",
};

const FOCUS = [
  "Web Exploitation & Pentesting (SQLi, XSS, SSRF, RCE, API Hacking)",
  "Security Tooling Development (Python, Go, Docker)",
  "AI & Security Operations (YOLO, Local LLMs, Threat Intelligence)",
  "Linux Administration (Ubuntu, Arch Linux, Fedora)",
];

const SKILLS = {
  security: {
    label: "Security & Pentesting",
    items: [
      "Web Exploitation (SQLi, XSS, SSRF)",
      "Reconnaissance",
      "Burp Suite",
      "Metasploit",
      "Wireshark",
      "sqlmap",
    ],
  },
  programming: {
    label: "Programming & Tools",
    items: [
      "Python",
      "Go",
      "Next.js",
      "React",
      "JavaScript",
      "Node.js",
      "C",
      "Docker",
      "Git",
      "Neovim",
    ],
  },
  os: {
    label: "Operating Systems",
    items: ["Linux", "Ubuntu", "Arch Linux", "EndeavourOS", "Fedora"],
  },
};

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const BADGE_HOVER =
  "transition duration-300 hover:scale-105 hover:border-primary hover:text-primary";

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
          <Link href="#home" className="btn btn-ghost px-2 text-lg font-bold">
            lsup<span className="text-primary">wp</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn btn-ghost btn-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Link
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-ghost btn-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </Link>
            <Link
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-ghost btn-sm md:hidden"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-24 py-16 sm:py-24">
        <section id="home" className="mx-auto w-full max-w-5xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="badge badge-primary badge-lg h-auto whitespace-normal py-1 text-center font-medium">
                {PROFILE.title}
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {PROFILE.name}
              </h1>
              <p className="mt-2 font-mono text-lg text-primary">
                @{PROFILE.handle}
              </p>
              <p className="mt-6 max-w-xl text-base-content/70 leading-relaxed">
                {PROFILE.bio}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="btn btn-primary transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download CV / Resume
                </a>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline transition duration-300 hover:scale-[1.03]"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline transition duration-300 hover:scale-[1.03]"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,#2563eb,transparent,#2563eb,transparent)] opacity-60 blur-2xl animate-[spin_6s_linear_infinite]" />
                <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-primary/40 sm:h-56 sm:w-56">
                  <Image
                    src={`${BASE_PATH}/profile.jpeg`}
                    alt="Nanthaphat Phetsanghan"
                    width={224}
                    height={224}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
          <Reveal>
            <SectionHeading
              id="about"
              eyebrow="About & Education"
              title="About Me"
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="card bg-base-200">
                <div className="card-body">
                  <div className="flex items-center gap-2 text-primary">
                    <GraduationIcon className="h-5 w-5" />
                    <h3 className="card-title text-base">Education</h3>
                  </div>
                  <p className="text-base-content/80">
                    Bachelor&apos;s degree in Cybersecurity, Khon Kaen University
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <div className="flex items-center gap-2 text-primary">
                    <ShieldIcon className="h-5 w-5" />
                    <h3 className="card-title text-base">Core Focus</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-base-content/80">
                    {FOCUS.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
          <Reveal>
            <SectionHeading
              id="projects"
              eyebrow="Featured Projects"
              title="Selected Work"
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card bg-base-200 transition duration-300 hover:-translate-y-1 hover:bg-base-300"
                >
                  <div className="card-body">
                    <h3 className="card-title text-base">
                      {project.subtitle}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`badge badge-outline badge-sm h-auto whitespace-normal py-1 ${BADGE_HOVER}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-base-content/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
          <Reveal>
            <SectionHeading
              id="skills"
              eyebrow="Technical Skills"
              title="Skills & Tools"
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {Object.values(SKILLS).map((group) => (
                <div key={group.label} className="card bg-base-200">
                  <div className="card-body">
                    <h3 className="card-title text-base">{group.label}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`badge badge-outline badge-md h-auto whitespace-normal py-1 ${BADGE_HOVER}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <SectionHeading
                id="certificates"
                eyebrow="Certificates"
                title="Highlights"
              />
              <Link href="/certificates" className="btn btn-outline btn-sm">
                View All Certificates
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
          <Reveal>
            <SectionHeading
              id="contact"
              eyebrow="Contact"
              title="Get in Touch"
            />
            <div className="card mt-8 bg-base-200">
              <div className="card-body items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 text-base font-medium hover:text-primary"
                >
                  <MailIcon className="h-5 w-5 text-primary" />
                  {EMAIL}
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline transition duration-300 hover:scale-[1.03]"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline transition duration-300 hover:scale-[1.03]"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn
                    <ExternalLinkIcon className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-base-300">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-base-content/60 sm:flex-row">
          <p>© 2026 {PROFILE.name}</p>
          <p className="font-mono">@{PROFILE.handle}</p>
        </div>
      </footer>
    </div>
  );
}