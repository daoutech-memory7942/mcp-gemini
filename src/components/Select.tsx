const img = "https://www.figma.com/api/mcp/asset/ce2060ac-6713-426b-aa9d-1d95f9b7b3f6";
type SelectProps = {
  state?: "normal" | "hover";
};

export default function Select({ state = "normal" }: SelectProps) {
  const isHover = state === "hover";
  const isNormal = state === "normal";
  return (
    <div id={isNormal ? "node-5674_1011" : isHover ? "node-5674_1013" : ""} className={`bg-[var(--bg/neutral/base,white)] border border-solid content-stretch flex items-center justify-center overflow-clip px-[8px] py-[5px] relative rounded-[var(--radius/medium,6px)] w-[184px] ${isNormal ? "border-[var(--border/neutral/level1,#c9d5e1)]" : isHover ? "border-[var(--border/neutral/level1-hover,#a7b9cc)]" : ""}`}>
      <p id={isNormal ? "node-5674_1004" : isHover ? "node-5674_1014" : ""} className={`flex-[1_0_0] font-["Pretendard:Regular",sans-serif] leading-[1.6] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[color:var(--text/neutral/base,#2f353c)] text-ellipsis whitespace-nowrap`}>
        셀렉트
      </p>
      <div id={isNormal ? "node-5674_1089" : isHover ? "node-5674_1091" : ""} className="relative shrink-0 size-[20px]" data-name="icon">
        <img className="block max-w-none size-full" alt="" src={img} />
      </div>
    </div>
  );
}
