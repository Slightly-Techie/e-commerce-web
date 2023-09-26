import AuthLayout from "../components/AuthLayout";
import CreateAccountForm from "../components/CreateAccountForm";
import SetupAccountRouter from "../components/SetupAccountRouter";

const Signup = () => {
  return (
    <AuthLayout
      buttonRoute="/login"
      buttonText="Already have an account? Login"
    >
      <SetupAccountRouter>
        <CreateAccountForm />
      </SetupAccountRouter>
    </AuthLayout>
  );
};

export default Signup;
