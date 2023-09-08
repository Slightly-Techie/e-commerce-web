import { useEffect, useRef, useState, ChangeEvent } from "react";
import { ActiveSelectedCountry, SelectCountry } from "../../types";
import Input from "./Input";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const CountrySelectInput = () => {
  const [countriesList, setCountriesList] = useState<SelectCountry>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<ActiveSelectedCountry>(
    { svg: "https://flagcdn.com/gh.svg", countryCode: "+233" }
  );
  const numberInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  const FetchCountry = async (): Promise<SelectCountry> => {
    const url = "https://restcountries.com/v3.1/all?fields=name,flags,idd";
    const request = await fetch(url);
    const response = await request.json();

    return response;
  };

  const changeSelectedCountryOnClick = (svg: string, countryCode: string) => {
    setIsOpen((isOpen) => !isOpen);
    if (!numberInputRef.current) return;
    if (numberInputRef.current.value.includes(countryCode)) return;
    numberInputRef.current.value = numberInputRef.current.value.replace(
      selectedCountry.countryCode,
      countryCode
    );
    setSelectedCountry({ svg: svg, countryCode: countryCode });
    if (numberInputRef.current.value.length < 1)
      numberInputRef.current.value = countryCode + numberInputRef.current.value;
    numberInputRef.current.focus();
  };

  const changeSelectedCountryOnChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const countryCode = event.target.value.substring(0, 6).trim();

    if (countriesList.length < 1) return;
    if (!countryCode.startsWith("+")) return;
    if (!countryCode.match(/^\+\d+$/)) return;
    if (countryCode.length < 2) return;
    if (countryCode.charAt(0) !== "+") return;

    if (countryCode.substring(0, 2) === "+1") {
      const MatchingCountry = countriesList.find((country) =>
        country.name.common.includes("United States")
      );

      if (MatchingCountry)
        return setSelectedCountry({
          svg: MatchingCountry?.flags.svg,
          countryCode: MatchingCountry?.idd.root,
        });
    }

    if (countryCode.substring(0, 3) === "+44") {
      const MatchingCountry = countriesList.find((country) =>
        country.name.common.includes("United Kingdom")
      );

      if (MatchingCountry)
        return setSelectedCountry({
          svg: MatchingCountry?.flags.svg,
          countryCode: MatchingCountry?.idd.root,
        });
    }

    let MatchingCountry = countriesList.find(
      (country) => country.idd.root + country.idd.suffixes[0] === countryCode
    );

    if (!MatchingCountry)
      MatchingCountry = countriesList.find((country) =>
        countryCode.includes(country.idd.root + country.idd.suffixes[0])
      );

    if (!MatchingCountry) return;

    if (selectedCountry.svg === MatchingCountry.flags.svg) return;
    setSelectedCountry({
      svg: MatchingCountry.flags.svg,
      countryCode: MatchingCountry.idd.root + MatchingCountry.idd.suffixes[0],
    });
  };

  useEffect(() => {
    FetchCountry().then((response) => {
      const sortedResponse = response
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .filter((value) => {
          if (!value.idd.root) return false;
          if (value.name.common.length < 20) return true;
        });
      setCountriesList(sortedResponse);
    });
  }, []);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      !menuButtonRef.current?.contains(e.target as Node) &&
      !menuRef.current?.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", (e) => handleOutsideClick(e));
      return;
    }

    document.removeEventListener("click", (e) => handleOutsideClick(e));

    return () => {
      document.removeEventListener("click", (e) => handleOutsideClick(e));
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col relative">
      <div
        className={`flex isolate items-center px-2 border rounded-md  border-gray-300 focus-within:border-gray-500`}
      >
        <div
          role="combobox"
          className={`flex h-full gap-1 items-center outline-2 cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
          ref={menuButtonRef}
        >
          <div className="w-8 h-4 md:w-10 md:h-6">
            <img
              src={selectedCountry.svg}
              alt=""
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
          ref={numberInputRef}
          onChange={(event) => changeSelectedCountryOnChange(event)}
          className="border-none pl-2 group:"
        />
      </div>
      <ul
        className={`w-fit h-64 overflow-y-scroll shadow-lg flex flex-col top-16 left-0 bg-white ${
          isOpen ? "absolute" : "hidden"
        }`}
        role="list-box"
        ref={menuRef}
      >
        {countriesList.map((country, index) => {
          const countryCode = country.name.common.includes("United States")
            ? country.idd.root
            : country.idd.root + country.idd.suffixes[0];
          const {
            flags: { svg },
            name: { common },
          } = country;
          return (
            <li
              role="option"
              key={index}
              className="flex items-center gap-4 px-4 active:bg-blue-300 hover:bg-slate-200 cursor-pointer py-2"
              onClick={() => changeSelectedCountryOnClick(svg, countryCode)}
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
        })}
      </ul>
    </div>
  );
};

export default CountrySelectInput;
