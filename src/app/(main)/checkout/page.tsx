"use client";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Template from "../template";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { OrangeButton } from "@/components/ReuseableMaterials/OrangeButton";

export default function Checkout() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [count1, setCount] = React.useState<number>(0);

    const inc = () => {
        setCount(count1 + 1);
    };

    const dec = () => {
        setCount(count1 - 1);
    };
    return (
        <>
            <Template>
                <main className="min-h-screen-w-full flex flex-col items-center gap-4">
                    <div className="mt-16 grid w-full px-64">
                        <Breadcrumb className="justify-self-start">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink>Cart</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink>Checkout</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="content flex w-full flex-col justify-start px-64">
                        <h1 className="mb-10 text-start text-3xl font-bold">
                            Final Step - Payment
                        </h1>
                        <h2 className="mb-7 text-start text-2xl font-bold">
                            Delivered to
                        </h2>
                        <h3 className="mb-0 text-start text-xl font-bold text-slate-400">
                            Delivery arrival time
                        </h3>
                        <span className="mb-6 text-start text-xl font-bold">
                            20 mins (3,1 km away)
                        </span>
                        <div className="form-group">
                            <div className="mb-5 grid w-full items-center gap-1.5">
                                <Label
                                    className="font-semibold"
                                    htmlFor="address"
                                >
                                    Address
                                </Label>
                                <Input
                                    type="text"
                                    id="text"
                                    placeholder="227 Nguyen Van Cu, District 5, Ho Chi Minh City"
                                />
                            </div>
                            <div className="mb-5 grid w-full items-center gap-1.5">
                                <Label
                                    className="font-semibold"
                                    htmlFor="detailAddress"
                                >
                                    Detail Address
                                </Label>
                                <Input
                                    type="text"
                                    id="detail-address"
                                    placeholder="227 Nguyen Van Cu, District 5, Ho Chi Minh City"
                                />
                            </div>
                            <div className="mb-5 grid w-full items-center gap-1.5">
                                <Label
                                    className="font-semibold"
                                    htmlFor="addressNote"
                                >
                                    Notes for the driver
                                </Label>
                                <Input
                                    type="text"
                                    id="address-note"
                                    placeholder="227 Nguyen Van Cu, District 5, Ho Chi Minh City"
                                />
                            </div>
                            <div className="my-9">
                                <h4 className="title text-sm font-semibold">
                                    Order Summary
                                </h4>
                                <div className="list-food">
                                    <div className="item flex items-center py-2">
                                        <div className="input-group flex">
                                            <Button
                                                onClick={dec}
                                                className="text-[#F17228] hover:bg-white"
                                            >
                                                -
                                            </Button>
                                            <Input
                                                type="number"
                                                className="w-11 border-transparent text-center font-semibold [appearance:textfield] focus:border-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                value={count1}
                                                readOnly
                                            />
                                            <Button
                                                onClick={inc}
                                                className="text-[#F17228] hover:bg-white"
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <div className="food flex w-full gap-4">
                                            <Image
                                                src={"/assets/home/food1.png"}
                                                alt="Food"
                                                width={70}
                                                height={70}
                                                className="flex-none rounded-xl"
                                            ></Image>
                                            <div className="food-name grow">
                                                <span className="name text-sm font-semibold">
                                                    Cheese Burger
                                                </span>
                                            </div>
                                            <div className="food-price flex-none">
                                                <span className="price text-sm font-semibold">
                                                    $3.88
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="provision mb-8 flex justify-between">
                                <h4 className="title text-sm font-semibold">
                                    Provisional Total
                                </h4>
                                <span className="text-sm font-semibold">
                                    $3.88
                                </span>
                            </div>
                            <div className="payment-detail">
                                <div className="title text-2xl font-bold">
                                    Payment Details
                                </div>
                                <div className="input p-3">
                                    <Label className="">Payment Method</Label>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="mt-2 w-full justify-between"
                                            >
                                                {value
                                                    ? frameworks.find(
                                                          (framework) =>
                                                              framework.value ===
                                                              value
                                                      )?.label
                                                    : "VISA, Mastercard"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search framework..." />
                                                <CommandEmpty>
                                                    No framework found.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {frameworks.map(
                                                        (framework) => (
                                                            <CommandItem
                                                                key={
                                                                    framework.value
                                                                }
                                                                value={
                                                                    framework.value
                                                                }
                                                                onSelect={(
                                                                    currentValue
                                                                ) => {
                                                                    setValue(
                                                                        currentValue ===
                                                                            value
                                                                            ? ""
                                                                            : currentValue
                                                                    );
                                                                    setOpen(
                                                                        false
                                                                    );
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        value ===
                                                                            framework.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {
                                                                    framework.label
                                                                }
                                                            </CommandItem>
                                                        )
                                                    )}
                                                </CommandGroup>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <div className="action flex items-center justify-around mt-16">
                                <div className="flex flex-col font-bold">
                                    <span className="total-title">Total</span>
                                    <span className="total-price">$3.88</span>
                                </div>
                                <OrangeButton>Add to Basket -  $3.88</OrangeButton>
                            </div>
                        </div>
                    </div>
                </main>
            </Template>
        </>
    );
}
const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];
