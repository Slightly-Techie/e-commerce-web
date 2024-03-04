import VerifyCodeForm from "../components/VerifyCodeForm"

import AuthLayout from "../components/AuthLayout"
import SetupAccountRouter from "../components/SetupAccountRouter"
import { useSignupStageStore } from "../store/signupStageStore"

const VerifySignupCode = () => {
  const { changeStage } = useSignupStageStore()

  return (
    <AuthLayout
      buttonRoute="/login"
      buttonText="Already have an account? Login"
    >
      <SetupAccountRouter>
        <VerifyCodeForm
          handleFormSubmit={() => changeStage("choose account type")}
        />
      </SetupAccountRouter>
    </AuthLayout>
  )
}

export default VerifySignupCode
