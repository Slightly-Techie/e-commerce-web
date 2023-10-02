import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import Alert from "./Alert";
import { AlertType } from "../types";
import SettingUpIndicator from "./SettingUpIndicator";
import SetupAccountLayout from "./SetupAccountLayout";
import { useSignupStageStore } from "../store/signupStageStore";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { User } from "../types";

const STMemberSetup = () => {
  const { changeStage } = useSignupStageStore();
  const { user } = useUserStore();
  const navigate = useNavigate();
  const [userDataState, setUserDataState] = useState<
    "loading" | "error" | "success"
  >("loading");

  const stateIcons: Record<"loading" | "error" | "success", string> = {
    loading: "/assets/icons/loading.gif",
    error: "/assets/icons/x.svg",
    success: "/assets/icons/done.svg",
  };

  const [userProfile, setUserProfile] = useState<
    Pick<User, "phoneNumber" | "firstName" | "lastName">
  >({ firstName: "", lastName: "", phoneNumber: "" });

  useEffect(() => {
    // Fetch user data
    setUserDataState("loading");

    // use pseudo implementation for now
    const fetchUserData = () => {
      if (user?.accountType === "NON_TECHIE") {
        setUserDataState("error");

        setTimeout(() => navigate("/setup-account/non-st-error"), 500);
        return;
      }

      if (user) {
        setUserProfile({
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
        });
      }
      setUserDataState("success");
    };

    const timeout = setTimeout(fetchUserData, 3000);

    return () => clearTimeout(timeout);
  }, [changeStage, user, navigate]);

  return (
    <SetupAccountLayout
      title="Setting up account"
      icon={
        <div className="w-[190px] mx-auto">
          <SettingUpIndicator
            error={userDataState === "error"}
            loading={userDataState === "loading"}
          />
        </div>
      }
      description="Importing your details from CRM. This may take a few minutes."
    >
      <ul className="max-w-xs mb-24 w-full p-[10px] border rounded-md border-gray300">
        {Object.entries(userProfile).map(([key]) => (
          <li
            key={key}
            className={cn(
              "p-[10px] border border-transparent hover:bg-gray50 text-gray700 rounded-[4px] hover:border-gray200 flex justify-between items-center",
              Object.values(userProfile).every((item) => item.length > 0) ||
                (userDataState === "error" && "line-through")
            )}
          >
            <span className="capitalize">{key}</span>

            <div className="icon w-[18px] h-[18px]">
              <img src={stateIcons[userDataState]} alt="..." />
            </div>
          </li>
        ))}
      </ul>

      <Alert type={AlertType.warning}>
        Note: Do not refresh, close or click the back button on this page.
        Something might go wrong!
      </Alert>
    </SetupAccountLayout>
  );
};

export default STMemberSetup;

