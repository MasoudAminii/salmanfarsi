import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { getTranslations } from "next-intl/server";

// TextParallax
import TextParallax from "@/components/animations/TextParallax";

export const metadata = {
  title: "Ehsan",
};

const page = async () => {
  const ehsan = await getTranslations("Curriculum_Detail");
  return (
    <div>
      <section className="about mt-24">
        <div className="about-container px-4 py-14 md:px-8 md:py-20">
          <div className="about-wrapper mx-auto max-w-screen-lg">
            <div className="content pb-8">
              <h4 className="mb-4 text-3xl font-bold leading-snug md:text-4xl">
                {ehsan("ehsan.main.introduction_title")}
              </h4>
              <div className="main-Image mb-4">
                <div className="image relative h-[450px] overflow-hidden rounded-2xl bg-gray-400">
                  <Image
                    src={`/students/ehsan-1.jpeg`}
                    alt={`ehsan`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mb-4 text-justify font-light md:text-xl">
                {ehsan("ehsan.main.introduction_description_1")}
              </p>
              <p className="text-justify font-light md:text-xl">
                {ehsan("ehsan.main.introduction_description_2")}
              </p>
            </div>
            <div className="content-2 pb-8">
              <h4 className="mb-4 text-2xl font-bold leading-snug md:text-3xl">
                {ehsan("ehsan.main.objectives_title")}
              </h4>
              <div className="list grid grid-cols-2 gap-6">
                {ehsan.raw("ehsan.main.objectives_list").map((item, index) => (
                  <p
                    key={index}
                    className="flex items-start gap-2 text-justify font-medium md:text-lg"
                  >
                    <span className="rounded-full bg-[var(--secondary-color)] p-1 text-white">
                      <TiTick size={20} />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="content pb-8">
              <h4 className="mb-4 text-2xl font-bold leading-snug md:text-3xl">
                {ehsan("ehsan.main.speech_title")}
              </h4>
              <p className="mb-4 text-justify font-light md:text-xl">
                {ehsan("ehsan.main.speech_description")}
              </p>
            </div>
            <div className="second-image flex gap-4 max-sm:flex-col">
              <div className="page-image relative h-full max-h-[370px] min-h-[250px] w-full overflow-hidden rounded-xl sm:min-h-[370px]">
                <Image
                  src={`/students/ehsan.jpg`}
                  alt="image"
                  fill
                  sizes="(max-width: 640px) 100vw, 640px"
                  className="rounded-xl object-cover"
                  quality={100}
                />
              </div>
              <div className="page-image relative h-full max-h-[370px] min-h-[250px] w-full overflow-hidden rounded-xl sm:min-h-[370px]">
                <Image
                  src={`/students/ehsan-2.jpeg`}
                  alt="image"
                  fill
                  sizes="(max-width: 640px) 100vw, 640px"
                  className="rounded-xl object-cover"
                  quality={100}
                />
              </div>
            </div>
            <div className="content-2 py-8">
              <h4 className="mb-4 text-2xl font-bold leading-snug md:text-3xl">
                {ehsan("ehsan.main.Area_title")}
              </h4>
              <div className="list grid grid-cols-2 gap-6">
                {ehsan.raw("ehsan.main.area_list").map((item, index) => (
                  <p
                    key={index}
                    className="flex items-start gap-2 text-justify font-medium md:text-lg"
                  >
                    <span className="rounded-full bg-[var(--secondary-color)] p-1 text-white">
                      <TiTick size={20} />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="content-2 pb-8">
              <h4 className="mb-4 text-2xl font-bold leading-snug md:text-3xl">
                {ehsan("ehsan.main.services_title")}
              </h4>
              <div className="list mb-4 grid grid-cols-2 gap-6">
                {ehsan.raw("ehsan.main.services_list").map((item, index) => (
                  <p
                    key={index}
                    className="flex items-start gap-2 text-justify font-medium md:text-lg"
                  >
                    <span className="rounded-full bg-[var(--secondary-color)] p-1 text-white">
                      <TiTick size={20} />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
              <p className="text-justify font-light md:text-xl">
                {ehsan("ehsan.main.services_description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
