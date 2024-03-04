import { Account } from "@/__generated__/gql"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "../lib/utils"
import { useSignupStageStore } from "../store/signupStageStore"
import { useUserStore } from "../store/userStore"
import { AlertType, User } from "../types"
import Alert from "./Alert"
import SettingUpIndicator from "./SettingUpIndicator"
import SetupAccountLayout from "./SetupAccountLayout"

const STMemberSetup = () => {
  const { changeStage } = useSignupStageStore()
  const { user } = useUserStore()
  const navigate = useNavigate()
  const [userDataState, setUserDataState] = useState<
    "loading" | "error" | "success"
  >("loading")

  const stateIcons: Record<"loading" | "error" | "success", string> = {
    loading: "/assets/icons/loading.gif",
    error: "/assets/icons/x.svg",
    success: "/assets/icons/done.svg",
  }

  const [userProfile, setUserProfile] = useState<
    Pick<User, "phoneNumber" | "firstName" | "lastName">
  >({ firstName: "", lastName: "", phoneNumber: "" })

  useEffect(() => {
    // Fetch user data
    setUserDataState("loading")

    // use pseudo implementation for now
    const fetchUserData = () => {
      if (user?.accountType === Account.NonTechie) {
        setUserDataState("error")

        setTimeout(() => navigate("/setup-account/non-st-error"), 500)
        return
      }

      if (user?.accountType === Account.Techie) {
        setUserDataState("success")
        setTimeout(() => {
          changeStage("setup complete")
        }, 500)
      }

      if (user) {
        setUserProfile({
          firstName: user.firstName as string,
          lastName: user.lastName as string,
          phoneNumber: user.phoneNumber as string,
        })
      }
      setUserDataState("success")
    }

    const timeout = setTimeout(fetchUserData, 3000)

    return () => clearTimeout(timeout)
  }, [changeStage, user, navigate])

  return (
    <SetupAccountLayout
      title="Setting up account"
      icon={
        <div className="mx-auto w-[190px]">
          <SettingUpIndicator
            error={userDataState === "error"}
            loading={userDataState === "loading"}
          />
        </div>
      }
      description="Importing your details from CRM. This may take a few minutes."
    >
      <ul className="mb-24 w-full max-w-xs rounded-md border border-gray300 p-[10px]">
        {Object.entries(userProfile).map(([key]) => (
          <li
            key={key}
            className={cn(
              "flex items-center justify-between rounded-[4px] border border-transparent p-[10px] text-gray700 hover:border-gray200 hover:bg-gray50",
              Object.values(userProfile).every((item) => item.length > 0) ||
                (userDataState === "error" && "line-through"),
            )}
          >
            <span className="capitalize">{key}</span>

            <div className="icon h-[18px] w-[18px]">
              <img src={stateIcons[userDataState]} alt="..." />
            </div>
          </li>
        ))}
      </ul>

      <Alert type={AlertType.warning}>
        Note: Do not refresh, close or click the back button on this page.
        Something might go wrong!
      </Alert>
    </SetupAccountLayout>
  )
}

export default STMemberSetup
