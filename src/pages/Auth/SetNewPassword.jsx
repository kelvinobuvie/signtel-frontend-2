import React, { useState } from "react";
import img2 from "../../assets/SignUp.png";
import { Eye, EyeOff } from "lucide-react";
import { NavLink } from "react-router-dom";
// import "@fontsource/poppins";
// import "@fontsource/open-sans";

const SetNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="min-h-screen flex">
      {/* left side - Set New Password */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 h-screen">
        <div className="w-full relative flex items-center justify-center">
          <img src={img2} alt="image" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right side - Set New Passwword Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-1 mb-8 text-[22.5px] font-Poppins">
              <span className="text-orange text-xl font-bold">Signtel</span>
              <span className="text-green text-xl font-bold">On-Demand</span>
            </div>
          </div>

          {/* Set New Password text */}
          <div className="mb-8">
            <h1 className="flex items-center justify-center text-gray-900 font-semibold text-3xl">
              Set New Password
            </h1>
            <p className="flex text-[20px] items-center text-center justify-center text-gray-600">
              Please enter new password.
            </p>
          </div>
          <form action="" className="">
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  //   name="password"
                  //   value={formData.password}
                  //   onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-2"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remeber Me */}
            <div className="flex items-center justify-between mb-6">
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

            {/* Confrim Password */}
            <div className="mb-10">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  //   name="password"
                  //   value={formData.password}
                  //   onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-2"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit New Button */}
            <NavLink to="/login">
              <button
                type="submit"
                className="w-full bg-orange text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-medium"
              >
                Submit
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
