import Form from "../../formElements/Form";
import Input from "../../formElements/Input";
import {
  ForgotPasswordFormFields,
  ButtonType,
  FormHelperType,
  AlertType,
  ResetPasswordStatus,
} from "../../../types";
import Alert from "../../Alert";
import Button from "../../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHelper from "../../formElements/FormHelper";
import InputGroup from "../../formElements/InputGroup";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";
import { useMutation } from "@apollo/client";
import { FORGOT_PASSWORD } from "../../../lib/queries";
import { useAlertStore } from "../../../store/alertStore";
import { useLocation } from "react-router-dom";
import { useResetPasswordStageStore } from "../../../store/resetPasswordStageStore";

const ResendResetPasswordCodeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordFormFields>();
  const { showAlert } = useAlertStore();
  const location = useLocation();
  const data = location.state;
  const [forgottenPasswordSubmit, { loading }] = useMutation(FORGOT_PASSWORD);

  const { changeStage } = useResetPasswordStageStore();

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = (data) => {
    forgottenPasswordSubmit({
      variables: {
        input: { email: data.email },
      },
    }).then(({ data }) => {
      if (data.forgotPassword.success) {
        showAlert({
          alertType: AlertType.success,
          alertText: "Email sent successfully",
        });
        reset();
        changeStage("code");
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
    <Form title="Resend reset password code" onSubmit={handleSubmit(onSubmit)}>
      <Alert type={AlertType.info}>
        If the email address exists, you will be sent an email with instructions
        on how to reset your password.
      </Alert>

      <InputGroup>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: REGEXPATTERNS.email,
              message: "Enter a valid email",
            },
          })}
          defaultValue={data?.email || ""}
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
        disabled={loading}
        btnType={
          errors.email || loading ? ButtonType.disabled : ButtonType.primary
        }
      >
        Resend
      </Button>
      <Button
        className="w-full"
        btnType={ButtonType.secondary}
        onClick={() => changeStage("code")}
      >
        I have my code
      </Button>
    </Form>
  );
};
export default ResendResetPasswordCodeForm;

