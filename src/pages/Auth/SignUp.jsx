import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "../../assets/SignUp.png";
import "@fontsource/poppins";
import "@fontsource/open-sans";
import { registerUser } from "../../services/api/auth";
import { Link, NavLink } from "react-router-dom";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleSelect = (role) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.role) {
      return alert("Please select a role.");
    }

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
      const res = await registerUser(formData);
      console.log("✅ Signup success:", res);
      alert("Signup successful!");
      // Redirect here if needed
    } catch (err) {
      console.error("❌ Signup error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image (changed the hieght of the screen from 690 to screen)*/}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 h-screen">
        <div className="w-full relative flex items-center justify-center">
          <img
            src={Image}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 w-full lg:w-1/2 flex items-center justify-center p-4 bg-gray-50">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="font-Poppins text-[22.5px] font-bold">
                <span className="text-orange">Signtel</span>
                <span className="text-green">On-Demand</span>
              </span>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-[30px] font-bold text-gray-900 mb-2">
              Welcome!
            </h1>
            <p className="text-[20px] text-gray-600">
              Sign up to become a user
            </p>
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleRoleSelect("Customer")}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  formData.role === "Customer"
                    ? "bg-green text-white"
                    : "bg-mint text-gray-700 hover:bg-gray-300"
                }`}
              >
                Customer
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect("Driver")}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  formData.role === "Driver"
                    ? "bg-green text-black"
                    : "bg-mint text-gray-700 hover:bg-mint"
                }`}
              >
                Driver
              </button>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

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
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Sign up Button */}
            <NavLink to="/OTPVerification">
              <button
                type="submit"
                className="w-full bg-orange hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </NavLink>

            {/* Sign In Link */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green hover:text-green font-bold"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
