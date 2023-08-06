import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { ButtonType, SignupStage } from "../types";
import { useState } from "react";
import LoginForm from "../components/LoginForm";

export const Login = () => {
  const navigate = useNavigate();
  const [signUpStage, setSignUpStage] = useState<SignupStage>("enter details");

  const onSubmit = () => {
    setSignUpStage("verify code");
  };


  return (
    <AuthLayout>
      <div className="py-8">
        <div className="header grid place-content-end">
              <Button
                btnType={ButtonType.secondary}
                onClick={() => navigate("/")}
                className="w-fit text-white"
              >
                Not having an account? <span className="font-bold"> Sign up</span>
              </Button>
        </div>
        
        {signUpStage === "enter details" && (
            <LoginForm formSubmit={onSubmit} />
        )}
      </div>
    </AuthLayout>
    );
};
