import React from 'react';

const img = "https://www.figma.com/api/mcp/asset/fb5be122-05e9-4a11-891a-99290d89a7a2";
const img1 = "https://www.figma.com/api/mcp/asset/af04bc77-235b-4f96-ad04-fdb386bb34fc";
const img2 = "https://www.figma.com/api/mcp/asset/0d46d8fd-fc55-481b-8003-164e6b96a57d";
const img3 = "https://www.figma.com/api/mcp/asset/83c51675-dd47-40a5-83ed-d1461d3005cb";

type BtnProps = {
  label?: boolean;
  state?: "normal" | "disabled";
  toggle?: boolean;
};

const Btn: React.FC<BtnProps> = ({ label = true, state = "normal", toggle = false }) => {
  const isDisabledAndNotToggle = state === "disabled" && !toggle;
  const isDisabledAndToggle = state === "disabled" && toggle;
  const isNormalAndNotToggle = state === "normal" && !toggle;
  const isNormalAndToggle = state === "normal" && toggle;

  return (
    <div id={isNormalAndNotToggle ? "node-5678_179" : isNormalAndToggle ? "node-5678_186" : isDisabledAndNotToggle ? "node-5678_195" : isDisabledAndToggle ? "node-5678_199" : ""} className="content-stretch flex gap-[var(--padding\\/3,6px)] items-center relative">
      <div id={isNormalAndNotToggle ? "node-5678_168" : isNormalAndToggle ? "node-5678_187" : isDisabledAndNotToggle ? "node-5678_196" : isDisabledAndToggle ? "node-5678_200" : ""} className="h-[20px] relative shrink-0 w-[32px]" data-name="toggle">
        <div className="absolute inset-0" style={(isNormalAndNotToggle || isDisabledAndNotToggle ? { "--fill-0": "rgba(231, 237, 244, 1)" } : isNormalAndToggle ? { "--fill-0": "rgba(8, 167, 191, 1)" } : isDisabledAndToggle ? { "--fill-0": "rgba(189, 203, 217, 1)" } : undefined) as any}>
          <img className="block max-w-none size-full" alt="" src={isNormalAndNotToggle ? img : isNormalAndToggle ? img1 : isDisabledAndNotToggle ? img2 : isDisabledAndToggle ? img3 : ""} />
        </div>
      </div>
      {(isNormalAndNotToggle || isNormalAndToggle) && label && (
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.6] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[color:var(--toggle\/text\/normal,#2f353c)]" data-node-id="5678:171">
          토글버튼
        </p>
      )}
      {(isDisabledAndNotToggle || isDisabledAndToggle) && label && (
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.6] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[color:var(--toggle\/text\/disabled,#a7b9cc)]" data-node-id="5678:198">
          토글버튼
        </p>
      )}
    </div>
  );
};

export default Btn;
