import { useState } from "react";
import { ChevronDown } from "lucide-react"; // or any icon

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("ENG");

  const handleChange = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1 text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.7vw] xl:text-sm font-medium !font-['Open Sans']"
      >
        <span>{selected}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-32 bg-white border border-gray-200 shadow-md rounded-md z-50">
          <ul className="text-sm text-gray-700">
            <li
              onClick={() => handleChange("ENG")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
                 English
            </li>
            <li
              onClick={() => handleChange("FRA")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              French
            </li>
            <li
              onClick={() => handleChange("ESP")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Spanish
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}