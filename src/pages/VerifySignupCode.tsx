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
    </AuthLayout>
  );
};

export default VerifySignupCode;
