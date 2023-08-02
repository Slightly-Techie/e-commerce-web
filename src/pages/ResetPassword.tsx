import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import ResetPasswordForm from "../components/forms/auth/ResetPasswordForm";
import { ButtonType, TextSize } from "../types";
import { useState } from "react";
import { TextSizeStyles } from "../lib/styles";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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
          {successful ? (
            <div className="bg-[url('/assets/Confetti.png')] bg-white border border-gray300 flex flex-col items-center justify-center space-y-6 text-black rounded-lg h-fit mt-32 p-12 max-w-[550px] w-full">
              <div className="p-4 rounded-full bg-green-400/40 w-fit">
                <img src="assets/icons/check.svg" alt="..." />
              </div>
              <h2 className={TextSizeStyles[TextSize.heading4]}>All done</h2>
              <p
                className={
                  "text-gray500 text-center " + TextSizeStyles[TextSize.body]
                }
              >
                You have set your password. For security, you&lsquo;ll need this
                password whenever you log in.
              </p>
              <Button
                className="w-full"
                btnType={loading ? ButtonType.disabled : ButtonType.primary}
                onClick={() => setLoading((prev) => !prev)}
              >
                Continue
              </Button>
            </div>
          ) : (
            <ResetPasswordForm setSuccessful={setSuccessful} />
          )}
        </div>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
