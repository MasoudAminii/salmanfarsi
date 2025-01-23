"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/routing";
import { IR, US } from "country-flag-icons/react/3x2";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

const flags = {
  en: <US title="English (US)" className="mr-2 inline-block h-6 w-6" />,
  fa: <IR title="فارسی (Iran)" className="mr-2 inline-block h-6 w-6" />,
};

export default function Language({ isHomePage, hasScrolled }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value) {
    router.replace({ pathname, params }, { locale: value });
  }

  return (
    <div className="relative">
      <Select value={locale} onValueChange={onSelectChange}>
        <SelectTrigger
          className={`w-fit border-none text-white ${
            !isHomePage && !hasScrolled ? "bg-[#635ad9]" : "bg-[#17012c]"
          }`}
        >
          <SelectValue>
            <div className="flex items-center">
              {flags[locale]}
              {locale === "en" ? "English" : "فارسی"}
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent
          forceMount
          modal={false}
          className={`w-fit border-none text-white ${
            !isHomePage && !hasScrolled ? "bg-[#635ad9]" : "bg-[#17012c]"
          }`}
        >
          {Object.entries(flags).map(([lang, flag]) => (
            <SelectItem key={lang} value={lang} className="flex items-center">
              {flag}
              {lang === "en" ? "English" : "فارسی"}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
