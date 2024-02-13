import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative w-full h-1 overflow-hidden rounded-full grow bg-gray200">
      <SliderPrimitive.Range className="absolute h-full bg-success600" />
    </SliderPrimitive.Track>
    {props.defaultValue?.map((_, index) => (
      <SliderPrimitive.Thumb
        key={index}
        className="block w-5 h-5 transition-colors bg-white border-2 rounded-full border-success600 ring-success600 focus-visible:outline-none focus-visible:ring focus-visible:ring-success600 disabled:pointer-events-none disabled:opacity-50"
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
