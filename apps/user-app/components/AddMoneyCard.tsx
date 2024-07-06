"use client";

// comment to start redoply
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/text-input";
import { Select } from "@repo/ui/select";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { createOnRampTransaction } from "../app/lib/actions/createOnrampTransaction";

const SUPPORTED_BANKS = [{
  name: "HDFC Bank",
  redirectUrl: "https://netbanking.hdfcbank.com"
}, {
  name: "Axis Bank",
  redirectUrl: "https://www.axisbank.com/"
}];


export function AddMoney() {
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  const [value, setValue] = useState(0);

  return (
    <div className="w-full">
      <Card title="Add Money">
        <TextInput
          label={"Amount"}
          placeholder={"Enter amount to be transfered"}
          onChange={(val) => {
            setValue(Number(val));
          }}
        />
        <div className="w-full">
          <div className="pt-3 text-left block mb-2 text-sm font-medium text-gray-900">
            Bank
          </div>
          <Select
            onSelect={(value) => {
              setRedirectUrl(SUPPORTED_BANKS.find(x=>{return x.name === value})?.redirectUrl)
              setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "");
            }}
            options={SUPPORTED_BANKS.map((elem)=>{
              return {key:elem.name, value:elem.name}
            })}
          />
        </div>
        <div className="pt-3">
          <Button onClick={async () => {
            await createOnRampTransaction(provider, value)
            window.location.href = redirectUrl || "";
          }}>Add Money</Button>
        </div>
      </Card>
    </div>
  );
}
