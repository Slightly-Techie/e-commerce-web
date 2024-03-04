import { useLoginMutation } from "@/__generated__/gql"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { REGEXPATTERNS } from "../lib/regexPatterns"
import { useAlertStore } from "../store/alertStore"
import { useSignupStageStore } from "../store/signupStageStore"
import { useUserStore } from "../store/userStore"
import { AlertType, ButtonType, FormHelperType } from "../types"
import Alert from "./Alert"
import Button from "./Button"
import Checkbox from "./formElements/Checkbox"
import Form from "./formElements/Form"
import FormHelper from "./formElements/FormHelper"
import Input from "./formElements/Input"
import InputGroup from "./formElements/InputGroup"
import Label from "./formElements/Label"

type FormValues = {
  email: string
  password: string
}

const LoginForm = () => {
  const [loginUser, { loading }] = useLoginMutation()
  const { showAlert } = useAlertStore()
  const { login, updateToken } = useUserStore()
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>()

  const { changeStage } = useSignupStageStore()

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    console.log("logging in")

    loginUser({
      variables: {
        input: {
          password: formData.password,
          email: formData.email,
        },
      },
    })
      .then(({ data }) => {
        console.log({ data })

        const user = data?.login?.user
        const errors = data?.login?.errors
        const token = data?.login?.token

        if (user) {
          login({ user: user, token: String(token) })
          updateToken(String(token))
          showAlert({
            alertType: AlertType.success,
            alertText: "Login successful",
          })

          if (!user.emailConfirmed) {
            changeStage("verify code")

            showAlert({
              alertType: AlertType.error,
              alertText: "Please verify your account",
            })
          }
          navigate("/")
          return
        }

        if (errors) {
          errors.forEach((err) => {
            showAlert({
              alertType: AlertType.error,
              alertText: err.message || err.property,
            })
          })
        }
      })
      .catch((err) => {
        console.log({ err })
        showAlert({
          alertType: AlertType.error,
          alertText: "Request failed",
        })
      })
  }

  return (
    <Form title="Welcome Back" onSubmit={handleSubmit(onSubmit)}>
      <Alert type={AlertType.info}>
        For ST Members. Please double-check that you are using the same email
        address that you used to sign up for CRM.
      </Alert>

      <p>schema: {import.meta.env.VITE_BASE_URL}</p>

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
  )
}

export default LoginForm
