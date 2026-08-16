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
      "ระบบตรวจสอบ สแกน และเฝ้าระวังภัยคุกคามทางไซเบอร์แบบเรียลไทม์ ตรวจจับความผิดปกติและรวบรวมข้อมูล Threat Intelligence เพื่อคัดกรองความเสี่ยงอัตโนมัติ",
  },
  {
    id: "one-click-scan",
    name: "OneClickScan",
    subtitle: "Automated Web Security Scanner",
    tech: ["Python", "Go", "Nmap API", "Docker"],
    url: "https://github.com/lsupwp/OneClickScan",
    description:
      "เครื่องมือสแกนและสำรวจช่องโหว่ทางไซเบอร์แบบครบวงจร ครอบคลุม Subdomain Discovery, Nmap Service Scanning และสรุปรายงานความเสี่ยงอัตโนมัติ",
  },
  {
    id: "volun-link",
    name: "VolunLink",
    subtitle: "Volunteer Activity & Management Platform",
    tech: ["Next.js", "Node.js", "Docker", "QR Engine"],
    url: "https://github.com/lsupwp/VolunLink",
    description:
      "แพลตฟอร์มบริหารจัดการกิจกรรมจิตอาสาและระบบเช็กอินเข้าร่วมงานด้วย QR Code อัตโนมัติ พร้อมระบบติดตามสถานะการเข้าร่วมกิจกรรม",
  },
];