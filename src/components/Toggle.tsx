const img = "https://www.figma.com/api/mcp/asset/151d38ee-e5a4-4c29-ae6a-98882329bb4d";
const img1 = "https://www.figma.com/api/mcp/asset/de55e593-2cae-4674-b671-0822bb3d93b0";
const img2 = "https://www.figma.com/api/mcp/asset/774a61fc-2d17-4e9a-bef1-ecd4b77f5ed0";
const img3 = "https://www.figma.com/api/mcp/asset/ed1692fc-f902-43ff-ae4d-b8e804bed229";
type ToggleProps = {
  label?: boolean;
  state?: "normal" | "disabled";
  toggle?: boolean;
};

export default function Toggle({ label = true, state = "normal", toggle = false }: ToggleProps) {
  const isDisabledAndNotToggle = state === "disabled" && !toggle;
  const isDisabledAndToggle = state === "disabled" && toggle;
  const isNormalAndNotToggle = state === "normal" && !toggle;
  const isNormalAndToggle = state === "normal" && toggle;
  const isNotToggle = !toggle;
  const isToggle = toggle;
  return (
    <div id={isNormalAndNotToggle ? "node-5678_179" : isNormalAndToggle ? "node-5678_186" : isDisabledAndNotToggle ? "node-5678_195" : isDisabledAndToggle ? "node-5678_199" : ""} className="content-stretch flex gap-[var(--padding\/3,6px)] items-center relative">
      <div id={isNormalAndNotToggle ? "node-5678_168" : isNormalAndToggle ? "node-5678_187" : isDisabledAndNotToggle ? "node-5678_196" : isDisabledAndToggle ? "node-5678_200" : ""} className="h-[20px] relative shrink-0 w-[32px]" data-name="toggle">
        <div className="absolute inset-0" style={(isNormalAndNotToggle || isDisabledAndNotToggle ? { "--fill-0": "rgba(231, 237, 244, 1)" } : isNormalAndToggle ? { "--fill-0": "rgba(8, 167, 191, 1)" } : isDisabledAndToggle ? { "--fill-0": "rgba(189, 203, 217, 1)" } : undefined) as React.CSSProperties}>
          <img className="block max-w-none size-full" alt="" src={isNormalAndNotToggle ? img : isNormalAndToggle ? img1 : isDisabledAndNotToggle ? img2 : isDisabledAndToggle ? img3 : ""} />
        </div>
      </div>
      {(isNormalAndNotToggle || isNormalAndToggle) && label && (
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.6] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--toggle\/text\/normal,#2f353c)] text-ellipsis" data-node-id="5678:171">
          토글버튼
        </p>
      )}
      {(isDisabledAndNotToggle || isDisabledAndToggle) && label && (
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.6] not-italic overflow-hidden relative shrink-0 text-[14px] text-[color:var(--toggle\/text\/disabled,#a7b9cc)] text-ellipsis" data-node-id="5678:198">
          토글버튼
        </p>
      )}
    </div>
  );
}
