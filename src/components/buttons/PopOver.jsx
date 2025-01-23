"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

const PopOver = ({ children }) => {
  return (
    <Popover
      color="primary"
      showArrow
      backdrop="opaque"
      placement="top-start"
      classNames={{
        base: [
          // arrow color
          "before:bg-[#17012c]",
        ],
        content: [
          "py-3 px-4 max-w-72",
          "bg-[#17012c]",
          "dark:from-default-100 dark:to-default-50",
        ],
      }}
    >
      <PopoverTrigger>
        <Button color="primary" className="capitalize text-white">
          Learn More
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <h3 className="text-xl font-bold text-white">Bio</h3>
          <div className="text-white">{children}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
