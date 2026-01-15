type InputProps = {
  state?: "normal" | "hover" | "error";
  errorMsg?: boolean;
};

export default function Input({ state = "normal", errorMsg = false }: InputProps) {
  const isError = state === "error";
  const isHover = state === "hover";

  const getContainerClasses = () => {
    let classes = "content-stretch flex flex-col items-start relative w-[184px]";
    if (state === "normal" || (isError && errorMsg)) {
      classes += " gap-1";
    }
    if ((isError || isHover) && errorMsg) {
      classes += " justify-center";
    }
    return classes;
  };

  const getFormClasses = () => {
    let classes = "bg-white border border-solid content-stretch flex h-8 items-center overflow-clip px-2 relative rounded-md shrink-0 w-full";
    if (isError) {
      classes += " border-[#dc3545] py-0";
    } else if (isHover) {
      classes += " border-[#a7b9cc] py-1.5";
    } else {
      classes += " border-[#c9d5e1] py-0";
    }
    return classes;
  };

  return (
    <div data-node-id={isError ? "5674-929" : isHover ? "5674-924" : "5674-917"} className={getContainerClasses()}>
      <div data-node-id={isError ? "5674-930" : isHover ? "5674-925" : "5674-416"} className={getFormClasses()} data-name="form">
        <p data-node-id={isError ? "5674-931" : isHover ? "5674-926" : "5674-417"} className="flex-1 leading-normal min-h-px min-w-px not-italic overflow-hidden relative text-sm text-[#a7b9cc] text-ellipsis whitespace-nowrap">
          텍스트를 입력해주세요.
        </p>
      </div>
      {errorMsg && (isError || isHover) && (
        <div data-node-id={isError ? "5674-932" : "5674-937"} className="content-stretch flex items-start relative shrink-0 w-full" data-name="vali_msg">
          <p data-node-id={isError ? "5674-933" : "5674-938"} className="leading-normal not-italic relative shrink-0 text-sm text-[#dc3545]">
            상황에 맞는 메시지를 넣어주세요.
          </p>
        </div>
      )}
    </div>
  );
}