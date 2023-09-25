import AuthLayout from "../components/AuthLayout";
import { SignupFormFields } from "../types";
import { useState } from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import { useSignupStageStore } from "../store/signupStageStore";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../lib/queries";

const Signup = () => {
  return (
    <AuthLayout>
      <CreateAccountForm />
    </AuthLayout>
  );
};

export default Signup;
