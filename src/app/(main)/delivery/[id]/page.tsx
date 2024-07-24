'use client'
import SearchBar from "@/components/Search/SearchBar";
import useHistory from "@/zustand/useHistory";
import { MapPin, MoveUpRight, OctagonAlertIcon, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Detail() {
    const { item, setItem } = useHistory();
    const progress = item.status === "delivered" ? 100 : item.status === "inProgress" ? 50 : 0;
    return (
        <div className="min-h-screen-w-full m-10 items-center flex flex-col space-y-7 lg:space-y-5 md:space-y-3 sm:space-y-1">
            <SearchBar />
            <div className="w-full flex flex-row justify-between items-center m-auto">
                <p className='text-amber-600 text-base md:text-sm sm:text-sx'>Order ID: {item.id}</p>
                <div className="flex flex-row space-x-5">
                    {
                        (progress === 100) && (
                            <Button className="flex items-center space-x-2 w-full md:space-x-0 sm:w-auto h-fit drop-shadow-lg shadow-yellow-400 bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors text-sm sm:text-base">
                                <span className="text-base md:text-sm sm:hidden">Re Order</span>
                            </Button>
                        )
                    }
                    <Button className="flex items-center space-x-2 w-full md:space-x-0 h-fit drop-shadow-lg shadow-yellow-400 bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors text-sm sm:text-base">
                        <span className="text-base md:text-sm sm:hidden">Action</span>
                        <OctagonAlertIcon className="w-5 h-5 ml-0" />
                    </Button>
                    <Button className="flex items-center space-x-2 w-full md:space-x-0 h-fit bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base">
                        <span className="text-base md:text-sm sm:hidden">Track Order</span>
                        <MapPin className="w-5 h-5 mr-0" />
                    </Button>

                </div>
            </div>
            <div className="w-full flex flex-row justify-start m-auto text-base space-x-4">
                <p className="text-base md:text-sm sm:text-sx">Order date: {item.orderDateTime}</p>
                <p className="text-gray-300 text-base md:text-sm sm:text-sx">|</p>
                <div className="flex flex-row space-x-2 text-amber-500">
                    <Truck />
                    <p className="text-base md:text-sm sm:text-sx">Estimated delivery: {item.deliveryDateTime}</p>
                </div>
            </div>
            <Spacer />
            <ProgressBarDelivery progress={progress} />
            <div className="w-full grid grid-cols-2 md:grid-cols-1 place-content-around gap-5">
                {
                    item.items.map((item: any) => (
                        <CardItem item={item} key={item.id} />
                    ))
                }
            </div>
            <Spacer />
            <div className="w-full flex flex-row space-x-5 md:flex-col md:space-x-0">
                <Payment {...item.paymentMethod} />
                <Delivery {...{
                    address: item.address,
                    driver: item.driver,
                    driverPhone: item.driver.phone
                }} />
            </div>
            <div className="w-full flex flex-row space-x-5 md:flex-col md:space-x-0">
                <NeedHelp />
                <OrderSummary item={item} />
            </div>
        </div>
    );
}

function Payment(paymentInfo: any) {
    return (
        <Card className="w-1/3 flex flex-col py-4 px-6 md:w-full">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-amber-600 text-2xl lg:text-xl md:text-lg sm:text-lg font-semibold">Payment Method</p>
                    <p className="text-gray-500 text-base md:text-sm sm:text-sx mt-1">{paymentInfo.name}" "{paymentInfo.cardNumber}</p>
                </div>
            </div>
        </Card>
    );
}
function Delivery(deliveryInfo: any) {
    return (
        <Card className="w-full flex flex-col py-4 px-6">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-amber-600 text-2xl lg:text-xl md:text-lg sm:text-lg font-semibold">Delivery</p>
                    <p className="text-gray-500 text-base md:text-sm sm:text-sx mt-1">Address: <span className="font-bold">{deliveryInfo.address}</span></p>
                    <p className="text-gray-500 text-base md:text-sm sm:text-sx mt-1">Driver:
                        <span className="font-bold">
                            {deliveryInfo.driver.name} -
                            <a href={`tel:${deliveryInfo.driverPhone}`} className="text-amber-500"> {deliveryInfo.driverPhone}</a>
                        </span>
                    </p>
                </div>
            </div>
        </Card>
    );
}

function NeedHelp() {
    return (
        <Card className="w-1/3 md:w-full flex flex-col py-4 px-6 bg-white border border-gray-200 shadow-lg rounded-lg">
            <p className='text-amber-600 text-2xl lg:text-xl md:text-lg sm:text-lg font-semibold mb-4'>Need help?</p>
            <div className="w-full flex flex-col space-y-3 md:flex-row md:space-y-0 md:justify-between">
                <Link href="/issues">
                    <p className="flex flex-row items-center space-x-2 md:space-x-0 text-gray-800 hover:text-amber-600 transition-colors text-base md:text-sm sm:text-sx cursor-pointer">
                        Order Issues <MoveUpRight />
                    </p>
                </Link>
                <Link href="/delivery-info">
                    <p className="flex flex-row items-center space-x-2 md:space-x-0 text-gray-800 hover:text-amber-600 transition-colors text-base md:text-sm sm:text-sx cursor-pointer">
                        Delivery Info <MoveUpRight />
                    </p>
                </Link>
                <Link href="/return-order">
                    <p className="flex flex-row items-center space-x-2 md:space-x-0 text-gray-800 hover:text-amber-600 transition-colors text-base md:text-sm sm:text-sx cursor-pointer">
                        Return Order <MoveUpRight />
                    </p>
                </Link>
            </div>
        </Card>
    );
}

function OrderSummary({ item }: { item: any }) {
    return (
        <Card className="w-full flex flex-col py-4 px-6 bg-white border border-gray-200 shadow-lg rounded-lg">
            <p className='text-amber-600 text-2xl lg:text-xl md:text-lg sm:text-lg font-semibold mb-4'>Order Summary</p>
            <div className="flex flex-col space-y-3">
                <p className="flex justify-between text-gray-700 text-base md:text-sm sm:text-sx">Subtotal: <span className="font-medium">${item.total}</span></p>
                <p className="flex justify-between text-gray-700 text-base md:text-sm sm:text-sx">Delivery Fee: <span className="font-medium">${item.deliveryFee}</span></p>
                <p className="flex justify-between text-gray-700 text-base md:text-sm sm:text-sx">Discount: <span className="font-medium">${item.discount}</span></p>
                <p className="flex justify-between text-gray-700 text-base md:text-sm sm:text-sx">Tax: <span className="font-medium">${item.tax}</span></p>
            </div>
            <p className="flex justify-between text-lg md:text-base sm:text-sm font-bold text-gray-800 mt-4 border-t pt-4 border-gray-300">
                Total: <span className="text-amber-600">${item.total}</span>
            </p>
        </Card>
    );
}

function ProgressBarDelivery({ progress = 100 }: { progress?: number }) {
    const clampedProgress = Math.max(0, Math.min(100, progress));
    return (
        <div className="w-full px-4 py-2 md:mx-6 md:py-8 bg-white border border-gray-200 shadow-lg rounded-lg">
            {/* Progress Container */}
            <div className="relative w-full h-2 bg-gray-300 rounded-full">
                {/* Completed Progress */}
                <div className="absolute top-0 left-0 h-full bg-amber-500 rounded-full" style={{ width: `${clampedProgress}%` }} ></div>

                {/* Milestones */}
                <div className="absolute flex justify-between w-full top-[-1.75rem] md:top-[-1.5rem]">
                    <div className="flex flex-col items-center">
                        <span className={`text-sm md:text-xs ${clampedProgress >= 0 ? 'text-amber-500' : 'text-gray-500'} mt-1`}>Confirmed</span>
                        <div className={`w-full h-4 bg-amber-500 rounded-full border ${clampedProgress >= 0 ? 'bg-amber-500' : 'bg-gray-500'}`}></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className={`text-sm md:text-xs ${clampedProgress >= 50 ? 'text-amber-500' : 'text-gray-500'} mt-1`}>Delivery</span>
                        <div className={`w-full h-4 bg-amber-500 rounded-full border ${clampedProgress >= 50 ? 'bg-amber-500' : 'bg-gray-500'}`}></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className={`text-sm md:text-xs ${clampedProgress >= 100 ? 'text-amber-500' : 'text-gray-500'} mt-1`}>Delivered</span>
                        <div className={`w-full h-4 bg-amber-500 rounded-full border ${clampedProgress >= 100 ? 'bg-amber-500' : 'bg-gray-500'}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function CardItem({ item }: { item: any }) {
    return (
        <Card className="w-full flex flex-col py-4 px-6">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <Image
                        src={item.image}
                        width={100}
                        height={100}
                        className="w-full md:w-1/2 max-w-[200px] h-auto object-cover rounded-md"
                        alt="Delivery Item"
                    />
                    <div className="w-full h-fit flex flex-col pl-4 flex-grow">
                        <p className="text-black text-lg md:text-base sm:text-sm font-semibold">{item.name}</p>
                        <p className="text-gray-500 text-base md:text-sm sm:text-sx mt-1">{item.speacialRequest}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-base md:text-sm sm:text-sx font-semibold">${item.price * item.quantity}</p>
                    <p className="text-gray-500 text-base md:text-sm sm:text-sx">Qty: {item.quantity}</p>
                </div>
            </div>
        </Card>
    )
}

function Spacer() {
    return <div className="w-full h-[1px] flex flex-row justify-between border border-gray-300 border-y-1 mb-5" />
}