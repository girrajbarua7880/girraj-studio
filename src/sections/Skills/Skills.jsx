import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Reveal from "../../components/animation/Reveal";
import ShowMore from "../../components/common/ShowMore";
import ToolCard from "../../components/cards/ToolCard";

import { skills, tools } from "../../data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 md:py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-green-400/70" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Skills
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            What I use to build.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            My development stack, from frontend interfaces to backend systems
            and databases.
          </p>
        </Reveal>

        {/* Developer Console */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

              <span className="ml-auto font-mono text-xs text-white/20">
                stack.config
              </span>
            </div>

            {/* Console */}
            <div className="p-6 font-mono text-sm leading-7 md:p-10">
              {Object.entries(skills).map(
                ([category, items], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.08,
                    }}
                    className={categoryIndex > 0 ? "mt-8" : ""}
                  >
                    <p className="text-white/25">
                      <span className="text-green-400/70">$</span>{" "}
                      cat skills/{category}
                    </p>

                    <p className="mt-2 text-white/70">{category}</p>

                    <div className="text-white/40">
                      {items.map((skill, index) => (
                        <p key={skill}>
                          <span className="text-white/20">
                            {index === items.length - 1 ? "└──" : "├──"}
                          </span>{" "}
                          {skill}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ),
              )}

              {/* Cursor */}
              <div className="mt-8 flex items-center gap-2 text-white/30">
                <span className="text-green-400/70">$</span>

                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  ▊
                </motion.span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tools */}
        <Reveal className="mt-16">
          <div className="flex items-end justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Tools
              </p>

              <h3 className="mt-2 text-2xl font-medium">
                What I use daily.
              </h3>
            </div>

            <span className="hidden font-mono text-xs text-white/20 sm:block">
              {String(tools.length).padStart(2, "0")} TOOLS
            </span>
          </div>

          {/* Tool Grid */}
          <ShowMore items={tools} initialCount={8}>
            {(visibleTools) => (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {visibleTools.map((tool, index) => (
                  <ToolCard
                    key={tool.name}
                    {...tool}
                    index={index}
                  />
                ))}
              </div>
            )}
          </ShowMore>
        </Reveal>
      </Container>
    </section>
  );
}