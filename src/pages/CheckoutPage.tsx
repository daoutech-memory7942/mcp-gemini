import React, { useState } from "react";
import {
  Input,
  Select,
  Checkbox,
  Button,
  Search,
} from "../components";
import Sidebar from "../layouts/Sidebar";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [membership, setMembership] = useState([]);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [source, setSource] = useState("검색");

  const addressOptions = ["주소검색", "네이버", "구글"];
  const sourceOptions = ["검색", "지인추천", "광고"];

  return (
    <div className="bg-bg-neutral-base content-stretch flex flex-col gap-[24px] items-start p-[20px] relative rounded-[var(--radius-large,8px)] shrink-0 w-full">
      <p className="font-medium leading-[1.5] not-italic relative shrink-0 text-[length:var(--font-size-heading-xlarge,24px)] text-black">
        Checkout
      </p>
      <div className="border-[var(--border-neutral-active,#2f353c)] border-solid border-t content-stretch flex flex-col gap-[16px] items-start pt-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]">
            <p className="font-medium leading-[1.6] not-italic relative shrink-0 text-[length:var(--font-size-body-medium,14px)] text-black">
              이름
            </p>
          </div>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]">
            <p className="font-medium leading-[1.6] not-italic relative shrink-0 text-[length:var(--font-size-body-medium,14px)] text-black">
              주소
            </p>
          </div>
          <Select
            options={addressOptions}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            value={addressDetail}
            onChange={(e) => setAddressDetail(e.target.value)}
          />
        </div>
        <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]">
            <p className="font-medium leading-[1.6] not-italic relative shrink-0 text-[length:var(--font-size-body-medium,14px)] text-black">
              회원유형
            </p>
          </div>
          <Checkbox label="일반" />
          <Checkbox label="사업자" />
          <Checkbox label="임직원" />
        </div>
        <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]">
            <p className="font-medium leading-[1.6] not-italic relative shrink-0 text-[length:var(--font-size-body-medium,14px)] text-black">
              연락처
            </p>
          </div>
          <Input value={phone1} onChange={(e) => setPhone1(e.target.value)} />
          -
          <Input value={phone2} onChange={(e) => setPhone2(e.target.value)} />
          -
          <Input value={phone3} onChange={(e) => setPhone3(e.target.value)} />
        </div>
        <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-[120px]">
            <p className="font-medium leading-[1.6] not-italic relative shrink-0 text-[length:var(--font-size-body-medium,14px)] text-black">
              가입경로
            </p>
          </div>
          <Select
            options={sourceOptions}
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center pt-[20px] px-[24px] relative shrink-0 w-full">
        <Button type="primary">저장</Button>
        <Button type="normal">취소</Button>
      </div>
    </div>
  );
};

export default function CheckoutPage() {
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
          <CheckoutForm />
        </div>
      </main>
    </div>
  );
}
