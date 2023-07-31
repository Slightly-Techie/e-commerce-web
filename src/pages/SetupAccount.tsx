import { useState } from "react";
import { SignupStage } from "../types";
import CRMDownload from "../components/CRMDownload";
import AccountSetupComplete from "../components/AccountSetupComplete";

const SetupAccount = () => {
  const [signUpStage, setSignUpStage] = useState<SignupStage>("setup account");

  const onDownloadComplete = () => setSignUpStage("setup complete");

  return (
    <>
      {signUpStage === "setup account" && (
        <CRMDownload handleDownloadComplete={onDownloadComplete} />
      )}
      {signUpStage === "setup complete" && <AccountSetupComplete />}
    </>
  );
};

export default SetupAccount;
