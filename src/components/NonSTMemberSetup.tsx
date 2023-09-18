import { useEffect, useState } from "react";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import Button from "./Button";
import SetupAccountLayout from "./SetupAccountLayout";
import TimelineStep from "./TimelineStep";
import CountrySelectInput from "./formElements/CountrySelectInput";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";
import Label from "./formElements/Label";
import FormHelper from "./formElements/FormHelper";
import { FormHelperType } from "../types";
import { REGEXPATTERNS } from "../lib/regexPatterns";
import { useSignupStageStore } from "../store/signupStageStore";
import { useNavigate } from "react-router-dom";

type PersonalInfoFields = {
  name: string;
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

  const validatePhoneNumber = () => {
    return REGEXPATTERNS.phoneNumber.test(phoneNumber);
  };

  const onSubmit: SubmitHandler<PersonalInfoFields> = (data) => {
    if (validatePhoneNumber()) {
      // do something with the data
      console.log({ ...data, phoneNumber });
      changeStage("setup complete");
    } else {
      setError("root", { message: "Enter a valid phone number" });
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
              <Label>Name</Label>
              <Input
                placeholder="Thirty Plus"
                {...register("name", { required: "Name is required" })}
                className="px-4"
              />
              {errors.name && (
                <FormHelper type={FormHelperType.error}>
                  {errors.name.message}
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
            >
              Go back
            </Button>
            <Button type="submit">Save and continue</Button>
          </div>
        </form>
      </div>
    </SetupAccountLayout>
  );
};

export default NonSTMemberSetup;
