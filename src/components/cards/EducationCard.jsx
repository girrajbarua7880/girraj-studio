import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";

export default function EducationCard({
  level,
  stage,
  title,
  field,
  institution,
  period,
  score,
  result,
  index,
}) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -4 }}
        className="group relative"
      >
        <div className="grid gap-5 md:grid-cols-[90px_1fr_140px] md:items-center">
          {/* System Number */}
          <div className="flex items-center gap-3 md:block">
            <span className="font-mono text-xs text-green-400/60">
              {level}
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 md:mt-2 md:block">
              {stage}
            </span>
          </div>

          {/* Main Content */}
          <div className="relative border-l border-white/10 pl-6 md:border-l-0 md:pl-0">
            {/* Connector */}
            <span className="absolute -left-[25px] top-2 h-2 w-2 rounded-full border border-green-400/50 bg-[#050505] md:hidden" />

            <p className="font-mono text-xs text-white/20">
              {period}
            </p>

            <h3 className="mt-2 text-xl font-medium tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
              {title}
            </h3>

            <p className="mt-1 text-sm text-white/40">
              {field}
            </p>

            <p className="mt-3 text-sm text-white/25">
              {institution}
            </p>
          </div>

          {/* Score */}
          <div className="border-l border-white/10 pl-5 md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
              Result
            </p>

            <p className="mt-1 font-mono text-lg text-white/60">
              {score}
            </p>

            {result && (
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-green-400/50">
                {result}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-7 h-px bg-white/10 transition-colors duration-300 group-hover:bg-white/20" />
      </motion.article>
    </Reveal>
  );
}