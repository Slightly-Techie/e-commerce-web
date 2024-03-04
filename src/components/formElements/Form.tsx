import { forwardRef } from "react"
import { TextSizeStyles } from "../../lib/styles"
import { cn } from "../../lib/utils"

type FormProps = React.HTMLAttributes<HTMLFormElement> & {
  title: string
  // formSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className, title, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn(
          "form mt-32 h-fit w-full max-w-[550px] space-y-6 rounded-lg border border-gray300 bg-white p-12 text-black",
          className,
        )}
        {...props}
      >
        <img
          src="assets/icons/Logo.svg"
          className="h-[38px] w-[54px]"
          alt="st-logo"
        />
        <h2 className={TextSizeStyles.heading4}>{title}</h2>

        {props.children}
      </form>
    )
  },
)

Form.displayName = "Form"

export default Form
