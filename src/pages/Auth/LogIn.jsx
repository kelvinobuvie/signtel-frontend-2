import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "../../assets/LogIn.png";
import "@fontsource/poppins";
import "@fontsource/open-sans";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export default function LogInForm() {
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Try customer login first
      let response;
      try {
        response = await API.post("/auth/customer/login", {
          email,
          password,
        });
      } catch (customerError) {
        // If customer login fails, try driver login
        try {
          response = await API.post("/auth/driver/login", {
            email,
            password,
          });
        } catch (driverError) {
          throw customerError; // Throw the original error
        }
      }

      // Handle successful login
      if (response.data.success) {
        // Store user data
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        // Redirect based on user role from response
        const userRole = response.data.user.role || response.data.user.type;
        navigate(
          userRole === "driver" ? "/driver-dashboard" : "/customer-dashboard"
        );
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid email or password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = (provider) => {
    // Redirect to backend social auth endpoint
    const authUrl = `${import.meta.env.VITE_BACKEND_URL}/auth/${provider}`;
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image (changed the hieght of the screen from 690 to screen)*/}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 h-screen">
        <div className="w-full relative flex items-center justify-center">
          <img src={Image} alt="Image" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-1 mb-8 text-[22.5px] font-Poppins">
              <span className="text-orange text-xl font-bold">Signtel</span>
              <span className="text-green text-xl font-bold">On-Demand</span>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h1 className="flex text-[30px] font-semibold items-center justify-center text-gray-900 mb-2">
              Welcome!
            </h1>
            <p className="flex text-[20px] items-center justify-center text-gray-600">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="••••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/ForgotPassword" className="text-sm text-black hover:text-orange-600">
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <NavLink to="/">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign In
                {/* {isLoading ? 'Signing In...' : 'Sign In'} */}
              </button>
            </NavLink>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => handleSocialAuth("google")}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                onClick={() => handleSocialAuth("apple")}
                className="w-full flex items-center rounded-full justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.85 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13.19 3.5C13.88 2.58 14.34 1.32 14.17 0C13.06 0.05 11.72 0.79 11.0 1.7C10.35 2.55 9.76 3.87 9.96 5.07C11.2 5.17 12.5 4.43 13.19 3.5Z" />
                </svg>
                Continue with Apple
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <span className="text-gray-600">Don't have an account? </span>
              <Link
                to="/signup"
                className="text-green hover:text-green font-bold"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
