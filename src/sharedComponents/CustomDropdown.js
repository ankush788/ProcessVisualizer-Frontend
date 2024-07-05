import { useState, useEffect, useRef } from "react";

const CustomDropdown = ({ options, algorithm, setAlgorithm, setInputErr, setButtonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setAlgorithm(option);
    setIsOpen(false);
    setButtonText("Submit");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full sm:text-xs md:text-sm" ref={dropdownRef}>
      <button
        className="inputStyles relative w-full z-40 md:p-2"
        onClick={() => {setIsOpen(!isOpen); setInputErr(false);}}
      >
        <div className="flex justify-between sm:text-xs md:text-sm">
          {algorithm.label} <span>▾</span>
        </div>
      </button>
      {isOpen && (
        <div className="absolute w-full border border-slate-300 bg-white rounded z-50">
          {options.map((option, index) => (
            <div
              key={index}
              className="hover:bg-black hover:text-white cursor-pointer rounded p-2 text-xs md:text-sm"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
