import { useNavigate } from "react-router-dom";
import Button from "./Button";
import SetupAccountLayout from "./SetupAccountLayout";
import { ButtonType } from "../types";

const AccountSetupComplete = () => {
  const navigate = useNavigate();

  return (
    <SetupAccountLayout
      title="Setup Complete"
      description="Welcome to Slightly Techie E-commerce space"
      icon={
        <img
          className="w-[107px] mx-auto"
          src="assets/icons/done.svg"
          alt="..."
        />
      }
    >
      <Button btnType={ButtonType.primary} onClick={() => navigate("/")}>
        Start shopping now
      </Button>
    </SetupAccountLayout>
  );
};

export default AccountSetupComplete;
