import { cn } from "../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "h-[48px] sm:h-[54px] px-5 w-full text-base sm:text-xl bg-black text-white",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
