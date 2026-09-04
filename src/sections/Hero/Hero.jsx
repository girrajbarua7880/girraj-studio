import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import SocialLinks from "../../components/common/SocialLinks";

import { personalData } from "../../data/personalData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl md:h-[500px] md:w-[500px]" />
      </div>

      <Container className="relative">
        <div className="max-w-5xl">
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

            <span className="text-sm text-white/50">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl"
          >
            Hi, I'm{" "}
            <span className="text-white/40">
              {personalData.name.split(" ")[0]}.
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-2xl font-medium text-white/70 md:text-4xl"
          >
            {personalData.role}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-lg font-medium text-white/60 md:text-xl"
          >
            {personalData.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 max-w-2xl text-sm leading-7 text-white/40 md:text-base md:leading-8"
          >
            {personalData.description}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#projects">
              View Projects
            </Button>

            <Button href="#contact" variant="secondary">
              Let's Connect
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex items-center gap-5"
          >
            <span className="h-px w-8 bg-white/10" />

            <SocialLinks
              items={[
                "linkedin",
                "github",
                "email",
                "discord",
                "whatsapp",
              ]}
            />
          </motion.div>

          {/* More Work */}
<motion.a
  href="https://portfolioo17.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.65 }}
  className="group mt-8 inline-flex items-center gap-3 text-[15px] font-medium transition-colors duration-300"
>
  <span className="h-px w-10 bg-green-400/40 transition-all duration-300 group-hover:w-16 group-hover:bg-green-400/70" />

  <span className="tracking-wide text-white/55 transition-colors duration-300 group-hover:text-white">
    Beyond This Space
  </span>

  <ArrowUpRight
    size={15}
    strokeWidth={2}
    className="text-green-400/70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-green-400"
  />
</motion.a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 right-0 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/30 md:flex"
        >
          <span>Scroll</span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-10 w-px bg-white/30"
          />
        </motion.div>
      </Container>
    </section>
  );
}