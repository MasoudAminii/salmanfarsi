"use client";
import { useState } from "react";

const ReadMoreCurriculum = ({ children }) => {
  const [read, setRead] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setRead((old) => !old)}
        className={`${read ? "hidden" : "block"} relative w-fit text-xl font-semibold capitalize text-[var(--secondary-color)] transition-all duration-300 hover:underline`}
      >
        See More
        <span className="absolute -right-4 -top-4 text-2xl">+</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-1000 ${
          read ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-8">{children}</div>
      </div>
    </div>
  );
};

export default ReadMoreCurriculum;
