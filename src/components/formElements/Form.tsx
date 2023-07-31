import { TextSizeStyles } from "../../lib/styles";
import { cn } from "../../lib/utils";
import { forwardRef } from "react";

type FormProps = React.HTMLAttributes<HTMLFormElement> & {
  title: string;
  // formSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className, title, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn(
          "form bg-white border border-gray300 space-y-6 text-black rounded-lg h-fit mt-32 p-12 max-w-[550px] w-full",
          className
        )}
        {...props}
      >
        <img
          src="assets/icons/Logo.svg"
          className="w-[54px] h-[38px]"
          alt="st-logo"
        />
        <h2 className={TextSizeStyles.heading4}>{title}</h2>

        {props.children}
      </form>
    );
  }
);

Form.displayName = "Form";

export default Form;
