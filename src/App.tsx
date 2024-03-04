import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev"
import { Route, Routes } from "react-router-dom"
import AccountSetupComplete from "./components/AccountSetupComplete"
import NonSTError from "./components/NonSTError"
import NonSTMemberSetup from "./components/NonSTMemberSetup"
import STMemberSetup from "./components/STMemberSetup"
import ForgotPassword from "./pages/ForgotPassword"
import HomePage from "./pages/HomePage"
import { Login } from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"
import SetupAccount from "./pages/SetupAccount"
import Signup from "./pages/Signup"
import VerifyCode from "./pages/VerifyCode"
import VerifySignupCode from "./pages/VerifySignupCode"

// Adds messages only in a dev environment
loadDevMessages()
loadErrorMessages()

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/setup-account" element={<SetupAccount />} />
      <Route path="/verify-code" element={<VerifySignupCode />} />
      <Route path="/confirm-email" element={<VerifyCode />} />
      <Route path="/setup-account" element={<SetupAccount />}></Route>
      <Route path="/setup-account/st-member" element={<STMemberSetup />} />
      <Route path="/setup-account/non-st-error" element={<NonSTError />} />
      <Route
        path="/setup-account/non-st-member"
        element={<NonSTMemberSetup />}
      />
      <Route
        path="/setup-account/complete"
        element={<AccountSetupComplete />}
      ></Route>
    </Routes>
  )
}

export default App
