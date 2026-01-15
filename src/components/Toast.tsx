const imgCircleCheckFilled = "https://www.figma.com/api/mcp/asset/ab5c6ad8-72f4-4a50-b05f-27da385cd6a9";
const imgAlertCircleFilled = "https://www.figma.com/api/mcp/asset/b57f900d-80c3-446c-8da9-c1d8e1f5ada7";
type ToastProps = {
  type?: "success" | "fail";
};

export default function Toast({ type = "success" }: ToastProps) {
  const isFail = type === "fail";
  const isSuccess = type === "success";
  return (
    <div id={isSuccess ? "node-5676_307" : isFail ? "node-5676_309" : ""} className={`border border-solid content-stretch flex gap-[var(--padding/2,4px)] items-center justify-end overflow-clip px-[var(--padding/6,16px)] py-[var(--padding/5,12px)] relative rounded-[var(--radius/xlarge,12px)] w-[320px] ${isSuccess ? "bg-[var(--bg/status/positive,#03c75a)] border-[var(--border/status/positive,#03c75a)]" : isFail ? "bg-[var(--bg/status/negative,#dc3545)] border-[var(--border/status/negative,#dc3545)]" : ""}`}>
      {isSuccess && (
        <div data-node-id="5676:289" className="relative shrink-0 size-[20px]" data-name="circle-check-filled">
          <img className="block max-w-none size-full" alt="" src={imgCircleCheckFilled} />
        </div>
      )}
      <p id={isSuccess ? "node-5676_291" : isFail ? "node-5676_312" : ""} className={`flex-[1_0_0] font-["Pretendard:Regular",sans-serif] leading-[1.5] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-[color:var(--text/neutral/white,white)] text-ellipsis whitespace-nowrap`}>
        {isFail ? "파일 업로드 용량을 초과하였습니다." : "게시글이 정상적으로 등록되었습니다."}
      </p>
      {isFail && (
        <div data-node-id="5676:318" className="relative shrink-0 size-[20px]" data-name="alert-circle-filled">
          <img className="block max-w-none size-full" alt="" src={imgAlertCircleFilled} />
        </div>
      )}
    </div>
  );
}
