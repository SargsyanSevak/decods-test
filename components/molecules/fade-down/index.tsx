"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

const FadeDown: React.FC<FadeContentProps> = ({
  children,
  className = "",
  duration = 0.6,
  delay = 0,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: duration, ease: "easeOut", delay: delay },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeDown;
