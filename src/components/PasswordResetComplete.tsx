import { useNavigate } from "react-router-dom"
import { TextSizeStyles } from "../lib/styles"
import { cn } from "../lib/utils"
import { ButtonType } from "../types"
import Button from "./Button"



const PasswordResetComplete = () => {
    const navigate = useNavigate();
  return (
    
    <div
        className={cn(
            "bg-white border border-gray300 space-y-6 text-black rounded-lg h-fit mt-28 p-5 max-w-[550px] w-full",
        )}
    >
        
        <div className="flex-1 py-5 flex flex-col justify-center items-center">
            <div className="max-w-[300px] w-full mb-2 text-center">
            <div className="space-y-5">

                <img
                    className="w-[107px] mx-auto"
                    src="assets/icons/done.svg"
                    alt="..."
                />

                <div>
                <h1 className={TextSizeStyles.heading5}>All Done</h1>
                <p className={cn("text-gray500")}>
                    You have set your password. For security, you'll need this password whenever you log in.
                </p>
                </div>
            </div>
            </div>
        </div>
        

        <Button className="w-full" btnType={ButtonType.primary} onClick={() => navigate("/login")}>
            Done
        </Button>

    </div>
    
  )
}

export default PasswordResetComplete