import TextParallax from "@/components/animations/TextParallax";
import Image from "next/image";
import Link from "next/link";
import { FaPaintBrush, FaSignature } from "react-icons/fa";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Curriculum",
};
const page = async () => {
  const Curriculum = await getTranslations("CurriculumPage");

  return (
    <div>
      <section className="Banner">
        <TextParallax
          subheading={Curriculum("banner.title")}
          imgUrl={"/banner/banner (4).jpg"}
          heading={Curriculum("banner.description")}
        />
      </section>
      <section className="Curriculum">
        <div
          id="ehsan"
          className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20"
        >
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-8 max-md:flex-col lg:gap-20">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[500px]">
                <Image
                  src={`/students/ehsan.jpg`}
                  alt={`ehsan image `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {Curriculum("curriculum.ehsan.heading")}
                </h3>
                <h3 className="heading-1 capitalize rtl:leading-tight">
                  {Curriculum("curriculum.ehsan.title")}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {Curriculum("curriculum.ehsan.description")}
                </p>
                <div className="icon mt-3 flex gap-5">
                  <span className="flex max-h-14 min-h-14 min-w-14 max-w-14 items-center justify-center rounded-[30px] bg-[var(--secondary-color)] text-white">
                    <FaPaintBrush className="text-[20px] md:text-[30px]" />
                  </span>
                  <div>
                    <p className="text-2xl font-bold text-[#2D2D2D]">
                      {Curriculum("curriculum.ehsan.expert_title")}
                    </p>
                    <p className="text-[#6E6E6E]">
                      {Curriculum("curriculum.ehsan.expert_description")}
                    </p>
                  </div>
                </div>
                <div className="icon flex gap-5">
                  <span className="flex max-h-14 min-h-14 min-w-14 max-w-14 items-center justify-center rounded-[30px] bg-[var(--secondary-color)] text-white">
                    <FaSignature className="text-[20px] md:text-[30px]" />
                  </span>
                  <div>
                    <p className="text-2xl font-bold text-[#2D2D2D]">
                      {Curriculum("curriculum.ehsan.comprehensive_title")}
                    </p>
                    <p className="text-[#6E6E6E]">
                      {Curriculum("curriculum.ehsan.comprehensive_description")}
                    </p>
                  </div>
                </div>
                <Link
                  className="relative w-fit text-right text-xl font-semibold capitalize text-[var(--secondary-color)] hover:underline"
                  href={"/contact-us"}
                >
                  {Curriculum("curriculum.ehsan.ehsan_link")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          id="elementry-school"
          className="Principal-Welcome bg-[#F9F9F9] px-4 py-14 md:px-8 md:py-20 lg:px-20"
        >
          <div className="PrincipalContainer mx-auto max-w-screen-2xl">
            <div className="Peinscipal-Wrapper flex gap-8 max-md:flex-col lg:gap-20">
              <div className="Content-1 flex flex-1 flex-col gap-4 md:gap-14 md:pt-14">
                <div className="Text flex flex-col gap-5">
                  <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                    {Curriculum("curriculum.guidance.heading")}
                  </h3>
                  <h3 className="heading-1 capitalize">
                    {Curriculum("curriculum.guidance.title")}
                  </h3>
                </div>
                <div className="Image relative min-h-[300px] overflow-hidden rounded-[30px] md:min-h-[400px]">
                  <Image
                    src={`/students/elementary.jpeg`}
                    alt={`elementy school student`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </div>
              <div className="Content-2 flex flex-1 flex-col-reverse gap-4 md:gap-14 md:pb-14">
                <div className="Text flex flex-col gap-5">
                  <h3 className="heading-1 capitalize">
                    {Curriculum("curriculum.guidance.title_2")}
                  </h3>
                  <p className="paraghraph-2 text-[#6E6E6E]">
                    {Curriculum("curriculum.guidance.description")}
                  </p>
                </div>
                <div className="Image relative min-h-[300px] overflow-hidden rounded-[30px] max-md:hidden md:min-h-[400px]">
                  <Image
                    src={`/students/elementry-graduation.jpg`}
                    alt={`elementy school student`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="middle-school"
          className="OurView-Welcome bg-[#F9F9F9] px-4 py-14 md:px-8 md:py-20 lg:px-20"
        >
          <div className="OurView-Container mx-auto max-w-screen-2xl">
            <div className="OurView-Wrapper flex gap-8 max-md:flex-col-reverse lg:gap-20">
              <div className="Text flex flex-1 flex-col gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {Curriculum("curriculum.middle_school.heading")}
                </h3>
                <h3 className="heading-1 capitalize">
                  {Curriculum("curriculum.middle_school.title")}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {Curriculum("curriculum.middle_school.description")}
                </p>
                <div className="border-[#7E8D85] ltr:border-l-[7px] ltr:pl-[35px] rtl:border-r-[7px] rtl:pr-[35px]">
                  <p className="heading-3 mb-2 font-semibold">
                    {Curriculum("curriculum.middle_school.key_title")}
                  </p>
                  <p className="paraghraph-2 mb-2 text-[#6E6E6E]">
                    {Curriculum("curriculum.middle_school.key_description")}
                  </p>
                </div>
              </div>
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[500px]">
                <Image
                  src={`/students/middle-school.jpeg`}
                  alt={`middle school image`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="high-school"
          className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20"
        >
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-8 max-md:flex-col lg:gap-20">
              <div className="Image relative min-h-[300px] flex-auto overflow-hidden rounded-[30px] md:w-1/3">
                <Image
                  src={`/students/student-3.jpg`}
                  alt={`curriculum `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-auto flex-col gap-5 md:w-2/3 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {Curriculum("curriculum.highschool.heading")}
                </h3>
                <h3 className="heading-1 capitalize">
                  {Curriculum("curriculum.highschool.title")}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {Curriculum("curriculum.highschool.description")}
                </p>
                <div className="cards grid gap-4 xs:grid-cols-2">
                  {Curriculum.raw("curriculum.highschool.list").map(
                    (item, index) => (
                      <div
                        key={index}
                        className="item flex flex-col items-center justify-center rounded-[30px] border border-[#EFF0F6] p-8 shadow-md"
                      >
                        <h5 className="title mb-2 font-semibold md:text-xl">
                          {item.title}
                        </h5>
                        <p className="text-[#6E6E6E]">{item.description}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="MeetUs px-4 py-14 md:px-8">
          <div className="MeetUs-Container mx-auto max-w-screen-2xl">
            <div className="MeetUs-Content flex flex-col items-center justify-center gap-6 text-center">
              <h5 className="text-4xl font-semibold capitalize md:text-5xl">
                {Curriculum("curriculum.meetus.title")}
              </h5>
              <p className="text-[#303030] sm:text-xl">
                {Curriculum("curriculum.meetus.description")}
              </p>
              <Link
                className="relative w-fit text-xl font-semibold capitalize text-[var(--secondary-color)] hover:underline"
                href={"/contact-us"}
              >
                {Curriculum("curriculum.meetus.link")}
                <span className="absolute -right-4 -top-4 text-2xl">+</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
