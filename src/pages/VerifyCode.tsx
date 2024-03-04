import { useNavigate } from "react-router-dom"
import AuthLayout from "../components/AuthLayout"
import VerifyCodeForm from "../components/VerifyCodeForm"

const VerifyCode = () => {
  const navigate = useNavigate()

  return (
    <AuthLayout>
      <VerifyCodeForm handleFormSubmit={() => navigate("/")} />
    </AuthLayout>
  )
}

export default VerifyCode
