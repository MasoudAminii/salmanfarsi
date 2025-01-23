"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { useDebouncedCallback } from "use-debounce";
import { FaSearch } from "react-icons/fa";
import { useTranslations } from "next-intl";

const BlogsSearch = () => {
  const t = useTranslations("SchoolNewsPage");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const [inputValue, setInputValue] = useState(searchParams.get("query") || "");

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });
  }, 300);

  const clearInput = () => {
    setInputValue(""); // Clear the input field
    const params = new URLSearchParams(searchParams);
    params.delete("query"); // Remove query param from the URL
    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="Search w-full">
      <div className="Search-Div mx-auto flex h-[50px] w-full sm:min-w-[250px]">
        <div className="Input-Div relative w-full">
          <input
            type="text"
            className="h-full w-full rounded-md border bg-[var(--primary-color)] px-5 text-white focus:bg-[#3c1d4f] focus:outline-none ltr:pr-10 rtl:pl-10"
            placeholder={t("main.search_placeholder")}
            value={inputValue} // Bind the input value to state
            onChange={(e) => {
              setInputValue(e.target.value); // Update state with input value
              handleSearch(e.target.value); // Trigger debounced search
            }}
          />
          {!inputValue && (
            <div className="absolute bottom-0 top-0 flex items-center justify-center text-white ltr:right-4 rtl:left-4">
              <FaSearch size={20} />
            </div>
          )}
          {inputValue && (
            <button
              onClick={clearInput} // Clear input when clicked
              className="absolute bottom-0 top-0 flex items-center justify-center text-blue-500 ltr:right-4 rtl:left-4"
            >
              <HiX size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsSearch;
