import { forwardRef, useState } from "react"
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"
import { cn } from "../../lib/utils"
import Label from "./Label"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [customType, setCustomType] = useState("password")

    return (
      <>
        {label && <Label htmlFor={props.id}>{label}</Label>}

        <div
          className={cn(
            "flex items-center rounded-[4px] border",
            isFocused ? "border-gray-500" : "border-gray300",
            className,
          )}
        >
          {icon && (
            <label
              htmlFor={props.id}
              className={cn(
                "mx-2 grid w-8 flex-shrink-0 cursor-pointer place-content-center self-stretch",
                isFocused ? "text-gray-500" : "text-gray300",
              )}
            >
              {icon}
            </label>
          )}

          <input
            {...props}
            ref={ref}
            type={props.type === "password" ? customType : props.type}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full flex-1 border border-none bg-transparent py-3 pr-4 outline-none placeholder:text-gray-300",
              props.type !== "password" ? "pr-4" : "pr-1",
              !icon && "pl-4",
            )}
          />

          {props.type === "password" && (
            <button
              type="button"
              className="pr-2 text-primary"
              onClick={() => {
                if (customType === "password") {
                  setCustomType("text")
                }
                if (customType === "text") {
                  setCustomType("password")
                }
              }}
            >
              {customType === "password" ? (
                <HiOutlineEyeOff />
              ) : (
                <HiOutlineEye />
              )}
            </button>
          )}
        </div>
      </>
    )
  },
)

Input.displayName = "Input"
export default Input
