import { Link } from "react-router-dom";
import { TextSizeStyles } from "../lib/styles";
import { cn } from "../lib/utils";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const SetupAccountLayout = ({ children, title, description, icon }: Props) => {
  return (
    <div className="max-w-screen-xl px-[40px] lg:px-[60px] mx-auto min-h-screen flex flex-col">
      <Link to="/" className="header mt-12">
        <img src="assets/icons/Logo.svg" alt="logo" />
      </Link>

      <div className="flex-1 py-20 flex flex-col justify-center items-center">
        <div className="max-w-[300px] w-full mb-6 text-center">
          <div className="space-y-8">
            {icon}

            <div>
              <h1 className={TextSizeStyles.heading5}>{title}</h1>
              <p className={cn("text-gray500")}>{description}</p>
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default SetupAccountLayout;