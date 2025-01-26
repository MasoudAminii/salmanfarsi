"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

const facilities_images = [
  "/facilities/arts.png",
  "/facilities/classes.png",
  "/facilities/clinic.png",
  "/facilities/football feild.png",
  "/facilities/library.png",
  "/facilities/Primary Reception.png",
  "/facilities/school yard.png",
  "/facilities/stage.png",
];

const StaggerTestimonials = () => {
  const t = useTranslations("HomePage.About");
  const facilities = t.raw("facilities");

  // Hooks are called unconditionally
  const isMdOrAbove = useMediaQuery("(min-width: 768px)");
  const sliderItemWidth = isMdOrAbove ? 508 : 338;
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    setCurrentSlider(0); // Reset slider when width changes

    const interval = setInterval(() => {
      setCurrentSlider((prev) =>
        prev === facilities.length - 1 ? 0 : prev + 1,
      );
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [facilities.length, sliderItemWidth]);

  // Early return after hooks
  if (!Array.isArray(facilities)) {
    console.error("facilities is not an array:", facilities);
    return null;
  }

  const prevSlide = () => {
    setCurrentSlider((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlider((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
  };

  const textVariants = {
    inactive: {
      opacity: 0,
      y: 20,
    },
    active: {
      opacity: 1,
      y: -20,
    },
  };

  return (
    <div className="overflow-hidden px-4 py-14 md:px-8 md:py-20">
      <div className="Slider-container relative mx-auto flex w-full max-w-screen-2xl flex-col overflow-hidden">
        <div className="mb-4 md:mb-8">
          <div className="Slider-text max-md:mb-4 md:w-2/3">
            <h2 className="mb-4 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
              {t("Testimonials-title")}
            </h2>
            <h4 className="text-3xl font-bold capitalize text-black md:text-4xl lg:text-5xl rtl:leading-normal">
              {t("Testimonials-description")}
            </h4>
          </div>
          <div className="slider-button flex items-end gap-2 md:hidden ltr:sm:justify-end rtl:flex-row-reverse rtl:max-md:justify-end">
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
        <div
          dir="ltr"
          className="slider-content relative flex items-start overflow-hidden"
        >
          <motion.div
            className="flex justify-start gap-2"
            initial={{ x: 0 }}
            animate={{ x: -currentSlider * sliderItemWidth }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          >
            {facilities.map((item, index) => {
              const isActive = currentSlider === index;
              return (
                <div
                  key={index}
                  className={`${isActive && "border-4 border-[var(--secondary-color)]"} group relative flex min-h-[300px] w-[330px] flex-auto flex-col justify-around overflow-hidden rounded-[20px] bg-white px-6 py-4 transition-all duration-300 md:min-h-[400px] md:w-[500px]`}
                >
                  <Image
                    src={facilities_images[index]}
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="facilities"
                  />
                  <motion.div
                    variants={textVariants}
                    animate={isActive ? "active" : "inactive"}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 z-20 mx-4 flex flex-col gap-2 rounded-lg bg-white p-4 ltr:items-start ltr:text-start rtl:items-end rtl:text-end"
                  >
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <h3 className="line-clamp-3 text-[#666666]">
                      {item.description}
                    </h3>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
          <div className="slider-button absolute top-1/2 z-20 flex w-full flex-auto -translate-y-1/2 items-center justify-between gap-4 px-4 max-md:hidden">
            <button
              onClick={prevSlide}
              className="rounded-full border-2 border-[var(--secondary-color)] bg-[var(--secondary-color)] p-4 text-xl text-white transition-all hover:bg-white hover:text-[var(--secondary-color)]"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full border-2 border-[var(--secondary-color)] bg-[var(--secondary-color)] p-4 text-xl text-white transition-all hover:bg-white hover:text-[var(--secondary-color)]"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaggerTestimonials;
