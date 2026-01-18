import React from "react";

const Logo = () => (
  <div className="h-[26px] w-[120px] overflow-clip relative">
    <p className="font-bold text-2xl text-white">LOGO</p>
  </div>
);

const Avatar = () => (
  <div className="relative shrink-0 size-[40px]">
    <img
      className="block max-w-none size-full rounded-full"
      alt="avatar"
      src="https://i.pravatar.cc/40"
    />
  </div>
);

const SidebarMenuItem = ({ icon, label, active = false }) => (
  <div
    className={`content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full ${
      active ? "bg-black/20" : ""
    }`}
  >
    {icon}
    <p className="font-medium leading-[1.6] not-italic relative shrink-0 text-text-neutral-white text-typo-body-medium-regular">
      {label}
    </p>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="bg-bg-primary-level1 content-stretch flex flex-col items-start overflow-clip py-[20px] relative self-stretch shrink-0 w-[320px]">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-full">
        <Logo />
      </div>
      <div className="content-stretch flex gap-[10px] items-start overflow-clip px-[24px] py-[20px] relative shrink-0 w-full">
        <Avatar />
        <div className="content-stretch flex flex-col items-start min-h-px min-w-px overflow-clip relative">
          <p className="font-medium leading-[1.6] not-italic relative shrink-0 text-text-neutral-white text-typo-body-medium-regular">
            김다우 사원
          </p>
          <p className="leading-[1.5] not-italic relative shrink-0 text-text-neutral-white text-typo-body-small-regular">
            애플리케이션디자인팀
          </p>
        </div>
      </div>
      <div className="border-t border-[#1298ac] content-stretch flex flex-col items-start overflow-clip py-[20px] relative shrink-0 w-full">
        <SidebarMenuItem
          label="홈"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          }
          active
        />
        <SidebarMenuItem
          label="드라이브"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          }
        />
        <SidebarMenuItem
          label="Works"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          }
        />
        <SidebarMenuItem
          label="설문"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
        <SidebarMenuItem
          label="메일"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>
    </aside>
  );
}
