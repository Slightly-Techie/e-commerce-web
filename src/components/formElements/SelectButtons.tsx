import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

type SelectButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  multiple?: boolean;
};
const SelectButton = forwardRef<HTMLInputElement, SelectButtonProps>(
  ({ multiple = false, ...props }, ref) => {
    return (
      <div>
        <input
          type={multiple ? "checkbox" : "radio"}
          ref={ref}
          {...props}
          className="hidden peer"
        />
        {props.value ? (
          <label
            htmlFor={props?.value as string}
            className={cn(
              "bg-gray75 font-normal capitalize text-sm block border-blue-primary cursor-pointer select-none rounded-lg peer-checked:border-2 py-2 px-3 text-center peer-checked:bg-warning50 peer-checked:border-[#F0D9BE] peer-checked:text-[#6F4400]",
              props.className
            )}
          >
            {props.value}
          </label>
        ) : null}
      </div>
    );
  }
);

SelectButton.displayName = "SelectButton";
export default SelectButton;
