// TextParallax
import TextParallax from "@/components/animations/TextParallax";
import FaqAccordion from "@/components/buttons/FaqAccordion";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "FAQ",
};

const page = async () => {
  const faq = await getTranslations("FaqPage");
  const FaqQuestions = faq.raw("faq.questions");
  return (
    <div>
      <section className="Banner">
        <TextParallax
          subheading={faq("banner.title")}
          imgUrl={"/banner/banner (14).jpg"}
          heading={faq("banner.description")}
        />
      </section>
      <section className="FAQ relative">
        <Image
          src={`/skeleton/faq.png`}
          alt="faq background"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="FAQ-Container px-4 py-14 md:px-8 md:py-20">
          <div className="FAQ-Wrapper mx-auto max-w-screen-lg">
            <div className="FaqQuestions z-20 flex flex-col items-center">
              <div className="FaqTitle relative z-20 mb-6 flex flex-col items-center gap-4 text-center sm:w-3/4">
                <h3 className="w-fit rounded-[36px] bg-[#219BE4]/10 px-3 py-1 text-[#219BE4]">
                  {faq("faq.small_title")}
                </h3>
                <h2 className="text-3xl font-bold capitalize text-black max-md:text-center sm:text-4xl lg:text-5xl">
                  {faq("faq.title")}
                </h2>
                <p className="text-gray-500">{faq("faq.description")}</p>
              </div>
              <div className="FaqContent relative z-20 flex overflow-hidden sm:w-5/6">
                <FaqAccordion items={FaqQuestions} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
