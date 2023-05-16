import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatNumberSuffix = (num: number) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const remainder = num % 100;
  const suffix =
    suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
  return `${num}${suffix}`;
};

export const formatNumberWord = (num: number) => {
  const words = [
    "",
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
    "Ninth",
    "Tenth",
  ];
  return words[num] || formatNumberSuffix(num);
};
