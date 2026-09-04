
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../animation/Reveal";

export default function CertificateCard({
  title,
  issuer,
  date,
  status,
  verified,
  skills,
  file,
  link,
  action = "View Certificate",
  index,
  position,
}) {
  const certificateLink = file || link;

  return (
    <Reveal delay={index * 0.08}>
      <div
        className={`relative flex ${
          position === "top"
            ? "md:items-end md:pb-16"
            : "md:items-start md:pt-16"
        }`}
      >
        {/* Mobile connector */}
        <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:hidden" />

        {/* Timeline node */}
        <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <motion.div
            whileHover={{ scale: 1.4 }}
            className={`h-3 w-3 rounded-full border-2 border-[#050505] ${
              verified ? "bg-green-400" : "bg-white/40"
            }`}
          />
        </div>

        {/* Card */}
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className={`relative ml-6 w-[calc(100%-1.5rem)] md:ml-0 md:w-[44%] ${
            position === "top" ? "md:ml-auto" : "md:mr-auto"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-[#080808] p-6 transition-colors duration-300 hover:border-white/20 md:p-7">
            {/* Index + Status */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white/20">
                CRED-{String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                  verified ? "text-green-400/70" : "text-white/30"
                }`}
              >
                {verified ? "✓ verified" : "✓ completed"}
              </span>
            </div>

            {/* Main content */}
            <div className="mt-6">
              <h3 className="text-xl font-medium tracking-tight text-white/90">
                {title}
              </h3>

              <p className="mt-1 text-sm text-white/40">
                {issuer}
              </p>
            </div>

            {/* Metadata */}
            <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-xs">
              <p className="text-white/20">
                <span className="text-green-400/60">$</span>{" "}
                credential --info
              </p>

              <div className="mt-3 space-y-1 text-white/35">
                <p>
                  <span className="text-white/20">date:</span>{" "}
                  {date}
                </p>

                <p>
                  <span className="text-white/20">status:</span>{" "}
                  <span
                    className={
                      verified
                        ? "text-green-400/70"
                        : "text-white/50"
                    }
                  >
                    {status}
                  </span>
                </p>
              </div>
            </div>

            {/* Skills */}
            {skills?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Certificate */}
            {certificateLink && (
              <a
                href={certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
              >
                {action}
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </motion.article>
      </div>
    </Reveal>
  );
}