import Form from "../../formElements/Form";
import Input from "../../formElements/Input";
import {
  ResetPasswordFormFields,
  ButtonType,
  FormHelperType,
  ResetPasswordStatus,
  Code,
  AlertType,
} from "../../../types";
import { TextSize } from "../../../types";
import { TextSizeStyles } from "../../../lib/styles";
import Button from "../../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHelper from "../../formElements/FormHelper";
import InputGroup from "../../formElements/InputGroup";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD } from "../../../lib/queries";
import { useAlertStore } from "../../../store/alertStore";

const ResetPasswordForm = ({
  setStatus,
  code,
}: {
  setStatus: React.Dispatch<React.SetStateAction<ResetPasswordStatus>>;
  code: number | null;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordFormFields>();
  const { showAlert } = useAlertStore();
  const [forgottenPasswordSubmit, { loading }] = useMutation(RESET_PASSWORD);

  const onSubmit: SubmitHandler<ResetPasswordFormFields> = (data) => {
    const { password, confirm_password } = data;
    forgottenPasswordSubmit({
      variables: {
        input: {
          resetToken: code,
          newPassword: password,
          passwordConfirmation: confirm_password,
        },
      },
    }).then(({ data }) => {
      if (data.resetPassword.success) {
        showAlert({
          alertType: AlertType.success,
          alertText: "password reset successfully",
        });
        reset();
        setStatus("successful");
      } else {
        data.forgotPassword.errors.forEach(
          ({ message }: { message: string; property: string }) => {
            showAlert({
              alertType: AlertType.error,
              alertText: message,
            });
          }
        );
      }
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
