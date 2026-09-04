import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import Container from "../../components/common/Container";
import Reveal from "../../components/animation/Reveal";
import { personalData } from "../../data/personalData";

export default function Collaboration() {
  return (
    <section
      id="collaboration"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-green-400/70" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Collaboration
            </span>
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Something worth building?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            If you have an idea, side project, open-source contribution,
            or something you'd like to build together, I'm open to
            collaborating.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/20">
                collaboration.channel
              </div>
            </div>

            <div className="grid md:grid-cols-[1.4fr_0.8fr]">
              {/* Main Content */}
              <div className="p-6 md:p-10">
                <div className="font-mono text-xs text-white/20">
                  <span className="text-green-400/60">$</span>{" "}
                  collaboration --status
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{
                        opacity: [0.35, 1, 0.35],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.5)]"
                    />

                    <span className="font-mono text-xs text-green-400/70">
                      OPEN_TO_COLLABORATE
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-white/90 md:text-4xl">
                    Let's build something
                    <span className="text-white/35"> useful together.</span>
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/35">
                    I'm interested in working on meaningful web projects,
                    open-source ideas, and projects where I can learn,
                    contribute, and create something useful.
                  </p>

                  <motion.a
  href={`https://wa.me/${personalData.whatsapp}?text=${encodeURIComponent(
    "Hi Girraj, I would like to discuss a project/collaboration with you."
  )}`}
  target="_blank"
  rel="noreferrer"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
>
  Start a Conversation
  <ArrowUpRight size={15} />
</motion.a>
                </div>
              </div>

              {/* Status Panel */}
              <div className="border-t border-white/10 p-6 md:border-l md:border-t-0 md:p-8">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25">
                    Channel
                  </p>

                  <span className="font-mono text-[10px] text-green-400/60">
                    ACTIVE
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <Check
                      size={14}
                      className="shrink-0 text-green-400/60"
                    />

                    <div>
                      <p className="text-sm text-white/60">
                        Build together
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-white/20">
                        side_projects
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check
                      size={14}
                      className="shrink-0 text-green-400/60"
                    />

                    <div>
                      <p className="text-sm text-white/60">
                        Open source
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-white/20">
                        contributions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check
                      size={14}
                      className="shrink-0 text-green-400/60"
                    />

                    <div>
                      <p className="text-sm text-white/60">
                        Learn & contribute
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-white/20">
                        knowledge_exchange
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                    Response
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    Usually within a few days
                  </p>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="border-t border-white/10 px-5 py-4 font-mono text-[10px] text-white/20 md:px-8">
              <span className="text-green-400/60">$</span>{" "}
              channel --connect
              <span className="ml-2 animate-pulse text-green-400/50">
                _
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}