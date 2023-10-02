import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Text from "./Text";
import { ButtonType, TextSize } from "../types";
import Button from "./Button";

type AuthLayoutProps = {
  buttonText?: string;
  buttonRoute?: string;
  children: React.ReactNode;
};

const AuthLayout = ({ children, buttonRoute, buttonText }: AuthLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="text-white bg-[url(assets/images/sign-up-bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-xl px-[40px] lg:px-[60px] mx-auto grid grid-cols-2 min-h-screen">
        <div className="pt-[200px] pb-8 flex justify-between flex-col">
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
          <div className="grid header place-content-end">
            {buttonText && buttonRoute && (
              <Button
                btnType={ButtonType.secondary}
                onClick={() => navigate(buttonRoute)}
                className="text-white w-fit"
              >
                {buttonText}
              </Button>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
