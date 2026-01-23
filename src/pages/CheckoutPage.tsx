
import React, { useState } from "react";
import { Input, Select, Checkbox, Button } from "../components";
import DashboardLayout from "../layouts/DashboardLayout";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [source, setSource] = useState("검색");

  const addressOptions = ["주소검색", "네이버", "구글"];
  const sourceOptions = ["검색", "지인추천", "광고"];

  return (
    <>
      <div className="bg-bg-neutral-base flex flex-col gap-6 p-5 rounded-lg w-full">
        <p className="font-pretendard text-typo-heading-xlarge text-black">
          Checkout
        </p>
        <div className="border-t border-border-neutral-active flex flex-col gap-4 pt-6 w-full">
          <div className="flex gap-2 items-center w-full">
            <div className="w-[120px] shrink-0">
              <p className="font-pretendard text-typo-body-medium-bold text-black">
                이름
              </p>
            </div>
            <Input state="normal" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="flex gap-2 items-center w-full">
            <div className="w-[120px] shrink-0">
              <p className="font-pretendard text-typo-body-medium-bold text-black">
                주소
              </p>
            </div>
            <Select state="normal" options={addressOptions} value={address} onChange={e => setAddress(e.target.value)} />
            <Input state="normal" value={addressDetail} onChange={e => setAddressDetail(e.target.value)} />
          </div>
          <div className="flex gap-2 items-center w-full">
            <div className="w-[120px] shrink-0">
              <p className="font-pretendard text-typo-body-medium-bold text-black">
                회원유형
              </p>
            </div>
            <Checkbox state="normal" label="일반" />
            <Checkbox state="normal" label="사업자" />
            <Checkbox state="normal" label="임직원" />
          </div>
          <div className="flex gap-2 items-center w-full">
            <div className="w-[120px] shrink-0">
              <p className="font-pretendard text-typo-body-medium-bold text-black">
                연락처
              </p>
            </div>
            <Input state="normal" value={phone1} onChange={e => setPhone1(e.target.value)} />
            <p className="font-pretendard text-typo-body-medium-regular text-text-neutral-base">
              -
            </p>
            <Input state="normal" value={phone2} onChange={e => setPhone2(e.target.value)} />
            <p className="font-pretendard text-typo-body-medium-regular text-text-neutral-base">
              -
            </p>
            <Input state="normal" value={phone3} onChange={e => setPhone3(e.target.value)} />
          </div>
          <div className="flex gap-2 items-center w-full">
            <div className="w-[120px] shrink-0">
              <p className="font-pretendard text-typo-body-medium-bold text-black">
                가입경로
              </p>
            </div>
            <Select state="normal" options={sourceOptions} value={source} onChange={e => setSource(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="bg-bg-neutral-base flex flex-col gap-6 p-5 rounded-lg w-full">
        <p className="font-pretendard text-typo-heading-xlarge text-black">
          test2
        </p>
        <div className="border-t border-border-neutral-active flex flex-col pt-6 w-full">
          <div className="flex gap-2 items-center w-full">
            <div className="w-[120px] shrink-0">
              <p className="font-pretendard text-typo-body-medium-bold text-black">
                이름
              </p>
            </div>
            <div className="flex flex-col items-start w-full">
                <Input state="normal" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center pt-5 w-full">
        <Button type="primary" state="normal">저장</Button>
        <Button type="normal" state="normal">취소</Button>
      </div>
    </>
  );
};

export default function CheckoutPage() {
  return (
    <DashboardLayout>
      <CheckoutForm />
    </DashboardLayout>
  );
}
