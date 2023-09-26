<<<<<<< HEAD
import VerifyCodeForm from "../components/VerifyCodeForm";

import AuthLayout from "../components/AuthLayout";
import SetupAccountRouter from "../components/SetupAccountRouter";

const VerifySignupCode = () => {
  return (
    <AuthLayout
      buttonRoute="/login"
      buttonText="Already have an account? Login"
    >
      <SetupAccountRouter>
        <VerifyCodeForm />
      </SetupAccountRouter>
=======
import AuthLayout from "../components/AuthLayout";
import VerifyCodeForm from "../components/forms/auth/VerifyCodeForm";

const VerifySignupCode = () => {
  return (
    <AuthLayout>
      <VerifyCodeForm />
>>>>>>> c79c0a4 (mm)
    </AuthLayout>
  );
};

export default VerifySignupCode;
