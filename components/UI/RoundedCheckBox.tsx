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
        "flex items-center gap-2 px-4 py-1 mx-1 rounded-[4px] " + wrapperStyles
      }>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={`circle-checkbox transition-colors duration-300 ease-in-out ${
          checked
            ? index === 0
              ? "bg-green-600"
              : "bg-indigo-500"
            : index === 0
              ? "bg-indigo-500"
              : "bg-white"
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
      {index === 0 ? (
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.146447 0.646447C0.341709 0.451184 0.658291 0.451184 0.853553 0.646447L4 3.79289L7.14645 0.646447C7.34171 0.451184 7.65829 0.451184 7.85355 0.646447C8.04882 0.841709 8.04882 1.15829 7.85355 1.35355L4.35355 4.85355C4.15829 5.04882 3.84171 5.04882 3.64645 4.85355L0.146447 1.35355C-0.0488155 1.15829 -0.0488155 0.841709 0.146447 0.646447Z"
            fill="white"
          />
        </svg>
      ) : null}
    </label>
  );
};

export default CircleCheckbox;
