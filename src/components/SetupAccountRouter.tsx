import { useNavigate } from "react-router-dom";
import { useSignupStageStore } from "../store/signupStageStore";
import { useEffect } from "react";
import { SETUPACCOUNTROUTES } from "../lib/routes";

const SetupAccountRouter = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const { currentStage } = useSignupStageStore();

  useEffect(() => {
    navigate(SETUPACCOUNTROUTES[currentStage]);
  }, [currentStage, navigate]);
  return <>{children}</>;
};

export default SetupAccountRouter;
