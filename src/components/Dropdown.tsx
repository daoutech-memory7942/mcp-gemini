import Checkbox from "./Checkbox";
import Search from "./Search";

export default function Dropdown() {
  return (
    <div className="bg-[var(--bg/neutral/surface,white)] content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[var(--padding/5,12px)] relative rounded-[var(--radius/xlarge,12px)] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.16)] w-[220px]" data-name="dropdown" data-node-id="5676:180">
      <Search />
      <div className="content-stretch flex flex-col gap-[var(--padding/2,4px)] items-start relative shrink-0 w-full" data-name="checkbox_list" data-node-id="5676:155">
        <Checkbox state="check" label="고객사명" />
        <Checkbox state="check" label="업무 유형" />
        <Checkbox state="normal" label="담당자" />
        <Checkbox state="normal" label="등록일" />
        <Checkbox state="normal" label="종료일" />
      </div>
    </div>
  );
}
