import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../animation/Reveal";

export default function BadgeCard({
  title,
  issuer,
  date,
  status,
  image,
  link,
  index,
}) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -4 }}
        className="group rounded-2xl border border-white/10 bg-[#080808] p-6 transition-colors hover:border-white/20"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-white/20">
            BADGE-{String(index + 1).padStart(2, "0")}
          </span>

          <span className="font-mono text-[10px] uppercase tracking-wider text-green-400/60">
            ✓ {status}
          </span>
        </div>

        <div className="mt-7 flex items-start gap-4">
          {image ? (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <img
                src={image}
                alt=""
                className="h-full w-full object-contain p-2"
              />
            </div>
          ) : (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-white/40">
              ◈
            </div>
          )}

          <div>
            <h4 className="text-lg font-medium text-white/90">
              {title}
            </h4>

            <p className="mt-1 text-sm text-white/35">
              {issuer}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-xs">
          <p className="text-white/20">
            <span className="text-green-400/60">$</span>{" "}
            badge --verify
          </p>

          <p className="mt-2 text-white/40">
            status:{" "}
            <span className="text-green-400/60">
              {status.toLowerCase()}
            </span>
          </p>

          <p className="mt-1 text-white/25">
            issued: {date}
          </p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          Verify Badge
          <ArrowUpRight size={14} />
        </a>
      </motion.article>
    </Reveal>
  );
}