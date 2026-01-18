import React from "react";

type InputProps = {
  state?: "normal" | "hover" | "error";
  errorMsg?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function Input({
  state = "normal",
  errorMsg,
  value,
  onChange,
  placeholder = "텍스트를 입력해주세요.",
}: InputProps) {
  const baseClasses =
    "bg-input-bg-base border border-solid h-h-5 px-p-4 rounded-medium w-full font-pretendard text-typo-body-medium-regular";

  let stateClasses = "";
  switch (state) {
    case "hover":
      stateClasses = "border-input-border-hover";
      break;
    case "error":
      stateClasses = "border-input-border-error";
      break;
    case "normal":
    default:
      stateClasses = "border-input-border-base";
      break;
  }

  return (
    <div className="flex flex-col gap-p-2 w-full">
      <input
        type="text"
        className={`${baseClasses} ${stateClasses}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errorMsg && state === "error" && (
        <p className="font-pretendard text-input-text-error text-typo-body-medium-regular">
          {errorMsg}
        </p>
      )}
    </div>
  );
}
