import { TextSizeStyles } from "../../lib/styles"
import { cn } from "../../lib/utils"

type LabelProps = React.HTMLAttributes<HTMLLabelElement> & { htmlFor?: string }

const Label = ({ className, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("cursor-pointer", TextSizeStyles.verySmall, className)}
      {...props}
    >
      {props.children}
    </label>
  )
}

export default Label
