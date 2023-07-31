import Form from "../../formElements/Form";
import Input from "../../formElements/Input";
import { ResetPasswordFormFields, ButtonType, FormHelperType } from "../../../types";
import { TextSize } from "../../../types";
import { TextSizeStyles } from "../../../lib/styles";
import Button from "../../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHelper from "../../formElements/FormHelper";
import InputGroup from "../../formElements/InputGroup";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormFields>();

  const onSubmit: SubmitHandler<ResetPasswordFormFields> = (data) => {
    console.log(data);
  };
  return (
    <Form title="Reset password" onSubmit={handleSubmit(onSubmit)}>
      <p className={"text-gray500 " + TextSizeStyles[TextSize.body]}>
        Give yourself a new password, let's try to remember it this time.
      </p>
      <InputGroup>
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password cannot be less than 8 characters",
            },
            pattern: {
              value: REGEXPATTERNS.password,
              message: "Password should a be a mix of letters and symbols",
            },
          })}
          type="password"
          id="password"
          label="New Password"
          icon={<img src="assets/icons/lock-open.svg" alt="..." />}
          placeholder="Enter your new password"
        />
        {errors.password && (
          <FormHelper type={FormHelperType.error}>
            {errors.password.message}
          </FormHelper>
        )}
      </InputGroup>
      <InputGroup>
        <Input
          {...register("confirm_password", {
            required: "Confirm password is required",
            minLength: {
              value: 8,
              message: "Password cannot be less than 8 characters",
            },
            pattern: {
              value: REGEXPATTERNS.password,
              message: "Password should a be a mix of letters and symbols",
            },
            validate: (value) =>
              value === watch("password") || "The passwords do not match",
          })}
          type="password"
          id="confirm_password"
          label="Confirm Password"
          icon={<img src="assets/icons/lock-open.svg" alt="..." />}
          placeholder="Enter your new password"
        />
        {errors.confirm_password && (
          <FormHelper type={FormHelperType.error}>
            {errors.confirm_password.message}
          </FormHelper>
        )}
      </InputGroup>
      <Button
        className="w-full"
        btnType={errors.password ? ButtonType.disabled : ButtonType.primary}
      >
        Reset Password
      </Button>
    </Form>
  );
};
export default ResetPasswordForm;
