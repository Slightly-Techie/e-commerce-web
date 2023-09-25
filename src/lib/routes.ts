import { SignupStage } from "../types";

export const SETUPACCOUNTROUTES: Record<SignupStage, string> = {
  "enter details": "/sign-up",
  "verify code": "/verify-code",
  "choose account type": "/setup-account",
  "setup non st account": "/setup-account/non-st-member",
  "setup st account": "/setup-account/st-member",
  "setup complete": "/setup-account/complete",
};
