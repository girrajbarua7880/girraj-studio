
import { motion } from "framer-motion";

export default function Button({
  children,
  href = "#",
  variant = "primary",
  target,
  className = "",
}) {
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}