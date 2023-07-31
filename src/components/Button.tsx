import { ButtonSizeStyles, ButtonTypeStyles } from "../lib/styles";
import { cn } from "../lib/utils";
import { ButtonSize, ButtonType } from "../types";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  btnType?: ButtonType;
  btnSize?: ButtonSize;
};

const Button = ({
  btnType = ButtonType.primary,
  btnSize = ButtonSize.small,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={btnType === ButtonType.disabled}
      className={cn(
        "border border-transparent rounded-[4px] py-4 text-white",
        ButtonSizeStyles[btnSize],
        ButtonTypeStyles[btnType],
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
