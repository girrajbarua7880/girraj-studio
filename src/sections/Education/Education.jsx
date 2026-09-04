import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Reveal from "../../components/animation/Reveal";
import EducationCard from "../../components/cards/EducationCard";

import { education } from "../../data/educationData";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-green-400/70" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Education
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            How the system was built.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            From foundational learning to computer science, each stage
            shaped how I approach technology.
          </p>
        </Reveal>

        {/* System Build */}
        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>

              <span className="font-mono text-xs text-white/20">
                education.system
              </span>
            </div>

            {/* Build Content */}
            <div className="p-6 md:p-10">
              {/* Terminal Command */}
              <div className="mb-10 font-mono text-xs">
                <p className="text-white/20">
                  <span className="text-green-400/60">$</span>{" "}
                  education --build
                </p>

                <p className="mt-2 text-white/30">
                  loading academic foundation...
                </p>
              </div>

              {/* Education Levels */}
              <div className="space-y-8">
                {education.map((item, index) => (
                  <EducationCard
                    key={`${item.title}-${item.institution}`}
                    {...item}
                    index={index}
                  />
                ))}
              </div>

              {/* System Status */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                      Foundation
                    </p>

                    <p className="mt-2 font-mono text-xs text-green-400/60">
                      ✓ loaded
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                      Core
                    </p>

                    <p className="mt-2 font-mono text-xs text-green-400/60">
                      ✓ loaded
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                      Specialization
                    </p>

                    <p className="mt-2 font-mono text-xs text-green-400/60">
                      ✓ loaded
                    </p>
                  </div>
                </div>
              </div>

              {/* Final Command */}
              <div className="mt-8 font-mono text-xs text-white/20">
                <span className="text-green-400/60">$</span>{" "}
                system --status

                <span className="ml-2 text-green-400/60">
                  READY
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Statement */}
        <Reveal className="mt-10">
          <div className="flex items-center gap-3">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-green-400"
            />

            <p className="font-mono text-xs text-white/25">
              foundation → core → specialization
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}