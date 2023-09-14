import { useState } from "react";
import VerifyCodeForm from "../components/VerifyCodeForm";
import { SignupFormFields } from "../types";
import { useSignupStageStore } from "../store/signupStageStore";
import AuthLayout from "../components/AuthLayout";

const VerifySignupCode = () => {
  const [userData, setUserData] = useState<SignupFormFields>(
    {} as SignupFormFields
  );

  const { changeStage } = useSignupStageStore();

  return (
    <AuthLayout>
      <VerifyCodeForm
        email={userData.email}
        formSubmit={() => {
          changeStage("setup account");
        }}
      />
    </AuthLayout>
  );
};

export default VerifySignupCode;
