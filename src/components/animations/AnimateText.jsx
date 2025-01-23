"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react"; // Import React

const AnimateText = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]); // Add mainControls and slideControls as dependencies

  return (
    <div ref={ref} className="MainAnimation relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0, opacity: 0 },
          visible: { left: "100%", opacity: 1 },
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        initial="hidden"
        animate={slideControls}
        className="absolute bottom-1 left-0 right-0 top-1 z-30 bg-[var(--primary-color)]"
      ></motion.div>
    </div>
  );
};

export default AnimateText;
