import { AlertType, ButtonType, TextSize } from "../types"
import { ButtonSize, FormHelperType, ShadowType } from "./../types"

// Alerts
export const AlertTypeStyles = {
  [AlertType.info]: "border-infoBlue bg-infoBlueLight text-gray600",
  [AlertType.warning]: "border-warning500 text-primary bg-warning-50",
  [AlertType.error]: "border-error500 bg-error50 text-primary",
  [AlertType.success]:
    "border-success600 text-error500 bg-success50 text-primary",
}

// Buttons
export const ButtonTypeStyles = {
  [ButtonType.primary]:
    "bg-primary hover:bg-primaryLight text-white border-transparent",
  [ButtonType.disabled]:
    "hover:bg-gray50 text-gray400 border-transparent cursor-not-allowed",
  [ButtonType.secondary]: "border-gray300 text-primaryLight",
}

export const ButtonSizeStyles = {
  [ButtonSize.small]: "px-6 w-fit",
  [ButtonSize.full]: "w-full",
}

// Form Helper
export const FormHelperTypeStyles = {
  [FormHelperType.error]: "text-red-500",
  [FormHelperType.info]: "text-primary",
}

// Typography
export const TextSizeStyles = {
  [TextSize.verySmall]: "text-sm",
  [TextSize.small]: "text-base",
  [TextSize.body]: "text-lg",
  [TextSize.large]: "text-xl",
  [TextSize.heading4]: "font-bold text-4xl",
  [TextSize.heading5]: "font-bold text-[34px]",
}

export const ShadowTypeStyles = {
  [ShadowType.xs]: "shadow-[0px_1px_2px_0px_rgba(15,23,42,0.06)]",
  [ShadowType.sm]:
    "shadow-[0px_1px_2px_-1px_rgba(15,23,42,0.10),0px_1px_3px_0px_rgba(15,23,42,0.08)]",
  [ShadowType.md]:
    "shadow-[0px_2px_4px_-2px_rgba(15,23,42,0.05),0px_4px_6px_-1px_rgba(15,23,42,0.10)]",
  [ShadowType.lg]:
    "shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.07),0px_4px_6px_0px_rgba(15,23,42,0.05)]",
  [ShadowType.xl]:
    "shadow-[0px_20px_25px_-5px_rgba(15,23,42,0.10),0px_10px_10px_0px_rgba(15,23,42,0.05)]",
  [ShadowType.xxl]: "shadow-[0px_25px_50px_-12px_rgba(15,23,42,0.05)]",
  [ShadowType.xxxl]: "shadow-[0px_30px_60px_-12px_rgba(15,23,42,0.25)]",
}
