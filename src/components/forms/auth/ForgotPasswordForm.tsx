import Form from "../../formElements/Form";
import Input from "../../formElements/Input";
import {
  ForgotPasswordFormFields,
  ButtonType,
  FormHelperType,
  AlertType,
} from "../../../types";
import { TextSize } from "../../../types";
import Alert from "../../Alert";
import { TextSizeStyles } from "../../../lib/styles";
import Button from "../../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHelper from "../../formElements/FormHelper";
import InputGroup from "../../formElements/InputGroup";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormFields>();

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = (data) => {
    navigate("/reset-password");
    console.log(data);
  };
  return (
    <Form title="Forgot password?" onSubmit={handleSubmit(onSubmit)}>
      <Alert type={AlertType.info}>
        Please double-check that you are using the same email address that you
        used to sign up for CRM.
      </Alert>
      <p className={"text-gray500 " + TextSizeStyles[TextSize.body]}>
        No worries, we&lsquo;ll send you reset instructions.
      </p>
      <InputGroup>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: REGEXPATTERNS.email,
              message: "Enter a valid email",
            },
          })}
          label="Email"
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
      <Button
        className="w-full"
        btnType={errors.email ? ButtonType.disabled : ButtonType.primary}
      >
        Continue
      </Button>
    </Form>
  );
};
export default ForgotPasswordForm;
