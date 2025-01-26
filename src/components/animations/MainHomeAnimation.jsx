"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Spiral from "../../../public/animation/Spiral 3.png";
import Portal from "../../../public/animation/Portal.png";
import Direction from "../../../public/animation/Direction.png";
import ArrowDown from "../../../public/animation/ArrowDown.png";
import Cross from "../../../public/animation/Cross.png";
import { useTranslations } from "next-intl";
function MainHomeAnimation() {
  const t = useTranslations("HomePage.Main");
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
        className="absolute top-[2%] z-20 ltr:left-[2%] rtl:right-[2%]"
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
          animate={{ rotate: [0, -10, 0] }} // Moves the element up and down
          transition={{
            duration: 4, // Time for one complete up and down motion
            repeat: Infinity, // Infinite loop
            repeatType: "loop",
            ease: "linear", // Smooth animation
          }}
        >
          <Image
            alt="Spiral"
            className="scale-85 sm:scale-90 md:scale-100"
            src={Spiral}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-[10%] z-20 md:bottom-16 rtl:right-0"
        variants={{
          hidden: { scale: 0, y: 50, x: 100 },
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
      >
        <div className="md:scale-1 scale-95">
          <Image alt="Portal" className="animate-ping" src={Portal}></Image>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 z-20 md:left-[5%] ltr:left-[5%] rtl:right-[5%]"
        variants={{
          hidden: { scale: 0, x: -100 },
          visible: { scale: 1, x: 0 },
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        initial="hidden"
        animate={mainControls}
      >
        <div className="scale-95 md:scale-100 ltr:scale-x-[-1]">
          <Image alt="Direction" src={Direction}></Image>
        </div>
      </motion.div>
      <motion.div
        dir="ltr"
        className="absolute bottom-0 left-1/2 z-20"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        initial="hidden"
        animate={mainControls}
      >
        <div className="md:scale-1 flex items-center justify-center gap-2 rounded-[30px] bg-white p-4 capitalize max-sm:flex-wrap ltr:-translate-x-[20%] rtl:-translate-x-[80%]">
          <div className="image-circle flex w-fit -space-x-4">
            <div className="size-11 overflow-hidden rounded-full border-[3px] border-white bg-[#C4C4C4]">
              <Image
                src={`/students/student-2.jpg`}
                alt="student"
                quality={100}
                priority
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
            </div>
            <div className="size-11 overflow-hidden rounded-full border-[3px] border-white bg-[#C4C4C4]">
              <Image
                src={`/students/student-1.jpg`}
                alt="student"
                quality={100}
                priority
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
            </div>
            <div className="size-11 overflow-hidden rounded-full border-[3px] border-white bg-[#C4C4C4]">
              <Image
                src={`/students/student-3.jpg`}
                alt="student"
                quality={100}
                priority
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <h3 className="w-fit text-end capitalize max-sm:text-center max-sm:text-sm">
            {t("image-description")}
          </h3>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-1/3 z-20 max-xxs:hidden ltr:sm:left-2 rtl:sm:right-2"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        initial="hidden"
        animate={mainControls}
      >
        <div className="md:scale-1 relative flex w-full -translate-y-1/2 scale-95 items-center gap-2 rounded-[30px] bg-white px-4 py-4 capitalize">
          <h3 className="text-sm md:text-base">{t("image-title")}</h3>
          <Image
            className="absolute top-12 ltr:-right-6 rtl:-left-6 rtl:scale-x-[-1]"
            alt="ArrowDown"
            src={ArrowDown}
          />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-[5%] z-20 ltr:right-[5%] rtl:left-[5%]"
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
            duration: 5, // Time for one complete up and down motion
            repeat: Infinity, // Infinite loop
            repeatType: "loop",
            ease: "linear", // Smooth animation
          }}
        >
          <Image
            alt="Cross"
            className="scale-85 sm:scale-90 md:scale-100"
            src={Cross}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MainHomeAnimation;
