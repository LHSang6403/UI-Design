"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OrangeButton } from "@/components/ReuseableMaterials/OrangeButton";
import { Input } from "@/components/ui/input";

export default function Slide() {
  return (
    <section className="relative w-full">
      <div className="absolute left-10 top-1/2 z-10 flex w-full -translate-y-1/2 flex-col gap-3">
        <h1 className="text-5xl font-bold text-white">Are you starving?</h1>
        <p className="text-sm font-light">
          Within a few clicks, find meals that are accessible near you
        </p>
        <div className="h-fit w-1/2 rounded-xl bg-white p-4">
          <div className="flex flex-row gap-2">
            <Button className="bg-[#FEF1E8] text-corange hover:bg-[#FEF1E8]">
              Delivery
            </Button>
            <Button className="hover:bg-[#FEF1E8] hover:text-corange">
              Pick up
            </Button>
          </div>
          <hr className="my-4 w-full"></hr>
          <div className="flex flex-row gap-2">
            <Input
              placeholder="Enter your address"
              type="text"
              onChange={() => {}}
            />
            <OrangeButton className="px-6">Pick up</OrangeButton>
          </div>
        </div>
      </div>
      <Image
        alt="Slide"
        src="/assets/home/slide.png"
        width={1660}
        height={700}
      />
    </section>
  );
}
