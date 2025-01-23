"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Vector from "../../../public/animation/Vector.png";
import DottedCircle from "../../../public/animation/dotted-circle.png";
import Pill from "../../../public/animation/Pill.png";
function MainHomeTextAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="WholeAnimation" ref={ref}>
      <motion.div
        className="absolute bottom-0 rtl:sm:left-1/3 z-20 ltr:sm:right-1/3 sm:-translate-x-1/2"
        variants={{
          hidden: { scale: 0, y: -100, x: -100 },
          visible: { scale: 1, x: 0, y: 0 },
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        initial="hidden"
        animate={mainControls}
        // Infinite vertical movement after the element appears
        exit={{ opacity: 0 }}
      >
        <motion.div
          animate={{ scale: [1, 0.5, 1], rotate: [0, 180, 0] }} // Combine all properties in one object
          transition={{
            duration: 10, // Time for one complete up and down motion
            repeat: Infinity, // Infinite loop
            repeatType: "loop",
            ease: "linear", // Smooth animation
          }}
        >
          <Image
            alt="Vector"
            className="scale-85 sm:scale-90 md:scale-100"
            src={Vector}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute right-[10%] top-0 z-20"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1, rotate: 360 },
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        initial="hidden"
        animate={mainControls}
        // Infinite vertical movement after the element appears
        exit={{ opacity: 0 }}
      >
        <motion.div
          animate={{ rotate: 360 }} // Combine all properties in one object
          transition={{
            duration: 10, // Time for one complete up and down motion
            repeat: Infinity, // Infinite loop
            repeatType: "loop",
            ease: "linear", // Smooth animation
          }}
        >
          <Image
            alt="DottedCircle"
            className="scale-85 sm:scale-90 md:scale-100"
            src={DottedCircle}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MainHomeTextAnimation;
