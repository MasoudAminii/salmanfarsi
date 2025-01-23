"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxWithText({ title, description }) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" required />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
