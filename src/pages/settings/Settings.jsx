import React, { useState } from "react";
import img2 from "../../assets/SignUp.png";
import { Link } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import ImageUploader from "../../Test/ImageUploader";
// import "@fontsource/poppins";
// import "@fontsource/open-sans";

const Settings = () => {
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [address, setAddress] = useState("plot 123, Gbagada, lagos, Nigeria");

  const [showPassword, setShowPassword] = useState(false);
  //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className=" flex">
      {/* left side - Settings */}
      <div className="hidden lg:flex lg:w-[300px]  bg-gray-900 h-screen fixed">
        <div className="w-full relative flex items-center justify-center bg-orange"></div>
      </div>
      {/* Right side - Settings Form */}
      <div className="flex-1 bg-white flex justify-center  lg:ml-80">
        <div className="w-full p-8 max-h-screen">
          {/* logo */}
          <div className="">
            <div className="flex items-center justify-center gap-1 mb-[51px] text-[22.5px] font-Poppins">
              <span className="text-orange text-xl font-bold">Signtel</span>
              <span className="text-green text-xl font-bold">On-Demand</span>
            </div>
          </div>

          {/* Profile Details */}
          <div className="">
            <h1 className="flex items-center justify-center text-gray-900 font-semibold mb-20 text-4xl">
              Account Settings
            </h1>
          </div>

          {/* Form for Settings */}
          <form action="" className="">
            {/* Profile image */}
            {/* <div className="text-sm font-sans text-green items-center text-center justify-center mb-8">
              <img
                src={Image}
                className=" text-gray-900 w-24 h-24 rounded-full mx-auto mb- border-2 mb-2"
              />
              <p className="mb-[42px]">Change Photo</p>
            </div> */}
            <ImageUploader />

            {/* Profile Informations */}
            <div className="grid lg:grid-cols-2 gap-6 mx-auto mb-10">
              <div className="mb">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type=""
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                  placeholder="john"
                />
              </div>

              <div className="mb">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="email"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                  placeholder="Doe"
                />
              </div>

              <div className="mb">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="mb">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div className="mb">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Address
                </label>
                <input
                  type=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                  placeholder="plot 123, Gbagada, lagos, Nigeria"
                />
              </div>
              <div className="mb">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                  placeholder="Lagos"
                />
              </div>
              <div className="mb">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="Password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                    placeholder="Password"
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
              <div className="mb">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="Password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                    placeholder="Password"
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
            </div>
            {/* Edit & Save Buttons*/}
            <div className="flex flex-col items-center justify-center w-full px-5">
              <NavLink to="/SetNewPassword" className="w-1/2 mb-4">
                <button
                  type="submit"
                  className=" bg-gray-200 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 font-medium flex items-center justify-center w-full border border-gray-400 text-sm"
                >
                  Edit Details
                </button>
              </NavLink>

              <NavLink to="/SetNewPassword" className="w-1/2">
                <button
                  type="submit"
                  className=" bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-medium flex items-center justify-center w-full text-sm mb-8"
                >
                  Save
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
