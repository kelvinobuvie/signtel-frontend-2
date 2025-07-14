import React from "react";
import womanholdingPhone from "../../assets/womanholdingPhone.png";
import gps from "../../assets/gps.png";
import pc from "../../assets/pc.png";
import PhoneInHand from "../../assets/PhoneInHand.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <section className="Hero">
        {/* Hero container */}
        <div className=" md:h-96 lg:h-screen w-full bg-[url('/src/assets/hero.jpg')] bg-cover bg-no-repeat bg-center  bg-blend-multiply h-96 bg-gray-400 ">
          {/* Hero Section */}
          <div className="flex flex-col justify-end h-full px-4 pb-4 lg:pb-28 lg:px-8 md:px-4 lg:flex-row lg:items-end md:flex-row md:items-end md:gap-2">
            {/* Hero Text */}
            <div className="lg:w-2/3 md:w-2/3">
              <p className="text-white text-3xl md:text-4xl lg:text-7xl lg:tracking-wide lg:leading-20 font-Poppins font-bold">
                Fast, Reliable <span className="text-[#00B16A]">Delivery</span>{" "}
                for Every Nigerian
              </p>
              <p className="text-white mt-4 w-1/2 text-sm lg:text-lg  md:w-1/2 lg:w-1/2">
                Signtel connects you to trusted drivers for seamless same day
                delivery
              </p>
            </div>

            {/* Buttons for the Hero */}
            <div className="left-side flex flex-col font-sans font-medium text-white text-base md:text-sm lg:text-base mt-2 lg:flex-row lg:w-1/2 lg:gap-2 md:flex-row md:w-1/2 md:gap-1">
              <a className="text-white px-2 py-2 bg-orange  flex items-center justify-center rounded-4xl mt-2 hover:bg-green  transition duration-1000 ease-in-out w-1/2">
                Request a Delivery
              </a>
              <a className="text-green px-2 py-2 bg-white border-2 border-green flex items-center justify-center rounded-4xl mt-2 hover:text-white hover:bg-green transition duration-1000 ease-in-out w-1/2">
                Become a Driver
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="How-it-works">
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="text-center mb-12 relative mx-auto items-center justify-center flex">
            <h2 className="text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3.125vw] xl:text-[60px] font-[700] text-black mb-2 text-center relative font-Poppins">
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

          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center  items-center px-16 md:px-1 lg:px-1">
            {/* Step 1: Request a Delivery */}
            <div className="w-[100%] sm:w-[26%] h-96 sm:h-[100%] overflow-hidden shadow-[0px_4px_4px_0px_#00000040]  rounded-[12px]">
              <div className="bg-[#008751] text-[white] text-center py-6 md:py-6 lg:py-6">
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
                        fill="#FFFFFF"
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
                <h3 className="text-xl md:text-lg lg:text-2xl font-semibold font-Poppins">
                  Request a Delivery
                </h3>
              </div>
              <div className="px-4 pb-4 bg-[#FAFAFA] pt-20 flex flex-col justify-end font-semibold text-2xl items-start">
                <p className="text-gray-700 mb-4 text-left font-sans font-semibold text-lg md:text-sm lg:text-xl">
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
            <div className="w-[100%] sm:w-[26%] h-96 sm:h-[100%] overflow-hidden shadow-[0px_4px_4px_0px_#00000040]   rounded-[12px]  ">
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
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.6344 1H39.8844L53.1388 40.75"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.945 40.75L45.3096 16.8456M45.3096 14.25H57.7822L60.5 6.88892M10.4444 15.684H20.75M20.75 15.7222L25.5685 31.0643"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-lg lg:text-2xl font-semibold font-Poppins">
                  Drivers Deliver
                </h3>
              </div>
              <div className="px-4 pb-4 bg-[#FAFAFA] p-20 flex flex-col justify-end font-semibold text-2xl items-start">
                <p className="text-gray-700 mb-4 text-left font-sans font-semibold text-lg md:text-sm lg:text-xl">
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
            <div className="w-[100%] sm:w-[26%] h-96 sm:h-[100%] overflow-hidden shadow-[0px_4px_4px_0px_#00000040]   rounded-[12px]  ">
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
                      stroke="#FFFFFF"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.7564 8.05525C20.0042 7.06369 20.5764 6.18343 21.3819 5.55436C22.1875 4.9253 23.1801 4.58353 24.2022 4.58337H30.7953C31.8174 4.58353 32.8101 4.9253 33.6156 5.55436C34.4212 6.18343 34.9933 7.06369 35.2412 8.05525L36.6666 13.75H18.3333L19.7564 8.05525Z"
                      stroke="#FFFFFF"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.625 27.5H34.375M20.625 36.6667H34.375"
                      stroke="#FFFFFF"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <h2 className="text-xl md:text-lg lg:text-2xl font-semibold font-Poppins">
                  Admins Manage
                </h2>
              </div>
              <div className="px-4 pb-4 bg-[#FAFAFA] pt-20 flex flex-col justify-end font-semibold text-2xl items-start">
                <p className="text-gray-700 mb-4 text-left font-sans font-semibold text-lg md:text-sm lg:text-xl">
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

          <button className="py-3 px-8 text-base font-sans font-semibold text-white bg-orange rounded-4xl hover:bg-orange-700 transition duration-1000 ease-in-out ">
            Get Started Now
          </button>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[5.125vw] lg:text-[3.125vw] font-[700] leading-[100%] tracking-[0%] text-gray-900 inline-block">
              Built for <span className="text-orange-500">Everyone</span> on the
              Move
            </h2>
          </div>

          <div className="space-y-8 md:space-y-16 lg:space-y-16 flex flex-col items-center">
            {/* Real-Time Package Tracking */}
            <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-4 items-center justify-start w-[75.33vw]  rounded-4xl bg-white p-6 shadow-[0px_6.06px_6.06px_0px_#4E4E4E0A,0px_4px_10px_0px_#00000005,0px_1.4px_1.3px_0px_#5B5B5B1A]">
              <div className="order-2 lg:order-1">
                <div className="flex items-center justify-center">
                  <img
                    src={PhoneInHand}
                    alt="Phone tracking interface"
                    className="lg:w-[15.78vw] object-center"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-1 space-y-4 px-3">
                <h3 className="text-[3.5vw] lg:text-[1.5vw] font-[700] text-gray-900 ">
                  Real-Time Package Tracking
                </h3>
                <p className="text-gray-600 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-open-sans">
                  Allows customers to track their parcel's live location and
                  estimated delivery time.
                </p>
                <button className="py-2 px-4 text-sm font-sans font-semibold text-white bg-orange rounded-4xl hover:bg-orange-600 transition duration-1000 ease-in-out ">
                  Track my package →
                </button>
              </div>
            </div>

            {/* Easy Booking & Scheduling */}
            <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-4 items-center justify-between w-[75.33vw]  rounded-4xl bg-white p-6 shadow-[0px_6.06px_6.06px_0px_#4E4E4E0A,0px_4px_10px_0px_#00000005,0px_1.4px_1.3px_0px_#5B5B5B1A]">
              <div className="order-1 lg:order-1 space-y-4 px-3 ">
                <h3 className="text-[3.5vw] lg:text-[1.5vw]  font-[700] text-gray-900">
                  Easy Booking & Scheduling
                </h3>
                <p className="text-gray-600 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-open-sans">
                  Enables users to schedule pickups and deliveries with options
                  for same-day, next-day, or custom timing.
                </p>
                <button className="py-2 px-4 text-sm font-sans font-semibold text-white bg-orange rounded-4xl hover:bg-orange-600 transition duration-1000 ease-in-out">
                  Book now →
                </button>
              </div>
              <div className="order-2 lg:order-2">
                <div className="flex items-center justify-center">
                  <img
                    src={womanholdingPhone}
                    alt="Booking interface"
                    className="lg:w-[15.78vw]  rounded-[30px] object-center"
                  />
                </div>
              </div>
            </div>

            {/* Optimized Route Navigation */}
            <div className="flex flex-col md:flex-row lg:flex-row gap-4 items-center justify-start w-[75.33vw] rounded-4xl bg-white p-6 shadow-[0px_6.06px_6.06px_0px_#4E4E4E0A,0px_4px_10px_0px_#00000005,0px_1.4px_1.3px_0px_#5B5B5B1A]">
              <div className="">
                <div className="flex items-center justify-center">
                  <img
                    src={gps}
                    alt="Navigation interface"
                    className="lg:w-[15.78vw] rounded-[30px] object-center"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-1 space-y-4 px-3">
                <h3 className="text-[3.5vw] lg:text-[1.5vw]  font-[700] text-gray-900">
                  Optimized Route Navigation
                </h3>
                <p className="text-gray-600 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-open-sans">
                  Provides turn-by-turn GPS directions and suggests the most
                  efficient delivery routes to save time and fuel.
                </p>
                <button className="py-2 px-4 text-sm font-sans font-semibold text-white bg-orange rounded-4xl hover:bg-orange-600 transition duration-1000 ease-in-out ">
                  Try it now →
                </button>
              </div>
            </div>

            {/* Dashboard & Analytics */}
            {/* <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-4 items-center justify-start w-[75.33vw] rounded-[54px] bg-white p-6 shadow-[0px_6.06px_6.06px_0px_#4E4E4E0A,0px_4px_10px_0px_#00000005,0px_1.4px_1.3px_0px_#5B5B5B1A]">
              <div className="">
                <div className="flex items-center justify-center">
                  <img
                    src={pc}
                    alt="Navigation interface"
                    className="lg:w-[15.78vw] rounded-[30px] object-center"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-1 space-y-4 px-3">
                <h3 className="text-[3.5vw] lg:text-[1.5vw]  font-[700] text-gray-900">
                  Dashboard & Analytics
                </h3>
                <p className="text-gray-600 text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-open-sans">
                  A central dashboard that shows delivery statuses, rider
                  performance, order volume, customer feedback, and key
                  operational metrics to help manage the logistics business
                  effectively.
                </p>
                <button className="py-2 px-4 text-sm font-sans font-semibold text-white bg-orange rounded-4xl hover:bg-orange-600 transition duration-1000 ease-in-out ">
                  Start now →
                </button>
              </div>
            </div> */}

            <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-4 justify-between items-center w-[75.33vw] rounded-[54px] bg-white p-6 shadow-[0px_6.06px_6.06px_0px_#4E4E4E0A,0px_4px_10px_0px_#00000005,0px_1.4px_1.3px_0px_#5B5B5B1A]">
              <div className="order-1 lg:order-1 space-y-4 px-3">
                <h3 className="text-[3.5vw] lg:text-[1.5vw] font-[700] text-gray-900">
                  Dashboard & Analytics
                </h3>
                <p className="text-gray-600  text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-lg font-open-sans whitespace-normal md:w-[45.21vw] lg:w-[45.21vw] ">
                  A central dashboard that shows delivery statuses, rider
                  performance, order volume, customer feedback, and key
                  operational metrics to help manage the logistics business
                  effectively.
                </p>
                <button className="py-2 px-4 text-sm font-sans font-semibold text-white bg-orange rounded-4xl hover:bg-orange-600 transition duration-1000 ease-in-out ">
                  Start now →
                </button>
              </div>
              <div className="order-2 lg:order-2">
                <div className="flex items-center justify-center">
                  <img
                    src={pc}
                    alt="Dashboard interface"
                    className="lg:w-[15.78vw]  rounded-[30px] object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Estimate Section */}
      <section className="py-16 bg-white flex flex-col">
        <div className=" px-4 sm:px-6 lg:px-8 flex flex-col ">
          <div className="text-center mb-12 relative mx-auto items-center justify-center flex">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold font-Poppins text-gray-900  mb-4">
              Nigeria's <span className="text-orange-500">Delivery</span> Game
              just leveled Up
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
          {/* <div className="items-center mb-12 flex juw-[100%]">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold font-Poppins text-gray-900  mb-4">
              Nigeria's <span className="text-orange-500">Delivery</span> Game
              just leveled Up
              <div className="flex items-end">
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
          </div> */}

          <div className="font-open-sans flex flex-col items-center">
            <div className="bg-white border-1 border-[#008751] rounded-2xl p-8 md:w-full lg:w-2/3">
              <div className=" mb-8 flex items-center flex-col">
                <h3 className="text-[4.5vw] md:text-[2.5vw] font-[Poppins] font-[900] text-gray-900 mb-2">
                  Your Instant Delivery Estimate
                </h3>
                <p className="text-[#2B2A2A] font-['Poppins'] font-[400] text-xs md:text-[1.04vw] leading-[30px] tracking-[0%] text-center">
                  Here's a sneak peek at what You can expect
                </p>
              </div>

              <div className="lg:flex gap-4">
                {/* Form */}
                <div className="lg:w-1/2 md:w-1/2">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pick-Up Loacation
                    </label>
                    <input
                      type=""
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                      placeholder="Enter pickup address"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Location
                    </label>
                    <input
                      type=""
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                      placeholder="Enter Delivery Location"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reciever's Phone Number
                    </label>
                    <input
                      type=""
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-300"
                      placeholder=" Enter Reciever's Phone Number"
                    />
                  </div>
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800">
                      <option value="Bike">Bike</option>
                      <option value="Van">Van</option>
                    </select>
                  </div>
                </div>
                {/* Summary */}
                <div className="lg:w-1/2 md:w-1/2 flex items-center justify-center">
                  <div className="space-y-6 flex flex-col items-center border border-[#F9F9F9] p-[11px] rounded-[12px] shadow-[0px_2px_2px_0px_#00000040] w-full">
                    <div className="space-y-4 font-open-sans font-[600] text-[15px] w-full">
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

                    <Link to="/signup" className="w-full flex justify-center">
                      <button className="bg-[#FF6A00] hover:bg-[#FF5A00] text-white px-6 py-2 rounded-md">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs md:text-[1vw] text-gray-500 mt-6">
              Prices may Vary slightly based on traffic or package size
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
