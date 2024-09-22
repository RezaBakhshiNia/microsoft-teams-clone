import React from "react";

interface AccordionItemProps {
  label: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ label }) => {
  return (
    <div className="flex items-center py-1 text-gray-600 justify-center translate-x-3">
      {/* Arrow Icon */}
      <span className="mr-2">
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
      {label}
    </div>
  );
};

export default AccordionItem;
