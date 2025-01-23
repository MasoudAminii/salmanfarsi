import { Inter } from "next/font/google";
import localFont from "next/font/local";

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const estedadFont = localFont({ src: "./fonts/Estedad.woff2" });


export const estedad = estedadFont.className;
export const inter = interFont.className;
