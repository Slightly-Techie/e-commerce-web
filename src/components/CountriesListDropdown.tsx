import { cn } from "../lib/utils";
import { ActiveSelectedCountry, Country } from "../types";

import { forwardRef } from "react";

type Props = {
  handleChange(country: ActiveSelectedCountry): void;
  countriesList: Country[];
  isOpen: boolean;
};

const CountriesListDropdown = forwardRef<HTMLUListElement, Props>(
  ({ countriesList, handleChange, isOpen }, ref) => {
    return (
      <ul
        className={cn(
          `w-fit h-64 overflow-y-scroll shadow-lg flex flex-col top-16 left-0 bg-white`,
          isOpen ? "absolute" : "hidden"
        )}
        role="list-box"
        ref={ref}
      >
        {countriesList.map(
          ({ flags: { svg }, name: { common }, idd }, index) => {
            const countryCode = common.includes("United States")
              ? idd.root
              : idd.root + idd.suffixes[0];

            return (
              <li
                role="option"
                key={index}
                onClick={() => handleChange({ svg, countryCode })}
                className="flex items-center gap-4 px-4 active:bg-blue-300 hover:bg-slate-200 cursor-pointer py-2"
              >
                <div className="w-8 h-4 md:w-10 md:h-6">
                  <img
                    src={svg}
                    className="w-full h-full object-cover"
                    alt={common}
                  />
                </div>
                <option value={countryCode} key={index}>
                  {common} {countryCode !== "undefined" && `(${countryCode})`}
                </option>
              </li>
            );
          }
        )}
      </ul>
    );
  }
);

export default CountriesListDropdown;
