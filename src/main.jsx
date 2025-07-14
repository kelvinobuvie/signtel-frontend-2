import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./pages/Auth/SignUp.jsx";
import LogInForm from "./pages/Auth/LogIn.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import SetNewPassword from "./pages/Auth/SetNewPassword.jsx";
import OTPVerification from "./pages/Auth/Verification.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Home from "./Test/Home.jsx";
import Main from "./Test/Component/Main.jsx";

const RootLayout = ({ children }) => <div className="app">{children}</div>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <RootLayout>
              <SignUpForm />
            </RootLayout>
          }
        />
        <Route
          path="/login"
          element={
            <RootLayout>
              <LogInForm />
            </RootLayout>
          }
        />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SetNewPassword" element={<SetNewPassword />} />
        <Route path="/OTPVerification" element={<OTPVerification />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/Home" element={<Home />} />

        {/* Add more routes as needed */}
        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} */}
      </Routes>
    </Router>
  </StrictMode>
);
