import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import Input from "../components/formElements/Input";
import { HiArrowNarrowLeft } from "react-icons/hi";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="grid place-content-center">
        <form className="max-w-[500px] p-5 lg:p-0">
          <legend className="text-3xl lg:text-4xl mb-2 font-bold">
            Forgot password?
          </legend>
          <p className="text-[#B7B7B7] text-md lg:text-lg">
            No worries, we&lsquo;ll send you reset instructions.
          </p>

          <div className="input-group mt-20 lg:mt-40 mb-11">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <Input
              id="email"
              placeholder="Enter your email to get reset code"
            />
          </div>

          <Button className="mb-5">Reset password</Button>

          <a
            href="/login"
            className="flex gap-2 justify-center items-center text-[#b7b7b7]"
          >
            <HiArrowNarrowLeft size={20} />
            Back to sign in
          </a>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
