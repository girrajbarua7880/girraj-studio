import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}