import Alert from "./Alert";
import Form from "./formElements/Form";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";
import Label from "./formElements/Label";
import Button from "./Button";
import { AlertType, ButtonType, FormHelperType } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import FormHelper from "./formElements/FormHelper";
import { hideEmail } from "../lib/utils";
import { useSignupStageStore } from "../store/signupStageStore";
import { useUserStore } from "../store/userStore";
import { useMutation } from "@apollo/client";
import { VERIFY_CODE } from "../lib/queries";
import { useAlertStore } from "../store/alertStore";

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

  const { changeStage } = useSignupStageStore();
  const { user, updateToken } = useUserStore();
  const { showAlert } = useAlertStore();

  const [verifyCode, { loading }] = useMutation(VERIFY_CODE);

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    verifyCode({
      variables: { input: { token: formData.code } },
    }).then(({ data }) => {
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)} title="Get code from email">
      {user && (
        <Alert>
          To confirm your identity, please enter the verification code that was
          sent to {hideEmail(user.email)}
        </Alert>
      )}

      <InputGroup>
        <Label htmlFor="code">Verification code</Label>
        <Input
          type="number"
          {...register("code", {
            required: "Code is required",
            // pattern: {
            //   value: REGEXPATTERNS.verificationCode,
            //   message: "Should be exactly 6 digits",
            // },
          })}
          icon={<img src="assets/icons/lock-open.svg" alt="..." />}
          placeholder="Enter code"
        />
        {errors.code && (
          <FormHelper type={FormHelperType.error}>
            {errors.code.message}
          </FormHelper>
        )}
      </InputGroup>

      <Button
        disabled={loading}
        btnType={
          errors.code || loading ? ButtonType.disabled : ButtonType.primary
        }
        className="w-full"
      >
        Verify
      </Button>
    </Form>
  );
};

export default VerifyCodeForm;
