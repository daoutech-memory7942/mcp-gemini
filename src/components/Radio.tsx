const img = "https://www.figma.com/api/mcp/asset/a28e61ce-7a71-4ddd-8e13-fbdbb3a03295";
const img1 = "https://www.figma.com/api/mcp/asset/cad25d72-13f0-422c-9898-bbbbbd629a9e";
type RadioProps = {
  state?: "check" | "hover" | "normal";
  disabled?: boolean;
};

export default function Radio({ state = "normal", disabled = false }: RadioProps) {
  const isCheckAndDisabled = state === "check" && disabled;
  const isCheckAndNotDisabled = state === "check" && !disabled;
  const isCheckAndTrueOrFalse = (state === "check" && disabled) || (state === "check" && !disabled);
  const isDisabled = disabled;
  const isHoverAndNotDisabled = state === "hover" && !disabled;
  const isNormalAndDisabled = state === "normal" && disabled;
  const isNormalAndNotDisabled = state === "normal" && !disabled;
  const isNotDisabled = !disabled;
  return (
    <div id={isNormalAndNotDisabled ? "node-5674_1096" : isHoverAndNotDisabled ? "node-5674_1099" : isNormalAndDisabled ? "node-5674_1102" : isCheckAndDisabled ? "node-5674_1105" : isCheckAndNotDisabled ? "node-5674_1109" : ""} className="content-stretch flex gap-[var(--padding/3,6px)] items-center relative w-[184px]">
      <div id={isNormalAndNotDisabled ? "node-5674_1097" : isHoverAndNotDisabled ? "node-5674_1100" : isNormalAndDisabled ? "node-5674_1103" : isCheckAndDisabled ? "node-5674_1106" : isCheckAndNotDisabled ? "node-5674_1110" : ""} className={`shrink-0 size-[16px] ${isNormalAndNotDisabled ? "bg-[var(--control/bg/normal,white)] border border-[var(--control/border/level1,#c9d5e1)] border-solid rounded-[var(--radius/full,40px)]" : isHoverAndNotDisabled ? "bg-[var(--control/bg/normal,white)] border border-[var(--control/border/level1-hover,#a7b9cc)] border-solid rounded-[var(--radius/full,40px)]" : isNormalAndDisabled ? "bg-[var(--control/bg/disabled,#e7edf4)] border border-[var(--control/border/level1-hover,#a7b9cc)] border-solid rounded-[var(--radius/full,40px)]" : isCheckAndTrueOrFalse ? "relative" : ""}`} data-name="radio">
        {isCheckAndTrueOrFalse && (
          <div className="absolute inset-0" style={(isDisabled ? { "--fill-0": "rgba(189, 203, 217, 1)" } : isNotDisabled ? { "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(8, 167, 191, 1)" } : undefined) as React.CSSProperties}>
            <img className="block max-w-none size-full" alt="" src={isDisabled ? img : isNotDisabled ? img1 : ""} />
          </div>
        )}
      </div>
      <p id={isNormalAndNotDisabled ? "node-5674_1098" : isHoverAndNotDisabled ? "node-5674_1101" : isNormalAndDisabled ? "node-5674_1104" : isCheckAndDisabled ? "node-5674_1108" : isCheckAndNotDisabled ? "node-5674_1112" : ""} className={`font-["Pretendard:Regular",sans-serif] leading-[1.6] not-italic overflow-hidden relative shrink-0 text-[14px] text-ellipsis ${isNormalAndNotDisabled || isHoverAndNotDisabled || isCheckAndNotDisabled ? "text-[color:var(--text/neutral/base,#2f353c)]" : isNormalAndDisabled || isCheckAndDisabled ? "text-[color:var(--text/neutral/disabled,#a7b9cc)]" : ""}`}>
        라디오버튼
      </p>
    </div>
  );
}
