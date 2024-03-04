import { useVerifyResetTokenMutation } from "@/__generated__/gql";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useTimer from "../../../hooks/useTimer";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";
import { TextSizeStyles } from "../../../lib/styles";
import { convertTime } from "../../../lib/utils";
import { useAlertStore } from "../../../store/alertStore";
import { useResetPasswordStageStore } from "../../../store/resetPasswordStageStore";
import {
  AlertType,
  ButtonType,
  Code,
  FormHelperType,
  TextSize,
} from "../../../types";
import Button from "../../Button";
import Form from "../../formElements/Form";
import FormHelper from "../../formElements/FormHelper";
import Input from "../../formElements/Input";
import InputGroup from "../../formElements/InputGroup";

const ResetPasswordCodeForm = ({
  setCode,
}: {
  setCode: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Code>();

  const [resendTime, setResendTime] = useTimer();
  const [showResendButton, setShowResendButton] = useState(false);
  const [verifyResetPasswordCode, { loading }] = useVerifyResetTokenMutation();

  const { showAlert } = useAlertStore();

  const { changeStage } = useResetPasswordStageStore();

  const onSubmit: SubmitHandler<Code> = (submitData) => {
    verifyResetPasswordCode({
      variables: { input: { resetToken: String(submitData.code) } },
    })
      .then(({ data }) => {
        setResendTime(30);
        setShowResendButton(true);
        const success = data?.verifyResetToken?.success;
        const errors = data?.verifyResetToken?.errors;

        if (success) {
          showAlert({
            alertType: AlertType.info,
            alertText: "Verification successful",
          });
          changeStage("reset_password");
          setCode(submitData?.code);
          reset();
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
    <Form title="Reset Password Code" onSubmit={handleSubmit(onSubmit)}>
      <p className={"text-gray500 " + TextSizeStyles[TextSize.body]}>
        Insert the 6 digit code sent to your email
      </p>
      <InputGroup>
        <Input
          {...register("code", {
            required: "please insert the code sent to your email ",
            maxLength: {
              value: 7,
              message: "code cannot be more than 7 characters",
            },
            minLength: {
              value: 5,
              message: "code cannot be less than 5 characters",
            },
            pattern: {
              value: REGEXPATTERNS.number,
              message: "input should only contain digits",
            },
          })}
          type="text"
          id="code"
          maxLength={6}
          label="Reset Code"
        />
        {errors.code && (
          <FormHelper type={FormHelperType.error}>
            {errors.code.message}
          </FormHelper>
        )}
      </InputGroup>
      {resendTime > 0 && (
        <p>Resend code after {convertTime(resendTime).secs} seconds</p>
      )}

      <Button
        className="w-full"
        disabled={loading}
        btnType={
          errors.code || loading ? ButtonType.disabled : ButtonType.primary
        }
      >
        Reset Password
      </Button>
      {showResendButton && (
        <Button
          type="button"
          btnType={resendTime > 0 ? ButtonType.disabled : ButtonType.secondary}
          className="w-full"
          onClick={() => changeStage("resend_code")}
        >
          Resend code
        </Button>
      )}
    </Form>
  );
};
export default ResetPasswordCodeForm;
