import React from "react";

export default function ArticleCard({ title, content, image }) {
  return (
    <div className="bg-bg-neutral-base content-stretch flex-1 flex-col h-70 items-start min-h-px min-w-px overflow-clip relative rounded-small">
      <div className="bg-[#f2f5f7] content-stretch flex items-center justify-center overflow-clip px-5 py-10 relative shrink-0 w-full">
        <div className="relative shrink-0 size-13">{image}</div>
      </div>
      <div className="border-t border-[#e4e6ec] content-stretch flex-1 flex-col gap-2.5 items-start leading-snug min-h-px min-w-px not-italic overflow-clip pl-5 pr-3 py-2.5 relative text-black w-full">
        <p className="font-bold relative shrink-0 text-typo-heading-medium">
          {title}
        </p>
        <p className="flex-1 font-regular min-h-px min-w-px overflow-hidden relative text-[13px] text-ellipsis w-full whitespace-pre-wrap">
          {content}
        </p>
      </div>
    </div>
  );
}
