import { Link, useNavigate } from "react-router-dom"
import { ButtonType, TextSize } from "../types"
import Button from "./Button"
import Text from "./Text"

type AuthLayoutProps = {
  buttonText?: string
  buttonRoute?: string
  children: React.ReactNode
}

const AuthLayout = ({ children, buttonRoute, buttonText }: AuthLayoutProps) => {
  const navigate = useNavigate()

  return (
    <div className="bg-[url(assets/images/sign-up-bg.jpg)] bg-cover bg-center bg-no-repeat text-white">
      <div className="mx-auto grid min-h-screen max-w-screen-xl grid-cols-2 px-[40px] lg:px-[60px]">
        <div className="flex flex-col justify-between pb-8 pt-[200px]">
          <div className="space-y-4">
            <Text size={TextSize.large}>Welcome to</Text>
            <h1 className="  max-w-[460px] text-5xl leading-[50px] md:text-[70px] md:leading-[84px]">
              <span className="line-through">Slightly</span> Techie Ecommerce
              space
            </h1>
          </div>

          <Text size={TextSize.small}>
            Sign up to join Slightly Techie at{" "}
            <Link
              className="font-bold"
              target="_blank"
              rel="noreferrer"
              to="https://app.slightlytechie.com"
            >
              app.slightlytechie.com
            </Link>
          </Text>
        </div>

        <div className="py-8">
          <div className="header grid place-content-end">
            {buttonText && buttonRoute && (
              <Button
                btnType={ButtonType.secondary}
                onClick={() => navigate(buttonRoute)}
                className="w-fit text-white"
              >
                {buttonText}
              </Button>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
