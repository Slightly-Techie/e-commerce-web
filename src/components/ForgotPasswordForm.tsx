import { SubmitHandler, useForm } from "react-hook-form"
import { AlertType, ButtonType, FormHelperType } from "../types"
import Alert from "./Alert"
import Form from "./formElements/Form"
import Input from "./formElements/Input"
import InputGroup from "./formElements/InputGroup"
import Label from "./formElements/Label"
import { REGEXPATTERNS } from "../lib/regexPatterns"
import FormHelper from "./formElements/FormHelper"
import Button from "./Button"

type FormValues = {
  email?: string;
  formSubmit(): void;
};

const ForgotPasswordForm = ({formSubmit}: FormValues) => {
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
    <Form title="Forgot Password" onSubmit={handleSubmit(onSubmit)} >
      <Alert type={AlertType.info}>
        If the email address exists, you will be sent an email with 
        instructions on how to reset your password.
      </Alert>

      <div className="space-y-4">
        <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: REGEXPATTERNS.email,
                  message: "Enter a valid email",
                },
              })}
              id="email"
              icon={<img src="assets/icons/envelope.svg" alt="..." />}
              placeholder="slightlytechie@gmail.com"
            />
            {errors.email && (
              <FormHelper type={FormHelperType.error}>
                {errors.email.message}
              </FormHelper>
            )}
        </InputGroup>
      </div>

      <Button
            className="w-full"
            btnType={
                errors.email ? ButtonType.disabled : ButtonType.primary
            }
        >
            Open mail
      </Button>

    </Form>
  )
}

export default ForgotPasswordForm