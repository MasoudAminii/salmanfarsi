"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const TextParallax = ({ imgUrl, subheading, heading }) => {
  return (
    <div className="relative bg-white">
      <TextParallaxContent
        imgUrl={imgUrl}
        subheading={subheading}
        heading={heading}
      />
    </div>
  );
};
export default TextParallax;

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="sticky z-0 overflow-hidden"
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
      }}
    >
      <Image
        src={imgUrl}
        quality={100}
        priority
        fill
        alt="banner"
        className="h-full w-full object-cover"
        style={{
          scale,
          opacity,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 right-0 top-0 mx-auto flex h-screen w-full max-w-screen-2xl flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl capitalize md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold capitalize md:text-6xl rtl:leading-[1.5]">
        {heading}
      </p>
    </motion.div>
  );
};
