import React from "react";

type SelectProps = {
  state?: "normal" | "hover";
  options: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({
  state = "normal",
  options,
  value,
  onChange,
}: SelectProps) {
  const baseClasses =
    "bg-bg-neutral-base border border-solid rounded-medium w-full h-h-5 px-p-4 flex items-center justify-between font-pretendard text-typo-body-medium-regular appearance-none";

  let stateClasses = "";
  switch (state) {
    case "hover":
      stateClasses = "border-border-neutral-level1-hover";
      break;
    case "normal":
    default:
      stateClasses = "border-border-neutral-level1";
      break;
  }

  return (
    <div className="relative w-full">
      <select
        className={`${baseClasses} ${stateClasses}`}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
