import { cn } from "../lib/utils"
import { ActiveSelectedCountry, Country } from "../types"

import { forwardRef } from "react"

type Props = {
  handleChange(country: ActiveSelectedCountry): void
  countriesList: Country[]
  isOpen: boolean
}

const CountriesListDropdown = forwardRef<HTMLUListElement, Props>(
  ({ countriesList, handleChange, isOpen }, ref) => {
    return (
      <ul
        className={cn(
          `left-0 top-16 flex h-64 w-fit flex-col overflow-y-scroll bg-white shadow-lg`,
          isOpen ? "absolute" : "hidden",
        )}
        role="list-box"
        ref={ref}
      >
        {countriesList.map(
          ({ flags: { svg }, name: { common }, idd }, index) => {
            const countryCode = common.includes("United States")
              ? idd.root
              : idd.root + idd.suffixes[0]

            return (
              <li
                role="option"
                key={index}
                onClick={() => handleChange({ svg, countryCode })}
                className="flex cursor-pointer items-center gap-4 px-4 py-2 hover:bg-slate-200 active:bg-blue-300"
              >
                <div className="h-4 w-8 md:h-6 md:w-10">
                  <img
                    src={svg}
                    className="h-full w-full object-cover"
                    alt={common}
                  />
                </div>
                <option value={countryCode} key={index}>
                  {common} {countryCode !== "undefined" && `(${countryCode})`}
                </option>
              </li>
            )
          },
        )}
      </ul>
    )
  },
)

export default CountriesListDropdown
