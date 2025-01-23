import "./globals.css";
import { Locale, routing } from "@/i18n/routing";
import { estedad, inter } from "@/utils/fonts";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export const metadata = {
  title: {
    template: "%s | Iranian Salman Farsi School",
    default: "Iranian Salman Farsi School",
  },
  description:
    "The Iranian Salman Farsi School in Dubai offers comprehensive education following the Iranian national curriculum, fostering academic excellence and cultural values for Iranian students abroad. The school emphasizes bilingual instruction, integrating both Persian and Arabic languages to prepare students for diverse opportunities.",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const direction = locale === "en";
  return (
    <html lang={locale} dir={direction ? "ltr" : "rtl"}>
      <body className={direction ? inter : estedad}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
