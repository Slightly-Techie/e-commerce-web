import { UseFormRegister } from "./../node_modules/react-hook-form/dist/types/form.d";

export enum TextSize {
  small = "small",
  verySmall = "verySmall",
  body = "body",
  large = "large",
  heading4 = "heading4",
  heading5 = "heading5",
}

export enum AlertType {
  info = "info",
  error = "error",
  warning = "warning",
}

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  disabled = "disabled",
}

export enum ButtonSize {
  small = "small",
  full = "full",
}

export enum FormHelperType {
  error = "error",
  info = "info",
}

export type SignupStage =
  | "enter details"
  | "verify code"
  | "setup account"
  | "setup complete";

type FormValues = {
  [key: string]: unknown;
};

type RegisterFormValues = UseFormRegister<FormValues>;

export type RHFInputExtension = {
  register: RegisterFormValues;
  required: boolean;
};

export type SignupFormFields = {
  username: string;
  email: string;
  password: string;
  agreeTerms: boolean;
};

export type SelectCountry = Array<{
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
}>;

export type ActiveSelectedCountry = {
  svg: string;
  countryCode: string;
};
