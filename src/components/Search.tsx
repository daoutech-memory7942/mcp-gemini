const img = "https://www.figma.com/api/mcp/asset/984e79bd-1980-460b-9435-c1f8a4f5ba8c";
type SearchProps = {
  state?: "normal" | "hover";
};

export default function Search({ state = "normal" }: SearchProps) {
  const isHover = state === "hover";
  const isNormal = state === "normal";
  return (
    <div id={isNormal ? "node-5676_141" : isHover ? "node-5676_143" : ""} className={`bg-[var(--bg/neutral/base,white)] border border-solid content-stretch flex gap-[var(--padding/2,4px)] h-[var(--height/5,32px)] items-center justify-end overflow-clip px-[var(--padding/4,8px)] py-0 relative rounded-[var(--radius/medium,6px)] w-[184px] ${isNormal ? "border-[var(--border/neutral/level1,#c9d5e1)]" : isHover ? "border-[var(--border/neutral/level1-hover,#a7b9cc)]" : ""}`}>
      <div id={isNormal ? "node-5676_103" : isHover ? "node-5676_144" : ""} className="relative shrink-0 size-[16px]" data-name="icon-search">
        <img className="block max-w-none size-full" alt="" src={img} />
      </div>
      <p id={isNormal ? "node-5676_97" : isHover ? "node-5676_146" : ""} className={`flex-[1_0_0] font-["Pretendard:Regular",sans-serif] leading-[1.6] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[color:var(--text/neutral/disabled,#a7b9cc)] text-ellipsis whitespace-nowrap`}>
        검색어를 입력해주세요.
      </p>
    </div>
  );
}
