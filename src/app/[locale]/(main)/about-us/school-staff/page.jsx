import CardSkeleton from "@/components/skeletons/CardSkeleton";
import InitialStaff from "./InitialStaff";
import LoadMore from "./LoadMore";
import StaffSearch from "./StaffSearch";
import { getTranslations } from "next-intl/server";
// TextParallax
import TextParallax from "@/components/animations/TextParallax";
import { Suspense } from "react";

export const metadata = {
  title: "School Staff",
};

const page = async ({ searchParams }) => {
  const t = await getTranslations("ShoolStaffPage");
  const query = searchParams?.query || "";

  return (
    <div>
      <section className="Banner">
        <TextParallax
          subheading={t("banner.title")}
          imgUrl={"/banner/banner (9).jpg"}
          heading={t("banner.description")}
        />
      </section>
      <section className="About-Our-Team">
        <div className="Our-Team px-4 py-14 md:px-8 md:py-20">
          <div className="Team-container mx-auto max-w-screen-xl">
            <div className="Team-Title mb-4 flex items-center justify-between gap-4 gap-y-2 max-md:flex-col md:mb-8 md:items-end">
              <div className="Team-Text max-md:mb-4 max-md:text-center md:flex-1">
                <h2 className="mb-4 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {t("main.heading")}
                </h2>
                <h4 className="text-3xl font-bold sm:text-5xl">
                  {t("main.title")}
                </h4>
              </div>
              <div className="Search w-full md:flex-1">
                <StaffSearch />
              </div>
            </div>
            <>
              <Suspense key={query} fallback={<CardSkeleton />}>
                <InitialStaff query={query} />
              </Suspense>
              <LoadMore query={query} />
            </>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
