import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import { personalData } from "../../data/personalData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(0);

  const themes = [
  "",
  "theme-teal",
  "theme-blue",
  "theme-purple",
  "theme-burgundy",
  "theme-slate",
  "theme-charcoal",
  "theme-black",
];

  const toggleBackground = () => {
    const nextTheme = (theme + 1) % themes.length;

    themes.forEach((themeName) => {
      if (themeName) {
        document.documentElement.classList.remove(themeName);
      }
    });

    if (themes[nextTheme]) {
      document.documentElement.classList.add(themes[nextTheme]);
    }

    setTheme(nextTheme);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Collaborate", href: "#collaboration" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4"
    >
      <Container>
        <div className="relative">
          {/* Navbar */}
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">
            {/* Logo */}
            <a
              href="#home"
              className="text-base font-semibold tracking-tight"
            >
              {personalData.name}.
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Resume */}
            <div className="hidden md:block">
              <Button href={personalData.resume} target="_blank">
                Resume
                <ArrowUpRight size={14} />
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Background Changer */}
              <button
                type="button"
                onClick={toggleBackground}
                aria-label="Change background"
                title="Change background"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                ◐
              </button>

              {/* Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-label="Toggle navigation"
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>

          {/* Desktop Background Changer */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleBackground}
            aria-label="Change background"
            title="Change background"
            className="absolute -right-14 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-sm text-white/60 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:text-white md:flex"
          >
            ◐
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-2 rounded-3xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl md:hidden"
              >
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}

                  <Button
                    href={personalData.resume}
                    target="_blank"
                    className="mt-2 w-full"
                  >
                    Resume
                    <ArrowUpRight size={14} />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.header>
  );
}