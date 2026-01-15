type InputProps = {
  state?: "normal" | "hover" | "error";
  errorMsg?: boolean;
};

export default function Input({ state = "normal", errorMsg = false }: InputProps) {
  const isErrorAndErrorMsg = state === "error" && errorMsg;
  const isErrorMsgAndErrorOrHover = (state === "error" && errorMsg) || (state === "hover" && errorMsg);
  const isHoverAndErrorMsg = state === "hover" && errorMsg;
  const isHoverAndNotErrorMsg = state === "hover" && !errorMsg;
  const isNormalAndNotErrorMsg = state === "normal" && !errorMsg;
  return (
    <div id={isNormalAndNotErrorMsg ? "node-5674_917" : isHoverAndNotErrorMsg ? "node-5674_924" : isErrorAndErrorMsg ? "node-5674_929" : isHoverAndErrorMsg ? "node-5674_934" : ""} className={`content-stretch flex flex-col items-start relative w-[184px] ${isNormalAndNotErrorMsg ? "gap-[var(--padding/2,4px)]" : isHoverAndNotErrorMsg ? "" : isErrorMsgAndErrorOrHover ? "gap-[var(--padding/2,4px)] justify-center" : ""}`}>
      <div id={isNormalAndNotErrorMsg ? "node-5674_416" : isHoverAndNotErrorMsg ? "node-5674_925" : isErrorAndErrorMsg ? "node-5674_930" : isHoverAndErrorMsg ? "node-5674_935" : ""} className={`bg-[var(--input/bg/base,white)] border border-solid content-stretch flex h-[32px] items-center overflow-clip px-[var(--padding/4,8px)] relative rounded-[var(--radius/medium,6px)] shrink-0 w-full ${isNormalAndNotErrorMsg ? "border-[var(--input/border/base,#c9d5e1)] py-0" : isHoverAndNotErrorMsg ? "border-[var(--input/border/hover,#a7b9cc)] py-[var(--padding/3,6px)]" : isErrorMsgAndErrorOrHover ? "border-[var(--input/border/error,#dc3545)] py-0" : ""}`} data-name="form">
        <p id={isNormalAndNotErrorMsg ? "node-5674_417" : isHoverAndNotErrorMsg ? "node-5674_926" : isErrorAndErrorMsg ? "node-5674_931" : isHoverAndErrorMsg ? "node-5674_936" : ""} className={`flex-[1_0_0] font-["Pretendard:Regular",sans-serif] leading-[1.6] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[color:var(--input\/text\/disabled,#a7b9cc)] text-ellipsis whitespace-nowrap`}>
          텍스트를 입력해주세요.
        </p>
      </div>
      {isErrorMsgAndErrorOrHover && (
        <div id={isErrorAndErrorMsg ? "node-5674_932" : isHoverAndErrorMsg ? "node-5674_937" : ""} className="content-stretch flex items-start relative shrink-0 w-full" data-name="vali_msg">
          <p id={isErrorAndErrorMsg ? "node-5674_933" : isHoverAndErrorMsg ? "node-5674_938" : ""} className={`font-["Pretendard:Regular",sans-serif] leading-[1.6] not-italic relative shrink-0 text-[color:var(--input\/text\/error,#dc3545)] text-[length:var(--font-size\/body\/medium,14px)]`}>
            상황에 맞는 메시지를 넣어주세요.
          </p>
        </div>
      )}
    </div>
  );
}
