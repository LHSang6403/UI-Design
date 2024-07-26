"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { OrangeButton } from "@/components/ReuseableMaterials/OrangeButton";
import Image from "next/image";
import React from "react";

interface FoodDialogProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const FoodDialog: React.FC<FoodDialogProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              d="M6 18C6 19.1 5.1 20 4 20C2.9 20 2.01 19.1 2.01 18C2.01 16.9 2.9 16 4 16C5.1 16 6 16.9 6 18ZM14 16C12.9 16 12.01 16.9 12.01 18C12.01 19.1 12.9 20 14 20C15.1 20 16 19.1 16 18C16 16.9 15.1 16 14 16ZM14.396 11C14.851 10.9999 15.2923 10.8447 15.6472 10.56C16.0021 10.2753 16.2493 9.87813 16.348 9.434L18 3H4V2C4 1.46957 3.78929 0.960859 3.41421 0.585786C3.03914 0.210714 2.53043 0 2 0H0V2H2V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H16C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H4V11H14.396Z"
              fill="#FFA101"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex flex-row gap-4">
            <Image
              src={"/assets/home/food1.png"}
              alt="Food"
              width={150}
              height={150}
              className="rounded-xl"
            ></Image>
            <div className="text-start">
              <h4 className="title text-xl font-bold">Cheese Burger</h4>
              <p className="description text-slate-400">
                A cheeseburger features a juicy ground beef patty topped with a
                melted slice of cheese, typically cheddar, American, or Swiss,
                served in a soft bun
              </p>
            </div>
            <div className="price text-xl font-bold">
              <span>$3.88</span>
            </div>
          </div>
        </DialogHeader>
        <div className="form-control">
          <Label className="font-semibold">Select</Label>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Label</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Label</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Label</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="form-control">
          <Label className="font-semibold">Select</Label>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Label</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Label</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Label</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="note">
          <div className="title">
            <Label className="instruction mr-4 font-semibold">
              Special instructions
            </Label>
            <span className="text-slate-400">Optional</span>
          </div>
          <Input type="text" placeholder="E.g: No Onions" />
        </div>
        <DialogFooter className="flex flex-row items-center">
          <div className="input-group flex">
            <Button
              onClick={onDecrement}
              className="text-[#F17228] hover:bg-white"
            >
              -
            </Button>
            <Input
              type="number"
              className="w-11 border-transparent text-center font-semibold [appearance:textfield] focus:border-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={count}
              readOnly
            />
            <Button
              onClick={onIncrement}
              className="text-[#F17228] hover:bg-white"
            >
              +
            </Button>
          </div>
          <OrangeButton type="submit" className="w-full">
            Add to Basket
          </OrangeButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FoodDialog;
