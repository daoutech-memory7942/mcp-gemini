import React from "react";

export default function StatCard({ value, label, icon }) {
  return (
    <div className="bg-bg-neutral-base content-stretch flex-1 flex-col items-start min-h-px min-w-px overflow-clip relative rounded-small">
      <div className="content-stretch flex gap-2 items-center overflow-clip px-5 py-6 relative shrink-0 w-full">
        <div className="content-stretch flex flex-col flex-1 items-start justify-center leading-snug not-italic relative text-black whitespace-pre-wrap">
          <p className="font-bold relative shrink-0 text-typo-heading-medium w-48">
            {value}
          </p>
          <p className="font-regular relative shrink-0 text-typo-body-small-regular w-48">
            {label}
          </p>
        </div>
        <div className="bg-bg-neutral-level1 rounded-medium shrink-0 size-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="border-t border-[#e4e6ec] content-stretch flex items-center justify-between overflow-clip pl-5 pr-3 py-2.5 relative shrink-0 w-full">
        <p className="font-regular leading-snug not-italic relative shrink-0 text-typo-body-small-regular text-black">
          See detail
        </p>
        <div className="overflow-clip relative shrink-0 size-4">
          <svg
            className="w-4 h-4 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
