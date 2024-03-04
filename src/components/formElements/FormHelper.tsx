import { FormHelperTypeStyles } from "../../lib/styles"
import { cn } from "../../lib/utils"
import { FormHelperType } from "../../types"

type FormHelperProps = React.HTMLAttributes<HTMLParagraphElement> & {
  type?: FormHelperType
}

const FormHelper = ({
  className,
  type = FormHelperType.info,
  ...props
}: FormHelperProps) => {
  return (
    <p className={cn("text-xs", FormHelperTypeStyles[type], className)}>
      {props.children}
    </p>
  )
}

export default FormHelper
