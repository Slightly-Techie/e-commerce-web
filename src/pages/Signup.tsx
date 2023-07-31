import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { ButtonType, SignupFormFields, SignupStage } from "../types";
import { useState } from "react";
import CreateAccountForm from "../components/forms/auth/CreateAccountForm";
import VerifyCodeForm from "../components/forms/auth/VerifyCodeForm";

const Signup = () => {
  const navigate = useNavigate();
  const [signUpStage, setSignUpStage] = useState<SignupStage>("enter details");
  const [userData, setUserData] = useState<SignupFormFields>(
    {} as SignupFormFields
  );

  const onSubmit = (data: SignupFormFields) => {
    setUserData(data);
    setSignUpStage("verify code");
  };

  return (
    <>
      <AuthLayout>
        <div className="py-8">
          <div className="header grid place-content-end">
            <Button
              btnType={ButtonType.secondary}
              onClick={() => navigate("/login")}
              className="w-fit text-white"
            >
              Already have an account? Login
            </Button>
          </div>

          {signUpStage === "enter details" && (
            <CreateAccountForm formSubmit={onSubmit} />
          )}

          {signUpStage === "verify code" && (
            <VerifyCodeForm
              email={userData.email}
              formSubmit={() => navigate("/setup-account")}
            />
          )}
        </div>
      </AuthLayout>
    </>
  );
};

export default Signup;
