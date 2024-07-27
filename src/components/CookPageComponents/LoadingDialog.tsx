"use client";

import { useState, useEffect } from "react";
import { SuccessDialog } from "@/components/CookPageComponents/SuccessDialog"; // Import SuccessDialog component

export function LoadingDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDialogOpen(false);
      setShowSuccessDialog(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="flex flex-col items-start p-6 rounded-2xl bg-gradient-to-b from-white to-white shadow-md w-auto">
            <div className="flex flex-col items-center p-6 flex-shrink-0 justify-between">
              <div className="self-stretch flex flex-col justify-between items-start flex-[1_0_0%]">
                <div className="flex self-stretch items-center justify-center p-6 gap-3 flex-[1_0_0%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 257" fill="none">
                    <circle cx="128" cy="128.75" r="123.331" transform="rotate(-90 128 128.75)" stroke="url(#paint0_angular_2335_5768)" strokeWidth="9.33879" />
                    <defs>
                      <radialGradient id="paint0_angular_2335_5768" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(199.542 70) rotate(134.062) scale(81.4808)">
                        <stop />
                        <stop offset="1" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col self-stretch p-[24px] items-center gap-[16px] flex-[1_0_0%]">
                  <h1 className="flex flex-col items-center text-center flex-[1_0_0%] self-stretch text-[#D9D9D9] font-source-sans-pro text-[32px] font-semibold leading-10">
                    Processing
                  </h1>
                  <h1 className="flex flex-col justify-center self-stretch flex-[1_0_0%] text-[#000] text-center font-source-sans-pro text-[24px] font-normal leading-10">
                    Your meal is uploading
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSuccessDialog && <SuccessDialog />}
    </>
  );
}
