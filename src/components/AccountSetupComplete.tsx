import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import SetupAccountLayout from "./SetupAccountLayout";
import { ButtonType } from "../types";
import { useSignupStageStore } from "../store/signupStageStore";
import Confetti from "react-confetti-explosion";

const AccountSetupComplete = () => {
  const navigate = useNavigate();
  const [popConfetti, setPopConfetti] = useState(false);
  const { changeStage } = useSignupStageStore();

  useEffect(() => {
    const pop = setTimeout(() => setPopConfetti(true), 200);

    return () => clearTimeout(pop);
  }, []);

  return (
    <SetupAccountLayout
      title="Setup Complete"
      description="Welcome to Slightly Techie E-commerce space"
      icon={
        <>
          <img
            className="w-[107px] mx-auto"
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
          navigate("/");
          changeStage("enter details");
        }}
      >
        Start shopping now
      </Button>
    </SetupAccountLayout>
  );
};

export default AccountSetupComplete;

