import InfiniteCarousel from "@/components/sliders/InfiniteCarousel";
import prisma from "@/lib/db";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import Akhlasi from "../../../../../public/schoolstaff/Akhlasi.png";
import Mohammadi from "../../../../../public/schoolstaff/Mohammadi.png";
import StaffContent from "@/components/card/StaffContent";

// TextParallax
import TextParallax from "@/components/animations/TextParallax";

export const metadata = {
  title: "About Us",
};

const page = async () => {
  const aboutUs = await getTranslations("AboutPage");
  const aboutUsText = aboutUs.raw("about_us.sections");
  const schoolStaff = await prisma.staff.findMany({ take: 4 });
  const imageDetails = [
    {
      path: "/logo/slider-school/ministry-of-education-iran.png",
      website: "https://www.moe.gov.ir",
    },
    {
      path: "/logo/slider-school/logo-books.png",
      website: "https://educationresources.com",
    },
    {
      path: "/logo/slider-school/Superintendence-of-schools.png",
      website: "https://www.schoolsuperintendence.ae",
    },
    {
      path: "/logo/slider-school/Ministry-of-Education.png",
      website: "https://www.moe.gov.ae",
    },
    {
      path: "/logo/slider-school/Ministry-of-Education-International-Affairs-Center.png",
      website: "https://international.moe.gov.ae",
    },
    {
      path: "/logo/slider-school/Khda.png",
      website: "https://www.khda.gov.ae",
    },
  ];

  return (
    <div>
      <section className="Banner">
        <TextParallax
          subheading={aboutUs("banner.title")}
          imgUrl={`/banner/banner (14).jpg`}
          heading={aboutUs("banner.description")}
        />
      </section>
      <section className="About-School px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-screen-2xl items-start gap-8 max-lg:flex-col">
          <div className="about-image flex flex-auto flex-col gap-2 lg:sticky lg:top-5 lg:w-1/3">
            <div className="principal-image max-h-[575px] flex-auto overflow-hidden rounded-xl lg:top-20">
              <Image
                src={Akhlasi}
                alt="Akhlasi"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="second-about-image flex max-h-[273px] gap-2">
              <div className="group-image flex w-1/3 flex-auto flex-col items-center justify-center overflow-hidden rounded-xl bg-[#5956E9] text-center text-white">
                <h4 className="mb-2 text-4xl font-bold sm:text-6xl">
                  {aboutUs("about_us.image_title")}
                </h4>
                <p className="text-sm sm:text-xl">
                  {aboutUs("about_us.image_description")}
                </p>
              </div>
              <div className="group-image w-1/3 flex-auto overflow-hidden rounded-xl">
                <Image
                  src={Mohammadi}
                  alt="Akhlasi"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="about-text flex-auto px-4 py-6 lg:w-1/2">
            <div className="main-title mb-6">
              <h2 className="heading-1 mb-4 capitalize leading-snug text-[#242331]">
                {aboutUs("about_us.mainHeading")}
              </h2>
              <p className="paraghraph-1 text-justify leading-relaxed text-[#333333]">
                {aboutUs("about_us.main_descripton")}
              </p>
            </div>
            <div className="flex flex-col gap-4 text-lg leading-relaxed sm:gap-6 sm:text-xl">
              {aboutUsText.map((item, index) => (
                <div key={index} className="about-card">
                  <h4 className="paraghraph-1 mb-2 text-[#333333]">
                    {item.title}
                  </h4>
                  <p className="paraghraph-1 text-justify text-[#333333]">
                    {item.content}
                  </p>
                  {item.list && (
                    <div className="list mt-2 flex flex-col gap-3">
                      {item.list?.map((list_item, index) => (
                        <p
                          key={index}
                          className="paraghraph-2 flex items-start gap-2 text-justify font-light text-[#808080]"
                        >
                          <span className="rounded-full bg-[var(--secondary-color)] p-1 text-white">
                            <TiTick size={20} />
                          </span>
                          {list_item}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="AboutSlider relative">
        <Image
          src={`/skeleton/doted-background.png`}
          alt="video bg skeleton"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

        <AboutSlider />
      </section> */}
      <section className="About-Our-Team">
        <div className="Our-Team px-4 py-14 md:px-8 md:py-20">
          <div className="Team-container mx-auto max-w-screen-xl">
            <div className="Team-Title z-20 mb-4 flex w-full gap-4 max-sm:flex-col sm:mb-8 sm:items-end sm:justify-between">
              <div className="Team-Text z-20 flex-1">
                <h3 className="mb-4 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {aboutUs("about_us.ourteam.heading")}
                </h3>
                <h2 className="text-4xl font-bold capitalize text-black lg:text-5xl rtl:leading-[4rem]">
                  {aboutUs("about_us.ourteam.title")}
                </h2>
              </div>
              <div className="Team-link z-20 flex flex-1 sm:justify-end">
                <Link
                  href={"/about-us/school-staff"}
                  className="group flex w-fit items-center gap-2 rounded-[30px] bg-gradient-to-r from-[#C21EFC] to-[#0081EC] px-6 py-4 capitalize text-white transition-all"
                >
                  <span className="transition-all duration-300 ltr:group-hover:translate-x-3 rtl:group-hover:-translate-x-3">
                    {aboutUs("about_us.ourteam.link")}
                  </span>
                  <FaArrowRight className="transition-all duration-500 ltr:group-hover:translate-x-4 ltr:group-hover:opacity-0 rtl:scale-x-[-1] rtl:group-hover:-translate-x-4 rtl:group-hover:opacity-0" />
                </Link>
              </div>
            </div>
            <div className="Team-content grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              <StaffContent schoolStaff={schoolStaff} />
            </div>
          </div>
        </div>
      </section>
      <section className="InfiniteCarousel">
        <InfiniteCarousel
          reverse={true}
          Images={imageDetails}
          width={250}
          height={120}
        />
      </section>
    </div>
  );
};

export default page;
