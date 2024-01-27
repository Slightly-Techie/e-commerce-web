import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { ButtonType } from "../types";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthLayout>
        <div className="py-5">
          <div className="grid header place-content-end">
            <Button
              btnType={ButtonType.secondary}
              onClick={() => navigate("/sign-")}
              className="text-white w-fit"
            >
              Don't have an account? Sign up
            </Button>
          </div>
          <LoginForm />
        </div>
      </AuthLayout>
    </>
  );
};
