import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-orange-500 text-white py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="flex flex-row  gap-8 mb-8 lg:w-1/2">
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

            {/* Right-Footter */}
            <div className="flex flex-row  gap-8 mb-8 lg:w-1/2">
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
};

export default Footer;
