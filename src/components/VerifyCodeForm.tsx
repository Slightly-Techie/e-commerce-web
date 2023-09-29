import Alert from "./Alert";
import Form from "./formElements/Form";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";
import Button from "./Button";
import { AlertType, ButtonType, FormHelperType } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import FormHelper from "./formElements/FormHelper";
import { convertTime, hideEmail } from "../lib/utils";
import { useSignupStageStore } from "../store/signupStageStore";
import { useUserStore } from "../store/userStore";
import { useMutation } from "@apollo/client";
import { RESEND_VERFICATION, VERIFY_CODE } from "../lib/queries";
import { useAlertStore } from "../store/alertStore";
import useTimer from "../hooks/useTimer";

type FormValues = {
  code: string;
};

const VerifyCodeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [resendTime, setResendTime] = useTimer();

  const { changeStage } = useSignupStageStore();
  const { user, updateToken } = useUserStore();
  const { showAlert } = useAlertStore();

  const [verifyCode, { loading }] = useMutation(VERIFY_CODE);
  const [resendVCode, { loading: sendingVCode }] =
    useMutation(RESEND_VERFICATION);

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    verifyCode({
      variables: { input: { token: formData.code } },
    }).then(({ data }) => {
      setResendTime(30);
      if (data.confirmEmail.success) {
        showAlert({
          alertType: AlertType.info,
          alertText: "Verification successful",
        });
        updateToken(data.confirmEmail.token);
        changeStage("choose account type");
        reset();
      } else {
        data.confirmEmail.errors.forEach(
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

  const handleResendVerification = () => {
    setResendTime(30);
    resendVCode({ variables: { input: { email: user?.email } } })
      .then(({ data: { resendEmailOtp } }) => {
        if (resendEmailOtp.success) {
          showAlert({
            alertType: AlertType.success,
            alertText: "New token has been sent to your email",
          });
        }
        if (resendEmailOtp.errors) {
          resendEmailOtp.errors.forEach(({ message }: { message: string }) => {
            showAlert({
              alertType: AlertType.error,
              alertText: message,
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
    <Form onSubmit={handleSubmit(onSubmit)} title="Get code from email">
      {user && (
        <Alert>
          To confirm your identity, please enter the verification code that was
          sent to {hideEmail(user.email)}
        </Alert>
      )}

      <InputGroup>
        <Input
          type="number"
          {...register("code", {
            required: "Code is required",
            // pattern: {
            //   value: REGEXPATTERNS.verificationCode,
            //   message: "Should be exactly 6 digits",
            // },
          })}
          id="code"
          label="Verification code"
          icon={<img src="assets/icons/lock-open.svg" alt="..." />}
          placeholder="Enter code"
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

      <div className="flex gap-3">
        <Button
          type="button"
          btnType={
            sendingVCode || resendTime > 0
              ? ButtonType.disabled
              : ButtonType.secondary
          }
          className="w-full"
          onClick={handleResendVerification}
        >
          Resend code
        </Button>

        <Button
          type="submit"
          btnType={
            errors.code || loading ? ButtonType.disabled : ButtonType.primary
          }
          className="w-full"
        >
          Verify
        </Button>
      </div>
    </Form>
  );
};

export default VerifyCodeForm;
