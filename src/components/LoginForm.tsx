import { SubmitHandler, useForm } from "react-hook-form";
import { AlertType, ButtonType, FormHelperType, LoginFields } from "../types"
import Form from "./formElements/Form";
import Alert from "./Alert";
import InputGroup from "./formElements/InputGroup";
import Label from "./formElements/Label";
import Input from "./formElements/Input";
import { REGEXPATTERNS } from "../lib/regexPatterns";
import FormHelper from "./formElements/FormHelper";
import Button from "./Button";
import Checkbox from "./formElements/Checkbox";
import { useNavigate } from "react-router-dom";


type LoginProps = {
    formSubmit(data: LoginFields):void;
}

const LoginForm = ({formSubmit}:LoginProps) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFields>();

    const onSubmit: SubmitHandler<LoginFields> = (data) => {
        formSubmit(data);
    };

  return (
    <Form title="Welcome Back" onSubmit={handleSubmit(onSubmit)}>
        <Alert type={AlertType.info}>
            Please double-check that you are using the same email address that you
            used to sign up for CRM.
        </Alert>

        <div className="space-y-4">
            <InputGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                    {...register("username", {
                    required: "Username is required",
                    pattern: {
                        value: REGEXPATTERNS.username,
                        message: "Enter a valid username",
                    },
                    })}
                    id="username"
                    icon={<img src="assets/icons/user.svg" alt="..." />}
                    placeholder="Enter your username"
                />
                {errors.username && (
                    <FormHelper type={FormHelperType.error}>
                    {errors.username.message}
                    </FormHelper>
                )}
            </InputGroup>

            <InputGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                    {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Passsword cannot be less than 8 characters",
                    },
                    pattern: {
                        value: REGEXPATTERNS.password,
                        message: "Password should a be a mix of letters and symbols",
                    },
                    })}
                    type="password"
                    id="password"
                    icon={<img src="assets/icons/lock-open.svg" alt="..." />}
                    placeholder="Enter your password"
                />
                {errors.password && (
                    <FormHelper type={FormHelperType.error}>
                    {errors.password.message}
                    </FormHelper>
                )}
            </InputGroup>
        </div>

        <div className="space-x-3 flex justify-between">
            <Checkbox
                {...register("rememberMe", { required: "Tick this field" })}
                id="agreeTerms"
                labelText="Remember me"
            />

            <p className="cursor-pointer" onClick={() => navigate("/forgot-password")}>Forgot Password?</p>
        </div>

        <Button
            className="w-full"
            btnType={
                errors.password ||
                errors.username
                  ? ButtonType.disabled
                  : ButtonType.primary
            }
        >
            Login
        </Button>

    </Form>
  )
}

export default LoginForm