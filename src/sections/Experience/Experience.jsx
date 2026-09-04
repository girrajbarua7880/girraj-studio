import Container from "../../components/common/Container";
import Reveal from "../../components/animation/Reveal";
import ExperienceCard from "../../components/cards/ExperienceCard";

import { experiences } from "../../data/experienceData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-green-400/70" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Experience
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            Where I've worked.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            My professional experience and the work I've
            contributed to along the way.
          </p>
        </Reveal>

        <div className="mt-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}