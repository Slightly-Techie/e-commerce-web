import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextSizeStyles } from "../lib/styles";
import { cn } from "../lib/utils";
import { useSignupStageStore } from "../store/signupStageStore";
import { SETUPACCOUNTROUTES } from "../lib/routes";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  normal?: boolean;
  reroute?: boolean;
};

const SetupAccountLayout = ({
  children,
  title,
  description,
  icon,
  normal = true,
  reroute = true,
}: Props) => {
  const navigate = useNavigate();
  const { currentStage } = useSignupStageStore();

  useEffect(() => {
    if (reroute) navigate(SETUPACCOUNTROUTES[currentStage]);
  }, [currentStage, navigate, reroute]);

  return (
    <div className="max-w-screen-xl px-[40px] lg:px-[60px] mx-auto min-h-screen flex flex-col">
      <Link to="/" className="header mt-12">
        <img src="/assets/icons/Logo.svg" alt="logo" />
      </Link>

      <div className="flex-1 py-20 flex flex-col justify-center items-center">
        {normal && (
          <div className="max-w-[410px] w-full mb-6 text-center">
            <div className="space-y-8">
              {icon}

              <div>
                <h1 className={TextSizeStyles.heading5}>{title}</h1>
                <p className={cn("text-gray500 text-balance")}>{description}</p>
              </div>
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default SetupAccountLayout;

