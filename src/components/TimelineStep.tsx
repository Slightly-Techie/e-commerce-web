import { ClassValue } from "clsx"
import { cn } from "../lib/utils"
import { TextSize } from "../types"
import Text from "./Text"

type TimelineProps = {
  className?: ClassValue
  steps: number
  currentStep: number
}

const TimelineStep = ({ className, steps, currentStep }: TimelineProps) => {
  return (
    <div className={cn("mb-8 w-full", className)}>
      <Text size={TextSize.body} className="mb-[13px] font-bold">
        Step {currentStep} of {steps}
      </Text>
      <div className="flex gap-3">
        {Array.from({ length: steps }).map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "h-[6px] w-full rounded-l-full rounded-r-full",
              idx + 1 > currentStep ? "bg-gray-200" : "bg-black",
            )}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default TimelineStep
