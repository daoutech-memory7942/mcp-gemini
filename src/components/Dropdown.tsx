import React, { useState } from "react";
import { Search, Checkbox } from ".";

type DropdownProps = {
  options: { label: string; checked: boolean }[];
  onOptionChange: (options: { label: string; checked: boolean }[]) => void;
  onSearch: (searchTerm: string) => void;
};

export default function Dropdown({
  options,
  onOptionChange,
  onSearch,
}: DropdownProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleCheckboxChange = (index: number) => {
    const newOptions = [...options];
    newOptions[index].checked = !newOptions[index].checked;
    onOptionChange(newOptions);
  };

  return (
    <div className="bg-bg-neutral-surface rounded-xlarge shadow-xl p-p-5 w-[220px] flex flex-col gap-2.5">
      <Search value={searchTerm} onChange={handleSearchChange} />
      <div className="flex flex-col gap-p-2">
        {options.map((option, index) => (
          <Checkbox
            key={option.label}
            label={option.label}
            checked={option.checked}
            onChange={() => handleCheckboxChange(index)}
          />
        ))}
      </div>
    </div>
  );
}
