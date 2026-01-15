type BtnProps = {
  type?: "primary" | "normal" | "ghost" | "secondary";
  state?: "hover" | "normal";
};

export default function Btn({ type = "primary", state = "normal" }: BtnProps) {
  const isGhostAndHover = type === "ghost" && state === "hover";
  const isGhostAndNormal = type === "ghost" && state === "normal";
  const isNormalAndHover = type === "normal" && state === "hover";
  const isNormalAndNormal = type === "normal" && state === "normal";
  const isPrimaryAndHover = type === "primary" && state === "hover";
  const isPrimaryAndNormal = type === "primary" && state === "normal";
  const isSecondaryAndHover = type === "secondary" && state === "hover";
  const isSecondaryAndNormal = type === "secondary" && state === "normal";
  return (
    <div id={isPrimaryAndNormal ? "node-5594_625" : isPrimaryAndHover ? "node-5619_404" : isSecondaryAndHover ? "node-5619_702" : isSecondaryAndNormal ? "node-5619_700" : isNormalAndNormal ? "node-5619_709" : isNormalAndHover ? "node-5619_711" : isGhostAndNormal ? "node-5665_427" : isGhostAndHover ? "node-5665_429" : ""} className={`content-stretch flex h-[var(--height-5)] items-center overflow-clip px-[var(--padding-5)] py-0 relative rounded-[var(--radius-medium)] ${isPrimaryAndNormal ? "bg-[var(--btn-bg-primary-base)]" : isPrimaryAndHover ? "bg-[var(--btn-bg-primary-hover)]" : isSecondaryAndHover ? "bg-[var(--btn-bg-normal-surface-hover)] border border-[var(--btn-border-primary)] border-solid" : isSecondaryAndNormal ? "bg-[var(--btn-bg-normal-base)] border border-[var(--btn-border-primary)] border-solid" : isNormalAndNormal ? "bg-[var(--btn-bg-normal-base)] border border-[var(--btn-border-normal)] border-solid" : isNormalAndHover ? "bg-[var(--btn-bg-normal-hover)] border border-[var(--btn-border-normal)] border-solid" : isGhostAndNormal ? "bg-[var(--btn-bg-normal-base)]" : isGhostAndHover ? "bg-[var(--btn-bg-normal-hover)]" : ""}`}>
      <p id={isPrimaryAndNormal ? "node-5594_621" : isPrimaryAndHover ? "node-5619_405" : isSecondaryAndHover ? "node-5619_703" : isSecondaryAndNormal ? "node-5619_701" : isNormalAndNormal ? "node-5619_710" : isNormalAndHover ? "node-5619_712" : isGhostAndNormal ? "node-5665_428" : isGhostAndHover ? "node-5665_430" : ""} className={`font-["Pretendard:Medium",sans-serif] leading-[1.6] not-italic relative shrink-0 text-[length:var(--font-size-body-medium)] ${isPrimaryAndNormal || isPrimaryAndHover ? "text-[color:var(--text-neutral-white)]" : isSecondaryAndHover || isSecondaryAndNormal ? "text-[color:var(--btn-text-primary)]" : isNormalAndNormal || isNormalAndHover || isGhostAndNormal || isGhostAndHover ? "text-[color:var(--text-neutral-base)]" : ""}`}>
        Button
      </p>
    </div>
  );
}