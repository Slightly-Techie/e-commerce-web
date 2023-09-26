import Form from "../../formElements/Form";
import Input from "../../formElements/Input";
import { Code, ButtonType, FormHelperType } from "../../../types";
import { TextSize } from "../../../types";
import { TextSizeStyles } from "../../../lib/styles";
import Button from "../../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHelper from "../../formElements/FormHelper";
import InputGroup from "../../formElements/InputGroup";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";
import { useNavigate } from "react-router-dom";

const ForgotPasswordCodeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Code>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Code> = (data) => {
    console.log(data);
    navigate("/reset-password");
  };
  return (
    <Form title="Forgot password?" onSubmit={handleSubmit(onSubmit)}>
      <p className={"text-gray500 " + TextSizeStyles[TextSize.body]}>
        Input the 6 digit code sent you your e-mail
      </p>
      <InputGroup>
        <Input
          type="number"
          {...register("code", {
            required: "Code is required",

            pattern: {
              value: REGEXPATTERNS.verificationCode,
              message: "Should be exactly 6 digits",
            },
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
      <Button
        className="w-full"
        btnType={errors.code ? ButtonType.disabled : ButtonType.primary}
      >
        Continue
      </Button>
    </Form>
  );
};
export default ForgotPasswordCodeForm;
