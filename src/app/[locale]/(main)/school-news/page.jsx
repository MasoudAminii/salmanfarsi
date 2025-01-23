import BlogSkeleton from "@/components/skeletons/BlogSkeleton";
import { Suspense } from "react";
import BlogsSearch from "./BlogsSearch";
import InitialBlog from "./InitialBlog";
import LoadMore from "./LoadMore";
import { getTranslations } from "next-intl/server";
// TextParallax
import TextParallax from "@/components/animations/TextParallax";
//prisma database

export const metadata = {
  title: "School News",
};

const page = async ({ searchParams }) => {
  const t = await getTranslations("SchoolNewsPage");
  const query = searchParams?.query || "";

  return (
    <div>
      <section className="Banner">
        <TextParallax
          subheading={t("banner.title")}
          imgUrl={"/banner/banner (7).jpg"}
          heading={t("banner.description")}
        />
      </section>
      <section className="Blog px-4 py-14 md:px-8 md:py-20">
        <div className="Blog-container mx-auto max-w-screen-2xl">
          <div className="Blogs-Title mb-4 flex items-center justify-between gap-4 gap-y-2 max-md:flex-col md:mb-8 md:items-end">
            <div className="Blogs-Text max-md:mb-4 max-md:text-center md:flex-1">
              <h2 className="mb-4 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                {t("main.heading")}
              </h2>
              <h4 className="text-4xl font-bold sm:text-5xl">
                {t("main.title")}
              </h4>
            </div>
            <div className="Search w-full md:flex-1">
              <BlogsSearch />
            </div>
          </div>
          <div className="blog-content">
            <Suspense key={query} fallback={<BlogSkeleton />}>
              <InitialBlog query={query} />
            </Suspense>
            <LoadMore query={query} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
