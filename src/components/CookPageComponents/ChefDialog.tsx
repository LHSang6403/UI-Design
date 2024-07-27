"use client";

import { Button } from "@/components/ui/button";
import { OrangeButton } from "@/components/ReuseableMaterials/OrangeButton";
import { Input } from "@/components/ui/input";
import { TabList, Tab, Tabs, TabPanel } from "react-tabs";
import { useState } from "react";
import "react-tabs/style/react-tabs.css"; // Import styles if needed
import { ChefDialog2 } from "@/components/CookPageComponents/ChefDialog2";


export function ChefDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleNextClick = () => {
    setIsDialogOpen(false); 
  };

  const closeDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      {isDialogOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="flex flex-col items-start w-fit p-6 rounded-2xl bg-gradient-to-b from-white to-white shadow-md">
            <div className="flex pb-3 gap-24 self-stretch flex-start">
              <h1 className="flex flex-col justify-center flex-[1_0_0%] self-stretch text-[#F17228] font-source-sans-pro text-[36px] font-black leading-[120%]">
                CREATE YOUR MEAL
              </h1>
              <h2 className="flex flex-col justify-center self-stretch felx-[1_0_0%] text-[#F17228] font-source-sans-pro text-[24px] font-normal leading-[120%]">
                Make your menu become diversity and attractive
              </h2>
            </div>
            <div className="flex-shrink-0 self-stretch" style={{ height: '0px', transform: 'rotate(-0.084deg)', strokeWidth: '3px', stroke: '#F17228' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1164" height="6" viewBox="0 0 1164 6" fill="none">
                <path d="M0.000732422 3.70801L1164 2.00001" stroke="#F17228" stroke-width="3" />
              </svg>
            </div>
            <div className="h-full flex flex-row pt-3 items-start self-stretch gap-12">
              <div className="h-full flex flex-col justify-between items-start self-stretch w-fit gap-6">
                <div className="flex flex-col items-start justify-between self-stretch">
                  <h3 className="text-[#FA0] font-source-sans-pro text-lg font-bold leading-6 tracking-[0.5px]">
                    Name
                  </h3>
                  <div className="flex flex-row justify-center items-start gap-2 rounded-2xl border-2 border-[#FA0] bg-white shadow-md mr-4">
                    <div className="rounded-2xl flex p-1 px-4 justify-center items-center flex-[1_0_0%] self-stretch">
                      <Input
                        className="flex flex-col flex-[1_0_0%] self-stretch justify-center items-center border-none text-[#D9D9D9] font-Source-Sans-Pro text-[14px] font-normal leading-6 tracking-[0.5px]"
                        placeholder="Enter dish name"
                        type="text"
                        onChange={() => { }}
                      />
                    </div>
                    <div className="flex flex-col justify-center self-stretch items-start pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 1024 1024">
                        <path fill="#D9D9D9" d="m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between self-stretch">
                  <h3 className="text-[#FA0] font-source-sans-pro text-lg font-bold leading-6 tracking-[0.5px]">
                    Price
                  </h3>
                  <div className="flex flex-row justify-center items-start gap-2 rounded-2xl border-2 border-[#FA0] bg-white shadow-md mr-4">
                    <div className="rounded-2xl flex p-1 px-4 justify-center items-center flex-[1_0_0%] self-stretch">
                      <Input
                        className="flex flex-col flex-[1_0_0%] self-stretch justify-center items-center border-none text-[#D9D9D9] font-Source-Sans-Pro text-[14px] font-normal leading-6 tracking-[0.5px]"
                        placeholder="Enter dish price"
                        type="text"
                        onChange={() => { }}
                      />
                    </div>
                    <div className="flex flex-col justify-center self-stretch items-start pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#D9D9D9" stroke-width="2" />
                        <path d="M15 9.94728C14.5 9.3 13.8 8.5 12 8.5C10.2 8.5 9 9.51393 9 9.94728C9 10.3806 9.06786 10.9277 10 11.5C10.7522 11.9618 12.6684 12.0439 13.5 12.5C14.679 13.1467 14.8497 13.8202 14.8497 14.0522C14.8497 14.6837 13.4175 15.4852 12 15.5C10.536 15.5153 9.5 14.7 9 14.0522" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 7V17" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between self-stretch">
                  <h3 className="text-[#FA0] font-source-sans-pro text-lg font-bold leading-6 tracking-[0.5px]">
                    Publish date
                  </h3>
                  <div className="flex flex-row justify-center items-start gap-2 rounded-2xl border-2 border-[#FA0] bg-white shadow-md mr-4">
                    <div className="rounded-2xl flex p-1 px-4 justify-center items-center flex-[1_0_0%] self-stretch">
                      <Input
                        className="flex flex-col flex-[1_0_0%] self-stretch justify-center items-center border-none text-[#D9D9D9] font-Source-Sans-Pro text-[14px] font-normal leading-6 tracking-[0.5px]"
                        placeholder="Enter publish date"
                        type="text"
                        onChange={() => { }}
                      />
                    </div>
                    <div className="flex flex-col justify-center self-stretch items-start pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
                        <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" />
                        <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#D9D9D9" />
                        <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#D9D9D9" />
                        <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#D9D9D9" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between self-stretch">
                  <h3 className="text-[#FA0] font-source-sans-pro text-lg font-bold leading-6 tracking-[0.5px]">
                    Description
                  </h3>
                  <div className="flex flex-row justify-center items-start gap-2 rounded-2xl border-2 border-[#FA0] bg-white shadow-md mr-4">
                    <div className="rounded-2xl flex p-1 px-4 justify-center items-center flex-[1_0_0%] self-stretch">
                      <Input
                        className="flex flex-col flex-[1_0_0%] self-stretch justify-center items-center border-none text-[#D9D9D9] font-Source-Sans-Pro text-[14px] font-normal leading-6 tracking-[0.5px]"
                        placeholder="Enter publish date"
                        type="text"
                        onChange={() => { }}
                      />
                    </div>
                    <div className="flex flex-col justify-center self-stretch items-start pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="128" viewBox="0 0 24 24" fill="none">
                        <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
                        <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#FFFFFF" />
                        <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#FFFFFF" />
                        <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#FFFFFF" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full flex flex-col items-start self-stretch gap-6">
                <h2 className="text-[#FA0] font-source-sans-pro text-[20px] font-black leading-6">
                  Category
                </h2>
                <div className="flex flex-row items-start gap-5 self-stretch p-[0px 20px]">
                  <Button className="bg-[#FECB10] text-white hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Soup
                  </Button>
                  <Button className="bg-[#D9D9D9] text-[#000000] hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Fast Food
                  </Button>
                  <Button className="bg-[#FECB10] text-white hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Cheap meal
                  </Button>
                  <Button className="bg-[#FECB10] text-white hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Calories
                  </Button>
                  <Button className="bg-[#D9D9D9] text-[#000000] hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Eat clean
                  </Button>
                  <Button className="bg-[#D9D9D9] text-[#000000] hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Vegetarian
                  </Button>
                </div>
                <div className="flex flex-row items-start gap-5 self-stretch p-[0px 20px]">
                  <Button className="bg-[#D9D9D9] text-[#000000] hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Diet
                  </Button>
                  <Button className="bg-[#FECB10] text-white hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Main dish
                  </Button>
                  <Button className="bg-[#D9D9D9] text-[#000000] hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Dessert
                  </Button>
                  <Button className="bg-[#D9D9D9] text-[#000000] hover:scale-125 hover:bg-[#FA0] rounded-[40px] justify-center items-center w-28 min-h-[40px] p-[7px 20px]">
                    Heart balance
                  </Button>
                </div>
                <div className="w-full h-full flex flex-col items-center gap-5 self-stretch p-[0px 20px]">
                  <div className="w-fit flex flex-row justify-center items-center gap-1 p-[4px 5px] rounded-[40px] bg-[#F7F9FB] shadow-md">
                    <Button className="flex p-[7px 20px] justify-center gap-3 rounded-[40px] bg-[#FECB10] font-semibold leading-4 font-source-sans-pro text-center text-[#FFF] text-[16px]">
                      New Upload
                    </Button>
                    <Button className="flex p-[7px 20px] justify-center items-start gap-3 rounded-[40px] bg-[#F7F9FB] font-source-sans-pro leading-4 font-semibold text-center text-[16px] text-[#000]">
                      Paste URL
                    </Button>
                  </div>
                  <div className="h-fit flex flex-col justify-center items-center gap-3 self-stretch rounded-[24px] bg-[#F7F9FB] shadow-xl p-[32px]">
                    <div className="h-[150px] flex flex-col items-center justify-center self-stretch border-dashed border-[2px] rounded-[24px] border-[#E2E6EA] p-[0px 32px]">
                      Click to browse order drag and drop your file
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-[0px 12px] justify-between items-end self-stretch">
                  <Button onClick={handleNextClick} className="w-[120px] h-[50px] flex justify-center items-center flex-shrink-0 rounded-[62px] shadow-md bg-[#FA0] text-[#FFF] font-source-sans-pro text-[20px] font-bold">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ChefDialog2 />
      )}
    </>
  );
}
