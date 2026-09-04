import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../animation/Reveal";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  live,
  index,
}) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
      >
        {/* Project Image */}
        <div className="aspect-video overflow-hidden border-b border-white/10">
          <img
            src={
              image ||
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
            }
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Project Content */}
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-green-400/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-2 text-xl font-medium text-white transition-colors group-hover:text-green-300">
                {title}
              </h3>
            </div>

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title}`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-400/20 bg-green-400/5 text-green-300/60 transition hover:border-green-400/40 hover:bg-green-400/10 hover:text-green-300"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          <p className="mt-4 h-[72px] overflow-hidden text-sm leading-6 text-white/40 line-clamp-3">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/40 transition hover:border-green-400/20 hover:text-green-300/70"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Source Code */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-400/70 transition hover:text-green-300"
            >
              Source Code
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </motion.article>
    </Reveal>
  );
}