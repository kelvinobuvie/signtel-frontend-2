import React, { useState } from "react";
import img2 from "../../assets/SignUp.png";
import { Link } from "lucide-react";
import { NavLink } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import "@fontsource/poppins";
// import "@fontsource/open-sans";

const forgotPassword = () => {
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="min-h-screen flex">
      {/* left side - Forgot password */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 h-screen">
        <div className="w-full relative flex items-center justify-center">
          <img src={img2} alt="image" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right side - Forgot passwword Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-1 mb-8 text-[22.5px] font-Poppins">
              <span className="text-orange text-xl font-bold">Signtel</span>
              <span className="text-green text-xl font-bold">On-Demand</span>
            </div>
          </div>

          {/* Forgot password text */}
          <div className="mb-8">
            <h1 className="flex items-center justify-center text-gray-900 font-semibold text-3xl">
              Forgot Password?
            </h1>
            <p className="flex text-[20px] items-center text-center justify-center text-gray-600">
              Please enter your email address. You will receive a link to
              creaate a new password via email.
            </p>
          </div>
          <form action="" className="">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="johndoe@gmail.com"
              />
            </div>

            {/* Remeber Me */}
            <div className="flex items-center justify-between mb-10">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4  text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            {/* Reset Password Button */}
            <NavLink to="/SetNewPassword">
              <button
                type="submit"
                className="w-full bg-orange text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-medium"
              >
                Reset
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default forgotPassword;
