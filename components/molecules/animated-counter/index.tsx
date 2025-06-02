"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  to,
  duration = 2,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, to, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span className={className} ref={ref}>
      {rounded}
    </motion.span>
  );
};

export default AnimatedCounter;
