import React from "react";

type SearchProps = {
  state?: "normal" | "hover";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function Search({
  state = "normal",
  value,
  onChange,
  placeholder = "검색어를 입력해주세요.",
}: SearchProps) {
  const baseClasses =
    "bg-bg-neutral-base border border-solid rounded-medium w-full h-h-5 px-p-4 flex items-center gap-g-2";

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
    <div className={`${baseClasses} ${stateClasses}`}>
      <svg
        className="w-4 h-4 text-text-neutral-disabled"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        className="bg-transparent w-full font-pretendard text-typo-body-medium-regular text-text-neutral-base placeholder-text-neutral-disabled focus:outline-none"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
