import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import { Login } from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SetupAccount from "./pages/SetupAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/setup-account" element={<SetupAccount />} />
    </Routes>
  );
}

export default App;
