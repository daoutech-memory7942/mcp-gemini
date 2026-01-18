import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Search, Button } from "../components";

export default function DashboardLayout({ children }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative w-full h-screen">
      <Sidebar />
      <main className="bg-[#e7e8ec] content-stretch flex-1 flex-col items-start min-h-px min-w-px overflow-clip pb-10 relative self-stretch">
        <div className="border border-[#d3d6e3] border-solid content-stretch flex items-center justify-between px-6 py-4 relative shrink-0 w-full">
          <Search
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="content-stretch flex gap-2.5 items-start overflow-clip relative shrink-0">
            <Button type="normal">Button</Button>
            <Button type="primary">Button</Button>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-4 items-start justify-center pt-5 px-6 relative shrink-0 w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
