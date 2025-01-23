import { getQuery, getQueryStaff } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import NoResult from "../../../../public/logo/no-result.png";
import BlogContent from "./BlogContent";
import StaffContent from "./StaffContent";

const SearchContent = async ({ query }) => {
  const t = await getTranslations("SearchPage");
  const [blogs, schoolStaff] = await Promise.all([
    getQuery(query),
    getQueryStaff(query),
  ]);

  if (!query) {
    return (
      <div className="flex h-52 items-center justify-center">
        <h2 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
          {t("search_title")}
        </h2>
      </div>
    );
  } else if (
    (!blogs || blogs.length === 0) &&
    (!schoolStaff || schoolStaff.length === 0)
  ) {
    return (
      <div className="flex h-52 flex-col items-center justify-center">
        <Image src={NoResult} alt="NoResultFound" width={250} quality={100} />
        <h2 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
          {t("no_search")}
        </h2>
      </div>
    );
  }

  return (
    <div>
      <div className="Search-Content w-full">
        {blogs.length > 0 && (
          <div className="News-Searched-Content">
            <h2 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
              {t("school_title")}
            </h2>
            <div className="Container grid grid-cols-2 gap-6 gap-y-4 py-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <BlogContent blogs={blogs} />
            </div>
          </div>
        )}
        {schoolStaff.length > 0 && (
          <div className="Staff-Searched-Content">
            <h2 className="mb-8 inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            {t("staff_title")}
            </h2>
            <div className="Team-content grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <StaffContent schoolStaff={schoolStaff} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchContent;
