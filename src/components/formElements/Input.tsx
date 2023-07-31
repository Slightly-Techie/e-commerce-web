import { useState, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import { RHFInputExtension } from "../../types";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [customType, setCustomType] = useState("password");

    return (
      <div
        className={cn(
          "rounded-[4px] border flex items-center",
          isFocused ? "border-gray-500" : "border-gray300"
        )}
      >
        <label
          htmlFor={props.id}
          className={cn(
            "self-stretch grid place-content-center cursor-pointer w-8 flex-shrink-0",
            isFocused ? "text-gray-500" : "text-gray300"
          )}
        >
          {icon}
        </label>
        <input
          {...props}
          ref={ref}
          type={props.type === "password" ? customType : props.type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "placeholder:text-gray-300 border-none bg-transparent border flex-1 w-full py-3 outline-none",
            props.type !== "password" ? "pr-4" : "pr-1"
          )}
        />

        {props.type === "password" && (
          <button
            type="button"
            className="pr-2 text-primary"
            onClick={() => {
              if (customType === "password") {
                setCustomType("text");
              }
              if (customType === "text") {
                setCustomType("password");
              }
            }}
          >
            {customType === "password" ? <HiOutlineEyeOff /> : <HiOutlineEye />}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
