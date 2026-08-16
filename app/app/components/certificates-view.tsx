"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldIcon } from "@/components/icons";
import type { CertificateItem } from "@/data/all-certificates";

const CATEGORIES = [
  { key: "CTF", label: "Capture the Flag (CTF)" },
  { key: "E-Learning", label: "E-Learning" },
  { key: "Hackathon", label: "Hackathon" },
];

export default function CertificatesView({
  items,
}: {
  items: CertificateItem[];
}) {
  const [selected, setSelected] = useState<CertificateItem | null>(null);

  return (
    <>
      {CATEGORIES.map(({ key, label }) => {
        const group = items.filter((cert) => cert.category === key);
        if (group.length === 0) return null;
        return (
          <section key={key} className="mb-14">
            <h2 className="mb-6 flex items-center gap-3 text-xl font-bold tracking-tight">
              {label}
              <span className="badge badge-outline badge-sm">
                {group.length}
              </span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.map((cert) => (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => setSelected(cert)}
                  className="card group relative cursor-pointer overflow-hidden border border-base-300 bg-base-200 text-left transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/70 to-base-100/20" />
                  <div className="card-body relative">
                    <h3 className="card-title text-base leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-base-content/80">
                      {cert.organizer}
                    </p>
                    <p className="text-sm text-base-content/60">
                      {cert.detail}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        );
      })}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] grid place-items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="modal-box relative max-w-4xl"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="badge badge-primary badge-sm">
                  {selected.category}
                </span>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="btn btn-circle btn-ghost btn-sm"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 overflow-hidden rounded-box border border-base-300 bg-base-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.imageUrl}
                  alt={selected.title}
                  className="max-h-[65vh] w-full object-contain"
                />
              </div>
              <h3 className="mt-6 text-lg font-bold leading-snug">
                {selected.title}
              </h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-base-content/80">
                <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {selected.organizer}
              </p>
              <p className="mt-2 text-sm text-base-content/70">
                {selected.detail}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}