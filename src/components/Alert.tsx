import { AlertTypeStyles, TextSizeStyles } from "../lib/styles";
import { cn } from "../lib/utils";
import { AlertType } from "../types";

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: AlertType;
};

const Alert = ({ className, type = AlertType.info, ...props }: AlertProps) => {
  const alertIcons = {
    [AlertType.error]: "assets/icons/error.svg",
    [AlertType.info]: "assets/icons/info.svg",
    [AlertType.warning]: "assets/icons/warning.svg",
  };

  return (
    <div
      className={cn(
        "p-4 rounded-[4px] border",
        AlertTypeStyles[type],
        className
      )}
      {...props}
    >
      <div className="flex gap-3 items-center">
        <img
          src={alertIcons[type]}
          className="w-[22px] h-[22px] flex-1"
          alt="..."
        />

        <p className={TextSizeStyles.verySmall}>{props.children}</p>
      </div>
    </div>
  );
};

export default Alert;
