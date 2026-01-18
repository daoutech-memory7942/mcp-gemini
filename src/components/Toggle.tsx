import React from "react";

type ToggleProps = {
  label?: boolean;
  state?: "normal" | "disabled";
  toggled?: boolean;
  onToggle?: (toggled: boolean) => void;
};

export default function Toggle({
  label = true,
  state = "normal",
  toggled = false,
  onToggle,
}: ToggleProps) {
  const handleToggle = () => {
    if (state !== "disabled" && onToggle) {
      onToggle(!toggled);
    }
  };

  const switchContainerClasses = `relative w-8 h-5 rounded-full transition-colors duration-200 ease-in-out cursor-pointer ${
    state === "disabled"
      ? toggled
        ? "bg-toggle-bg-disabled-checked"
        : "bg-toggle-bg-disabled"
      : toggled
      ? "bg-toggle-bg-primary"
      : "bg-toggle-bg-normal"
  }`;

  const switchCircleClasses = `absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5 transition-transform duration-200 ease-in-out ${
    toggled ? "transform translate-x-3" : ""
  }`;

  const labelClasses = `font-pretendard text-typo-body-medium-regular ${
    state === "disabled"
      ? "text-toggle-text-disabled"
      : "text-toggle-text-normal"
  }`;

  return (
    <div className="flex items-center gap-g-3">
      <div className={switchContainerClasses} onClick={handleToggle}>
        <div className={switchCircleClasses} />
      </div>
      {label && <p className={labelClasses}>토글버튼</p>}
    </div>
  );
}
