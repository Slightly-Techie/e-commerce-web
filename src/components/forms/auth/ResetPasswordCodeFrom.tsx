import Form from "../../formElements/Form";
import Input from "../../formElements/Input";
import {
  ButtonType,
  FormHelperType,
  Code,
  ResetPasswordStatus,
} from "../../../types";
import { TextSize } from "../../../types";
import { TextSizeStyles } from "../../../lib/styles";
import Button from "../../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHelper from "../../formElements/FormHelper";
import InputGroup from "../../formElements/InputGroup";
import { REGEXPATTERNS } from "../../../lib/regexPatterns";

const ResetPasswordCodeForm = ({
  setStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<ResetPasswordStatus>>;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Code>();

  const onSubmit: SubmitHandler<Code> = (data) => {
    setStatus("reset_password");
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

      <Button
        className="w-full"
        btnType={errors.code ? ButtonType.disabled : ButtonType.primary}
      >
        Reset Password
      </Button>
    </Form>
  );
};
export default ResetPasswordCodeForm;
