export interface Project {
  id: string;
  name: string;
  subtitle: string;
  tech: string[];
  url: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "threat-monitor",
    name: "ThreatMonitor",
    subtitle: "Threat Intelligence & Security Monitoring System",
    tech: ["Python", "Go", "Docker", "REST API", "Linux"],
    url: "https://github.com/lsupwp/ThreatMonitor",
    description:
      "Real-time threat intelligence and security monitoring system that detects anomalies and collects threat intelligence to automatically triage risks.",
  },
  {
    id: "one-click-scan",
    name: "OneClickScan",
    subtitle: "Automated Web Security Scanner",
    tech: ["Python", "Go", "Nmap API", "Docker"],
    url: "https://github.com/lsupwp/OneClickScan",
    description:
      "All-in-one web vulnerability scanner covering subdomain discovery, Nmap service scanning, and automated risk reporting.",
  },
  {
    id: "volun-link",
    name: "VolunLink",
    subtitle: "Volunteer Activity & Management Platform",
    tech: ["Next.js", "Node.js", "Docker", "QR Engine"],
    url: "https://github.com/lsupwp/VolunLink",
    description:
      "Volunteer activity management platform with automatic QR code check-in and participation tracking.",
  },
];