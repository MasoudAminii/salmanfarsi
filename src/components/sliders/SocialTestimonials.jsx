"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaNetworkWired } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TestimonialIcon from "../../../public/animation/testimonial.png";
import { useLocale, useTranslations } from "next-intl";

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

const SocialTestimonials = ({ reviews }) => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const isMdOrAbove = useMediaQuery("(min-width: 768px)");
  const sliderItemWidth = isMdOrAbove ? 516 : 346;
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    setCurrentSlider(0);

    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 10000); // Auto-advance every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [reviews.length, sliderItemWidth]);

  const prevSlide = () => {
    setCurrentSlider((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlider((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden bg-[#F3F8FF] px-4 py-14 md:px-8 md:py-20 md:pt-28">
      <div className="Slider-container relative mx-auto flex w-full max-w-screen-2xl gap-8 overflow-hidden max-lg:flex-col">
        <div className="flex flex-auto justify-between max-sm:flex-col lg:w-1/3 lg:flex-col lg:items-start">
          <div className="Slider-text flex-auto max-sm:mb-4">
            <h3 className="mb-4 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
              {t("reviews.heading")}
            </h3>
            <h4 className="text-3xl font-bold capitalize text-black md:text-4xl lg:text-5xl rtl:leading-normal">
              {t("reviews.title")}
            </h4>
          </div>
          <div className="slider-button flex flex-auto items-end gap-2 sm:w-1/3 ltr:sm:justify-end rtl:flex-row-reverse rtl:max-sm:justify-end">
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
          className="slider-content flex flex-auto items-start overflow-hidden lg:w-2/3"
        >
          <motion.div
            className="g-full flex justify-start gap-4"
            initial={{ x: 0 }}
            animate={{ x: -currentSlider * sliderItemWidth }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          >
            {reviews.map((item, index) => {
              const isActive = currentSlider === index; // Ensure correct active index
              return (
                <div
                  key={index}
                  className={`${isActive ? "opacity-100" : "opacity-50"} group relative flex min-h-[420px] w-[330px] flex-auto overflow-hidden rounded-[30px] border bg-white p-6 transition-all duration-300 md:min-h-[550px] md:w-[500px]`}
                >
                  <div className="content flex flex-col justify-between rtl:text-end">
                    <div className="Text">
                      <p className="icon mb-6 text-2xl font-bold">
                        <Image src={TestimonialIcon} alt="testimonial" />
                      </p>
                      <p className="description text-xl md:text-2xl rtl:leading-[1.8]">
                        {locale == "en" ? item?.review_en : item?.review_fa}
                      </p>
                    </div>
                    <div className="Profile flex items-center gap-4 rtl:flex-row-reverse">
                      <div className="relative size-20 min-w-[80px] overflow-hidden rounded-full bg-[#C4C4C4] md:size-32 md:min-w-[128px]">
                        <Image
                          src={`/reviews/${item?.image_url}`}
                          alt={item.name_en}
                          quality={100}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="About-Profile">
                        <h5 className="name mb-1 text-lg font-medium capitalize leading-tight text-gray-900">
                          {locale == "en" ? item?.name_en : item?.name_fa}
                        </h5>
                        <p className="position text-sm capitalize leading-snug text-gray-600">
                          {locale == "en"
                            ? item?.position_en
                            : item?.position_fa}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SocialTestimonials;
