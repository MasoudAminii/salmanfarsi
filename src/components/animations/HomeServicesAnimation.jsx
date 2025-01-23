"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Ellipse from "../../../public/animation/Ellipse.png";
import Vector3 from "../../../public/animation/Vector3.png";
import Vector4 from "../../../public/animation/Vector4.png";

const HomeServicesAnimation = () => {
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
        className="absolute -right-32 bottom-0 z-10"
        variants={{
          hidden: { scale: 0, y: 100, x: 100 },
          visible: { scale: 1, x: 0, y: 0 },
        }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        initial="hidden"
        animate={mainControls}
      >
        <div className="scale-90 md:scale-100 lg:scale-105">
          <Image alt="Ellipse" src={Ellipse}></Image>
        </div>
      </motion.div>
      <motion.div
        className="absolute -left-14 bottom-10"
        variants={{
          hidden: { scale: 0, x: -100 },
          visible: { scale: 1, x: 0 },
        }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        initial="hidden"
        animate={mainControls}
      >
        <div className="scale-90 md:scale-100 lg:scale-105">
          <Image alt="Vector3" src={Vector3}></Image>
        </div>
      </motion.div>
      <motion.div
        className="absolute -right-14 top-10"
        variants={{
          hidden: { scale: 0, x: -100 },
          visible: { scale: 1, x: 0 },
        }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        initial="hidden"
        animate={mainControls}
      >
        <div className="scale-90 md:scale-100 lg:scale-105">
          <Image alt="Vector4" src={Vector4}></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeServicesAnimation;
