import Form from "../../formElements/Form";
import Input from "../../formElements/Input";
import {
  ButtonType,
  FormHelperType,
  Code,
  ResetPasswordStatus,
  AlertType,
} from "../../../types";
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

const ResetPasswordCodeForm = ({
  setStatus,
  setCode,
}: {
  setStatus: React.Dispatch<React.SetStateAction<ResetPasswordStatus>>;
  setCode: React.Dispatch<React.SetStateAction<Code | null>>;
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

  const onSubmit: SubmitHandler<Code> = (data) => {
    verifyResetPasswordCode({
      variables: { input: { resetToken: data.code } },
    }).then(({ data }) => {
      setResendTime(30);
      setShowResendButton(true);
      if (data.verifyResetToken.success) {
        showAlert({
          alertType: AlertType.info,
          alertText: "Verification successful",
        });
        setStatus("reset_password");
        setCode(data.code);
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

    console.log(data);
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
              value: 6,
              message: "code cannot be more than 6 characters",
            },
            minLength: {
              value: 6,
              message: "code cannot be less than 6 characters",
            },
            pattern: {
              value: REGEXPATTERNS.verificationCode,
              message: "Should be exactly 6 digits",
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
          onClick={() => setStatus("resend_code")}
        >
          Resend code
        </Button>
      )}
    </Form>
  );
};
export default ResetPasswordCodeForm;
