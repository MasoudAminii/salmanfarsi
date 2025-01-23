"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaNetworkWired } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import Image from "next/image";

const data = [
  {
    icon: <FaNetworkWired />,
    name: "Database Security",
    description: "Mauris ultrices ligula eget volutpat aliquet nullam",
    Link: "#",
  },
  {
    icon: <FaNetworkWired />,
    name: "Database Security",
    description: "Mauris ultrices ligula eget volutpat aliquet nullam",
    Link: "#",
  },
  {
    icon: <FaNetworkWired />,
    name: "Database Security",
    description: "Mauris ultrices ligula eget volutpat aliquet nullam",
    Link: "#",
  },
  {
    icon: <FaNetworkWired />,
    name: "Database Security",
    description: "Mauris ultrices ligula eget volutpat aliquet nullam",
    Link: "#",
  },
  {
    icon: <FaNetworkWired />,
    name: "Database Security",
    description: "Mauris ultrices ligula eget volutpat aliquet nullam",
    Link: "#",
  },
  {
    icon: <FaNetworkWired />,
    name: "Database Security",
    description: "Mauris ultrices ligula eget volutpat aliquet nullam",
    Link: "#",
  },
];

const AboutSlider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderItemWidth = 338; // Width of each slider item

  const prevSlide = () => {
    setCurrentSlider((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentSlider((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="overflow-hidden px-4 py-14 md:px-8 md:py-28">
      <div className="Slider-container relative mx-auto flex w-full max-w-screen-xl flex-col overflow-x-hidden">
        <div className="mb-4 flex items-center justify-between gap-y-2 max-sm:flex-col sm:items-end md:mb-8">
          <div className="Slider-text flex-1 max-sm:text-center">
            <h2 className="mb-4 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
              our expert team
            </h2>
            <h4 className="text-4xl font-bold sm:text-5xl rtl:leading-[4rem]">
              Meet Our Professional Team Members
            </h4>
          </div>
          <div className="slider-button flex flex-1 items-center gap-2 ltr:justify-end rtl:flex-row-reverse">
            <button
              onClick={prevSlide}
              className="rounded-full border-2 border-[var(--secondary-color)] p-4 text-xl text-[var(--secondary-color)] transition-all hover:bg-[var(--secondary-color)] hover:text-white"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full border-2 border-[var(--secondary-color)] p-4 text-xl text-[var(--secondary-color)] transition-all hover:bg-[var(--secondary-color)] hover:text-white"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="slider-content flex h-[30rem] items-start overflow-hidden py-[60px]">
          <motion.div
            className="flex justify-center gap-2"
            initial={{ x: 0 }}
            animate={{ x: -currentSlider * sliderItemWidth }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {data.map((item, index) => {
              const isActive = currentSlider === index; // Ensure correct active index
              return (
                <button key={index} onClick={() => setCurrentSlider(index)}>
                  <motion.div
                    className="relative flex min-h-[306px] min-w-[330px] flex-auto flex-col justify-around rounded-[30px] border bg-white px-6 py-4 transition-colors"
                    style={{
                      backgroundColor: isActive ? "#635ad9" : "white",
                      color: isActive ? "white" : "black",
                    }}
                    initial={{ y: 0 }}
                    animate={{ y: isActive ? 0 : index % 2 === 0 ? -50 : 50 }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  >
                    <div className="Wing-Image absolute right-0 top-0 z-10">
                      <Image
                        src={`/animation/bg-wing.png`}
                        quality={100}
                        width={500}
                        height={500}
                        alt="Wing"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: isActive ? "white" : "#ECF8FF",
                      }}
                      className="flex size-20 items-center justify-center overflow-hidden rounded-full bg-[#ECF8FF] text-4xl text-[var(--primary-color)]"
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-semibold">
                        {item.name} {index}
                      </h3>
                      <h3 className="line-clamp-3">{item.description}</h3>
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
