import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import ForgotPasswordForm from "../components/forms/auth/ForgotPasswordForm";
import Button from "../components/Button";
import { ButtonType } from "../types";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="flex flex-col items-end py-8">
        <div className="grid header place-content-end">
          <Button
            btnType={ButtonType.secondary}
            onClick={() => navigate("/login")}
            className="text-white w-fit"
          >
            Back To Login
          </Button>
        </div>

        <ForgotPasswordForm />
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
