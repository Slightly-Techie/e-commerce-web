import VerifyCodeForm from "../components/VerifyCodeForm";
import AuthLayout from "../components/AuthLayout";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <VerifyCodeForm handleFormSubmit={() => navigate("/")} />
    </AuthLayout>
  );
};

export default VerifyCode;
