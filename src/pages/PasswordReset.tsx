import { useNavigate } from "react-router-dom"
import AuthLayout from "../components/AuthLayout"
import Button from "../components/Button"
import { ButtonType, PasswordResetState } from "../types"

import PasswordResetForm from "../components/PasswordResetForm"
import { useState } from "react"
import PasswordResetComplete from "../components/PasswordResetComplete"
// import PasswordResetComplete from "../components/PasswordResetComplete"


const PasswordReset = () => {
    const navigate = useNavigate();
    const [passwordReset, setPasswordReset] = useState<PasswordResetState>("enter password");

    const onSubmit = () => {
        // navigate("/reset") 
        setPasswordReset("reset complete")
    }

  return (
    <AuthLayout>
        <div className="py-8">
            <div className="header grid place-content-end">
                <Button
                    btnType={ButtonType.secondary}
                    onClick={() => navigate("/login")}
                    className="w-fit text-white"
                >
                    Back to Login
                </Button>
            </div>

            {passwordReset == "enter password" && ( <PasswordResetForm formSubmit={onSubmit}/> )}
            

            {passwordReset == "reset complete" && ( <PasswordResetComplete/> )}

        </div>
    </AuthLayout>
  )
}

export default PasswordReset