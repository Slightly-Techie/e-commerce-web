import { AlertTypeStyles, TextSizeStyles } from "../lib/styles";
import { cn } from "../lib/utils";
import { AlertType } from "../types";

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: AlertType;
  global?: boolean;
};

const Alert = ({
  className,
  type = AlertType.info,
  global = false,
  ...props
}: AlertProps) => {
  const alertIcons = {
    [AlertType.error]: "/assets/icons/danger.svg",
    [AlertType.info]: "/assets/icons/info.svg",
    [AlertType.warning]: "/assets/icons/warning.svg",
    [AlertType.success]: "/assets/icons/success.svg",
  };

  return (
    <div
      className={cn(
        "p-4 rounded-[4px] border",
        AlertTypeStyles[type],
        global && "bg-white text-base md:text-xl max-w-sm",
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        <img src={alertIcons[type]} className="w-[22px] h-[22px]" alt="..." />

        <p className={TextSizeStyles.verySmall}>{props.children}</p>
      </div>
    </div>
  );
};

export default Alert;
