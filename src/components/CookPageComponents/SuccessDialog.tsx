"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function SuccessDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleNextClick = () => {
    setIsDialogOpen(false);
    window.location.href = '/cook'; // Điều hướng đến /cook
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="flex flex-col items-start p-6 rounded-2xl bg-gradient-to-b from-white to-white shadow-md w-auto">
        <div className="flex flex-col items-center p-6 flex-shrink-0 justify-between">
          <div className="self-stretch flex flex-col justify-between items-start flex-[1_0_0%]">
            <div className="flex self-stretch items-center justify-center p-6 gap-3 flex-[1_0_0%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 180 181" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M90 8C44.4375 8 7.5 44.9375 7.5 90.5C7.5 136.062 44.4375 173 90 173C135.562 173 172.5 136.062 172.5 90.5C172.5 44.9375 135.562 8 90 8ZM125.76 76.55C126.418 75.7973 126.92 74.9205 127.234 73.9713C127.549 73.022 127.671 72.0194 127.592 71.0224C127.513 70.0254 127.236 69.0542 126.777 68.166C126.317 67.2777 125.685 66.4903 124.917 65.8501C124.148 65.2098 123.26 64.7297 122.303 64.438C121.347 64.1462 120.341 64.0487 119.347 64.1512C118.352 64.2537 117.388 64.5541 116.511 65.0347C115.634 65.5154 114.862 66.1666 114.24 66.95L81.99 105.643L65.3025 88.9475C63.888 87.5813 61.9935 86.8254 60.027 86.8424C58.0605 86.8595 56.1794 87.6483 54.7889 89.0389C53.3983 90.4294 52.6095 92.3105 52.5924 94.277C52.5754 96.2435 53.3313 98.138 54.6975 99.5525L77.1975 122.053C77.9344 122.789 78.8167 123.364 79.7881 123.74C80.7595 124.117 81.7987 124.287 82.8395 124.24C83.8803 124.193 84.8998 123.929 85.8331 123.466C86.7663 123.003 87.5929 122.35 88.26 121.55L125.76 76.55Z" fill="#23FF39" />
              </svg>
            </div>
            <div className="flex flex-col self-stretch p-[24px] items-center gap-[16px] flex-[1_0_0%]">
              <h1 className="flex flex-col items-center text-center flex-[1_0_0%] self-stretch text-[#F17228] font-source-sans-pro text-[32px] font-semibold leading-6">
                Success
              </h1>
              <h1 className="flex flex-col justify-center self-stretch flex-[1_0_0%] text-[#000] text-center font-source-sans-pro text-[24px] font-normal leading-6">
                Your meal has been created
              </h1>
            </div>
            <div className="flex items-center gap-4 self-stretch p-6 flex-shrink-0">
              <Button onClick={handleNextClick} className="flex p-[10px 16px] justify-center items-center gap-4 flex-[1_0_0%] rounded-[16px] border-[1px] bg-[#F17228] text-[#FFFFFF]">Confirm</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
