import Alert from "./Alert";
import Form from "./formElements/Form";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";
import Label from "./formElements/Label";
import Button from "./Button";
import { ButtonType, FormHelperType } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import FormHelper from "./formElements/FormHelper";
import { hideEmail } from "../lib/utils";
import { REGEXPATTERNS } from "../lib/regexPatterns";

type FormValues = {
  code: string;
};

type FormProps = {
  formSubmit(): void;
  email: string;
};

const VerifyCodeForm = ({ formSubmit, email }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log({ data });
    formSubmit();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} title="Get code from email">
      <Alert>
        To confirm your identity, please enter the verification code that was
        sent to {hideEmail(email)}
      </Alert>

      <InputGroup>
        <Label htmlFor="code">Verification code</Label>
        <Input
          type="number"
          {...register("code", {
            required: "Code is required",

            pattern: {
              value: REGEXPATTERNS.verificationCode,
              message: "Should be exactly 6 digits",
            },
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
        btnType={errors.code ? ButtonType.disabled : ButtonType.primary}
        className="w-full"
      >
        Verify
      </Button>
    </Form>
  );
};

export default VerifyCodeForm;
