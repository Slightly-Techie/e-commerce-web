import { useResetPasswordMutation } from "@/__generated__/gql";
import { SubmitHandler, useForm } from "react-hook-form";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";
import { TextSizeStyles } from "../../../lib/styles";
import { useAlertStore } from "../../../store/alertStore";
import { useResetPasswordStageStore } from "../../../store/resetPasswordStageStore";
import {
  AlertType,
  ButtonType,
  FormHelperType,
  ResetPasswordFormFields,
  TextSize,
} from "../../../types";
import Button from "../../Button";
import Form from "../../formElements/Form";
import FormHelper from "../../formElements/FormHelper";
import Input from "../../formElements/Input";
import InputGroup from "../../formElements/InputGroup";

const ResetPasswordForm = ({ code }: { code: number | null }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordFormFields>();
  const { showAlert } = useAlertStore();
  const [forgottenPasswordSubmit, { loading }] = useResetPasswordMutation();

  const { changeStage } = useResetPasswordStageStore();

  const onSubmit: SubmitHandler<ResetPasswordFormFields> = (data) => {
    const { password, confirm_password } = data;
    forgottenPasswordSubmit({
      variables: {
        input: {
          resetToken: String(code),
          newPassword: password,
          passwordConfirmation: confirm_password,
        },
      },
    })
      .then(({ data }) => {
        const success = data?.resetPassword?.success;
        const errors = data?.resetPassword?.errors;

        if (success) {
          showAlert({
            alertType: AlertType.success,
            alertText: "Password reset successfully",
          });
          reset();
          changeStage("successful");
        } else if (errors) {
          errors.forEach((err) => {
            showAlert({
              alertType: AlertType.error,
              alertText: err.message || err.property,
            });
          });
        }
      })
      .catch((err) => {
        console.log({ err });
        showAlert({
          alertType: AlertType.error,
          alertText: "Request failed",
        });
      });
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
        disabled={loading}
        btnType={
          errors.password || loading ? ButtonType.disabled : ButtonType.primary
        }
      >
        Reset Password
      </Button>
    </Form>
  );
};
export default ResetPasswordForm;
