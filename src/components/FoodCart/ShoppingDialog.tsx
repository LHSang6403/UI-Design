"use client";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { OrangeButton } from "@/components/ReuseableMaterials/OrangeButton";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

interface ShoppingCartDialogProps {
    isOpen: boolean;
    onClose: () => void;
    count1: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const ShoppingCartDialog: React.FC<ShoppingCartDialogProps> = ({
    isOpen,
    onClose,
    count1,
    onIncrement,
    onDecrement,
}) => {
    const [isShoppingCartDialogOpen, setShoppingCartDialogOpen] =
        useState(false);

    // State to control the opening of the FoodDialog
    const [isFoodDialogOpen, setFoodDialogOpen] = useState(false);

    // Function to handle "Add to Basket" button click
    const handleAddToBasket = () => {
        setFoodDialogOpen(false); // Close the FoodDialog
        setShoppingCartDialogOpen(true); // Open the ShoppingCartDialog
    };
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="rounded-md sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold">
                        Food Basket
                    </DialogTitle>
                    <span className="mt-0 flex items-center justify-center text-center">
                        <svg
                            className="mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 6V12H18"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Delivery time: 30 mins
                    </span>
                </DialogHeader>
                <div>
                    <h4 className="title text-xl font-bold">Chef Christia</h4>
                    <div className="list-food max-h-[40vh] overflow-y-scroll pr-3">
                        <div className="item py-2 flex items-center">
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
                                    value={count1}
                                    readOnly
                                />
                                <Button
                                    onClick={onIncrement}
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
                        <div className="item flex py-2 items-center">
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
                                    value={count1}
                                    readOnly
                                />
                                <Button
                                    onClick={onIncrement}
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
                        <div className="item flex py-2 items-center">
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
                                    value={count1}
                                    readOnly
                                />
                                <Button
                                    onClick={onIncrement}
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
                <DialogFooter className="flex flex-col justify-center">
                    <div className="total flex justify-between mb-2">
                        <div className="total-title text-xl font-bold">Total</div>
                        <div className="total-price text-xl font-bold">$3.88</div>
                    </div>
                    <OrangeButton
                        className="w-full"
                        onClick={() => (window.location.href = "/cart")}
                    >
                        Cart Checkout
                    </OrangeButton>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ShoppingCartDialog;
