import { Link } from "react-router-dom";
import {
  Button,
  Toggle,
  Input,
  Select,
  Checkbox,
  Radio,
  Search,
  Dropdown,
  Toast,
} from "../components";
import { useState } from "react";

export default function ComponentPage() {
  const [toggled, setToggled] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("옵션 1");
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("라디오1");
  const [searchValue, setSearchValue] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([
    { label: "고객사명", checked: true },
    { label: "업무 유형", checked: true },
    { label: "담당자", checked: false },
    { label: "등록일", checked: false },
    { label: "종료일", checked: false },
  ]);

  const selectOptions = ["옵션 1", "옵션 2", "옵션 3"];

  return (
    <div className="max-w-4xl w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-pretendard text-typo-heading-xlarge text-text-neutral-base">
          Components
        </h1>
        <Link
          to="/"
          className="px-4 py-2 text-text-neutral-base hover:bg-bg-neutral-level1 rounded-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="grid grid-cols-4 gap-4">
          <Button type="primary" state="normal">
            Primary
          </Button>
          <Button type="primary" state="hover">
            Primary Hover
          </Button>
          <Button type="secondary" state="normal">
            Secondary
          </Button>
          <Button type="secondary" state="hover">
            Secondary Hover
          </Button>
          <Button type="normal" state="normal">
            Normal
          </Button>
          <Button type="normal" state="hover">
            Normal Hover
          </Button>
          <Button type="ghost" state="normal">
            Ghost
          </Button>
          <Button type="ghost" state="hover">
            Ghost Hover
          </Button>
        </div>
      </section>

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Toggles</h2>
        <div className="grid grid-cols-2 gap-4">
          <Toggle toggled={toggled} onToggle={setToggled} />
          <Toggle toggled={true} state="disabled" />
          <Toggle toggled={false} state="disabled" />
        </div>
      </section>

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Inputs</h2>
        <div className="grid grid-cols-2 gap-4">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input state="hover" />
          <Input state="error" errorMsg="상황에 맞는 메시지를 넣어주세요." />
        </div>
      </section>

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Selects</h2>
        <div className="grid grid-cols-2 gap-4">
          <Select
            options={selectOptions}
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          />
          <Select
            options={selectOptions}
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            state="hover"
          />
        </div>
      </section>

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Checkboxes</h2>
        <div className="grid grid-cols-2 gap-4">
          <Checkbox
            label="체크박스"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <Checkbox label="체크박스" checked={true} />
          <Checkbox label="체크박스" state="hover" />
          <Checkbox label="체크박스" state="disabled" />
          <Checkbox label="체크박스" checked={true} state="disabled" />
        </div>
      </section>

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Radio Buttons</h2>
        <div className="grid grid-cols-2 gap-4">
          <Radio
            label="라디오1"
            name="radio-group"
            value="라디오1"
            checked={radioValue === "라디오1"}
            onChange={(e) => setRadioValue(e.target.value)}
          />
          <Radio
            label="라디오2"
            name="radio-group"
            value="라디오2"
            checked={radioValue === "라디오2"}
            onChange={(e) => setRadioValue(e.target.value)}
          />
          <Radio label="라디오" state="hover" />
          <Radio label="라디오" state="disabled" />
          <Radio label="라디오" checked={true} state="disabled" />
        </div>
      </section>

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Search</h2>
        <div className="grid grid-cols-2 gap-4">
          <Search
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Search state="hover" />
        </div>
      </section>

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Dropdown</h2>
        <div className="grid grid-cols-2 gap-4">
          <Dropdown
            options={dropdownOptions}
            onOptionChange={setDropdownOptions}
            onSearch={console.log}
          />
        </div>
      </section>

      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Toasts</h2>
        <div className="flex flex-col gap-4">
          <Toast message="게시글이 정상적으로 등록되었습니다." />
          <Toast type="fail" message="파일 업로드 용량을 초과하였습니다." />
        </div>
      </section>
    </div>
  );
}
