import AnimateText from "@/components/animations/AnimateText";
import HomeServicesAnimation from "@/components/animations/HomeServicesAnimation";
import MainHomeAnimation from "@/components/animations/MainHomeAnimation";
import MainHomeTextAnimation from "@/components/animations/MainHomeTextAnimation";
import CustomVideoPlayer from "@/components/buttons/CustomVideoPlayer";
import FaqAccordion from "@/components/buttons/FaqAccordion";
import SocialTestimonials from "@/components/sliders/SocialTestimonials";
import { Link } from "@/i18n/routing";
import prisma from "@/lib/db";
import Image from "next/image";
import BlogContent from "@/components/card/BlogContent";
// Icons
import { FaArrowRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
//  carousel images
import InfiniteCarousel from "@/components/sliders/InfiniteCarousel";
import StaggerTestimonials from "@/components/sliders/StaggerTestimonials";
// Logos for Slider
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Home", // a default is required when creating a template
};

export default function Home() {
  return (
    <div className="page">
      <MainHome />
      <HomeAbout />
      <HomeServices />
      <RecentBlogs />
      <Faq />
      <LastCarousel />
    </div>
  );
}

const MainHome = async () => {
  const t = await getTranslations("HomePage.Main");
  const mainTitle = t("main_title", { highlight: t("highlight") });
  const [beforeHighlight, afterHighlight] = mainTitle.split(t("highlight"));
  return (
    <>
      <div className="main-container relative bg-[#EDF6FF] px-4 pt-40 sm:pt-28 md:px-8">
        <div className="gradiant">
          <div className="absolute top-1/2 h-[40vw] max-h-[326px] w-[40vw] max-w-[326px] bg-[#6461FC80] blur-3xl sm:h-[80vw] sm:w-[80vw] lg:-left-0 lg:max-w-[400px] lg:-translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 hidden h-[20vw] max-h-[163px] w-[20vw] max-w-[163px] rounded-full bg-gradient-to-b from-[#66A6FF80] to-white blur-lg sm:h-[80vw] sm:w-[80vw]"></div>
          <div className="absolute left-1/2 h-[40vw] max-h-[400px] w-[40vw] max-w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FC461E80] to-[#6461FC80] blur-[160px] sm:h-[80vw] sm:w-[80vw] lg:left-[30%] lg:top-[230.84px]"></div>
          <div className="absolute bottom-0 right-0 h-[40vw] max-h-[240px] w-[40vw] max-w-[240px] bg-gradient-to-b from-[#6461FC80] to-[#FC461E80] blur-[140px] sm:h-[80vw] sm:w-[80vw]"></div>
        </div>
        <div className="mx-auto max-w-screen-2xl">
          <div className="bannerContainer flex min-h-[500px] items-center justify-center gap-y-6 py-10 max-lg:flex-col-reverse">
            <div className="banner-text relative flex h-full flex-1 justify-center sm:px-4 lg:justify-end lg:px-8">
              <MainHomeTextAnimation />
              <div className="z-20 flex flex-col max-sm:items-center max-sm:text-center">
                <AnimateText>
                  <h3 className="z-20 inline-block bg-gradient-to-r from-[#17012c] to-[#219BE4] bg-clip-text text-lg font-semibold text-transparent md:text-xl">
                    {t("title_description")}
                  </h3>
                </AnimateText>
                <AnimateText>
                  <h1 className="text-4xl font-extrabold capitalize tracking-tight text-[var(--primary-color)] sm:text-6xl md:text-7xl ltr:py-4 rtl:pb-8">
                    {beforeHighlight}
                    <span className="text-[var(--secondary-color)] rtl:leading-relaxed">
                      {t("highlight")}
                    </span>
                    {afterHighlight}
                  </h1>
                </AnimateText>
                <AnimateText>
                  <div className="Main-link z-20">
                    <Link
                      href={"#"}
                      className="group flex w-fit items-center gap-2 rounded-[30px] bg-gradient-to-r from-[#C21EFC] to-[#0081EC] px-6 py-4 capitalize text-white transition-all"
                    >
                      <span className="transition-all duration-300 ltr:group-hover:translate-x-3 rtl:group-hover:-translate-x-3">
                        {t("title_botton")}
                      </span>
                      <FaArrowRight className="transition-all duration-500 ltr:group-hover:translate-x-4 ltr:group-hover:opacity-0 rtl:scale-x-[-1] rtl:group-hover:-translate-x-4 rtl:group-hover:opacity-0" />
                    </Link>
                  </div>
                </AnimateText>
              </div>
            </div>
            <div className="banner-Image relative z-10 flex max-w-[500px] flex-1 justify-center">
              <MainHomeAnimation />
              <div className="absolute bottom-0 left-1/2 h-[90vw] max-h-[400px] w-[90vw] max-w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#6461FC] to-white"></div>
              <div className="absolute bottom-0 left-1/2 h-[92vw] max-h-[410px] w-[92vw] max-w-[410px] -translate-x-1/2 rounded-full border border-[#F0B07F]"></div>
              <div className="absolute bottom-0 left-1/2 h-[94vw] max-h-[420px] w-[94vw] max-w-[420px] -translate-x-1/2 rounded-full border border-[#F0B07F]"></div>
              <div className="z-10 sm:h-[500px] sm:w-[500px]">
                <Image
                  src={"/students/human.png"}
                  alt="School Human"
                  width={500}
                  height={439}
                  className="rtl:scale-x-[-1]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Blend h-20 bg-gradient-to-b from-[#EDF6FF] to-transparent"></div>
    </>
  );
};

