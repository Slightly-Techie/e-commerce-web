import { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { PiUserBold } from "react-icons/pi";
import TimelineStep from "./TimelineStep";
import { cn } from "../lib/utils";
import { AlertType, ButtonType, User, UserType } from "../types";
import Button from "./Button";
import SetupAccountLayout from "./SetupAccountLayout";
import { useNavigate } from "react-router-dom";
import { useSignupStageStore } from "../store/signupStageStore";
import { useUserStore } from "../store/userStore";
import { SET_ACCOUNT } from "../lib/queries";
import { useMutation } from "@apollo/client";
import { useAlertStore } from "../store/alertStore";

const ChooseAccountType = () => {
  const [userType, setUserType] = useState<UserType>("TECHIE");

  const navigate = useNavigate();
  const { changeStage } = useSignupStageStore();
  const { showAlert } = useAlertStore();
  const { token, user, login } = useUserStore();

  const [updateUser, { loading }] = useMutation(SET_ACCOUNT);

  const handleSubmit = () => {
    updateUser({ variables: { input: { accountType: userType } } })
      .then(({ data }) => {
        if (data.setAccount.status === 400) {
          showAlert({
            alertType: AlertType.error,
            alertText: "Account not registered with CRM",
          });
        }

        if (data.setAccount.errors) {
          data.setAccount.errors.forEach(({ message }: { message: string }) => {
            showAlert({
              alertType: AlertType.error,
              alertText: message,
            });
          });
        }

        if (data.setAccount.user) {
          login({ user: data.setAccount.user as User, token: token as string });
          showAlert({
            alertType: AlertType.success,
            alertText: "User account updated",
          });

          if (userType === "TECHIE") {
            navigate("/setup-account/st-member");
            changeStage("setup st account");
          } else {
            navigate("/setup-account/non-st-member");
            changeStage("setup non st account");
          }
        }
      })
      .catch((err) => {
        showAlert({
          alertType: AlertType.error,
          alertText: err.message,
        });
      });
  };

  const ACCOUNTTYPES = [
    {
      title: "Slightly Techie",
      name: "TECHIE",
      desc: "Member of Slightly Techie Network",
      icon: <BsCodeSlash size={20} />,
    },
    {
      title: "Non Slightly Techie",
      name: "NON_TECHIE",
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
          {ACCOUNTTYPES.map(({ name, icon, desc, title }) => (
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
                <p className="text-lg font-bold">{title}</p>
                <p className="text-gray500">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            btnType={loading ? ButtonType.disabled : ButtonType.primary}
            disabled={loading}
          >
            {loading ? "Checking CRM" : "Continue"}
          </Button>
        </div>
      </div>
    </SetupAccountLayout>
  );
};

export default ChooseAccountType;
