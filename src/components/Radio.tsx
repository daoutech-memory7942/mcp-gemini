import React from "react";

type RadioProps = {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state?: "normal" | "hover" | "disabled";
  name?: string;
  value?: string;
};

export default function Radio({
  label,
  checked = false,
  onChange,
  state = "normal",
  name,
  value,
}: RadioProps) {
  const isDisabled = state === "disabled";

  const radioBaseClasses =
    "w-4 h-4 border border-solid rounded-full flex items-center justify-center";

  let radioStateClasses = "";
  if (isDisabled) {
    radioStateClasses = "bg-control-bg-disabled border-control-border-level1-hover";
  } else {
    radioStateClasses = `bg-control-bg-normal ${
      checked ? "border-control-bg-primary" : "border-control-border-level1"
    }`;
    if (state === "hover") {
      radioStateClasses += " border-control-border-level1-hover";
    }
  }

  const labelClasses = `font-pretendard text-typo-body-medium-regular ${
    isDisabled ? "text-text-neutral-disabled" : "text-text-neutral-base"
  }`;

  return (
    <label className="flex items-center gap-g-3 cursor-pointer">
      <input
        type="radio"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        disabled={isDisabled}
        name={name}
        value={value}
      />
      <div className={`${radioBaseClasses} ${radioStateClasses}`}>
        {checked && (
          <div
            className={`w-2 h-2 rounded-full ${
              isDisabled ? "bg-control-icon-disabled" : "bg-control-bg-primary"
            }`}
          />
        )}
      </div>
      {label && <span className={labelClasses}>{label}</span>}
    </label>
  );
}
