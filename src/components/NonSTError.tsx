import { useNavigate } from "react-router-dom"
import { useSignupStageStore } from "../store/signupStageStore"
import Button from "./Button"
import SetupAccountLayout from "./SetupAccountLayout"

const NonSTError = () => {
  const navigate = useNavigate()
  const { changeStage } = useSignupStageStore()

  return (
    <SetupAccountLayout
      icon={
        <img
          className="mx-auto w-[107px]"
          src="/assets/icons/monkey.svg"
          alt="..."
        />
      }
      reroute={false}
      title="Oh Snap!"
      description="We noticed your email isn't registered with our CRM. Would you mind signing up as a non-techie? It's easy and fast!"
    >
      <Button
        onClick={() => {
          changeStage("setup non st account")
          navigate("/setup-account/non-st-member")
        }}
      >
        Sign up as a Non ST Member
      </Button>
    </SetupAccountLayout>
  )
}

export default NonSTError
