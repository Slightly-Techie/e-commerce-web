import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import SetupAccountLayout from "./SetupAccountLayout";
import { ButtonType } from "../types";
import { useSignupStageStore } from "../store/signupStageStore";
import Confetti from "react-dom-confetti";

const AccountSetupComplete = () => {
  const navigate = useNavigate();
  const [popConfetti, setPopConfetti] = useState(false);
  const { changeStage } = useSignupStageStore();

  useEffect(() => setPopConfetti(true), []);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <SetupAccountLayout
      title="Setup Complete"
      description="Welcome to Slightly Techie E-commerce space"
      icon={
        <img
          className="w-[107px] mx-auto"
          src="/assets/icons/done.svg"
          alt="..."
        />
      }
    >
      <Button
        btnType={ButtonType.primary}
        onClick={() => {
          navigate("/");
          changeStage("enter details");
        }}
      >
        Start shopping now
      </Button>

      <Confetti active={popConfetti} config={config} />
    </SetupAccountLayout>
  );
};

export default AccountSetupComplete;
