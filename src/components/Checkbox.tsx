const img = "https://www.figma.com/api/mcp/asset/ef50aa97-0781-4e63-abda-a157baf0feed";
const img1 = "https://www.figma.com/api/mcp/asset/4c58a206-ac46-4523-ac8f-ed7dbeb3843d";
type CheckboxProps = {
  state?: "normal" | "check" | "hover";
  disabled?: boolean;
  label?: string;
};

export default function Checkbox({ state = "normal", disabled = false, label = "체크박스" }: CheckboxProps) {
  const isCheckAndDisabled = state === "check" && disabled;
  const isCheckAndNotDisabled = state === "check" && !disabled;
  const isCheckAndTrueOrFalse = (state === "check" && disabled) || (state === "check" && !disabled);
  const isDisabled = disabled;
  const isHoverAndNotDisabled = state === "hover" && !disabled;
  const isNormalAndDisabled = state === "normal" && disabled;
  const isNormalAndNotDisabled = state === "normal" && !disabled;
  const isNotDisabled = !disabled;
  return (
    <div id={isNormalAndNotDisabled ? "node-5674_1024" : isHoverAndNotDisabled ? "node-5674_1076" : isNormalAndDisabled ? "node-5674_1067" : isCheckAndDisabled ? "node-5674_1026" : isCheckAndNotDisabled ? "node-5674_1071" : ""} className="content-stretch flex gap-[var(--padding/3,6px)] items-center relative w-[184px]">
      <div id={isNormalAndNotDisabled ? "node-5674_1017" : isHoverAndNotDisabled ? "node-5674_1077" : isNormalAndDisabled ? "node-5674_1068" : isCheckAndDisabled ? "node-5674_1027" : isCheckAndNotDisabled ? "node-5674_1072" : ""} className={`shrink-0 size-[16px] ${isNormalAndNotDisabled ? "bg-[var(--control/bg/normal,white)] border border-[var(--control/border/level1,#c9d5e1)] border-solid rounded-[var(--radius/small,4px)]" : isHoverAndNotDisabled ? "bg-[var(--control/bg/normal,white)] border border-[var(--control/border/level1-hover,#a7b9cc)] border-solid rounded-[var(--radius/small,4px)]" : isNormalAndDisabled ? "bg-[var(--control/bg/disabled,#e7edf4)] border border-[var(--control/border/level1-hover,#a7b9cc)] border-solid rounded-[var(--radius/small,4px)]" : isCheckAndTrueOrFalse ? "relative" : ""}`} data-name="checkbox">
        {isCheckAndTrueOrFalse && (
          <div className="absolute inset-0" style={(isDisabled ? { "--fill-0": "rgba(189, 203, 217, 1)" } : isNotDisabled ? { "--fill-0": "rgba(8, 167, 191, 1)" } : undefined) as React.CSSProperties}>
            <img className="block max-w-none size-full" alt="" src={isDisabled ? img : isNotDisabled ? img1 : ""} />
          </div>
        )}
      </div>
      <p id={isNormalAndNotDisabled ? "node-5674_1018" : isHoverAndNotDisabled ? "node-5674_1078" : isNormalAndDisabled ? "node-5674_1069" : isCheckAndDisabled ? "node-5674_1028" : isCheckAndNotDisabled ? "node-5674_1074" : ""} className={`font-["Pretendard:Regular",sans-serif] leading-[1.6] not-italic overflow-hidden relative shrink-0 text-[14px] text-ellipsis ${isNormalAndNotDisabled || isHoverAndNotDisabled || isCheckAndNotDisabled ? "text-[color:var(--text/neutral/base,#2f353c)]" : isNormalAndDisabled || isCheckAndDisabled ? "text-[color:var(--text/neutral/disabled,#a7b9cc)]" : ""}`}>
        {label}
      </p>
    </div>
  );
}
