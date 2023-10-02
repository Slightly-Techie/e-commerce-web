import Form from "../../formElements/Form";
import Input from "../../formElements/Input";
import { ButtonType, FormHelperType, Code, AlertType } from "../../../types";
import { TextSize } from "../../../types";
import { TextSizeStyles } from "../../../lib/styles";
import Button from "../../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHelper from "../../formElements/FormHelper";
import InputGroup from "../../formElements/InputGroup";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";
import useTimer from "../../../hooks/useTimer";
import { useMutation } from "@apollo/client";
import { VERIFY_PASSWORD_RESET_TOKEN } from "../../../lib/queries";
import { useAlertStore } from "../../../store/alertStore";
import { convertTime } from "../../../lib/utils";
import { useState } from "react";
import { useResetPasswordStageStore } from "../../../store/resetPasswordStageStore";

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
  const [verifyResetPasswordCode, { loading }] = useMutation(
    VERIFY_PASSWORD_RESET_TOKEN
  );

  const { showAlert } = useAlertStore();

  const { changeStage } = useResetPasswordStageStore();

  const onSubmit: SubmitHandler<Code> = (submitData) => {
    verifyResetPasswordCode({
      variables: { input: { resetToken: submitData.code } },
    }).then(({ data }) => {
      setResendTime(30);
      setShowResendButton(true);
      if (data.verifyResetToken.success) {
        showAlert({
          alertType: AlertType.info,
          alertText: "Verification successful",
        });
        changeStage("reset_password");
        setCode(submitData?.code);
        reset();
      } else {
        data.verifyResetToken.errors.forEach(
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

