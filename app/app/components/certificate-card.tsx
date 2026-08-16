"use client";

import { useState } from "react";
import { ShieldIcon } from "@/components/icons";
import type { Certificate } from "@/data/certificates";
import { assetPath } from "@/lib/site";

export default function CertificateCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className="group relative h-full cursor-pointer [perspective:1200px] transition-transform duration-500 hover:-translate-y-1">
      <div
        className={`relative h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          open ? "[transform:rotateY(180deg)]" : ""
        }`}
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
          }
        }}
      >
        <div className="card relative h-full overflow-hidden border border-base-300 bg-base-200 transition-[border-color,box-shadow] duration-500 [backface-visibility:hidden] hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(certificate.imageUrl)}
              alt={certificate.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/60 to-transparent" />
          </div>
          <div className="card-body relative">
            <div className="flex items-center gap-2 text-primary">
              <ShieldIcon className="h-5 w-5" />
              <span className="badge badge-primary badge-sm">
                {certificate.category}
              </span>
            </div>
            <h3 className="card-title text-base leading-snug">
              {certificate.title}
            </h3>
            <p className="text-sm font-medium text-base-content/80">
              {certificate.issuer}
            </p>
            <p className="text-sm text-base-content/60">
              {certificate.description}
            </p>
          </div>
        </div>

        <div className="card absolute inset-0 overflow-hidden bg-base-100 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(certificate.imageUrl)}
            alt={certificate.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}