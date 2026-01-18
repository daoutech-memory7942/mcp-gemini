import React from "react";

type ToastProps = {
  type?: "success" | "fail";
  message: string;
};

const SuccessIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const FailIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function Toast({ type = "success", message }: ToastProps) {
  const baseClasses =
    "border border-solid rounded-xlarge w-[320px] px-p-6 py-p-5 flex items-center gap-g-2 font-pretendard text-typo-body-large-regular text-text-neutral-white";

  let stateClasses = "";
  switch (type) {
    case "fail":
      stateClasses = "bg-bg-status-negative border-border-status-negative";
      break;
    case "success":
    default:
      stateClasses = "bg-bg-status-positive border-border-status-positive";
      break;
  }

  return (
    <div className={`${baseClasses} ${stateClasses}`}>
      {type === "success" ? <SuccessIcon /> : <FailIcon />}
      <p className="flex-1">{message}</p>
    </div>
  );
}
