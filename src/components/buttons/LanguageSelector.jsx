"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { Select, SelectItem } from "@nextui-org/react";
import { US, IR } from "country-flag-icons/react/3x2";

const flags = {
  en: <US title="English (US)" className="mr-2 inline-block h-6 w-6" />,
  fa: <IR title="فارسی (Iran)" className="mr-2 inline-block h-6 w-6" />,
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  return (
    <div className="w-fit">
      <Select
        defaultValue={defaultValue}
        disabled={isPending}
        placeholder={flags[locale]}
        onChange={onSelectChange}
        aria-label={label}
        className="w-32"
      >
        {children}
      </Select>
    </div>

    // <select
    //   className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
    //   defaultValue={defaultValue}
    //   disabled={isPending}
    //   onChange={onSelectChange}
    // >
    //   {children}
    // </select>
  );
}
