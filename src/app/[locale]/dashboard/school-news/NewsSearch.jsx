"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { useDebouncedCallback } from "use-debounce";
import { FaSearch } from "react-icons/fa";
import { useTranslations } from "next-intl";

const NewsSearch = () => {
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
    <div className="w-full">
      <div className="group relative">
        <input
          type="text"
          role="searchbox"
          aria-label={t("main.search_placeholder")}
          className="w-full rounded-xl border-2 border-gray-200 bg-white/90 py-3.5 pl-5 pr-12 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-200 focus:ring-opacity-30 dark:border-gray-700 dark:bg-gray-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400"
          placeholder={t("main.search_placeholder")}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            handleSearch(e.target.value);
          }}
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
          {inputValue ? (
            <button
              onClick={clearInput}
              aria-label="Clear search"
              className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
            >
              <HiX className="h-5 w-5" />
            </button>
          ) : (
            <div className="p-1.5 text-gray-400 dark:text-gray-500">
              <FaSearch className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSearch;
