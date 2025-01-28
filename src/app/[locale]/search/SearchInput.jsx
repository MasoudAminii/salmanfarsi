"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { useDebouncedCallback } from "use-debounce";
import { useTranslations } from "next-intl";
const SearchInput = () => {
  const t = useTranslations("SearchPage");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const router = useRouter();
  // Filter
  const [filterShow, setFilterShow] = useState(false);

  // State to manage the search input
  const [inputValue, setInputValue] = useState(searchParams.get("query") || "");

  // Search handler
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  // Clear input handler
  const clearInput = () => {
    setInputValue(""); // Clear the input field
    const params = new URLSearchParams(searchParams);
    params.delete("query"); // Remove query param from the URL
    replace(`${pathName}?${params.toString()}`); // Update the URL
  };

  return (
    <div className="Search-Container">
      <div className="Search-Wrapper flex flex-col items-center gap-4">
        <div className="close">
          <button
            onClick={() => router.back()}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[var(--primary-color)] transition-all hover:bg-[var(--secondary-color)] hover:text-white"
          >
            <HiX size={44} />
          </button>
        </div>
        <div className="Title">
          <h4 className="text-2xl font-semibold uppercase text-white sm:text-3xl">
            {t("heding")}
          </h4>
        </div>
        <div className="Search w-full">
          <div className="Search-Div mx-auto flex h-[50px] w-full md:w-[700px]">
            <div className="Input-Div relative w-full">
              <input
                type="text"
                className="[#adadad] h-full w-full rounded-md border bg-black px-5 pr-10 text-white focus:bg-[#303030] focus:outline-none"
                placeholder={t("placeholder")}
                value={inputValue} // Bind the input value to state
                onChange={(e) => {
                  setInputValue(e.target.value); // Update state with input value
                  handleSearch(e.target.value); // Trigger debounced search
                }}
              />
              {inputValue && (
                <button
                  onClick={clearInput} // Clear input when clicked
                  className="absolute bottom-0 right-4 top-0 flex items-center justify-center text-blue-500"
                >
                  <HiX size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
        {/* <div className="Filter w-full">
          <div className="Filter-Container flex flex-col items-center gap-6">
            <button
              onClick={() => setFilterShow((prev) => !prev)}
              className="w-fit rounded-[30px] border bg-white px-6 py-2 text-xl font-semibold capitalize transition-all hover:border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white"
            >
              Advanced search
            </button>
            <div
              className={`Filter-Content w-full max-w-[900px] overflow-hidden rounded-2xl bg-[#303030] transition-all duration-1000 ease-in-out ${filterShow ? "max-h-[1000px]" : "max-h-0"}`}
            >
              <div className="content flex h-96 w-full">
                <div className="Filter-Name h-full w-1/4 flex-auto bg-[var(--primary-color)]">
                
                </div>
                <div className="Filter-Link h-full w-3/4 bg-[var(--secondary-color)]"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SearchInput;
