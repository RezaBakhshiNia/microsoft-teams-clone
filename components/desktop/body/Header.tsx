import CircleCheckbox from "@/components/UI/RoundedCheckBox";
import SearchInput from "@/components/UI/SearchInput";
import useHoverIndicator from "@/libs/hooks/useHoverIndicator";
import Image from "next/image";
import { Fragment, useReducer } from "react";

// Define action types for the reducer
type Action = { type: "TOGGLE_CHECKBOX"; index: number };

// Define the state type
type State = boolean[];

// Define the reducer function
const checkboxReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_CHECKBOX":
      return state.map((checked, index) =>
        index === action.index ? !checked : checked
      );
    default:
      return state;
  }
};

// Initial state: All checkboxes unchecked
const initialState: State = Array(8).fill(false);

// Define the type for the Header component (functional component with no props)
const Header: React.FC = () => {
  const { handleMouseOver, handleMouseOut, indicatorStyle, containerRef } =
    useHoverIndicator();

  // useReducer hook
  const [checkboxes, dispatch] = useReducer(checkboxReducer, initialState);

  // Function to handle checkbox change
  const handleCheckboxChange = (index: number) => {
    dispatch({ type: "TOGGLE_CHECKBOX", index });
  };

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between border-b px-4 py-2 relative"
        ref={containerRef}>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/desktop/body/Logo.png"
              width={32}
              height={32}
              alt="logo image"
              className=""
            />
            <h2 className="text-lg font-bold">Van Arsdel</h2>
          </div>
          {["Home", "TimeLine", "Chats", "Assigned to you"].map((item) => (
            <h6
              key={item}
              className=" cursor-pointer"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}>
              {item}
            </h6>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.51562 6C9.23948 6 9.01562 6.22386 9.01562 6.5C9.01562 6.77614 9.23948 7 9.51562 7H12.2929L8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L13 7.70711V10.4844C13 10.7605 13.2239 10.9844 13.5 10.9844C13.7761 10.9844 14 10.7605 14 10.4844V6.5C14 6.22386 13.7761 6 13.5 6H9.51562ZM12.7656 17C14.0136 17 15.0481 16.0855 15.2354 14.8901C16.2572 14.5761 17 13.6248 17 12.5V5.5C17 4.11929 15.8807 3 14.5 3H7.5C6.36321 3 5.40363 3.75875 5.10007 4.79744C3.90947 4.98887 3 6.02104 3 7.26562V13.5C3 15.433 4.567 17 6.5 17H12.7656ZM4 7.26562C4 6.61252 4.4174 6.0569 5 5.85098V12.5C5 13.8807 6.11929 15 7.5 15H14.1803C13.9744 15.5826 13.4187 16 12.7656 16H6.5C5.11929 16 4 14.8807 4 13.5V7.26562ZM7.5 4H14.5C15.3284 4 16 4.67157 16 5.5V12.5C16 13.3284 15.3284 14 14.5 14H7.5C6.67157 14 6 13.3284 6 12.5V5.5C6 4.67157 6.67157 4 7.5 4Z"
              fill="#424242"
            />
          </svg>
          <svg
            width="14"
            height="4"
            viewBox="0 0 14 4"
            fill="none"
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.25 2C3.25 2.69036 2.69036 3.25 2 3.25C1.30964 3.25 0.75 2.69036 0.75 2C0.75 1.30964 1.30964 0.75 2 0.75C2.69036 0.75 3.25 1.30964 3.25 2ZM8.25 2C8.25 2.69036 7.69036 3.25 7 3.25C6.30964 3.25 5.75 2.69036 5.75 2C5.75 1.30964 6.30964 0.75 7 0.75C7.69036 0.75 8.25 1.30964 8.25 2ZM12 3.25C12.6904 3.25 13.25 2.69036 13.25 2C13.25 1.30964 12.6904 0.75 12 0.75C11.3096 0.75 10.75 1.30964 10.75 2C10.75 2.69036 11.3096 3.25 12 3.25Z"
              fill="#424242"
            />
          </svg>
        </div>
        {/* transition-all duration-300 ease-in-out */}
        <span
          className="absolute border-t-4 border-[#5B5FC7] rounded-full"
          style={{
            width: `${indicatorStyle.width}px`,
            left: `${indicatorStyle.left}px`,
            bottom: "0px",
            height: "1px",
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}></span>
      </div>
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5ZM2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H2.5Z"
              fill="#424242"
            />
          </svg>
          {checkboxes.map((checked, index) => (
            <Fragment key={index}>
              <CircleCheckbox
                key={index}
                index={index}
                checked={checked}
                onChange={() => handleCheckboxChange(index)}
                size={24} // Customize size if needed
                title="Text"
                titleStyles={`text-[#424242] font-semibold text-sm leading-5 ${index === 0 ? "text-[#fffcff]" : ""}`}
                wrapperStyles={index === 0 ? "bg-[#5B5FC7] " : ""}
              />
              {(index + 1) % 3 === 0 && index !== checkboxes.length - 1 && (
                <div className="rounded min-h-[20px] min-w-[1px] bg-[#D1D1D1]"></div>
              )}
            </Fragment>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3">
          <h3>Filter</h3>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Header;
