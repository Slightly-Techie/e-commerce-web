import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import SetupAccountLayout from "./SetupAccountLayout";
import { ButtonType } from "../types";
import Confetti from "react-confetti-explosion";

const ResetPasswordSuccessful = () => {
  const navigate = useNavigate();
  const [popConfetti, setPopConfetti] = useState(false);

  useEffect(() => {
    const pop = setTimeout(() => setPopConfetti(true), 200);

    return () => clearTimeout(pop);
  }, []);

  return (
    <SetupAccountLayout
      reroute={false}
      title="All Done"
      description="You have set your password. For security, you’ll need this password whenever you log in."
      icon={
        <>
          <img
            className="w-[107px] mx-auto"
            src="/assets/icons/faint-check.svg"
            alt="..."
          />
        </>
      }
    >
      {popConfetti && <Confetti particleCount={500} force={0.9} />}

      <Button
        btnType={ButtonType.primary}
        onClick={() => {
          navigate("/login");
        }}
      >
        Login to your account
      </Button>
    </SetupAccountLayout>
  );
};

export default ResetPasswordSuccessful;
