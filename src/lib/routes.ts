import { SignupStage } from "../types";

export const SETUPACCOUNTROUTES: Record<SignupStage, string> = {
  "enter details": "/sign-up",
  "verify code": "/verify-code",
  "setup account": "/setup-account",
  "setup complete": "/setup-account/complete",
};
