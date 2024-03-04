import { useEffect, useState } from "react"
import Confetti from "react-confetti-explosion"
import { useNavigate } from "react-router-dom"
import { useSignupStageStore } from "../store/signupStageStore"
import { ButtonType } from "../types"
import Button from "./Button"
import SetupAccountLayout from "./SetupAccountLayout"

const AccountSetupComplete = () => {
  const navigate = useNavigate()
  const [popConfetti, setPopConfetti] = useState(false)
  const { changeStage } = useSignupStageStore()

  useEffect(() => {
    const pop = setTimeout(() => setPopConfetti(true), 200)

    return () => clearTimeout(pop)
  }, [])

  return (
    <SetupAccountLayout
      title="Setup Complete"
      description="Welcome to Slightly Techie E-commerce space"
      icon={
        <>
          <img
            className="mx-auto w-[107px]"
            src="/assets/icons/done.svg"
            alt="..."
          />
        </>
      }
    >
      {popConfetti && <Confetti particleCount={500} force={0.9} />}

      <Button
        btnType={ButtonType.primary}
        onClick={() => {
          navigate("/")
          changeStage("enter details")
        }}
      >
        Start shopping now
      </Button>
    </SetupAccountLayout>
  )
}

export default AccountSetupComplete
