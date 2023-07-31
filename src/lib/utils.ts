import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { REGEXPATTERNS } from "./regexPatterns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Hide email
export const hideEmail = (input: string) => {
  let finalEmail = "";

  if (!input || !input.match(REGEXPATTERNS.email)) return "";

  const name = input.split("@")[0];
  const emailProvider = input.split("@")[1];

  name.split("").map((item, index) => {
    if (index > 1) finalEmail += "*";
    else finalEmail += item;
  });

  finalEmail += `@${emailProvider}`;

  return finalEmail;
};
