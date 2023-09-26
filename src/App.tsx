import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import { Login } from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SetupAccount from "./pages/SetupAccount";
import VerifySignupCode from "./pages/VerifySignupCode";
import STMemberSetup from "./components/STMemberSetup";
import NonSTMemberSetup from "./components/NonSTMemberSetup";
import AccountSetupComplete from "./components/AccountSetupComplete";
import ResetPassword from "./pages/ResetPassword";
<<<<<<< HEAD
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import VerifySignupCode from "./pages/VerifySignupCode";
import STMemberSetup from "./components/STMemberSetup";
import NonSTMemberSetup from "./components/NonSTMemberSetup";
import AccountSetupComplete from "./components/AccountSetupComplete";

// Adds messages only in a dev environment
loadDevMessages();
loadErrorMessages();
=======
>>>>>>> c79c0a4 (mm)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
<<<<<<< HEAD
      <Route path="/setup-account" element={<SetupAccount />} />
=======
>>>>>>> c79c0a4 (mm)
      <Route path="/verify-code" element={<VerifySignupCode />} />
      <Route path="/setup-account" element={<SetupAccount />}></Route>
      <Route path="/setup-account/st-member" element={<STMemberSetup />} />
      <Route
        path="/setup-account/non-st-member"
        element={<NonSTMemberSetup />}
      />
      <Route
        path="/setup-account/complete"
        element={<AccountSetupComplete />}
      ></Route>
    </Routes>
  );
}

export default App;
