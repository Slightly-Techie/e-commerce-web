import {
  useConfirmEmailMutation,
  useResendConfirmationEmailMutation,
} from "@/__generated__/gql"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import useTimer from "../hooks/useTimer"
import { convertTime, hideEmail } from "../lib/utils"
import { useAlertStore } from "../store/alertStore"
import { useUserStore } from "../store/userStore"
import { AlertType, ButtonType, FormHelperType } from "../types"
import Alert from "./Alert"
import Button from "./Button"
import Form from "./formElements/Form"
import FormHelper from "./formElements/FormHelper"
import Input from "./formElements/Input"
import InputGroup from "./formElements/InputGroup"

type FormValues = {
  code: string
}

const VerifyCodeForm = ({ handleFormSubmit }: { handleFormSubmit(): void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const [resendTime, setResendTime] = useTimer()
  const [showResendBtn, setShowResendBtn] = useState(false)
  const { user, updateToken } = useUserStore()
  const { showAlert } = useAlertStore()
  const [verifyCode, { loading }] = useConfirmEmailMutation()
  const [resendVCode, { loading: sendingVCode }] =
    useResendConfirmationEmailMutation()

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    verifyCode({
      variables: { input: { token: formData.code } },
    }).then(({ data }) => {
      setResendTime(30)
      setShowResendBtn(true)

      const success = data?.confirmEmail?.success
      const token = data?.confirmEmail?.token
      const errors = data?.confirmEmail?.errors

      if (success) {
        showAlert({
          alertType: AlertType.info,
          alertText: "Verification successful",
        })
        updateToken(String(token))
        handleFormSubmit()
        reset()
      } else if (errors) {
        errors.forEach((err) => {
          showAlert({
            alertType: AlertType.error,
            alertText: err.message || err.property,
          })
        })
      }
    })
  }

  const handleResendVerification = () => {
    setResendTime(30)
    resendVCode({ variables: { input: { email: user?.email as string } } })
      .then(({ data }) => {
        const success = data?.resendConfirmationEmail?.success
        const errors = data?.resendConfirmationEmail?.errors

        if (success) {
          showAlert({
            alertType: AlertType.success,
            alertText: "New token has been sent to your email",
          })
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

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          btnType={
            errors.code || loading ? ButtonType.disabled : ButtonType.primary
          }
          className="w-full"
        >
          Verify
        </Button>

        {showResendBtn && (
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
        )}
      </div>
    </Form>
  )
}

export default VerifyCodeForm
