import AuthLayout from "../components/AuthLayout";
import ForgotPasswordForm from "../components/forms/auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <AuthLayout buttonRoute="/login" buttonText="Back to Login">
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
