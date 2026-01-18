import React, { useState } from "react";
import { Search, Button } from "../components";
import Sidebar from "../layouts/Sidebar";

const StatCard = ({ value, label, icon }) => (
  <div className="bg-bg-neutral-base content-stretch flex-1 flex-col items-start min-h-px min-w-px overflow-clip relative rounded-xlarge">
    <div className="content-stretch flex gap-2 items-center overflow-clip px-5 py-6 relative shrink-0 w-full">
      <div className="bg-bg-neutral-level1 rounded-medium shrink-0 size-12 flex items-center justify-center">
        {icon}
      </div>
      <div className="content-stretch flex flex-col items-center justify-center leading-snug not-italic relative shrink-0 text-black whitespace-pre-wrap">
        <p className="font-bold relative shrink-0 text-typo-heading-medium w-48">
          {value}
        </p>
        <p className="font-regular relative shrink-0 text-typo-body-small-regular w-48">
          {label}
        </p>
      </div>
    </div>
    <div className="border-t border-[#e4e6ec] content-stretch flex items-center justify-between overflow-clip pl-5 pr-3 py-2.5 relative shrink-0 w-full">
      <p className="font-regular leading-snug not-italic relative shrink-0 text-typo-body-small-regular text-black">
        See detail
      </p>
      <div className="overflow-clip relative shrink-0 size-4">
        <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
);

const ArticleCard = ({ title, content, image }) => (
    <div className="bg-bg-neutral-base content-stretch flex-1 flex-col h-70 items-start min-h-px min-w-px overflow-clip relative rounded-xlarge">
        <div className="bg-[#f2f5f7] content-stretch flex items-center justify-center overflow-clip px-5 py-10 relative shrink-0 w-full">
            <div className="relative shrink-0 size-13">
                {image}
            </div>
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


const MainContent = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <main className="bg-[#e7e8ec] content-stretch flex-1 flex-col items-start min-h-px min-w-px overflow-clip pb-10 relative self-stretch">
            <div className="border border-[#d3d6e3] border-solid content-stretch flex items-center justify-between px-6 py-4 relative shrink-0 w-full">
                <Search value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <div className="content-stretch flex gap-2.5 items-start overflow-clip relative shrink-0">
                    <Button type="normal">Button</Button>
                    <Button type="primary">Button</Button>
                </div>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-center pt-5 px-6 relative shrink-0 w-full">
                <p className="font-bold leading-snug not-italic relative shrink-0 text-typo-heading-medium text-black">
                    Overview
                </p>
                <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full">
                    <StatCard value="10" label="Total Documents" icon={<svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} />
                    <StatCard value="412" label="Total Mail" icon={<svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}/>
                    <StatCard value="54" label="Total Apps" icon={<svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>}/>
                    <StatCard value="7" label="Total Board" icon={<svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v11a2 2 0 01-2 2z" /></svg>}/>
                </div>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-center pt-5 px-6 relative shrink-0 w-full">
                <p className="font-bold leading-snug not-italic relative shrink-0 text-typo-heading-medium text-black">
                    Overview
                </p>
                <div className="flex flex-wrap gap-4 items-start relative shrink-0 w-full">
                    <ArticleCard title="Next Week" content="President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday." image={<svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 01-2.828 0L6 14m6-6l.586-.586a2 2 0 012.828 0L18 8m-4 4l.586.586a2 2 0 002.828 0L20 14m-6-6l2-2m-2 2l-2-2" /></svg>} />
                    <ArticleCard title="Next Week" content="President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday." image={<svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 01-2.828 0L6 14m6-6l.586-.586a2 2 0 012.828 0L18 8m-4 4l.586.586a2 2 0 002.828 0L20 14m-6-6l2-2m-2 2l-2-2" /></svg>} />
                    <ArticleCard title="A look back at 2025" content="President Lee Jae Myung came into office in June, filling the void left by former President Yoon Suk Yeol. The transition reshaped the political landscape. The conservative People Power Party saw its" image={<svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 01-2.828 0L6 14m6-6l.586-.586a2 2 0 012.828 0L18 8m-4 4l.586.586a2 2 0 002.828 0L20 14m-6-6l2-2m-2 2l-2-2" /></svg>} />
                    <ArticleCard title="NIS refutes Coupang" content="South Korea’s National Intelligence Service on Tuesday denied Coupang interim" image={<svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 01-2.828 0L6 14m6-6l.586-.586a2 2 0 012.828 0L18 8m-4 4l.586.586a2 2 0 002.828 0L20 14m-6-6l2-2m-2 2l-2-2" /></svg>} />
                </div>
            </div>
        </main>
    )
};

export default function DashboardPage() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative w-full h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}