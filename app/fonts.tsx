// app/fonts.ts
import { Quicksand, Sacramento, Oswald } from "next/font/google";

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
});