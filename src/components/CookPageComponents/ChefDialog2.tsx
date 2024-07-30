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
          <div className="flex w-auto flex-col items-start rounded-2xl bg-gradient-to-b from-white to-white p-6 shadow-md">
            <div className="flex-start flex gap-24 self-stretch pb-3">
              <h1 className="font-source-sans-pro text-[36px] font-bold leading-[120%] text-[#F17228]">
                CREATE YOUR MEAL
              </h1>
            </div>
            <div
              className="flex-shrink-0 self-stretch"
              style={{
                height: "0px",
                transform: "rotate(-0.084deg)",
                strokeWidth: "3px",
                stroke: "#F17228",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="6"
                viewBox="0 0 1164 6"
                fill="none"
              >
                <path
                  d="M0.000732422 3.70801L1164 2.00001"
                  stroke="#F17228"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-4 pt-3">
              <div className="flex items-center justify-between">
                <h2 className="font-source-sans-pro flex-1 text-[20px] font-medium leading-6 text-[#000]">
                  Get alert to your followers
                </h2>
                <Switch className="ml-4 data-[state=checked]:bg-[#FA0] data-[state=unchecked]:bg-[#D9D9D9]" />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-source-sans-pro flex-1 text-[20px] font-medium leading-6 text-[#000]">
                  Show first on your page
                </h2>
                <Switch className="ml-4 data-[state=checked]:bg-[#FA0] data-[state=unchecked]:bg-[#D9D9D9]" />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-source-sans-pro flex-1 text-[20px] font-medium leading-6 text-[#000]">
                  Apply discount coupon
                </h2>
                <Switch className="ml-4 data-[state=checked]:bg-[#FA0] data-[state=unchecked]:bg-[#D9D9D9]" />
              </div>
            </div>
            <div className="mt-4 flex flex-row items-center justify-end gap-3 self-stretch">
              <Button
                onClick={handleBackClick}
                className="font-source-sans-pro rounded-[62px] bg-[#D9D9D9] text-[16px] font-bold text-[#000] shadow-md"
              >
                Back
              </Button>
              <Button
                onClick={handleNextClick}
                className="font-source-sans-pro rounded-[62px] bg-[#FA0] text-[16px] font-bold text-[#FFF] shadow-md"
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
      {currentDialog === "ChefDialog" && <ChefDialog />}
      {currentDialog === "LoadingDialog" && <LoadingDialog />}{" "}
      {/* Show LoadingDialog */}
    </>
  );
}