const HomeAbout = async () => {
  const t = await getTranslations("HomePage.About");

  const Imagess = [
    {
      path: "/logo/slider-collage/sldier-collage (1).png",
      website: "https://example.com/page1",
    },
    {
      path: "/logo/slider-collage/sldier-collage (2).png",
      website: "https://example.com/page2",
    },
    {
      path: "/logo/slider-collage/sldier-collage (3).png",
      website: "https://example.com/page3",
    },
    {
      path: "/logo/slider-collage/sldier-collage (4).png",
      website: "https://example.com/page4",
    },
    {
      path: "/logo/slider-collage/sldier-collage (5).png",
      website: "https://example.com/page5",
    },
  ];

  return (
    <section className="HomeAbout">
      <div className="AboutUS relative">
        <div className="gradiant">
          <div className="-translatey-1/2 absolute left-[19px] top-1/4 h-[60vw] max-h-[280px] w-[60vw] max-w-[279.88px] bg-[#B18CFF] blur-[200px] sm:h-[100vw] sm:w-[100vw] md:top-1/3"></div>
          <div className="-translatey-1/2 absolute right-10 top-3/4 h-[60vw] max-h-[280px] w-[60vw] max-w-[279.88px] bg-[#FC461ECC] blur-[200px] sm:h-[100vw] sm:w-[100vw] md:top-1/2"></div>
        </div>
        <div className="About px-4 pb-14 pt-4 md:px-8 md:py-28">
          <div className="aboutContainer mx-auto flex max-w-screen-2xl flex-col justify-center">
            <div className="aboutWrapper flex items-center justify-center gap-6 max-md:flex-col">
              <div className="contentLeft z-20 flex w-full max-w-[570px] flex-1 flex-col gap-6">
                <h2 className="z-20 mb-4 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
                  {t("title")}
                </h2>
                <h3 className="text-4xl font-bold capitalize lg:text-5xl">
                  {t("title-description")}
                </h3>
                <div className="about-text md:max-w-[540px]">
                  <p>{t("description-1")}</p>
                </div>
                <div className="image relative min-h-[250px] max-w-[570px] overflow-hidden rounded-[80px] border-[3px] border-[#BD20FB] xs:rounded-[235px]">
                  <Image
                    alt="School Staff"
                    src="/banner/school-staff-2.JPG"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    className="max-w-[540px] object-cover xs:rounded-full ltr:scale-x-[-1]"
                  />
                </div>
              </div>
              <div className="contentRight z-20 flex w-full max-w-[570px] flex-1 flex-col gap-6">
                <div className="image relative min-h-[250px] max-w-[570px] scale-x-[-1] overflow-hidden rounded-[80px] border-[3px] border-[#BD20FB] xs:rounded-[235px]">
                  <Image
                    alt="School ekhlasi"
                    src="/banner/Akhlasi.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    className="max-w-[540px] object-cover xs:rounded-full ltr:scale-x-[-1]"
                  />
                </div>
                <div className="about-text max-w-[540px]">
                  <p>{t("description-2")}</p>
                </div>
                <div className="list">
                  <ul className="flex flex-wrap gap-4">
                    <li>
                      <span className="rounded-full bg-[#635AD9] px-2 text-white ltr:mr-1 rtl:ml-1">
                        &#10004;
                      </span>
                      {t("experience.experience-1")}
                    </li>
                    <li>
                      <span className="rounded-full bg-[#635AD9] px-2 text-white ltr:mr-1 rtl:ml-1">
                        &#10004;
                      </span>
                      {t("experience.experience-2")}
                    </li>
                    <li>
                      <span className="rounded-full bg-[#635AD9] px-2 text-white ltr:mr-1 rtl:ml-1">
                        &#10004;
                      </span>
                      {t("experience.experience-3")}
                    </li>
                  </ul>
                </div>
                <div className="Main-link">
                  <Link
                    href={"#"}
                    className="group flex w-fit items-center gap-2 rounded-[30px] bg-gradient-to-r from-[#C21EFC] to-[#0081EC] px-6 py-4 capitalize text-white transition-all"
                  >
                    <span className="transition-all duration-300 ltr:group-hover:translate-x-3 rtl:group-hover:-translate-x-3">
                      {t("button")}
                    </span>
                    <FaArrowRight className="transition-all duration-500 ltr:group-hover:translate-x-4 ltr:group-hover:opacity-0 rtl:scale-x-[-1] rtl:group-hover:-translate-x-4 rtl:group-hover:opacity-0" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutVideo bg-[var(--secondary-color)]">
        <div className="About-Container relative">
          <div className="About-Wrapper mx-auto max-w-screen-2xl">
            <div className="text relative z-10 flex gap-8 px-4 py-14 max-md:flex-col md:items-center md:px-8">
              <div className="Video-Text flex-1 text-white">
                <h2 className="mb-4 font-semibold uppercase">
                  {t("video-title")}
                </h2>
                <h4 className="text-3xl font-bold capitalize md:text-4xl lg:text-5xl rtl:leading-normal">
                  {t("video-description")}
                </h4>
              </div>
              <div className="Video-Number flex flex-1 gap-4 md:justify-end">
                <div className="flex h-full flex-wrap items-start justify-center gap-4 text-center text-white">
                  <div className="number w-32">
                    <p className="mb-2 text-3xl font-bold sm:text-4xl">
                      {t("list-number.list-1")}
                    </p>
                    <p className="text-xl opacity-90">
                      {t("video-list.video-1")}
                    </p>
                  </div>
                  <div className="number w-32">
                    <p className="mb-2 text-3xl font-bold sm:text-4xl">
                      {t("list-number.list-2")}
                    </p>
                    <p className="text-xl opacity-90">
                      {t("video-list.video-2")}
                    </p>
                  </div>
                  <div className="number w-32">
                    <p className="mb-2 text-3xl font-bold sm:text-4xl">
                      {t("list-number.list-3")}
                    </p>
                    <p className="text-xl opacity-90">
                      {t("video-list.video-3")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CustomVideoPlayer />
          </div>
          <Image
            src={`/skeleton/video-bg.png`}
            alt="video bg skeleton"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="z-0 object-cover opacity-20"
          />
        </div>
      </div>
      <div className="StaggerTestimonialsCaroousel relative">
        <Image
          src={`/skeleton/doted-background.png`}
          alt="video bg skeleton"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="Infinite-Carousel relative pt-8">
          <div className="About-InfiniteCarousel mx-auto max-w-screen-2xl">
            <div className="flex justify-center">
              <h2 className="z-20 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-xl font-semibold uppercase text-transparent">
                {t("infinite-slider-collage")}
              </h2>
            </div>
            <div className="Carousel my-4">
              <InfiniteCarousel Images={Imagess} width={250} height={120} />
            </div>
          </div>
        </div>
        <div className="StaggerTestimonials">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  );
};

const HomeServices = async () => {
  const t = await getTranslations("HomePage.Services");
  const servicesList = t.raw("services-list");
  if (!Array.isArray(servicesList)) {
    console.error("servicesList is not an array:", servicesList);
    return null; // Prevent rendering if the structure is wrong
  }
  const reviews = await prisma.reviews.findMany({
    orderBy: {
      id: "desc", // or any other field you want to sort by
    },
    take: 6,
  });
  const images = [
    "/students/elementary.jpeg",
    "/students/middleschool.png",
    "/students/graduation.jpg",
    "/students/ehsan.jpg",
  ];

  const images_icon = [
    "/students/elementary-icon.png",
    "/students/middleschool-icon.png",
    "/students/highschool-icon.png",
    "/students/ehsan-icon.png",
  ];

  return (
    <section className="HomeServices">
      <div className="HomeServicesWrapper relative overflow-hidden bg-[var(--primary-color)]">
        <div className="Animation">
          <HomeServicesAnimation />
        </div>
        <div className="gradiant">
          <div className="absolute left-1/3 h-[80vw] max-h-[192px] w-[80vw] max-w-[192px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#66A6FF] to-white blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 h-[80vw] max-h-[192px] w-[80vw] max-w-[192px] -translate-x-1/2 rounded-full bg-[#6461FC] blur-[120px]"></div>
          <div className="absolute right-10 top-1/2 h-[80vw] max-h-[192px] w-[80vw] max-w-[192px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6461FC] blur-[120px]"></div>
        </div>
        <div className="ServecesContainer px-4 py-14 md:px-8 md:py-28">
          <div className="Serveces-Warpper mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-6 md:gap-10">
            <div className="ServicesTitle z-20 text-center">
              <h3 className="mb-4 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                {t("title")}
              </h3>
              <h2 className="mx-auto text-3xl font-bold capitalize text-white max-md:text-center sm:w-3/4 md:text-4xl lg:text-5xl rtl:leading-normal">
                {t("title-description")}
              </h2>
            </div>
            <span className="h-[1px] w-2/3 rounded-full bg-[#EAF3F8]/20" />
            <div className="ContentContainer z-20 flex flex-wrap items-center justify-center gap-4 gap-y-10 md:gap-10">
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className="group relative flex h-[440px] flex-col items-center justify-center rounded-[135px] border-[5px] border-[#60B7FF] bg-white p-6 sm:min-w-[280px] sm:max-w-[280px]"
                >
                  <div className="ContentImage flex flex-1 items-center transition-all duration-300 group-hover:opacity-0">
                    <div className="flex size-28 items-center justify-center rounded-full bg-[#EDF6FF]">
                      <Image
                        src={images_icon[index]}
                        alt={`icon ${index}`}
                        width={80}
                        height={80}
                        quality={100}
                        className="h-auto w-auto max-w-[90px] object-contain"
                      />
                    </div>
                  </div>
                  <div className="ContentText z-20 flex-1 p-4 text-center">
                    <h4 className="mb-4 text-xl font-bold">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="ContentLink rounded-fullshadow-2xl absolute -bottom-8 z-30 flex size-14">
                    <Link
                      href={"/about-us/curriculum"}
                      className="flex h-full w-full items-center justify-center rounded-full bg-white text-[#219BE4] shadow-xl transition-all duration-300 hover:bg-[#219BE4] hover:text-white"
                    >
                      <GoArrowUpRight className="size-8" />
                    </Link>
                  </div>
                  <div className="absolute bottom-0 z-20 h-10 w-28 rounded-full bg-[#219BE4] blur-xl"></div>
                  <Image
                    src={images[index]}
                    alt={`curriculum ${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="scale-50 rounded-[130px] object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-70"
                    quality={100}
                  />
                  <div className="overlay absolute bottom-0 z-10 h-52 w-full rounded-b-[130px] bg-gradient-to-t from-white via-white to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="SocialTestimonials">
        <SocialTestimonials reviews={reviews} />
      </div>
      <div className="Blend h-20 bg-gradient-to-b from-[#F3F8FF] to-transparent"></div>
    </section>
  );
};

const RecentBlogs = async () => {
  const t = await getTranslations("HomePage.SchoolNews");
  const blogs = await prisma.post.findMany({
    select: {
      id: true,
      slug: true,
      title_en: true,
      title: true,
      categories: {
        select: {
          category_name: true,
          category_name_en: true,
        },
      },
      publish_date: true,
      main_image: true,
    },
    orderBy: {
      publish_date: "desc", // Sort by publish_date in descending order
    },
    take: 4, // Limit to 4 results
  });

  return (
    <section className="RecentBlogs relative">
      <div className="gradiant">
        <div className="absolute bottom-10 left-10 h-[80vw] max-h-[288px] w-[80vw] max-w-[288px] rounded-full bg-[#6461FC] blur-[100px]"></div>
        <div className="absolute right-0 top-0 h-[80vw] max-h-[208px] w-[80vw] max-w-[208px] rounded-full bg-gradient-to-t from-[#66A6FF] to-white blur-3xl"></div>
      </div>
      <div className="BlogsContainer px-4 py-14 md:px-8 md:py-20">
        <div className="blog-wrapper mx-auto max-w-screen-2xl">
          <div className="BlogsTitle z-20 mb-4 flex w-full gap-4 max-sm:flex-col sm:mb-8 sm:items-end sm:justify-between">
            <div className="BlogText z-20 flex-auto sm:w-2/3">
              <h3 className="mb-4 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                {t("title")}
              </h3>
              <h2 className="text-3xl font-bold capitalize text-black md:text-4xl lg:text-5xl rtl:leading-normal">
                {t("title-description")}
              </h2>
            </div>
            <div className="blog-link z-20 flex flex-auto sm:w-1/3 sm:justify-end">
              <Link
                href={"/school-news"}
                className="group flex w-fit items-center gap-2 rounded-[30px] bg-gradient-to-r from-[#C21EFC] to-[#0081EC] px-6 py-4 capitalize text-white transition-all"
              >
                <span className="transition-all duration-300 ltr:group-hover:translate-x-3 rtl:group-hover:-translate-x-3">
                  {t("button")}
                </span>
                <FaArrowRight className="transition-all duration-500 ltr:group-hover:translate-x-4 ltr:group-hover:opacity-0 rtl:scale-x-[-1] rtl:group-hover:-translate-x-4 rtl:group-hover:opacity-0" />
              </Link>
            </div>
          </div>
          <BlogContent blogs={blogs} />
        </div>
      </div>
    </section>
  );
};

const Faq = async () => {
  const faq = await getTranslations("HomePage");
  const FaqQuestions = faq.raw("faq.questions");

  return (
    <section className="FAQ relative">
      <Image
        src={`/skeleton/faq.png`}
        alt="faq background"
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
      <div className="FaqContainer px-4 py-14 md:px-16 md:py-28">
        <div className="FAQ-Wrapper z-20 mx-auto max-w-screen-2xl max-md:flex-col-reverse">
          <div className="FaqQuestions z-20 flex gap-8 max-md:flex-col md:gap-28">
            <div className="FaqTitle z-20 mb-4 flex-1">
              <h3 className="w-fit rounded-[36px] bg-[#219BE4]/10 px-3 py-1 text-[#219BE4]">
                {faq("faq.small_title")}
              </h3>
              <h2 className="py-4 text-4xl font-bold capitalize text-black lg:text-5xl">
                {faq("faq.title")}
              </h2>
              <p className="text-gray-500">{faq("faq.description")}</p>
            </div>
            <div className="FaqContent relative z-20 flex-1">
              <FaqAccordion items={FaqQuestions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LastCarousel = () => {
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
    <div className="InfiniteCarousel mt-12">
      <InfiniteCarousel
        reverse={true}
        Images={imageDetails}
        width={250}
        height={120}
      />
    </div>
  );
};
