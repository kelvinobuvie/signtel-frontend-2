import React, { useState, useEffect } from "react";
import Image from "../../assets/Verification.png";
import "@fontsource/poppins";
import "@fontsource/open-sans";
import { NavLink } from "react-router-dom";

export default function OTPVerification() {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(59);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleResend = () => {
    setTimeLeft(59);
    setOtpValues(["", "", "", "", "", ""]);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image (changed the hieght of the screen from 690 to screen)*/}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 h-screen">
        <div className="w-full relative flex items-center justify-center">
          <img src={Image} alt="Image" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right side - OTP Verification Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 bg-gray-50">
        <div className="max-w-sm mx-auto w-full">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center font-Poppins justify-center">
              <span className="text-orange text-xl font-bold">Signtel</span>
              <span className="text-green text-xl font-bold">On-Demand</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="flex text-2xl items-center justify-center font-bold text-gray-900 mb-2">
            OTP Verification
          </h2>

          {/* Description */}
          <p className="flex text-gray-600 text-center text-sm mb-6 leading-relaxed">
            Enter the verification code we just sent to your email to verify
            your account.
          </p>

          {/* Timer */}
          <div className="text-center mb-6">
            <span className="text-green text-sm font-medium">
              00:{timeLeft.toString().padStart(2, "0")}
            </span>
          </div>

          {/* OTP Input Fields */}
          <div className="flex gap-3 mb-6 justify-center">
            {otpValues.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                maxLength="1"
              />
            ))}
          </div>

          {/* Verify Button */}
          <NavLink to="/login">
            <button className="w-full bg-orange hover:bg-orange text-white font-semibold py-3 rounded-full transition-colors mb-4">
              Verify
            </button>
          </NavLink>

          {/* Resend Link */}
          <div className="text-center">
            <span className="text-gray-600 text-sm">Didn't receive code? </span>
            <button
              onClick={handleResend}
              className="text-green text-sm font-semibold hover:text-green transition-colors"
              disabled={timeLeft > 0}
            >
              Resend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
