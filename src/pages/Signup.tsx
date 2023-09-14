import AuthLayout from "../components/AuthLayout";
import { SignupFormFields } from "../types";
import { useState } from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import { useSignupStageStore } from "../store/signupStageStore";

const Signup = () => {
  const [userData, setUserData] = useState<SignupFormFields>(
    {} as SignupFormFields
  );

  const { changeStage } = useSignupStageStore();

  const onSubmit = (data: SignupFormFields) => {
    setUserData(data);

    changeStage("verify code");
  };

  return (
    <AuthLayout>
      <CreateAccountForm formSubmit={onSubmit} />
    </AuthLayout>
  );
};

export default Signup;
