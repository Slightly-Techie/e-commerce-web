import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import ForgotPasswordForm from "../components/forms/auth/ForgotPasswordForm";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout buttonRoute="/login" buttonText="Back to Login">
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
