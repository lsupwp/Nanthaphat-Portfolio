export interface CertificateItem {
  id: string;
  category: string;
  title: string;
  organizer: string;
  detail: string;
  imageUrl: string;
  fileUrl: string;
}

export const allCertificates: CertificateItem[] = [
  {
    id: "msu-hackathon-2026",
    category: "CTF",
    title: "Informatics MSU Hackathon 2026 (Cybersecurity Challenge)",
    organizer: "คณะวิทยาการสารสนเทศ มหาวิทยาลัยมหาสารคาม",
    detail:
      "Ranked 3rd Place (2nd Runner-up) / Artificial Intelligence & Cybersecurity Challenge",
    imageUrl: "/Certificate/CTF/Cert_MSU_CTF_2026_Rank3.png",
    fileUrl: "/Certificate/CTF/Cert_MSU_CTF_2026_Rank3.png",
  },
  {
    id: "bloody-xmas-2025",
    category: "CTF",
    title: "Bloody Xmas 2025 (CTF Event)",
    organizer: "SEC Playground",
    detail: "Ranked 14th Place out of 77 teams",
    imageUrl: "/Certificate/preview/Cert_BloodyXmas_CTF_2025_preview.png",
    fileUrl: "/Certificate/CTF/Cert_BloodyXmas_CTF_2025_Nanthaphat.pdf",
  },
  {
    id: "hack-the-scammer-2025",
    category: "CTF",
    title: "HACK THE SCAMMER CTF 2025",
    organizer:
      "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช. / NCSA) ร่วมกับ กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม",
    detail: "Participant / Online Capture The Flag Competition",
    imageUrl:
      "/Certificate/preview/Cert_Hack_The_Scammer_CTF_2025_NCSA_preview.png",
    fileUrl: "/Certificate/CTF/Cert_Hack_The_Scammer_CTF_2025_NCSA.pdf",
  },
  {
    id: "hkcert-ctf-2025",
    category: "CTF",
    title: "HKCERT Capture the Flag Challenge 2025",
    organizer:
      "Hong Kong Computer Emergency Response Team Coordination Centre (HKCERT)",
    detail: "Certificate of Participation / International Category",
    imageUrl: "/Certificate/preview/Cert_HKCERT_CTF_2025_preview.png",
    fileUrl: "/Certificate/CTF/Cert_HKCERT_CTF_2025_International.pdf",
  },
  {
    id: "thailand-cyber-talent-2025",
    category: "CTF",
    title: "Thailand Cyber Talent 2025",
    organizer: "National Cyber Security Agency (NCSA Thailand)",
    detail: "Certificate of Appreciation for Honorable Achievement",
    imageUrl:
      "/Certificate/preview/Cert_Thailand_Cyber_Talent_2025_Nanthaphat_preview.png",
    fileUrl:
      "/Certificate/CTF/Cert_Thailand_Cyber_Talent_2025_Nanthaphat.pdf",
  },
  {
    id: "thailand-cyber-top-talent-2024",
    category: "CTF",
    title: "Thailand Cyber Top Talent 2024",
    organizer: "National Cyber Security Agency (NCSA Thailand)",
    detail: "Certificate of Participation / Team CY PUPPY (Khon Kaen University)",
    imageUrl:
      "/Certificate/preview/Cert_Thailand_Cyber_Top_Talent_2024_Nanthaphat_preview.png",
    fileUrl:
      "/Certificate/CTF/Cert_Thailand_Cyber_Top_Talent_2024_Nanthaphat.pdf",
  },
  {
    id: "cybersecurity-foundation-2026",
    category: "E-Learning",
    title:
      "หลักสูตรด้านความมั่นคงปลอดภัยไซเบอร์ ระดับพื้นฐาน (Cybersecurity Foundation Course)",
    organizer:
      "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช. / NCSA e-Learning)",
    detail: "Completed 21 hours of foundational cybersecurity training",
    imageUrl:
      "/Certificate/preview/Cert_Basic_Cybersecurity_2026_Nanthaphat_preview.png",
    fileUrl:
      "/Certificate/E-Learning/Cert_Basic_Cybersecurity_2026_Nanthaphat.pdf",
  },
  {
    id: "basic-cybersecurity-2024",
    category: "E-Learning",
    title: "Basic Cybersecurity Course",
    organizer: "NCSA MOOC Cybersecurity Learning Platform",
    detail: "Certificate of Completion / Credential ID: SPG-ZI169T7XYREX8",
    imageUrl:
      "/Certificate/preview/Cert_Basic_Cybersecurity_NCSA_2024_Nanthaphat_preview.png",
    fileUrl:
      "/Certificate/E-Learning/Cert_Basic_Cybersecurity_NCSA_2024_Nanthaphat.pdf",
  },
  {
    id: "cyber-warrior-2025",
    category: "Hackathon",
    title: "โครงการ Cyber Warrior Hackathon 2025",
    organizer:
      "กองบัญชาการตำรวจสืบสวนสอบสวนอาชญากรรมทางเทคโนโลยี (บช.สอท.) ร่วมกับ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)",
    detail: "Completed intensive training and hackathon program (6 - 28 June 2025)",
    imageUrl: "/Certificate/Hackthon/Cert_Cyber_Warrior_Hackathon_2025_KMUTT.jpg",
    fileUrl: "/Certificate/Hackthon/Cert_Cyber_Warrior_Hackathon_2025_KMUTT.jpg",
  },
];