import { ChangeEventHandler } from "react";

type CCheckbox = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  size: number;
  title: string;
  titleStyles?: string;
  wrapperStyles?: string;
  key: number;
  index: number;
};

const CircleCheckbox = ({
  checked,
  onChange,
  size = 40,
  title,
  titleStyles,
  wrapperStyles,
  index,
}: CCheckbox) => {
  return (
    <label
      className={
        "flex items-center gap-2 px-4 py-1 mx-1 rounded-[4px] " +
        wrapperStyles
      }>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={`circle-checkbox transition-colors duration-300 ease-in-out ${
          checked ? index === 0 ? "bg-green-600" : "bg-indigo-500" : index === 0 ? "bg-indigo-500" : "bg-white"
        }`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          border: `2px solid ${checked ? "#16a345" : index === 0 ? "#fffcff" : "#ccc"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}>
        <svg
          width={size / 2}
          height={size / 2}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-300 ease-in-out ${
            checked ? "opacity-100" : "opacity-0"
          }`}>
          <path
            className="checkmark"
            d="M5 12.5L10 17L20 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: checked ? 0 : 100,
              transition: "stroke-dashoffset 0.3s ease",
            }}
          />
        </svg>
      </div>
      <span className={titleStyles}>{title}</span>
    </label>
  );
};

export default CircleCheckbox;
