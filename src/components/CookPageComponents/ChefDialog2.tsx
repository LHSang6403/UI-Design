"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { ChefDialog } from "@/components/CookPageComponents/ChefDialog";
import { LoadingDialog } from "@/components/CookPageComponents/LoadingDialog"; // Import your LoadingDialog component

export function ChefDialog2() {
  const [currentDialog, setCurrentDialog] = useState("ChefDialog2");

  const handleNextClick = () => {
    setCurrentDialog("LoadingDialog"); // Show LoadingDialog on "Create" button click
  };

  const handleBackClick = () => {
    setCurrentDialog("ChefDialog"); // Show ChefDialog on "Back" button click
  };

  return (
    <>
      {currentDialog === "ChefDialog2" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="flex flex-col items-start p-6 rounded-2xl bg-gradient-to-b from-white to-white shadow-md w-auto">
            <div className="flex pb-3 gap-24 self-stretch flex-start">
              <h1 className="text-[#F17228] font-source-sans-pro text-[36px] font-black leading-[120%]">
                CREATE YOUR MEAL
              </h1>
            </div>
            <div
              className="flex-shrink-0 self-stretch"
              style={{ height: "0px", transform: "rotate(-0.084deg)", strokeWidth: "3px", stroke: "#F17228" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="400" height="6" viewBox="0 0 1164 6" fill="none">
                <path d="M0.000732422 3.70801L1164 2.00001" stroke="#F17228" strokeWidth="3" />
              </svg>
            </div>
            <div className="w-full flex flex-col gap-8 pt-3">
              <div className="flex items-center justify-between">
                <h2 className="font-source-sans-pro text-[#000] text-[20px] font-bold leading-6 flex-1">
                  Get alert to your followers
                </h2>
                <Switch className="data-[state=checked]:bg-[#FA0] data-[state=unchecked]:bg-[#D9D9D9] ml-4" />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-source-sans-pro text-[#000] text-[20px] font-bold leading-6 flex-1">
                  Show first on your page
                </h2>
                <Switch className="data-[state=checked]:bg-[#FA0] data-[state=unchecked]:bg-[#D9D9D9] ml-4" />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-source-sans-pro text-[#000] text-[20px] font-bold leading-6 flex-1">
                  Apply discount coupon
                </h2>
                <Switch className="data-[state=checked]:bg-[#FA0] data-[state=unchecked]:bg-[#D9D9D9] ml-4" />
              </div>
            </div>
            <div className="flex flex-row justify-end items-center self-stretch gap-3 mt-8">
              <Button onClick={handleBackClick} className="rounded-[62px] shadow-md bg-[#D9D9D9] text-[#000] font-source-sans-pro text-[16px] font-bold">
                Back
              </Button>
              <Button onClick={handleNextClick} className="rounded-[62px] shadow-md bg-[#FA0] text-[#FFF] font-source-sans-pro text-[16px] font-bold">
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
      {currentDialog === "ChefDialog" && <ChefDialog />}
      {currentDialog === "LoadingDialog" && <LoadingDialog />} {/* Show LoadingDialog */}
    </>
  );
}
