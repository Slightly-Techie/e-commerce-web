import { Link } from "react-router-dom";
import Form from "../components/formElements/Form";
import Input from "../components/formElements/Input";
import Label from "../components/formElements/Label";
import {
  AlertType,
  ButtonType,
  FormHelperType,
  SignupFormFields,
} from "../types";
import { TextSize } from "../types";
import Alert from "../components/Alert";
import { TextSizeStyles } from "../lib/styles";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHelper from "./formElements/FormHelper";
import InputGroup from "./formElements/InputGroup";
import { REGEXPATTERNS } from "../lib/regexPatterns";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../lib/queries";
import { useSignupStageStore } from "../store/signupStageStore";
import { useUserStore } from "../store/userStore";
import { useAlertStore } from "../store/alertStore";

const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormFields>();

  const { changeStage } = useSignupStageStore();
  const { login } = useUserStore();

  const [createUser, { error, loading }] = useMutation(CREATE_USER);

  const onSubmit: SubmitHandler<SignupFormFields> = (data) => {
    createUser({
      variables: {
        input: {
          email: data.email,
          password: data.password,
          username: data.username,
        },
      },
    })
      .then(({ data }) => {
        if (data.createUser.user) {
          login({ user: data.createUser.user, token: data.createUser.token });
          showAlert({
            alertType: AlertType.info,
            alertText: "Account details captured",
          });
          changeStage("verify code");
          return;
        }

        if (data.createUser.errors) {
          data.createUser.errors.forEach(
            (err: { message: string | null; property: string }) => {
              showAlert({
                alertType: AlertType.info,
                alertText: err.property,
              });
            }
          );
        }
      })
      .catch(() => {
        showAlert({
          alertType: AlertType.error,
          alertText: String(error?.message),
        });
      });
  };

  const { showAlert } = useAlertStore();

  return (
    <Form title="Create Account" onSubmit={handleSubmit(onSubmit)}>
      {error && <Alert type={AlertType.error}>{error.message}</Alert>}
      <Alert
        type={AlertType.info}
        onClick={() =>
          showAlert({ alertType: AlertType.info, alertText: "some info" })
        }
      >
        Please double-check that you are using the same email address that you
        used to sign up for CRM.
      </Alert>

      <div className="space-y-4">
        <InputGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: REGEXPATTERNS.username,
                message: "Enter a valid username",
              },
            })}
            id="username"
            icon={<img src="assets/icons/user.svg" alt="..." />}
            placeholder="Enter your username"
          />
          {errors.username && (
            <FormHelper type={FormHelperType.error}>
              {errors.username.message}
            </FormHelper>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: REGEXPATTERNS.email,
                message: "Enter a valid email",
              },
            })}
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

        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Passsword cannot be less than 8 characters",
              },
              pattern: {
                value: REGEXPATTERNS.password,
                message: "Password should a be a mix of letters and symbols",
              },
            })}
            type="password"
            id="password"
            icon={<img src="assets/icons/lock-open.svg" alt="..." />}
            placeholder="Enter your password"
          />
          {errors.password && (
            <FormHelper type={FormHelperType.error}>
              {errors.password.message}
            </FormHelper>
          )}
        </InputGroup>
      </div>

      <Button
        className="w-full"
        disabled={loading}
        btnType={
          errors.email || errors.password || errors.username || loading
            ? ButtonType.disabled
            : ButtonType.primary
        }
      >
        {loading ? "Submitting" : "Submit"}
      </Button>

      <p className={"text-gray500 " + TextSizeStyles[TextSize.small]}>
        By using STMarket, you are agreeing to our{" "}
        <Link to="#" className="underline underline-offset-[6px] text-primary">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link to="#" className="underline underline-offset-[6px] text-primary">
          terms of service.
        </Link>
      </p>
    </Form>
  );
};

export default CreateAccountForm;
