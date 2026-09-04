import { motion } from "framer-motion";

import Reveal from "../animation/Reveal";

export default function ExperienceCard({
  role,
  company,
  type,
  period,
  location,
  duration,
  description,
  skills,
  index,
}) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group border-t border-white/10 py-8 transition-colors hover:bg-white/[0.015] md:py-10"
      >
        <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
          {/* Date & Location */}
          <div>
            <p className="font-mono text-xs text-white/30">
              {period}
            </p>

            <p className="mt-2 text-xs text-white/20">
              {location}
            </p>

            <p className="mt-2 text-xs text-green-400/60">
              {duration}
            </p>
          </div>

          {/* Experience */}
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-medium text-white/80 transition-colors group-hover:text-white">
                  {role}
                </h3>

                <p className="mt-1 text-sm text-white/40 transition-colors group-hover:text-white/60">
                  {company}
                </p>
              </div>

              <span className="flex w-fit items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.06] px-3 py-1 text-xs text-green-400/80">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                {type}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-white/30 transition-colors group-hover:border-white/15 group-hover:text-white/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}