import SearchContent from "./SearchContent";
import SearchInput from "./SearchInput";
import { Suspense } from "react";
import Spiner from "./Spiner";
const page = async ({ searchParams }) => {
  const query = searchParams?.query || "";

  return (
    <div className="Search">
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black px-4 py-14 md:px-8 md:py-20">
        <div className="Search-Wrapper mx-auto max-w-screen-2xl">
          <SearchInput  />
          <Suspense key={query} fallback={<Spiner />}>
            <SearchContent query={query} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
