import { useState } from "react";

interface AccordionGroupProps {
  title: string;
  children: React.ReactNode;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full">
      {/* Group Title */}
      <div
        className="flex items-center justify-start gap-2 cursor-pointer py-2 w-full"
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
        <span className="font-semibold">{title}</span>
      </div>

      {/* Nested Content */}
      {isOpen && <>{children}</>}
    </div>
  );
};

export default AccordionGroup;
