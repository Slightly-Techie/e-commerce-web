import { SubmitHandler, useForm } from "react-hook-form"
import { REGEXPATTERNS } from "../lib/regexPatterns"
import { ButtonType, FormHelperType } from "../types"
import Form from "./formElements/Form"
import FormHelper from "./formElements/FormHelper"
import Input from "./formElements/Input"
import InputGroup from "./formElements/InputGroup"
import Label from "./formElements/Label"
import Button from "./Button"




type FormProps = {
    formSubmit(): void;
};

type FormValues = {
    password: string;
    confirmPassword: string;
};

const PasswordResetForm = ({formSubmit}:FormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log({ data });
        formSubmit();
    };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} title="Reset Password">
        <div className="space-y-4">
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

            <InputGroup>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                    {...register("confirmPassword", {
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
                    id="confirmPassword"
                    icon={<img src="assets/icons/lock-open.svg" alt="..." />}
                    placeholder="Enter your password again"
                />
                {errors.confirmPassword && (
                    <FormHelper type={FormHelperType.error}>
                    {errors.confirmPassword.message}
                    </FormHelper>
                )}
            </InputGroup>

        </div>

        <Button
            className="w-full"
            btnType={
                errors.password ||
                errors.confirmPassword
                  ? ButtonType.disabled
                  : ButtonType.primary
            }
            
        >
            Reset Password
        </Button>
    </Form>
  )
}

export default PasswordResetForm