import { useMutation } from "@apollo/client";
import { AlertType, ButtonType, FormHelperType } from "../types";
import Alert from "./Alert";
import Button from "./Button";
import Checkbox from "./formElements/Checkbox";
import Form from "./formElements/Form";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";
import Label from "./formElements/Label";
import { LOGIN } from "../lib/queries";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAlertStore } from "../store/alertStore";
import { REGEXPATTERNS } from "../lib/regexPatterns";
import FormHelper from "./formElements/FormHelper";
import { useUserStore } from "../store/userStore";
import { Link, useNavigate } from "react-router-dom";
import { useSignupStageStore } from "../store/signupStageStore";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loginUser, { loading }] = useMutation(LOGIN);
  const { showAlert } = useAlertStore();
  const { login, updateToken } = useUserStore();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const { changeStage } = useSignupStageStore();

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    loginUser({
      variables: {
        input: { password: formData.password, email: formData.email },
      },
    })
      .then(({ data }) => {
        if (data.login.user) {
          login({ user: data.login.user, token: data.login.token });
          updateToken(data.login.token);
          showAlert({
            alertType: AlertType.success,
            alertText: "Login successful",
          });
          navigate("/");
          return;
        }

        if (!data.login.user.emailConfirmed) {
          changeStage("verify code");

          showAlert({
            alertType: AlertType.error,
            alertText: "Please verify your account",
          });
        }

        if (data.login.errors) {
          data.login.errors.forEach(
            (err: { message: string; property: string }) => {
              showAlert({
                alertType: AlertType.error,
                alertText: err.message,
              });
            }
          );
        }
      })
      .catch(() => {
        showAlert({ alertType: AlertType.error, alertText: "Request failed" });
      });
  };

  return (
    <Form title="Welcome Back" onSubmit={handleSubmit(onSubmit)}>
      <Alert type={AlertType.info}>
        For ST Members. Please double-check that you are using the same email
        address that you used to sign up for CRM.
      </Alert>

      <div className="space-y-4">
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: REGEXPATTERNS.email,
                message: "Ener a valid email",
              },
            })}
            icon={<img src="/assets/icons/envelope.svg" alt="..." />}
            placeholder="Enter your email"
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
            type="password"
            id="password"
            {...register("password", {
              pattern: {
                value: REGEXPATTERNS.password,
                message: "Enter a valid password",
              },
            })}
            icon={<img src="/assets/icons/lock-open.svg" alt="..." />}
            placeholder="Enter your password"
          />
          {errors.password && (
            <FormHelper type={FormHelperType.error}>
              {errors.password.message}
            </FormHelper>
          )}
        </InputGroup>
      </div>

      <div className="flex justify-between">
        <div className="flex items-start space-x-3">
          <Checkbox id="remember" labelText="Remember me" />
        </div>

        <div>
          <Link to="/forgot-password" className="text-gray-400">
            Forgot password
          </Link>
        </div>
      </div>

      <Button
        className="w-full"
        btnType={
          loading || errors.email || errors.password
            ? ButtonType.disabled
            : ButtonType.primary
        }
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
    </Form>
  );
};

export default LoginForm;

