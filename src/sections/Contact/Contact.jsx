import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { personalData } from "../../data/personalData";

import Container from "../../components/common/Container";
import Reveal from "../../components/animation/Reveal";
import SocialLinks from "../../components/common/SocialLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/meaqzaqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-green-400/70" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Contact
            </span>
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Let's make the next connection.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            Have an idea, opportunity, or project in mind? Send a message and
            let's start there.
          </p>
        </Reveal>

        {/* Contact Interface */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
            <div className="grid md:grid-cols-[0.8fr_1.5fr]">
              {/* Left Panel */}
              <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">
                    Connection
                  </p>

                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-green-400/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Open
                  </span>
                </div>

                {/* Connection Visual */}
                <div className="relative my-12 flex h-32 items-center justify-center">
                  <div className="absolute h-24 w-24 rounded-full border border-white/10" />

                  <div className="absolute h-16 w-16 rounded-full border border-white/10" />

                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.5)]"
                  />

                  <span className="absolute bottom-0 font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                    connection active
                  </span>
                </div>

                {/* Email */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                    Email
                  </p>

                  <a
                    href="mailto:girrajbarua7880@gmail.com"
                    className="mt-2 block break-all text-sm text-white/50 transition hover:text-white"
                  >
                    girrajbarua7880@gmail.com
                  </a>
                </div>

                {/* Availability */}
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                    Availability
                  </p>

                  <p className="mt-2 text-sm text-white/50">
                    Open to opportunities
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <SocialLinks
                    items={[
                      "linkedin",
                      "github",
                      "discord",
                      "whatsapp",
                      "email",
                      "credly",
                    ]}
                  />
                </div>
              </div>

              {/* Form */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">
                    Send Message
                  </p>

                  <span className="font-mono text-[10px] text-white/15">
                    FORM / 01
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="mt-8">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="mt-2 w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-green-400/50"
                    />
                  </div>

                  {/* Email */}
                  <div className="mt-7">
                    <label
                      htmlFor="email"
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25"
                    >
                      Your Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="mt-2 w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-green-400/50"
                    />
                  </div>

                  {/* Message */}
                  <div className="mt-7">
                    <label
                      htmlFor="message"
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me what's on your mind..."
                      rows={5}
                      required
                      className="mt-2 w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/20 focus:border-green-400/50"
                    />
                  </div>

                  {/* Submit */}
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <p className="hidden font-mono text-[10px] text-white/20 sm:block">
                      ● READY TO CONNECT
                    </p>

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="ml-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}

                      <ArrowUpRight size={14} />
                    </motion.button>
                  </div>

                  {/* Status */}
                  {status === "success" && (
                    <p className="mt-4 text-right text-xs text-green-400">
                      Message sent successfully.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="mt-4 text-right text-xs text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/20">
                <Check size={12} className="text-green-400/60" />
                Channel available
              </div>

              <p className="font-mono text-[10px] text-white/15">
                RESPONSE / AS SOON AS POSSIBLE
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/25">
              Good conversations often become good projects.
            </p>

            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-green-400/70 transition hover:text-green-400"
            >
              {personalData.email}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
