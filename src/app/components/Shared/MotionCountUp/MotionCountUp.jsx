"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export const MotionCountUp = ({ from = 0, to = 25, duration = 2 }) => {
    const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeInOut",
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });

    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.span className="text-[#fb1359] text-[100px] xl:text-[200px] font-bold leading-none">
      {display}
    </motion.span>
  );
};
