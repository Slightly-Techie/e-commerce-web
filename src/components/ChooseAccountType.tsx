import { Account, useSetAccountTypeMutation } from "@/__generated__/gql"
import { useState } from "react"
import { BsCodeSlash } from "react-icons/bs"
import { PiUserBold } from "react-icons/pi"
import { useNavigate } from "react-router-dom"
import { cn } from "../lib/utils"
import { useAlertStore } from "../store/alertStore"
import { useSignupStageStore } from "../store/signupStageStore"
import { useUserStore } from "../store/userStore"
import { AlertType, ButtonType } from "../types"
import Button from "./Button"
import SetupAccountLayout from "./SetupAccountLayout"
import TimelineStep from "./TimelineStep"

const ChooseAccountType = () => {
  const [userType, setUserType] = useState<Account>(Account.Techie)

  const navigate = useNavigate()
  const { changeStage } = useSignupStageStore()
  const { showAlert } = useAlertStore()
  const { token, login } = useUserStore()

  const [updateUser, { loading }] = useSetAccountTypeMutation()

  const handleSubmit = () => {
    updateUser({ variables: { input: { accountType: userType } } })
      .then(({ data }) => {
        const errors = data?.setAccountType?.errors
        const user = data?.setAccountType?.user

        if (errors) {
          errors.forEach((err) => {
            showAlert({
              alertType: AlertType.error,
              alertText: err.message || err.property,
            })
          })
        }

        if (user) {
          login({ user, token: token as string })
          showAlert({
            alertType: AlertType.success,
            alertText: "User account updated",
          })
        }
        if (userType === Account.NonTechie) {
          navigate("/setup-account/non-st-member")
          changeStage("setup non st account")
        } else {
          navigate("/setup-account/st-member")
          changeStage("setup st account")
        }
      })
      .catch((err) => {
        showAlert({
          alertType: AlertType.error,
          alertText: err.message,
        })
      })
  }

  const ACCOUNTTYPES = [
    {
      title: "Slightly Techie",
      name: Account.Techie,
      desc: "Member of Slightly Techie Network",
      icon: <BsCodeSlash size={20} />,
    },
    {
      title: "Non Slightly Techie",
      name: Account.NonTechie,
      desc: "Not a member of Slightly Techie Network",
      icon: <PiUserBold size={20} />,
    },
  ]

  return (
    <SetupAccountLayout>
      <div className="mx-auto w-full max-w-[500px] px-5">
        <TimelineStep steps={2} currentStep={1} />

        <div className="mb-12">
          <h1 className="text-2xl font-bold">Choose account type</h1>
          <small className="font-bold text-gray500">
            Choose an account which suits you
          </small>
        </div>

        <div className="mb-[50px] space-y-6">
          {ACCOUNTTYPES.map(({ name, icon, desc, title }) => (
            <div
              key={name}
              className={cn(
                "flex cursor-pointer gap-4 rounded-xl border px-5 py-7",
                userType === name
                  ? "border-gray400 bg-gray100"
                  : "bg-transparent",
              )}
              onClick={() => setUserType(name)}
            >
              <div
                className={cn(
                  "icon grid h-[44px] w-[44px] flex-shrink-0 place-content-center rounded-full",
                  userType === name && "bg-primary text-white",
                )}
              >
                {icon}
              </div>

              <div>
                <p className="text-lg font-bold">{title}</p>
                <p className="text-gray500">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            btnType={loading ? ButtonType.disabled : ButtonType.primary}
            disabled={loading}
          >
            {loading ? "Checking CRM" : "Continue"}
          </Button>
        </div>
      </div>
    </SetupAccountLayout>
  )
}

export default ChooseAccountType
