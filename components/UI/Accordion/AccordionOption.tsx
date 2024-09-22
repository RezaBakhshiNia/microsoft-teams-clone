import React, { useState } from "react";

interface AccordionOptionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionOption: React.FC<AccordionOptionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Option Title */}
      <div
        className={`flex items-center justify-center gap-2 cursor-pointer rounded w-full py-2 ${isOpen ? "bg-[#EBEBEB]" : ""}`}
        onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`transform transition-transform ${isOpen ? "rotate-90" : ""}`}>
          {/* Arrow Icon */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <span className="text-gray-700">{title}</span>
      </div>

      {/* Nested Items */}
      {isOpen && <>{children}</>}
    </>
  );
};

export default AccordionOption;
