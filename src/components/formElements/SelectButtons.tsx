import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"

type SelectButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  multiple?: boolean
}
const SelectButton = forwardRef<HTMLInputElement, SelectButtonProps>(
  ({ multiple = false, ...props }, ref) => {
    return (
      <div>
        <input
          type={multiple ? "checkbox" : "radio"}
          ref={ref}
          {...props}
          className="peer hidden"
        />
        {props.value ? (
          <label
            htmlFor={props?.value as string}
            className={cn(
              "border-blue-primary block cursor-pointer select-none rounded-lg bg-gray75 px-3 py-2 text-center text-sm font-normal capitalize peer-checked:border-2 peer-checked:border-[#F0D9BE] peer-checked:bg-warning50 peer-checked:text-[#6F4400]",
              props.className,
            )}
          >
            {props.value}
          </label>
        ) : null}
      </div>
    )
  },
)

SelectButton.displayName = "SelectButton"
export default SelectButton
