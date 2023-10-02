import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import SetupAccountLayout from "./SetupAccountLayout";
import TimelineStep from "./TimelineStep";
import CountrySelectInput from "./formElements/CountrySelectInput";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";
import Label from "./formElements/Label";
import FormHelper from "./formElements/FormHelper";
import { AlertType, ButtonType, FormHelperType, User } from "../types";
import { REGEXPATTERNS } from "../lib/regexPatterns";
import { useSignupStageStore } from "../store/signupStageStore";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../lib/queries";
import { useAlertStore } from "../store/alertStore";
import { useUserStore } from "../store/userStore";

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

  const [updateUser, { loading }] = useMutation(UPDATE_USER);

  const onSubmit: SubmitHandler<PersonalInfoFields> = (data) => {
    if (validatePhoneNumber()) {
      // do something with the data

      updateUser({ variables: { Input: { userInput: data } } })
        .then(({ data: response }) => {
          console.log({ response });

          if (response.updateUser.errors) {
            response.updateUser.errors.forEach(
              ({ message }: { message: string }) => {
                showAlert({ alertType: AlertType.error, alertText: message });
              },
            );
          }

          if (response.updateUser.user) {
            showAlert({
              alertType: AlertType.success,
              alertText: "Account details updated",
            });
            login({ user: response.user as User, token: token as string });
            changeStage("setup complete");
          }
        })
        .catch(() => {
          // console.log(err);

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
      <div className="max-w-[500px] mx-auto">
        <TimelineStep steps={2} currentStep={2} />

        <div className="mb-12">
          <h1 className="text-2xl font-bold">Personal Information</h1>
          <small className="font-bold text-gray500">
            Enter your name, and phone number to set up your profile{" "}
          </small>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inner p-10 rounded-[10px] space-y-6 border border-[#d9d9d9] mb-[50px]">
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
              className="bg-transparent text-black border border-gray300 hover:bg-transparent"
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
