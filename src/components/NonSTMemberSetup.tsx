import { useUpdataUserMutation } from "@/__generated__/gql";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { REGEXPATTERNS } from "../lib/regexPatterns";
import { useAlertStore } from "../store/alertStore";
import { useSignupStageStore } from "../store/signupStageStore";
import { useUserStore } from "../store/userStore";
import { AlertType, ButtonType, FormHelperType } from "../types";
import Button from "./Button";
import SetupAccountLayout from "./SetupAccountLayout";
import TimelineStep from "./TimelineStep";
import CountrySelectInput from "./formElements/CountrySelectInput";
import FormHelper from "./formElements/FormHelper";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";
import Label from "./formElements/Label";

type PersonalInfoFields = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const NonSTMemberSetup = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PersonalInfoFields>();

  const [phoneNumber, setPhoneNumber] = useState("");

  const { changeStage } = useSignupStageStore();
  const { showAlert } = useAlertStore();
  const { login, token } = useUserStore();

  const navigate = useNavigate();

  const validatePhoneNumber = () => {
    return REGEXPATTERNS.phoneNumber.test(phoneNumber);
  };

  const [updateUser, { loading }] = useUpdataUserMutation();

  const onSubmit: SubmitHandler<PersonalInfoFields> = (data) => {
    if (validatePhoneNumber()) {
      // do something with the data

      updateUser({ variables: { input: { userInput: data } } })
        .then(({ data: response }) => {
          const errors = response?.updateUser?.errors;
          const user = response?.updateUser?.user;

          if (errors) {
            errors.forEach((err) => {
              showAlert({
                alertType: AlertType.error,
                alertText: err.message || err.property,
              });
            });
          }

          if (user) {
            showAlert({
              alertType: AlertType.success,
              alertText: "Account details updated",
            });
            login({ user: user, token: token as string });
            changeStage("setup complete");
          }
        })
        .catch(() => {
          showAlert({
            alertType: AlertType.error,
            alertText: "Request failed",
          });
        });

      // console.log({ ...data, phoneNumber });
      // changeStage("setup complete");
    } else {
      setError("root", {
        message: "Enter a valid phone number. Eg: +233550000000",
      });
    }
  };

  return (
    <SetupAccountLayout>
      <div className="mx-auto max-w-[500px]">
        <TimelineStep steps={2} currentStep={2} />

        <div className="mb-12">
          <h1 className="text-2xl font-bold">Personal Information</h1>
          <small className="font-bold text-gray500">
            Enter your name, and phone number to set up your profile{" "}
          </small>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inner mb-[50px] space-y-6 rounded-[10px] border border-[#d9d9d9] p-10">
            <InputGroup>
              <Label>First name</Label>
              <Input
                placeholder="Enter your first name"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <FormHelper type={FormHelperType.error}>
                  {errors.firstName.message}
                </FormHelper>
              )}
            </InputGroup>

            <InputGroup>
              <Label>Last name</Label>
              <Input
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.firstName && (
                <FormHelper type={FormHelperType.error}>
                  {errors.firstName.message}
                </FormHelper>
              )}
            </InputGroup>

            <InputGroup>
              <Label>Phone number</Label>
              <CountrySelectInput
                handleChange={(number) => {
                  setPhoneNumber(number);
                }}
              />

              {errors.phoneNumber && (
                <FormHelper type={FormHelperType.error}>
                  {errors.phoneNumber.message}
                </FormHelper>
              )}
            </InputGroup>
            {errors.root && (
              <FormHelper type={FormHelperType.error}>
                {errors.root.message}
              </FormHelper>
            )}
          </div>

          <div className="flex justify-between">
            <Button
              className="border border-gray300 bg-transparent text-black hover:bg-transparent"
              type="button"
              onClick={() => navigate(-1)}
            >
              Go back
            </Button>
            <Button
              type="submit"
              disabled={loading}
              btnType={
                errors.firstName ||
                errors.lastName ||
                errors.phoneNumber ||
                loading
                  ? ButtonType.disabled
                  : ButtonType.primary
              }
            >
              {loading ? "Loading" : "Save and continue"}
            </Button>
          </div>
        </form>
      </div>
    </SetupAccountLayout>
  );
};

export default NonSTMemberSetup;
