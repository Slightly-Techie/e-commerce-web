import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
// import Button from "../components/Button";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { ButtonType } from "../types";


const ForgotPassword = () => {
  const navigate = useNavigate();
  
  return (
    <AuthLayout>

      <div className="py-5">
        <div className="header grid place-content-end">
          <Button
            btnType={ButtonType.secondary}
            onClick={() => navigate("/login")}
            className="w-fit text-white"
          >
            Back to Login
          </Button>
        </div>

        
        <ForgotPasswordForm
          formSubmit={() => navigate("/reset-password")}
        />
        
      </div>

    </AuthLayout>
  );
};

export default ForgotPassword;
