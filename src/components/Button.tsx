import React from "react";

type BtnProps = {
  type?: "primary" | "normal" | "ghost" | "secondary";
  state?: "hover" | "normal";
  children?: React.ReactNode;
};

export default function Btn({
  type = "primary",
  state = "normal",
  children = "Button",
}: BtnProps) {
  const baseClasses =
    "content-stretch flex items-center overflow-clip relative h-h-5 px-p-5 rounded-medium font-pretendard text-typo-body-medium-bold";

  let variantClasses = "";

  switch (type) {
    case "primary":
      variantClasses = `text-text-neutral-white ${
        state === "hover" ? "bg-btn-bg-primary-hover" : "bg-btn-bg-primary-base"
      }`;
      break;
    case "secondary":
      variantClasses = `border border-btn-border-primary text-btn-text-primary ${
        state === "hover" ? "bg-btn-bg-normal-hover" : "bg-btn-bg-normal-base"
      }`;
      break;
    case "normal":
      variantClasses = `border border-btn-border-normal text-btn-text-normal ${
        state === "hover" ? "bg-btn-bg-normal-hover" : "bg-btn-bg-normal-base"
      }`;
      break;
    case "ghost":
      variantClasses = `text-btn-text-normal ${
        state === "hover" ? "bg-btn-bg-normal-hover" : "bg-transparent"
      }`;
      break;
    default:
      break;
  }

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <p>{children}</p>
    </div>
  );
}
