"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.question); // Default to the first item

  return (
    <Accordion
      type="single"
      collapsible
      className="flex w-full flex-col gap-2"
      value={openItem}
      onValueChange={(value) => setOpenItem(value)} // Manage open state here
    >
      {items?.map((item, index) => (
        <AccordionItem
          key={index}
          className="rounded-lg border-none bg-white p-4 px-8 text-black"
          value={item.question} // Each item gets its own value
        >
          <AccordionTrigger className="text-start font-extrabold text-[#2A3342]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[#556987] sm:text-justify">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
