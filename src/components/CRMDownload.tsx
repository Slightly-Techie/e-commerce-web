import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import Alert from "./Alert";
import { AlertType } from "../types";
import SettingUpIndicator from "./SettingUpIndicator";
import SetupAccountLayout from "./SetupAccountLayout";

const CRMDownload = ({
  handleDownloadComplete = () => {
    alert("Download complete");
    return;
  },
}: {
  handleDownloadComplete(): void;
}) => {
  type UserData = {
    username: string;
    name: string;
    profile: string;
  };
  const [userData, setUserData] = useState<UserData>({
    username: "",
    name: "",
    profile: "",
  });

  useEffect(() => {
    // Fetch user data

    // use pseudo implementation for now
    const fetchUserData = () => {
      setUserData({
        username: "john_doe",
        name: "John Doe",
        profile: "Some interesting fact",
      });

      setTimeout(() => handleDownloadComplete(), 10000);
    };

    const timeout = setTimeout(fetchUserData, 10000);

    return () => clearTimeout(timeout);
  }, [handleDownloadComplete]);

  return (
    <SetupAccountLayout
      title="Setting up account"
      icon={
        <div className="w-[190px] mx-auto">
          <SettingUpIndicator loading={userData.name.length < 1} />
        </div>
      }
      description="Importing your details from CRM. This may take a few minutes."
    >
      <ul className="max-w-xs mb-24 w-full p-[10px] border rounded-md border-gray300">
        {Object.entries(userData).map(([key, value]) => (
          <li
            key={key}
            className={cn(
              "p-[10px] border border-transparent hover:bg-gray50 text-gray700 rounded-[4px] hover:border-gray200 flex justify-between items-center",
              Object.values(userData).every((item) => item.length > 0) &&
                "line-through"
            )}
          >
            <span className="capitalize">{key}</span>

            <div className="icon w-[18px] h-[18px]">
              {value.length > 0 ? (
                <img src="/assets/icons/done.svg" alt="..." />
              ) : (
                <img src="/assets/icons/loading.gif" alt="..." />
              )}
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

export default CRMDownload;
