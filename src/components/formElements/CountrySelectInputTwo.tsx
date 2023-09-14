import { useState, useEffect } from "react";
import { ActiveSelectedCountry, Country } from "../../types";
import { cn, fetchCountries, sortCountries } from "../../lib/utils";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Input from "./Input";
import CountriesListDropdown from "../CountriesListDropdown";

const CountrySelectInputTwo = () => {
  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ActiveSelectedCountry>(
    { svg: "https://flagcdn.com/gh.svg", countryCode: "+233" }
  );

  useEffect(() => {
    fetchCountries().then((response) => {
      setCountriesList(sortCountries(response));
    });
  }, []);

  const handleSelectCountry = ({ svg, countryCode }: ActiveSelectedCountry) => {
    setIsOpen(() => isOpen && !isOpen);
    setSelectedCountry({ svg, countryCode });
  };

  return (
    <div className="relative">
      <div className="flex isolate items-center px-2 border rounded-md  border-gray-300 focus-within:border-gray-500">
        <div
          role="combobox"
          className="flex h-full gap-1 items-center outline-2 cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="w-8 h-4 md:w-10 md:h-6">
            <img
              src={selectedCountry.svg}
              alt=".."
              className="w-full h-full object-cover"
            />
          </div>

          <span className="-z-50">
            {isOpen ? <BsChevronUp /> : <BsChevronDown />}
          </span>
        </div>

        <Input
          type="tel"
          placeholder="Phone Number"
          value={selectedCountry.countryCode}
          className="border-none pl-2"
        />
      </div>

      <CountriesListDropdown
        countriesList={countriesList}
        handleChange={handleSelectCountry}
        isOpen={isOpen}
      />
    </div>
  );
};

export default CountrySelectInputTwo;
