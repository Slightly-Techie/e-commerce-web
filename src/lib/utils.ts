import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Country } from "../types";
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

export const fetchCountries = async (): Promise<Country[]> => {
  const url = "https://restcountries.com/v3.1/all?fields=name,flags,idd";
  const request = await fetch(url);
  const response = await request.json();

  return response;
};

export const sortCountries: (countries: Country[]) => Country[] = (
  countries,
) => {
  const sorted = countries
    .filter((value) => value.idd.root && value.name.common.length < 20)
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return sorted;
};

export const convertTime = (time: number): { mins: string; secs: string } => {
  const calcMins = Math.floor(time / 60);
  const calcSecs = time % 60;

  const padd = (_: number): string => {
    return String(_).padStart(2, "0");
  };

  return { mins: padd(calcMins), secs: padd(calcSecs) };
};

export function getApiUrl() {
  return import.meta.env.VITE_BASE_URL;
}
