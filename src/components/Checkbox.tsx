const img = "https://www.figma.com/api/mcp/asset/f7638b09-ebc3-4242-bbdc-eda07764e389";
const img1 = "https://www.figma.com/api/mcp/asset/f388bb40-0681-4f32-be9a-9ca4fce605fb";

type CheckboxProps = {
  state?: "normal" | "check" | "hover";
  disabled?: boolean;
  label?: string;
};

export default function Checkbox({ state = "normal", disabled = false, label = "체크박스" }: CheckboxProps) {
  const isChecked = state === "check";
  const isHover = state === "hover";

  const getCheckboxClasses = () => {
    let classes = "shrink-0 size-4 border border-solid rounded-sm";
    if (disabled) {
      classes += " bg-[#e7edf4] border-[#a7b9cc]";
    } else if (isHover) {
      classes += " bg-white border-[#a7b9cc]";
    } else if (isChecked) {
        classes += " relative";
    }
    else {
      classes += " bg-white border-[#c9d5e1]";
    }
    return classes;
  };

  const getLabelClasses = () => {
    let classes = "leading-normal not-italic overflow-hidden relative shrink-0 text-sm text-ellipsis";
    if (disabled) {
      classes += " text-[#a7b9cc]";
    } else {
      classes += " text-[#2f353c]";
    }
    return classes;
  };

  return (
    <div className="content-stretch flex gap-1.5 items-center relative w-[184px]">
      <div className={getCheckboxClasses()} data-name="checkbox">
        {isChecked && (
          <div className="absolute inset-0">
            <img className="block max-w-none size-full" alt="" src={disabled ? img : img1} />
          </div>
        )}
      </div>
      <p className={getLabelClasses()}>
        {label}
      </p>
    </div>
  );
}