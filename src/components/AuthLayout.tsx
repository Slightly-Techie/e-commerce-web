import { Link } from "react-router-dom";
import Text from "./Text";
import { TextSize } from "../types";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-white bg-[url(assets/images/sign-up-bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-xl px-[40px] lg:px-[60px] mx-auto grid grid-cols-2 min-h-screen">
        <div className="pt-[200px] pb-8 flex justify-between flex-col">
          <div className="space-y-4">
            <Text size={TextSize.large}>Welcome to</Text>
            <h1 className="font-anton  max-w-[460px] text-5xl leading-[50px] md:text-[70px] md:leading-[84px]">
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

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
