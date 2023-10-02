import { AlertType } from "../types";
import Alert from "./Alert";
import Button from "./Button";
import Checkbox from "./formElements/Checkbox";
import Form from "./formElements/Form";
import Input from "./formElements/Input";
import InputGroup from "./formElements/InputGroup";
import Label from "./formElements/Label";

const LoginForm = () => {
  return (
    <Form title="Welcome Back">
      <Alert type={AlertType.info}>
        For ST Members. Please double-check that you are using the same email
        address that you used to sign up for CRM.
      </Alert>

      <div className="space-y-4">
        <InputGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            icon={<img src="assets/icons/user.svg" alt="..." />}
            placeholder="Enter your username"
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            icon={<img src="assets/icons/lock-open.svg" alt="..." />}
            placeholder="Enter your password"
          />
        </InputGroup>
      </div>

      <div className="flex justify-between">
        <div className="space-x-3 flex items-start">
          <Checkbox id="remember" labelText="Remember me" />
        </div>

        <div>
          <p className="text-gray-400">Forgot password</p>
        </div>
      </div>

      <Button className="w-full">Login</Button>
    </Form>
  );
};

export default LoginForm;
