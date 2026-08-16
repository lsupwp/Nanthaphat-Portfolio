export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  category: string;
  imageUrl: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "bloody-xmas-2025",
    title: "Bloody Xmas 2025 (CTF Event)",
    issuer: "SEC PLAYGROUND",
    description: "Ranked 14th out of 77 teams",
    category: "CTF",
    imageUrl: "/Certificate/preview/Cert_BloodyXmas_CTF_2025_preview.png",
    credentialUrl:
      "/Certificate/CTF/Cert_BloodyXmas_CTF_2025_Nanthaphat.pdf",
  },
  {
    id: "hkcert-ctf-2025",
    title: "HKCERT Capture the Flag Challenge 2025",
    issuer: "HKCERT & Digital Policy Office",
    description: "International Category",
    category: "CTF",
    imageUrl: "/Certificate/preview/Cert_HKCERT_CTF_2025_preview.png",
    credentialUrl:
      "/Certificate/CTF/Cert_HKCERT_CTF_2025_International.pdf",
  },
  {
    id: "msu-hackathon-2026",
    title: "Informatics MSU Hackathon 2026",
    issuer: "คณะวิทยาการสารสนเทศ มหาวิทยาลัยมหาสารคาม",
    description:
      "Ranked 3rd Place (2nd Runner-up) / Artificial Intelligence & Cybersecurity Challenge",
    category: "Hackathon",
    imageUrl: "/Certificate/CTF/Cert_MSU_CTF_2026_Rank3.png",
  },
];