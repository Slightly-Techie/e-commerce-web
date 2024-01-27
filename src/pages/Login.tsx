import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

export const Login = () => {
  return (
    <AuthLayout
      buttonRoute="/sign-up"
      buttonText="Don't have an account? Sign up"
    >
      <LoginForm />
    </AuthLayout>
  );
};

