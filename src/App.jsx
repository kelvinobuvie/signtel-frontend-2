import { ChevronDown } from "lucide-react";
import "./App.css";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./assets/deliveryMan.png";
import PhoneInHand from "./assets/PhoneInHand.png";
import womanholdingPhone from "./assets/womanholdingPhone.png";
import gps from "./assets/gps.png";
import pc from "./assets/pc.png";
// import LanguageDropdown from "./components/languageChange";
import { useState } from "react";

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

export default function App() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="min-h-screen bg-white ">
      {/* Header */}
      <header className="border-b border-gray-200 fixed  bg-white w-[100%] top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="hidden md:flex items-center space-x-8 font-[400] text-[0.83vw] md:text-[16px] text-[#000000]"
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
                {/* <LanguageDropdown /> */}
              </div>
              <span
                onClick={() => setShowHelp(true)}
                className="text-gray-700 hover:text-gray-900 cursor-pointer "
              >
                Help
              </span>

              <Link
                to="/signup"
                variant="outline"
                className="!bg-white !border-none !text-[#FF6A00] hover:!text-[#FF5A00] !font-['Open Sans']"
              >
                Register
              </Link>
              {showHelp && (
                <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl relative">
                    <h2 className="text-xl font-semibold mb-4">helpp??</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <button
                      onClick={() => setShowHelp(false)}
                      className="mt-6 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white h-[100vh]  sm:h-[auto] px-4 py-12 sm:py-16 items-center justify-center flex sm:block">
        <div className="max-w-7xl mx-auto  ">
          <div className="flex flex-row lg:flex-row gap-8 lg:gap-20 items-center justify-center ">
            {/* Left Content */}
            <div className="space-y-6 w-full lg:w-1/2 text-left justify-center  ">
              <h1 className="text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3.125vw] xl:text-[60px] font-[700] leading-tight font-['Poppins']">
                <span className="text-gray-900">Fast, Reliable</span>
                <br />
                <span className="text-[#008751]">Delivery</span>
                <span className="text-gray-900"> for Every</span>
                <br />
                <span className="text-gray-900">Nigerian</span>
              </h1>

              <p className="font-['Poppins'] font-[500] mb-15 text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.04vw] xl:text-[20px] text-[#2B2A2A] max-w-md text-left">
                Signtel connects you to trusted drivers for seamless same day
                delivery
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-start">
                <Button className=" btn sm:w-auto bg-[#FF6A00] hover:bg-[#FF5A00] text-white px-6 sm:px-8 py-3 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg">
                  Request a Delivery
                </Button>
                <Button
                  variant="outline"
                  className=" btn sm:w-auto !border-[#008751] !text-[#008751] px-6 sm:px-8 py-3 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg"
                >
                  <Link to="/signup">Become a Driver</Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block w-full md:w-1/2 mt-8 lg:mt-0  ">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] rounded-lg overflow-hidden">
                <img
                  src={Hero}
                  alt="Hero"
                  className="absolute inset-0 h-full w-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="flex flex-col  items-center justify-center max-w-[100%] mx-auto  bg-gray-50"
        id="How-It-Works"
      >
        {/* Header */}
        <div className="text-center mb-12 relative mx-auto">
          <h2 className="text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3.125vw] xl:text-[60px] font-[700] text-gray-800 mb-2 text-center relative">
            How It Works
            <div className="flex justify-end">
              <svg
                width="168"
                height="32"
                viewBox="0 0 168 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 31C80.4946 5.17639 93.7446 -12.4288 167.5 14.3783"
                  stroke="#FF6A00"
                  stroke-width="2"
                />
              </svg>
            </div>
          </h2>
        </div>

        {/* Three Step Cards */}
        <div className="flex  flex-col md:flex-row gap-6 mb-15  justify-center">
          {/* Step 1: Request a Delivery */}
          <div className="w-[100%] sm:w-[26%] h-[70%] sm:h-[100%] overflow-hidden shadow-[0px_4px_4px_0px_#00000040]   rounded-[12px]  ">
            <div className="bg-[#008751] text-[white] text-center py-4 sm:py-6 ">
              <div className="flex justify-center mb-3">
                <svg
                  width="58"
                  height="40"
                  viewBox="0 0 40 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11_25)">
                    <path
                      d="M24 57.6C24 56.5 23.6083 55.5583 22.825 54.775C22.0417 53.9917 21.1 53.6 20 53.6C18.9 53.6 17.9583 53.9917 17.175 54.775C16.3917 55.5583 16 56.5 16 57.6C16 58.7 16.3917 59.6417 17.175 60.425C17.9583 61.2083 18.9 61.6 20 61.6C21.1 61.6 22.0417 61.2083 22.825 60.425C23.6083 59.6417 24 58.7 24 57.6ZM34.4 49.6V14.4C34.4 13.9667 34.2417 13.5917 33.925 13.275C33.6083 12.9583 33.2333 12.8 32.8 12.8H7.19999C6.76665 12.8 6.39165 12.9583 6.07499 13.275C5.75832 13.5917 5.59999 13.9667 5.59999 14.4V49.6C5.59999 50.0333 5.75832 50.4083 6.07499 50.725C6.39165 51.0417 6.76665 51.2 7.19999 51.2H32.8C33.2333 51.2 33.6083 51.0417 33.925 50.725C34.2417 50.4083 34.4 50.0333 34.4 49.6ZM24.8 7.2C24.8 6.66667 24.5333 6.4 24 6.4H16C15.4667 6.4 15.2 6.66667 15.2 7.2C15.2 7.73333 15.4667 8 16 8H24C24.5333 8 24.8 7.73333 24.8 7.2ZM39.2 6.4V57.6C39.2 59.3333 38.5667 60.8333 37.3 62.1C36.0333 63.3667 34.5333 64 32.8 64H7.19999C5.46665 64 3.96665 63.3667 2.69999 62.1C1.43332 60.8333 0.799988 59.3333 0.799988 57.6V6.4C0.799988 4.66667 1.43332 3.16667 2.69999 1.9C3.96665 0.633333 5.46665 0 7.19999 0H32.8C34.5333 0 36.0333 0.633333 37.3 1.9C38.5667 3.16667 39.2 4.66667 39.2 6.4Z"
                      fill="#FF6A00"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_25">
                      <rect
                        width="38.4"
                        height="64"
                        fill="white"
                        transform="translate(0.799988)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl sm:text-[1vw] md:text-[1.5vw] lg:text-[1.5vw] font-semibold">
                Request a Delivery
              </h3>
            </div>
            <div className="px-4 pb-4 bg-[#FAFAFA] h-[130px] sm:h-[220px] flex flex-col justify-end font-semibold text-2xl items-start">
              <p className="text-[#4F4F4F] mb-4 text-left font-open-sans font-[600] text-[3.5vw] sm:text-[1.5vw] ">
                Easily book your delivery anytime, anywhere
              </p>
              <div className="text-left">
                <button className=" btn text-orange-500 font-medium hover:text-orange-600 inline-flex items-center gap-1 !px-0 text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[0.9vw] xl:text-base">
                  Learn More→
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Drivers Deliver */}
          <div className="w-[100%] sm:w-[26%] h-[70%] sm:h-[100%] overflow-hidden shadow-[0px_4px_4px_0px_#00000040]   rounded-[12px]  ">
            <div className="bg-[#008751] text-white text-center py-6">
              <div className="flex justify-center mb-3">
                <svg
                  width="58"
                  height="40"
                  viewBox="0 0 68 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.125 54C17.4439 54 20.6268 52.6816 22.9736 50.3348C25.3204 47.988 26.6389 44.805 26.6389 41.4861C26.6389 38.1672 25.3204 34.9843 22.9736 32.6375C20.6268 30.2906 17.4439 28.9722 14.125 28.9722C10.8061 28.9722 7.62313 30.2906 5.27632 32.6375C2.92951 34.9843 1.61108 38.1672 1.61108 41.4861C1.61108 44.805 2.92951 47.988 5.27632 50.3348C7.62313 52.6816 10.8061 54 14.125 54ZM53.1389 54C54.8789 54 56.6019 53.6573 58.2094 52.9914C59.817 52.3255 61.2776 51.3495 62.508 50.1192C63.7384 48.8888 64.7144 47.4281 65.3803 45.8206C66.0461 44.213 66.3889 42.49 66.3889 40.75C66.3889 39.01 66.0461 37.287 65.3803 35.6794C64.7144 34.0719 63.7384 32.6112 62.508 31.3808C61.2776 30.1505 59.817 29.1745 58.2094 28.5086C56.6019 27.8427 54.8789 27.5 53.1389 27.5C49.6247 27.5 46.2546 28.896 43.7697 31.3808C41.2848 33.8657 39.8889 37.2359 39.8889 40.75C39.8889 44.2641 41.2848 47.6343 43.7697 50.1192C46.2546 52.604 49.6247 54 53.1389 54Z"
                    fill="#FF6A00"
                    stroke="#FF6A00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.6344 1H39.8844L53.1388 40.75"
                    stroke="#FF6A00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.945 40.75L45.3096 16.8456M45.3096 14.25H57.7822L60.5 6.88892M10.4444 15.684H20.75M20.75 15.7222L25.5685 31.0643"
                    stroke="#FF6A00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[2.5vw] sm:text-[1vw] md:text-[2vw] lg:text-[1.5vw] font-semibold">
                Drivers Deliver
              </h3>
            </div>
            <div className="px-4 pb-4 bg-[#FAFAFA] h-[130px] sm:h-[220px] flex flex-col justify-end font-semibold text-2xl items-start">
              <p className="text-[#4F4F4F] mb-4 text-left font-open-sans font-[600] text-[3.5vw] sm:text-[1.5vw] ">
                Accept jobs, navigate, and earn income
              </p>
              <div className="text-left">
                <button className=" btn text-orange-500 font-medium hover:text-orange-600 inline-flex items-center gap-1 !px-0 text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[0.9vw] xl:text-base">
                  Learn More→
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Admins Manage */}
          <div className="w-[100%] sm:w-[26%] h-[70%] sm:h-[100%] overflow-hidden shadow-[0px_4px_4px_0px_#00000040]   rounded-[12px]  ">
            <div className="bg-[#008751] text-white text-center py-6">
              <div className="flex justify-center mb-3">
                <svg
                  width="58"
                  height="40"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.5208 9.16675H41.25C42.4655 9.16675 43.6313 9.64963 44.4909 10.5092C45.3504 11.3687 45.8333 12.5345 45.8333 13.7501V43.5417C45.8333 44.7573 45.3504 45.9231 44.4909 46.7827C43.6313 47.6422 42.4655 48.1251 41.25 48.1251H13.75C12.5344 48.1251 11.3686 47.6422 10.5091 46.7827C9.64951 45.9231 9.16663 44.7573 9.16663 43.5417V13.7501C9.16663 12.5345 9.64951 11.3687 10.5091 10.5092C11.3686 9.64963 12.5344 9.16675 13.75 9.16675H19.4791"
                    stroke="#FF6A00"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.7564 8.05525C20.0042 7.06369 20.5764 6.18343 21.3819 5.55436C22.1875 4.9253 23.1801 4.58353 24.2022 4.58337H30.7953C31.8174 4.58353 32.8101 4.9253 33.6156 5.55436C34.4212 6.18343 34.9933 7.06369 35.2412 8.05525L36.6666 13.75H18.3333L19.7564 8.05525Z"
                    stroke="#FF6A00"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.625 27.5H34.375M20.625 36.6667H34.375"
                    stroke="#FF6A00"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-[2.5vw] sm:text-[1vw] md:text-[2vw] lg:text-[1.5vw] font-semibold">
                Admins Manage
              </h3>
            </div>
            <div className="px-4 pb-4 bg-[#FAFAFA] h-[130px] sm:h-[220px] flex flex-col justify-end font-semibold text-2xl items-start">
              <p className="text-[#4F4F4F] mb-4 text-left font-open-sans font-[600] text-[3vw] sm:text-[1.5vw] ">
                Monitor and Optimize Operations.
              </p>
              <div className="text-left">
                <button className=" btn text-orange-500 font-medium hover:text-orange-600 inline-flex items-center gap-1 !px-0  !md:text-[0.5vw] ">
                  Learn More→
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <Link to="/signup">
          <div className="text-center">
            <Button className="btn bg-[#FF6A00] hover:bg-[#FF5A00] text-white px-8 py-3 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-semibold rounded-lg">
              Get Started Now
            </Button>
          </div>
        </Link>
      </section>
      {/* Built for Everyone Section */}
      <section className="py-16 bg-[#F4FEFA] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[5.125vw] lg:text-[3.125vw] font-[700] leading-[100%] tracking-[0%] text-gray-900 inline-block">
              Built for <span className="text-orange-500">Everyone</span> on the
              Move
            </h2>
          </div>

          <div className="space-y-16 flex flex-col items-center">
            {/* Real-Time Package Tracking */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-start w-[75.33vw]  rounded-[54px] bg-white p-6 shadow-[0px_6.06px_6.06px_0px_#4E4E4E0A,0px_4px_10px_0px_#00000005,0px_1.4px_1.3px_0px_#5B5B5B1A]">
              <div className="order-2 lg:order-1">
                <div className="flex items-center justify-center">
                  <img
                    src={PhoneInHand}
                    alt="Phone tracking interface"
                    className="w-[15.78vw] rounded-[30px] object-center"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-1 space-y-4 w-[45.21vw] s">
                <h3 className="text-[3.5vw] lg:text-[1.5vw] font-[700] text-gray-900 ">
                  Real-Time Package Tracking
                </h3>
                <p className="text-gray-600 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-open-sans">
                  Allows customers to track their parcel's live location and
                  estimated delivery time.
                </p>
                <Button className="bg-[#FF6A00] hover:bg-[#FF5A00] text-white !rounded-[30px]">
                  Track my package →
                </Button>
              </div>
            </div>

            {/* Easy Booking & Scheduling */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-[75.33vw]  rounded-[54px] bg-white p-6 shadow-[0px_6.06px_6.06px_0px_#4E4E4E0A,0px_4px_10px_0px_#00000005,0px_1.4px_1.3px_0px_#5B5B5B1A]">
              <div className="order-1 lg:order-1 space-y-4 w-[45.21vw] ">
                <h3 className="text-[3.5vw] lg:text-[1.5vw]  font-[700] text-gray-900">
                  Easy Booking & Scheduling
                </h3>
                <p className="text-gray-600 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-open-sans">
                  Enables users to schedule pickups and deliveries with options
                  for same-day, next-day, or custom timing.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white !rounded-[30px]">
                  Book now →
                </Button>
              </div>
              <div className="order-2 lg:order-2">
                <div className="flex items-center justify-center">
                  <img
                    src={womanholdingPhone}
                    alt="Booking interface"
                    className="w-[15.78vw]  rounded-[30px] object-center"
                  />
                </div>
              </div>
            </div>

            {/* Optimized Route Navigation */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-start w-[75.33vw] rounded-[54px] bg-white p-6 shadow-[0px_6.06px_6.06px_0px_#4E4E4E0A,0px_4px_10px_0px_#00000005,0px_1.4px_1.3px_0px_#5B5B5B1A]">
              <div className="">
                <div className="flex items-center justify-center">
                  <img
                    src={gps}
                    alt="Navigation interface"
                    className="w-[15.78vw] rounded-[30px] object-center"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-1 space-y-4 w-[45.21vw] s">
                <h3 className="text-[3.5vw] lg:text-[1.5vw]  font-[700] text-gray-900">
                  Optimized Route Navigation
                </h3>
                <p className="text-gray-600 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-open-sans">
                  Provides turn-by-turn GPS directions and suggests the most
                  efficient delivery routes to save time and fuel.
                </p>
                <Button className="bg-[#FF6A00] hover:bg-[#FF5A00] text-white !rounded-[30px]">
                  Try it now →
                </Button>
              </div>
            </div>

            {/* Dashboard & Analytics */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-[75.33vw] rounded-[54px] bg-white p-6 shadow-[0px_6.06px_6.06px_0px_#4E4E4E0A,0px_4px_10px_0px_#00000005,0px_1.4px_1.3px_0px_#5B5B5B1A]">
              <div className="order-1 lg:order-1 space-y-4 w-[45.21vw] ">
                <h3 className="text-[3.5vw] lg:text-[1.5vw] font-[700] text-gray-900">
                  Dashboard & Analytics
                </h3>
                <p className="text-gray-600  text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-open-sans whitespace-normal	w-[45.21vw] ">
                  A central dashboard that shows delivery statuses, rider
                  performance, order volume, customer feedback, and key
                  operational metrics to help manage the logistics business
                  effectively.
                </p>
                <Button className="bg-[#FF6A00] hover:bg-[#FF5A00] text-white !rounded-[30px]">
                  Start now →
                </Button>
              </div>
              <div className="order-2 lg:order-2">
                <div className="flex items-center justify-center">
                  <img
                    src={pc}
                    alt="Dashboard interface"
                    className="w-[15.78vw]  rounded-[30px] object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Estimate Section */}
      <section className="py-16 bg-white flex flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center mb-12 flex flex-col w-[100%]">
            <h2 className=" text-[5vw] md:text-[3.125vw] font-[700] text-gray-900 mb-4">
              Nigeria's <span className="text-orange-500">Delivery</span> Game
              just leveled Up
            </h2>
            <div className="self-end">
              <svg
                width="168"
                height="32"
                viewBox="0 0 168 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 31C80.4946 5.17639 93.7446 -12.4288 167.5 14.3783"
                  stroke="#FF6A00"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>

          <div className="max-w-4xl mx-auto font-open-sans">
            <div className="bg-white border-1 border-[#008751] rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-[4.5vw] md:text-[2.5vw] font-[Poppins] font-[900] text-gray-900 mb-2">
                  Your Instant Delivery Estimate
                </h3>
                <p className="text-[#2B2A2A] font-['Poppins'] font-[400] text-xs md:text-[1.04vw] leading-[30px] tracking-[0%] text-center">
                  Here's a sneak peek at what You can expect
                </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-8">
                {/* Form Section */}
                <div className="space-y-6 w-[100%] sm:w-[24.33vw] ">
                  <div>
                    <Label
                      htmlFor="pickup"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Pickup Location
                    </Label>
                    <Input
                      id="pickup"
                      placeholder="Enter pickup address"
                      borderColor="border-[#8B7B71]"
                      className="w-[18.33vw] h-[4.81vh]"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="delivery"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Delivery Location
                    </Label>
                    <Input
                      id="delivery"
                      placeholder="Enter delivery address"
                      borderColor="border-[#8B7B71]"
                      className="w-[18.33vw] h-[4.81vh]"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="weight"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Package weight
                    </Label>
                    <Input
                      id="weight"
                      placeholder="Enter weight, e.g. 2.5kg"
                      borderColor="border-[#8B7B71]"
                      className="w-[18.33vw] h-[4.81vh] "
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-4 block">
                      Delivery Speed
                    </Label>
                    <RadioGroup defaultValue="standard" className="space-y-3">
                      <div className="flex items-center">
                        <RadioGroupItem value="standard" id="standard" />
                        <div className="ml-3 p-3 border-[#8B7B71] border rounded-lg flex-1 h-[3.24vh] flex items-center justify-center">
                          <Label
                            htmlFor="standard"
                            className="cursor-pointer text-[3vw] md:text-[1.15vw] font-[600]"
                          >
                            Standard
                          </Label>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <RadioGroupItem value="express" id="express" />
                        <div className="ml-3 p-3 border-[#8B7B71] border rounded-lg flex-1 h-[3.24vh] flex items-center justify-center">
                          <Label
                            htmlFor="express"
                            className="cursor-pointer text-[3vw]  md:text-[1.15vw] "
                          >
                            Express
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="w-full flex  justify-center">
                    <Button className="bg-[#FF6A00] hover:bg-[#FF5A00] text-white ml- ">
                      Request a Demo quote
                    </Button>
                  </div>
                </div>

                {/* Summary Section */}
                <div className="space-y-6 flex flex-col items-center self-center border border-[#F9F9F9] p-[11px] rounded-[12px] shadow-[0px_2px_2px_0px_#00000040]">
                  <div className="space-y-4 font-open-sans font-[600] text-[15px]">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Price</span>
                      <span className="font-semibold">N5000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Estimated Delivery <br /> Time
                      </span>
                      <span className="font-semibold">1/2 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service</span>
                      <span className="font-semibold">Standard</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distance</span>
                      <span className="font-semibold">8km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight</span>
                      <span className="font-semibold">2.5kg (small)</span>
                    </div>
                  </div>
                  <Link to="/signup">
                    <Button className="bg-[#FF6A00] hover:bg-[#FF5A00] text-white  ">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-center text-xs md:text-[1vw] text-gray-500 mt-6">
              Prices may Vary slightly based on traffic or package size
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row  gap-8 mb-8">
            {/* Company */}
            <div>
              <h4 className="font-[700]   mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-200 font-[700] ">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 font-[700] ">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 font-[700] ">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Get the App */}
            <div className="text-xs">
              <h4 className="font-[700] mb-4">Get the App</h4>
              <ul className="space-y-2 text-xs font-[700]">
                <li className="">
                  <a href="#" className="hover:text-orange-200 ">
                    Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 ">
                    iOS
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal and Social */}
            <div>
              <h4 className="font-[700]  mb-4">Legal and Social</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-200 font-[700]  ">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 font-[700]  ">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-orange-400 pt-8 text-center">
            <div className="flex justify-center items-center mb-4"></div>
            <p className="text-white font-[700] text-xs">
              2025 Signtel. All Rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
