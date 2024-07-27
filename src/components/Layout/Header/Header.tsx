"use client";
import PrimaryLogo from "@components/PrimaryLogo";
import Dropdown from "@components/Layout/Header/Dropdown";
import NavBar from "@components/Layout/Header/NavBar";
import ThemeButton from "@components/Theme/ThemeButton";
import SearchBar from "@components/Search/SearchBar";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import { OrangeButton } from "@/components/ReuseableMaterials/OrangeButton";
import FoodDialog from "@/components/FoodCart/FoodDialog";
import Search from "./Search";
const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function Header() {
  const [count, setCount] = React.useState<number>(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex h-16 w-full flex-row justify-around gap-3 px-4 xl:justify-between">
      <div className="flex items-center">
        <PrimaryLogo />
      </div>
      <nav className="flex w-full max-w-[1300px] flex-row items-center justify-around gap-6 xl:hidden">
        <div className="mt-0.5 w-full text-sm">
          <span className="font-medium text-corange">Deliver to:</span>{" "}
          <span className="font-normal">
            Current location 227 Nguyen Van Cu, D5, HCMC
          </span>
        </div>
        <NavBar />
      </nav>
      <div className="flex items-center gap-2">
        <Search />
        <FoodDialog count={count} onIncrement={inc} onDecrement={dec} />
        <Dropdown />
      </div>
    </div>
  );
}
