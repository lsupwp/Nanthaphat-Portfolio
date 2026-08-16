import type { Metadata } from "next";
import Link from "next/link";
import CertificatesView from "@/components/certificates-view";
import { allCertificates } from "@/data/all-certificates";

export const metadata: Metadata = {
  title: "Certificates | Nanthaphat Phetsanghan",
  description:
    "Certificates and achievements of Nanthaphat Phetsanghan (lsupwp) - CTF events, cybersecurity courses, and hackathons.",
};

export default function CertificatesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Certificates
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            All Certificates
          </h1>
          <p className="mt-2 max-w-xl text-base-content/70">
            CTF events, cybersecurity courses, and hackathons.
          </p>
        </div>
        <Link href="/" className="btn btn-outline btn-sm">
          ← Back to Home
        </Link>
      </div>

      <div className="mt-12">
        <CertificatesView items={allCertificates} />
      </div>
    </main>
  );
}