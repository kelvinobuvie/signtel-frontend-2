import React from "react";
import ImageUploader from "./ImageUploader";
import { ChevronDown } from "lucide-react";
import "../App.css";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "../assets/deliveryMan.png";
import PhoneInHand from "../assets/PhoneInHand.png";
import womanholdingPhone from "../assets/womanholdingPhone.png";
import gps from "../assets/gps.png";
import pc from "../assets/pc.png";

// Simple UI Components
const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "btn-primary bg-orange-500 text-white hover:bg-orange-600",
    outline:
      "btn-outline border border-gray-300 text-gray-700 hover:bg-gray-50",
  };
  const sizes = "h-10 py-2 px-4";

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({
  className = "",
  borderColor = "border-gray-300",
  ...props
}) => {
  return (
    <input
      className={` placeholder-[#8B7B71]  placeholder:text-xs  flex h-10 w-full rounded-md border ${borderColor} bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

const Label = ({ children, className = "", ...props }) => {
  return (
    <label
      className={`font-['Open Sans'] font-[600] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

const RadioGroup = ({ children, className = "", ...props }) => {
  return (
    <div className={`grid gap-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

const RadioGroupItem = ({ value, id, name = "delivery-speed", ...props }) => {
  return (
    <input
      type="radio"
      value={value}
      id={id}
      name={name}
      className="aspect-square h-4 w-4 rounded-full border border-gray-300 text-orange-500 focus:ring-orange-500 focus:ring-2"
      {...props}
    />
  );
};

const Test = () => {
  return (
    <section className="">
      <div className=" mx-auto h-screen w-full mb-8 bg-[url('/src/assets/deliveryMan.png')] bg-cover bg-no-repeat bg-center bg- bg-gray-900">
        <header className="border-b border-gray-200">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <div className="flex items-center">
                  <span className="text-[3.1vw] sm:text-[3vw] md:text-[1.2vw] lg:text-[1vw] xl:text-xl font-bold font-['Poppins']">
                    <span className="text-orange-500">Signtel</span>
                    <span className="text-[#008751]"> On-Demand</span>
                  </span>
                </div>

                {/* Navigation */}
                <nav
                  className="hidden md:flex items-center space-x-8 font-[400] text-[0.83vw] md:text-[16px] text-[#000000] "
                  style={{
                    fontFamily:
                      "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  <a href="#" className="text-[#000000] hover:text-gray-700">
                    Home
                  </a>
                  <a
                    href="#How-It-Works"
                    className="text-[#000000] hover:text-gray-700"
                  >
                    Services
                  </a>
                  <a href="#" className="text-[#000000] hover:text-gray-700">
                    Become a Driver
                  </a>
                  <div className="flex items-center text-gray-900 hover:text-gray-700 cursor-pointer">
                    <span>About</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                </nav>
              </div>
              {/* Right side */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <svg
                    width="35"
                    height="22"
                    viewBox="0 0 35 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="34"
                      height="21"
                      rx="3.5"
                      stroke="black"
                    />
                    <rect
                      width="12"
                      height="20"
                      transform="translate(1 1)"
                      fill="#008751"
                    />
                    <rect
                      width="11"
                      height="21"
                      transform="translate(23)"
                      fill="#008751"
                    />
                  </svg>

                  <span className="text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.7vw] xl:text-sm font-medium !font-['Open Sans']">
                    ENG
                  </span>
                </div>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Help
                </a>
                <Link
                  to="/signup"
                  variant="outline"
                  className="!bg-white !text-orange-500 !border-none hover:!bg-orange-50 !font-['Open Sans']"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-row lg:flex-row gap-8 lg:gap-20 items-end justify-">
          {/* Left Content */}
          <div className="space-y-6 w-full lg:w-[52%] text-left justify-end">
            <h1 className="text-[72px] sm:text-[6vw] md:text-[4.5vw] lg:text-[60px] xl:text-[70px] font-[700] leading-tight font-['Poppins'] gap-2">
              <span className="text-white">Fast, Reliable</span>
              <span className="text-[#008751]"> Delivery</span>
              <span className="text-white"> for Every</span>
              <span className="text-white"> Nigerian</span>
            </h1>

            <p className="font-['Poppins'] font-[500] mb-15 text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.04vw] xl:text-[20px] text-[#2B2A2A] max-w-md text-left">
              Signtel connects you to trusted drivers for seamless same day
              delivery
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden md:block w-1/2 md:w-1/2 mt-8 lg:mt-0  ">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] rounded-lg overflow-hidden">
              <p className="font-['Poppins'] font-[500] mb-15 text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.04vw] xl:text-[20px] text-[#2B2A2A] max-w-md text-left">
                Signtel connects you to trusted drivers for seamless same day
                delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
