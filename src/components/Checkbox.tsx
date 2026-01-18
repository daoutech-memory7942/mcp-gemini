import React from "react";

type CheckboxProps = {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state?: "normal" | "hover" | "disabled";
};

export default function Checkbox({
  label,
  checked = false,
  onChange,
  state = "normal",
}: CheckboxProps) {
  const isDisabled = state === "disabled";

  const checkboxBaseClasses =
    "w-4 h-4 border border-solid rounded-small flex items-center justify-center";

  let checkboxStateClasses = "";
  if (isDisabled) {
    checkboxStateClasses = checked
      ? "bg-control-bg-disabled-checked border-transparent"
      : "bg-control-bg-disabled border-control-border-level1-hover";
  } else {
    checkboxStateClasses = checked
      ? "bg-control-bg-primary border-transparent"
      : "bg-control-bg-normal border-control-border-level1";
    if (state === "hover") {
      checkboxStateClasses += " border-control-border-level1-hover";
    }
  }

  const labelClasses = `font-pretendard text-typo-body-medium-regular ${
    isDisabled ? "text-text-neutral-disabled" : "text-text-neutral-base"
  }`;

  return (
    <label className="flex items-center gap-g-3 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        disabled={isDisabled}
      />
      <div className={`${checkboxBaseClasses} ${checkboxStateClasses}`}>
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {label && <span className={labelClasses}>{label}</span>}
    </label>
  );
}
