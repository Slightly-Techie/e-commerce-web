import { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { PiUserBold } from "react-icons/pi";
import TimelineStep from "./TimelineStep";
import { cn } from "../lib/utils";
import { UserType } from "../types";
import Button from "./Button";
import SetupAccountLayout from "./SetupAccountLayout";
import { useNavigate } from "react-router-dom";
import { useSignupStageStore } from "../store/signupStageStore";

const ChooseAccountType = () => {
  const [userType, setUserType] = useState<
    "Slightly Techie" | "Non Slightly Techie"
  >("Slightly Techie");

  const navigate = useNavigate();
  const { changeStage } = useSignupStageStore();

  const handleSubmit = () => {
    if (userType === "Slightly Techie") {
      changeStage("setup st account");
      navigate("/setup-account/st-member");
      changeStage("setup st account");
    } else {
      navigate("/setup-account/non-st-member");
      changeStage("setup non st account");
    }
  };

  const ACCOUNTTYPES = [
    {
      name: "Slightly Techie",
      desc: "Member of Slightly Techie Network",
      icon: <BsCodeSlash size={20} />,
    },
    {
      name: "Non Slightly Techie",
      desc: "Not a member of Slightly Techie Network",
      icon: <PiUserBold size={20} />,
    },
  ];

  return (
    <SetupAccountLayout>
      <div className="max-w-[500px] w-full mx-auto px-5">
        <TimelineStep steps={2} currentStep={1} />

        <div className="mb-12">
          <h1 className="text-2xl font-bold">Choose account type</h1>
          <small className="font-bold text-gray500">
            Choose an account which suits you
          </small>
        </div>

        <div className="space-y-6 mb-[50px]">
          {ACCOUNTTYPES.map(({ name, icon, desc }) => (
            <div
              key={name}
              className={cn(
                "px-5 py-7 rounded-xl flex gap-4 border cursor-pointer",
                userType === name
                  ? "border-gray400 bg-gray100"
                  : "bg-transparent"
              )}
              onClick={() => setUserType(name as UserType)}
            >
              <div
                className={cn(
                  "icon flex-shrink-0 grid place-content-center rounded-full h-[44px] w-[44px]",
                  userType === name && "bg-primary text-white"
                )}
              >
                {icon}
              </div>

              <div>
                <p className="text-lg font-bold">{name}</p>
                <p className="text-gray500">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSubmit}>Continue</Button>
        </div>
      </div>
    </SetupAccountLayout>
  );
};

export default ChooseAccountType;
