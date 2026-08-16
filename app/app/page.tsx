import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import {
  DownloadIcon,
  ExternalLinkIcon,
  GithubIcon,
  GraduationIcon,
  LinkedinIcon,
  MailIcon,
  ShieldIcon,
} from "@/components/icons";

const PROFILE = {
  name: "Nanthaphat Phetsanghan",
  handle: "lsupwp",
  title: "Cybersecurity Student & Security Developer",
  bio: "นักศึกษาปริญญาตรีสาขาความปลอดภัยไซเบอร์ มหาวิทยาลัยขอนแก่น มีความชื่นชอบและสนใจเชิงลึกในด้าน Penetration Testing, Web Exploitation, การสร้าง Security Automation Tools ด้วย Python & Go รวมถึงการประยุกต์ใช้ AI / Local LLM ในงาน Security และการใช้งาน Linux System",
};

const EMAIL = "your-email@example.com";
const SOCIALS = {
  github: "https://github.com/lsupwp",
  linkedin: "https://www.linkedin.com/in/lsupwp",
};

const PROJECTS = [
  {
    name: "ThreatMonitor",
    subtitle: "Threat Intelligence & Security Monitoring System",
    tech: ["Python", "Go", "Docker", "REST API", "Linux"],
    url: "https://github.com/lsupwp/ThreatMonitor",
    detail:
      "ระบบตรวจสอบ สแกน และเฝ้าระวังภัยคุกคามทางไซเบอร์แบบเรียลไทม์ ตรวจจับความผิดปกติและรวบรวมข้อมูล Threat Intelligence เพื่อคัดกรองความเสี่ยงอัตโนมัติ",
  },
  {
    name: "OneClickScan",
    subtitle: "Automated Web Security Scanner",
    tech: ["Python", "Go", "Nmap API", "Docker"],
    url: "https://github.com/lsupwp/OneClickScan",
    detail:
      "เครื่องมือสแกนและสำรวจช่องโหว่ทางไซเบอร์แบบครบวงจร ครอบคลุม Subdomain Discovery, Nmap Service Scanning และสรุปรายงานความเสี่ยงอัตโนมัติ",
  },
  {
    name: "VolunLink",
    subtitle: "Volunteer Activity & Management Platform",
    tech: ["Next.js", "Node.js", "Docker", "QR Engine"],
    url: "https://github.com/lsupwp/VolunLink",
    detail:
      "แพลตฟอร์มบริหารจัดการกิจกรรมจิตอาสาและระบบเช็กอินเข้าร่วมงานด้วย QR Code อัตโนมัติ พร้อมระบบติดตามสถานะการเข้าร่วมกิจกรรม",
  },
];

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

const CERTIFICATES = [
  {
    name: "Bloody Xmas 2025 (CTF Event)",
    org: "SEC PLAYGROUND",
    meta: "Ranked 14th out of 77 teams",
    file: "/Certificate/preview/Cert_BloodyXmas_CTF_2025_preview.png",
  },
  {
    name: "HKCERT Capture the Flag Challenge 2025",
    org: "HKCERT & Digital Policy Office",
    meta: "International Category",
    file: "/Certificate/preview/Cert_HKCERT_CTF_2025_preview.png",
  },
  {
    name: "Informatics MSU Hackathon 2026",
    org: "คณะวิทยาการสารสนเทศ มหาวิทยาลัยมหาสารคาม",
    meta: "Ranked 3rd Place (2nd Runner-up) / Artificial Intelligence & Cybersecurity Challenge",
    file: "/Certificate/CTF/Cert_MSU_CTF_2026_Rank3.png",
  },
];

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

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
              <p className="badge badge-primary badge-lg font-medium">
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
                <a href="#" className="btn btn-primary">
                  <DownloadIcon className="h-4 w-4" />
                  Download CV / Resume
                </a>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="avatar placeholder">
                <div className="w-48 rounded-full bg-gradient-to-br from-primary to-zinc-900 text-base-content sm:w-56">
                  <span className="text-5xl font-bold text-white">NP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
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
                  ปริญญาตรี สาขาความปลอดภัยไซเบอร์ (Cybersecurity)
                  มหาวิทยาลัยขอนแก่น
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
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
          <SectionHeading
            id="projects"
            eyebrow="Featured Projects"
            title="Selected Work"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-base-200 transition hover:bg-base-300"
              >
                <div className="card-body">
                  <h3 className="card-title text-base">{project.subtitle}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="badge badge-outline badge-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-base-content/70 leading-relaxed">
                    {project.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
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
                      <span key={item} className="badge badge-outline badge-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
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
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.name}
                className="card group relative overflow-hidden bg-base-200"
              >
                <div className="card-body">
                  <div className="flex items-center gap-2 text-primary">
                    <ShieldIcon className="h-5 w-5" />
                    <span className="badge badge-primary badge-sm">
                      Certificate
                    </span>
                  </div>
                  <h3 className="card-title text-base leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-medium text-base-content/80">
                    {cert.org}
                  </p>
                  <p className="text-sm text-base-content/60">{cert.meta}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-base-100/95 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.file}
                    alt={cert.name}
                    className="h-full w-full rounded-box border border-base-300 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4">
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
                  className="btn btn-outline"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                  <ExternalLinkIcon className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
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