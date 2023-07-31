import { ButtonSize, FormHelperType } from "./../types";
import { AlertType, ButtonType } from "../types";
import { TextSize } from "../types";

// Alerts
export const AlertTypeStyles = {
  [AlertType.info]: "border-infoBlue bg-infoBlueLight text-gray600",
  [AlertType.warning]: "border-warning500 text-primary bg-warning-50",
  [AlertType.error]: "border-error500 text-error500 bg-error-50",
};

// Buttons
export const ButtonTypeStyles = {
  [ButtonType.primary]:
    "bg-primary hover:bg-primaryLight text-white border-transparent",
  [ButtonType.disabled]:
    "hover:bg-gray50 text-gray400 border-transparent cursor-not-allowed",
  [ButtonType.secondary]: "border-gray300 text-primaryLight",
};

export const ButtonSizeStyles = {
  [ButtonSize.small]: "px-6 w-fit",
  [ButtonSize.full]: "w-full",
};

// Form Helper
export const FormHelperTypeStyles = {
  [FormHelperType.error]: "text-red-500",
  [FormHelperType.info]: "text-primary",
};

// Typography
export const TextSizeStyles = {
  [TextSize.verySmall]: "text-sm",
  [TextSize.small]: "text-base",
  [TextSize.body]: "text-lg",
  [TextSize.large]: "text-xl",
  [TextSize.heading4]: "font-bold text-4xl",
  [TextSize.heading5]: "font-bold text-[34px]",
};
