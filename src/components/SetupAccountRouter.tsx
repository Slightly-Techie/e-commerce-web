import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { SETUPACCOUNTROUTES } from "../lib/routes"
import { useSignupStageStore } from "../store/signupStageStore"

const SetupAccountRouter = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()

  const { currentStage } = useSignupStageStore()

  useEffect(() => {
    navigate(SETUPACCOUNTROUTES[currentStage])
  }, [currentStage, navigate])
  return <>{children}</>
}

export default SetupAccountRouter
