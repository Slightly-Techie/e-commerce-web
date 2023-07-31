import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import ResetPasswordForm from "../components/forms/auth/ResetPasswordForm";
import { ButtonType } from "../types";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <AuthLayout>
        {/* can this be added to AuthLayoutComponent or made into its own component ?? */}
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
          <ResetPasswordForm />
        </div>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
