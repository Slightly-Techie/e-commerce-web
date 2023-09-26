import AuthLayout from "../components/AuthLayout";
<<<<<<< HEAD
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
=======
import CreateAccountForm from "../components/forms/auth/CreateAccountForm";

const Signup = () => {
  return (
    <AuthLayout>
      <CreateAccountForm />
>>>>>>> c79c0a4 (mm)
    </AuthLayout>
  );
};

export default Signup;
