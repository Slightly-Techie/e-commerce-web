import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { fetchCountries, sortCountries } from "../../lib/utils"
import { ActiveSelectedCountry, Country } from "../../types"
import CountriesListDropdown from "../CountriesListDropdown"
import Input from "./Input"

type Props = {
  handleChange(phoneNumber: string): void
}

const CountrySelectInput = ({ handleChange }: Props) => {
  const [countriesList, setCountriesList] = useState<Country[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<ActiveSelectedCountry>(
    { svg: "https://flagcdn.com/gh.svg", countryCode: "+233" },
  )
  const numberInputRef = useRef<HTMLInputElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const menuButtonRef = useRef<HTMLDivElement>(null)

  const changeSelectedCountryOnClick = ({
    svg,
    countryCode,
  }: ActiveSelectedCountry) => {
    setIsOpen((isOpen) => !isOpen)
    if (!numberInputRef.current) return
    if (numberInputRef.current.value.includes(countryCode)) return
    numberInputRef.current.value = numberInputRef.current.value.replace(
      selectedCountry.countryCode,
      countryCode,
    )
    setSelectedCountry({ svg: svg, countryCode: countryCode })
    if (numberInputRef.current.value.length < 1)
      numberInputRef.current.value = countryCode + numberInputRef.current.value
    numberInputRef.current.focus()
  }

  const changeSelectedCountryOnChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const countryCode = event.target.value.substring(0, 6).trim()

    if (countriesList.length < 1) return
    if (!countryCode.startsWith("+")) return
    if (!countryCode.match(/^\+\d+$/)) return
    if (countryCode.length < 2) return
    if (countryCode.charAt(0) !== "+") return

    const updateCountry = (name: string) => {
      const matchingCountry = countriesList.find((country) =>
        country.name.common.includes(name),
      )

      matchingCountry &&
        setSelectedCountry({
          svg: matchingCountry?.flags.svg,
          countryCode: matchingCountry?.idd.root,
        })
    }

    if (countryCode.substring(0, 2) === "+1") {
      updateCountry("United States")
    }

    if (countryCode.substring(0, 3) === "+44") {
      updateCountry("United Kingdom")
    }

    const matchingCountry = countriesList.find(
      (country) => country.idd.root + country.idd.suffixes[0] === countryCode,
    )

    if (!matchingCountry) return

    if (selectedCountry.svg === matchingCountry.flags.svg) return

    setSelectedCountry({
      svg: matchingCountry.flags.svg,
      countryCode: matchingCountry.idd.root + matchingCountry.idd.suffixes[0],
    })
  }

  useEffect(() => {
    fetchCountries().then((response) => {
      setCountriesList(sortCountries(response))
    })
  }, [])

  const closeDropdown = () => {
    setIsOpen(false)
  }

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (
      !menuButtonRef.current?.contains(e.target as Node) &&
      !menuRef.current?.contains(e.target as Node)
    ) {
      closeDropdown()
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", (e) => handleOutsideClick(e))
      return
    }

    return () => {
      document.removeEventListener("click", (e) => handleOutsideClick(e))
    }
  }, [isOpen, handleOutsideClick])

  return (
    <div className="relative flex flex-col">
      <div
        className={`isolate flex items-center rounded-md border border-gray-300  px-2 focus-within:border-gray-500`}
      >
        <div
          role="combobox"
          className={`flex h-full cursor-pointer items-center gap-1 outline-2`}
          onClick={() => setIsOpen(!isOpen)}
          ref={menuButtonRef}
        >
          <div className="h-4 w-8 md:h-6 md:w-10">
            <img
              src={selectedCountry.svg}
              alt=""
              className="h-full w-full object-cover"
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
          onChange={(event) => {
            changeSelectedCountryOnChange(event)
            handleChange(event.target.value)
          }}
          className="group: border-none pl-2"
        />
      </div>
      {countriesList.length > 0 && (
        <CountriesListDropdown
          ref={menuRef}
          countriesList={countriesList}
          handleChange={changeSelectedCountryOnClick}
          isOpen={isOpen}
        />
      )}
    </div>
  )
}

export default CountrySelectInput
