import Container from "../../components/common/Container";
import Reveal from "../../components/animation/Reveal";
import ShowMore from "../../components/common/ShowMore";

import CertificateCard from "../../components/cards/CertificateCard";
import BadgeCard from "../../components/cards/BadgeCard";

import { certificates, badges } from "../../data/certificatesData";

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-20 py-16 md:py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-green-400/70" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Credentials
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            What I've earned.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            Certificates, internships, and digital achievements collected along
            my learning journey.
          </p>
        </Reveal>

        {/* Certificate Timeline */}
        <div className="relative mt-16">
          {/* Desktop Timeline */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-white/10 md:block" />

          {/* Mobile Timeline */}
          <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10 md:hidden" />

          <ShowMore items={certificates}>
            {(visibleCertificates) =>
              visibleCertificates.map((certificate, index) => (
                <CertificateCard
                  key={`${certificate.title}-${certificate.issuer}`}
                  {...certificate}
                  index={index}
                  position={index % 2 === 0 ? "top" : "bottom"}
                />
              ))
            }
          </ShowMore>
        </div>

        {/* Digital Badges */}
        <Reveal className="mt-24">
          <div className="flex items-end justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Digital Badges
              </p>

              <h3 className="mt-2 text-2xl font-medium">Verified online.</h3>
            </div>

            <span className="hidden font-mono text-xs text-white/20 sm:block">
              {String(badges.length).padStart(2, "0")} BADGES
            </span>
          </div>

          <div className="mt-6">
            <ShowMore items={badges} initialCount={4}>
              {(visibleBadges) => (
                <div className="grid gap-4 sm:grid-cols-2">
                  {visibleBadges.map((badge, index) => (
                    <BadgeCard
                      key={`${badge.title}-${badge.issuer}`}
                      {...badge}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </ShowMore>
          </div>
        </Reveal>

        {/* Terminal Status */}
        <Reveal className="mt-12">
          <div className="rounded-xl border border-white/10 bg-[#080808] px-5 py-4 font-mono text-xs">
            <p className="text-white/20">
              <span className="text-green-400/60">$</span> credentials --status
            </p>

            <p className="mt-2 text-white/40">
              {certificates.length} certificates found
            </p>

            <p className="mt-1 text-white/20">
              {badges.length} digital badges verified
            </p>

            <div className="mt-2 flex items-center gap-2 text-white/20">
              <span>$</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
