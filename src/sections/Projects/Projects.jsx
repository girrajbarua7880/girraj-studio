import ShowMore from "../../components/common/ShowMore";
import Container from "../../components/common/Container";
import Reveal from "../../components/animation/Reveal";
import ProjectCard from "../../components/cards/ProjectCard";

import { projects } from "../../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 md:py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-green-400/70" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Projects
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            Things I've built.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            A selection of projects where I turned ideas, problems, and
            requirements into working solutions.
          </p>
        </Reveal>

        <ShowMore items={projects}>
          {(visibleProjects) => (
            <div className="grid gap-6 md:grid-cols-3">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          )}
        </ShowMore>
      </Container>
    </section>
  );
}
