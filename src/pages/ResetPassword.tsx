import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import ResetPasswordForm from "../components/forms/auth/ResetPasswordForm";
import { ButtonType, ResetPasswordStatus, TextSize } from "../types";
import { useState, Dispatch, SetStateAction } from "react";
import { TextSizeStyles } from "../lib/styles";
import ResetPasswordCodeForm from "../components/forms/auth/ResetPasswordCodeFrom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<ResetPasswordStatus>("code");
  const [loading, setLoading] = useState<boolean>(false);

  const renderByStatus = {
    successful: (
      <PasswordResetSuccessful loading={loading} setLoading={setLoading} />
    ),
    reset_password: <ResetPasswordForm setStatus={setStatus} />,
    code: <ResetPasswordCodeForm setStatus={setStatus} />,
  };
  return (
    <>
      <AuthLayout
        buttonRoute="/login"
        buttonText="Already have an account? Login"
      >
        <div className="flex flex-col items-end py-8">
          {renderByStatus[status]}
        </div>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;

const PasswordResetSuccessful = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[url('/assets/Confetti.png')] bg-white border border-gray300 flex flex-col items-center justify-center space-y-6 text-black rounded-lg h-fit mt-32 p-12 max-w-[550px] w-full">
      <div className="p-4 rounded-full bg-green-400/40 w-fit">
        <img src="assets/icons/check.svg" alt="..." />
      </div>
      <h2 className={TextSizeStyles[TextSize.heading4]}>All done</h2>
      <p
        className={"text-gray500 text-center " + TextSizeStyles[TextSize.body]}
      >
        You have set your password. For security, you&lsquo;ll need this
        password whenever you log in.
      </p>
      <Button
        className="w-full"
        btnType={loading ? ButtonType.disabled : ButtonType.primary}
        onClick={() => {
          setLoading((prev: boolean) => !prev);
          navigate("/login");
        }}
      >
        Continue
      </Button>
    </div>
  );
};
