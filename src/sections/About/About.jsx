import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Reveal from "../../components/animation/Reveal";

import { personalData } from "../../data/personalData";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        {/* Section Label */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-green-400/70" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              About Me
            </span>
          </div>
        </Reveal>

        {/* Main */}
        <div className="mt-10 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
          {/* Statement */}
          <Reveal>
            <div>
              <h2 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-7xl">
                I like making
                <br />
                <span className="text-white/30">
                  complex things
                </span>
                <br />
                feel simple.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/45 md:text-lg">
                I build web applications with a focus on
                clean interfaces, practical solutions and
                maintainable code.
              </p>
            </div>
          </Reveal>

          {/* Developer Profile */}
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />

                <span className="ml-auto text-xs text-white/25">
                  developer.profile
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm leading-7 md:p-8">
                <p className="text-white/25">
                  $ whoami
                </p>

                <p className="mt-2 text-green-300/80">
                  {personalData.name}
                </p>

                <p className="mt-6 text-white/25">
                  $ role
                </p>

                <p className="mt-2 text-white/70">
                  {personalData.role}
                </p>

                <p className="mt-6 text-white/25">
                  $ focus
                </p>

                <div className="mt-2 space-y-1 text-white/55">
                  <p>→ Frontend Development</p>
                  <p>→ Backend Development</p>
                  <p>→ Web Development</p>
                  <p>→ Django</p>
                </div>

                <p className="mt-6 text-white/25">
                  $ status
                </p>

                <p className="mt-2 flex items-center gap-2 text-green-300/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Always learning
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Capabilities */}
        <Reveal delay={0.2}>
          <div className="mt-16 border-y border-white/10">
            <div className="grid md:grid-cols-4">
              <div className="border-b border-white/10 px-5 py-6 md:border-b-0 md:border-r md:px-6">
                <span className="text-xs text-white/25">
                  01
                </span>

                <h3 className="mt-4 font-medium">
                  Frontend
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Clean and responsive interfaces.
                </p>
              </div>

              <div className="border-b border-white/10 px-5 py-6 md:border-b-0 md:border-r md:px-6">
                <span className="text-xs text-white/25">
                  02
                </span>

                <h3 className="mt-4 font-medium">
                  Backend
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Reliable application logic and APIs.
                </p>
              </div>

              <div className="border-b border-white/10 px-5 py-6 md:border-b-0 md:border-r md:px-6">
                <span className="text-xs text-white/25">
                  03
                </span>

                <h3 className="mt-4 font-medium">
                  Django
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Building practical backend applications.
                </p>
              </div>

              <div className="px-5 py-6 md:px-6">
                <span className="text-xs text-white/25">
                  04
                </span>

                <h3 className="mt-4 font-medium">
                  Problem Solving
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Turning complex problems into simple solutions.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Statement */}
        <Reveal delay={0.25}>
          <div className="mt-8 flex items-center gap-4 text-sm text-white/30">
            <span className="text-green-300/70">
              →
            </span>

            <span>
              Good code should solve a problem, not create another one.
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}