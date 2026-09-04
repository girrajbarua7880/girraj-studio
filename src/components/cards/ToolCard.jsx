import { motion } from "framer-motion";

import Reveal from "../animation/Reveal";

export default function ToolCard({
  name,
  description,
  icon: Icon,
  index,
}) {
  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -4 }}
      
        className="group border-b border-white/10 p-5 md:p-6"
      >
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/50 transition duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06] group-hover:text-white">
            <Icon className="h-6 w-6" />
          </div>

          <span className="font-mono text-xs text-white/15">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="mt-6 text-base font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
          {name}
        </h4>

        <p className="mt-1 text-xs text-white/25">
          {description}
        </p>

        <div className="mt-5 h-px w-5 bg-white/15 transition-all duration-300 group-hover:w-10 group-hover:bg-green-400/60" />
      </motion.div>
    </Reveal>
  );
}