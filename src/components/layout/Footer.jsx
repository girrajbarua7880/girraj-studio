import { ArrowUpRight } from "lucide-react";

import Container from "../common/Container";
import SocialLinks from "../common/SocialLinks";
import { personalData } from "../../data/personalData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#home"
              className="text-sm font-semibold text-white/80"
            >
              {personalData.name}.
            </a>

            <p className="mt-2 text-xs text-white/25">
              Building useful things with code.
            </p>
          </div>

          <SocialLinks />

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-white/30 transition hover:text-white"
          >
            Back to top
            <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-[10px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {personalData.name}</span>

          <span className="font-mono uppercase tracking-[0.15em]">
            React / Tailwind / Framer Motion
          </span>
        </div>
      </Container>
    </footer>
  );
}