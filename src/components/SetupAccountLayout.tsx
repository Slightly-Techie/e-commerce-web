import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SETUPACCOUNTROUTES } from "../lib/routes"
import { TextSizeStyles } from "../lib/styles"
import { cn } from "../lib/utils"
import { useSignupStageStore } from "../store/signupStageStore"

type Props = {
  children: React.ReactNode
  title?: string
  description?: string
  icon?: React.ReactNode
  normal?: boolean
  reroute?: boolean
}

const SetupAccountLayout = ({
  children,
  title,
  description,
  icon,
  normal = true,
  reroute = true,
}: Props) => {
  const navigate = useNavigate()
  const { currentStage } = useSignupStageStore()

  useEffect(() => {
    if (reroute) navigate(SETUPACCOUNTROUTES[currentStage])
  }, [currentStage, navigate, reroute])

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col px-[40px] lg:px-[60px]">
      <Link to="/" className="header mt-12">
        <img src="/assets/icons/Logo.svg" alt="logo" />
      </Link>

      <div className="flex flex-1 flex-col items-center justify-center py-20">
        {normal && (
          <div className="mb-6 w-full max-w-[410px] text-center">
            <div className="space-y-8">
              {icon}

              <div>
                <h1 className={TextSizeStyles.heading5}>{title}</h1>
                <p className={cn("text-balance text-gray500")}>{description}</p>
              </div>
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  )
}

export default SetupAccountLayout
