import * as SliderPrimitive from "@radix-ui/react-slider"
import React from "react"
import Input from "./formElements/Input"
import { Slider } from "./ui/slider"
export default function PriceRangeSlider({
  withManualInput = true,
  bars_number = 15,
  onChangeInputValues,
  ...props
}: {
  withManualInput?: boolean
  bars_number?: number
  onChangeInputValues: (val: (string | number)[]) => void
} & React.ComponentProps<typeof SliderPrimitive.Root>) {
  const range = props?.value
  const max = props?.max || 100

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minVal = range && range[0] ? (range[0] > 0 ? range[0] : 0) : ""
    const maxVal = range && range[1] ? (range[1] <= max ? range[1] : max) : ""
    const newRange = [minVal, maxVal]
    if (e.target.name == "from") {
      newRange[0] = +e.target.value
    }
    if (e.target.name == "to") {
      newRange[1] = +e.target.value
    }
    onChangeInputValues(newRange)
  }

  return (
    <>
      <div className="relative flex items-end justify-between">
        {[...Array(bars_number)].map((_, index) => {
          const barRange = (index * max) / (bars_number - 1)
          const isInRange =
            range &&
            range.length === 2 &&
            range[0] <= barRange &&
            barRange <= range[1]

          return (
            <div
              key={index}
              className={` w-3 rounded-t-full transition-all duration-300 ${
                isInRange ? "bg-success600" : "bg-gray200"
              }`}
              style={{
                left: `${(index * 100) / (bars_number - 1)}%`,
                height: `${2 + 0.5 * index}rem`,
                top: "0",
              }}
            />
          )
        })}
      </div>
      <Slider {...props} className="" />
      {withManualInput && (
        <div className="mt-4 flex space-x-4 font-medium">
          <div>
            <Input
              label="From"
              name="from"
              placeholder="50"
              value={range && range[0] ? range[0] : ""}
              onChange={handleInput}
            />
          </div>

          <div>
            <Input
              label="To"
              type="number"
              name="to"
              max={max}
              placeholder={max.toString()}
              value={range && range[1] ? range[1] : ""}
              onChange={handleInput}
            />
          </div>
        </div>
      )}
    </>
  )
}
