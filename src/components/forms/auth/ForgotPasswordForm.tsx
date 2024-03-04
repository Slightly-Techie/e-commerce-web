import { useForgotPasswordMutation } from "@/__generated__/gql";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";
import { useAlertStore } from "../../../store/alertStore";
import {
  AlertType,
  ButtonType,
  ForgotPasswordFormFields,
  FormHelperType,
} from "../../../types";
import Alert from "../../Alert";
import Button from "../../Button";
import Form from "../../formElements/Form";
import FormHelper from "../../formElements/FormHelper";
import Input from "../../formElements/Input";
import InputGroup from "../../formElements/InputGroup";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordFormFields>();
  const { showAlert } = useAlertStore();

  const [forgottenPasswordSubmit, { loading }] = useForgotPasswordMutation();

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = (data) => {
    const { email } = data;
    forgottenPasswordSubmit({
      variables: {
        input: { email },
      },
    })
      .then(({ data }) => {
        const success = data?.forgotPassword?.success;
        const errors = data?.forgotPassword?.errors;

        if (success) {
          showAlert({
            alertType: AlertType.success,
            alertText: "Email sent successfully",
          });
          reset();
          navigate("/reset-password", { state: { email } });
        } else if (errors) {
          errors.forEach((err) => {
            showAlert({
              alertType: AlertType.error,
              alertText: err.message || err.property,
            });
          });
        }
      })
      .catch(() => {
        showAlert({
          alertType: AlertType.error,
          alertText: "Request failed",
        });
      });
  };

  return (
    <Form title="Forgot password?" onSubmit={handleSubmit(onSubmit)}>
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
        {loading ? "Sending..." : "Continue"}
      </Button>
    </Form>
  );
};
export default ForgotPasswordForm;
