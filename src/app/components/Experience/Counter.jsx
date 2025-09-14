"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ start = 0, end, duration = 7, className = "" }) {
  const count = useMotionValue(start);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // triggers only once

  useEffect(() => {
    if (!isInView) return; // animate only when in view

    const controls = animate(count, end, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, end, duration, count]);

  return (
    <motion.span ref={ref} className={`text-3xl font-bold ${className}`}>
      {rounded}
    </motion.span>
  );
}

export default function Stats({ digits }) {
  return (
    <div className="flex gap-6">
      {digits.map((digit, i) => (
        <Counter
          key={i}
          start={0}
          end={digit}
          duration={1 + i * 0.3} // stagger effect
          className="text-gray-300 text-[140px]"
        />
      ))}
    </div>
  );
}
