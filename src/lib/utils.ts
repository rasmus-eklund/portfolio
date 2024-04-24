import { type ClassValue, clsx } from "clsx";
import { Dispatch, RefObject, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const scrollTo = (
  top: number,
  ref: RefObject<HTMLElement>,
  setScroll: Dispatch<SetStateAction<number>>,
) => {
  if (ref.current) {
    setScroll(0);
    ref.current.scrollTo({ top, behavior: "smooth" });
  }
};
