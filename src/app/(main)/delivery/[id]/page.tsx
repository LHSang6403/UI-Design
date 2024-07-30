"use client";
import { DropdownMenuCancel } from "@/components/DeliveryComponent/Dropdown";
import SearchBar from "@/components/Search/SearchBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useHistory from "@/zustand/useHistory";
import { set } from "date-fns";
import { ChevronLeft, MapPin, MoveUpRight, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Detail() {
  const { item, setItem } = useHistory();
  const [isTracking, setIsTracking] = useState(false);
  const progress =
    item.status === "delivered" ? 100 : item.status === "inProgress" ? 50 : 0;
  return (
    <>
      {isTracking ? (
        <div className="flex flex-col items-center gap-y-4 px-6">
          <Tracking
            item={item}
            setIsTracking={setIsTracking}
            progress={progress}
          />
        </div>
      ) : (
        <div className="m-auto flex flex-col items-center gap-y-4 px-6">
          <OrderDetail
            item={item}
            setIsTracking={setIsTracking}
            progress={progress}
          />
        </div>
      )}
    </>
  );
}

function Payment(paymentInfo: any) {
  return (
    <Card className="flex w-full flex-col py-4 md:px-3 md:py-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-amber-600 md:text-lg sm:text-sm">
            Payment method
          </p>
          <p className="mt-1 text-sm text-gray-500 md:text-xs">
            {paymentInfo.name}" "{paymentInfo.cardNumber}
          </p>
        </div>
      </div>
    </Card>
  );
}
function Delivery(deliveryInfo: any) {
  return (
    <Card className="flex w-full flex-col py-4 md:px-3 md:py-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-amber-600 md:text-lg sm:text-sm">
            Delivery
          </p>
          <p className="mt-1 text-sm text-gray-500 md:text-xs">
            Address: <span className="font-bold">{deliveryInfo.address}</span>
          </p>
          <p className="mt-1 text-sm text-gray-500 md:text-xs">
            Driver:
            <span className="font-bold">
              {deliveryInfo.driver.name} -
              <a
                href={`tel:${deliveryInfo.driverPhone}`}
                className="text-amber-500"
              >
                {" "}
                {deliveryInfo.driverPhone}
              </a>
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}

function NeedHelp() {
  return (
    <Card className="flex w-full flex-col py-4 md:px-3 md:py-2">
      <p className="mb-4 text-xl font-semibold text-amber-600 md:text-lg sm:text-sm">
        Need help?
      </p>
      <div className="flex flex-col md:flex-row md:justify-between">
        <Link href="/issues">
          <p className="flex cursor-pointer flex-row items-center space-x-2 text-sm text-gray-800 transition-colors hover:text-amber-600 md:text-xs">
            Order Issues <MoveUpRight className="h-4 w-4" />
          </p>
        </Link>
        <Link href="/delivery-info">
          <p className="sm:text-sx flex cursor-pointer flex-row items-center space-x-2 text-sm text-gray-800 transition-colors hover:text-amber-600 md:text-xs">
            Delivery Info <MoveUpRight className="h-4 w-4" />
          </p>
        </Link>
        <Link href="/return-order">
          <p className="sm:text-sx flex cursor-pointer flex-row items-center space-x-2 text-sm text-gray-800 transition-colors hover:text-amber-600 md:text-xs">
            Return Order <MoveUpRight className="h-4 w-4" />
          </p>
        </Link>
      </div>
    </Card>
  );
}

function OrderSummary({ item }: { item: any }) {
  return (
    <Card className="flex w-full flex-col py-4 md:px-3 md:py-2">
      <p className="mb-4 text-xl font-semibold text-amber-600 md:text-lg sm:text-sm">
        Order Summary
      </p>
      <div className="flex flex-col">
        <p className="flex justify-between text-sm text-gray-700 md:text-xs">
          Subtotal: <span className="font-medium">${item.total}</span>
        </p>
        <p className="flex justify-between text-sm text-gray-700 md:text-xs">
          Delivery Fee: <span className="font-medium">${item.deliveryFee}</span>
        </p>
        <p className="flex justify-between text-sm text-gray-700 md:text-xs">
          Discount: <span className="font-medium">${item.discount}</span>
        </p>
        <p className="flex justify-between text-sm text-gray-700 md:text-xs">
          Tax: <span className="font-medium">${item.tax}</span>
        </p>
      </div>
      <p className="mt-4 flex justify-between border-t border-gray-300 pt-4 text-base font-bold text-gray-800 md:text-sm">
        Total: <span className="text-amber-600">${item.total}</span>
      </p>
    </Card>
  );
}

function ProgressBarDelivery({ progress = 100 }: { progress?: number }) {
  const clampedProgress = Math.max(0, Math.min(100, progress));
  return (
    <div className="w-full py-2">
      {/* Progress Container */}
      <div className="relative h-2 w-full rounded-full bg-gray-300 md:h-1">
        {/* Completed Progress */}
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-amber-500"
          style={{ width: `${clampedProgress}%` }}
        ></div>

        {/* Milestones */}
        <div className="absolute top-[-1.5rem] flex w-full justify-between">
          <div className="flex flex-col items-center">
            <span
              className={`text-xs ${
                clampedProgress >= 0 ? "text-amber-500" : "text-gray-500"
              } mt-1`}
            >
              Order
            </span>
            <div
              className={`h-4 w-10 rounded-full border bg-amber-500 md:h-3 ${
                clampedProgress >= 0 ? "bg-amber-500" : "bg-gray-500"
              }`}
            ></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span
              className={`text-xs ${
                clampedProgress >= 50 ? "text-amber-500" : "text-gray-500"
              } mt-1`}
            >
              Delivery
            </span>
            <div
              className={`h-4 w-10 rounded-full border bg-amber-500 md:h-3 ${
                clampedProgress >= 50 ? "bg-amber-500" : "bg-gray-500"
              }`}
            ></div>
          </div>
          <div className="flex flex-col items-end">
            <span
              className={`text-xs ${
                clampedProgress >= 100 ? "text-amber-500" : "text-gray-500"
              } mt-1`}
            >
              Delivered
            </span>
            <div
              className={`h-4 w-10 rounded-full border bg-amber-500 md:h-3 ${
                clampedProgress >= 100 ? "bg-amber-500" : "bg-gray-500"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardItem({ item }: { item: any }) {
  return (
    <Card className="flex w-full flex-col px-6 py-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={item.image}
              width={100}
              height={100}
              alt="Delivery Item"
            />
          </div>
          <div className="flex h-fit w-full flex-grow flex-col pl-4">
            <p className="text-base font-semibold text-black md:text-sm sm:text-xs">
              {item.name}
            </p>
            <p className="mt-1 text-sm text-gray-500 md:text-xs">
              {item.speacialRequest}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="text-sm font-semibold md:text-xs sm:text-xs">
            ${item.price * item.quantity}
          </p>
          <p className="text-sm text-gray-500 md:text-xs sm:text-xs">
            Qty: {item.quantity}
          </p>
        </div>
      </div>
    </Card>
  );
}

function Spacer() {
  return (
    <div className="border-t-1 flex h-[1px] w-full flex-row justify-between border border-gray-300" />
  );
}

function Tracking({
  item,
  setIsTracking,
  progress,
}: {
  item: any;
  setIsTracking: any;
  progress: any;
}) {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <Image
          src="/assets/delivery/map.png"
          alt="Delivery Map"
          fill
          sizes="100vw"
          objectFit="cover"
        />
      </div>
      <Button
        className="absolute bottom-5 left-0 right-0 m-auto w-fit rounded-md bg-gradient-to-r from-amber-300 from-0% to-amber-500 to-100% text-base text-black shadow-yellow-400 drop-shadow-lg"
        onClick={() => setIsTracking(false)}
      >
        <p className="text-sm">Back to Order</p>
      </Button>
    </>
  );
}

function OrderDetail({
  item,
  setIsTracking,
  progress,
}: {
  item: any;
  setIsTracking: any;
  progress: any;
}) {
  return (
    <>
      <SearchBar />
      <div className="flex w-full flex-row items-center justify-between">
        <p className="text-sm text-amber-600 md:text-xs">Order ID: {item.id}</p>
        <div className="flex flex-row space-x-5">
          {progress === 100 && (
            <Button className="flex h-fit w-full items-center space-x-2 rounded-md bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600 md:space-x-0 sm:w-auto">
              <span className="text-sm md:text-xs">Reorder</span>
            </Button>
          )}
          <DropdownMenuCancel />
          <Button
            className="flex h-fit w-full items-center space-x-2 rounded-md bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600 md:space-x-0 sm:w-auto"
            onClick={() => setIsTracking(true)}
          >
            <span className="text-sm md:hidden">Track Order</span>
            <MapPin className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="m-auto flex w-full flex-row justify-start space-x-4 text-base">
        <p className="text-sm md:text-xs">Order date: {item.orderDateTime}</p>
        <p className="sm:text-sx text-base text-gray-300 md:text-sm">|</p>
        <div className="flex flex-row space-x-2 text-amber-500">
          <Truck className="h-5 w-5" />
          <p className="text-sm md:text-xs">
            Estimated delivery: {item.deliveryDateTime}
          </p>
        </div>
      </div>
      <Spacer />
      <ProgressBarDelivery progress={progress} />
      <div className="grid w-full grid-cols-2 place-content-around gap-5 md:grid-cols-1 md:gap-2">
        {item.items.map((item: any) => (
          <CardItem item={item} key={item.id} />
        ))}
      </div>
      <Spacer />
      <div className="flex w-full flex-row space-x-5 md:flex-col-reverse md:space-x-0">
        <Payment {...item.paymentMethod} />
        <Delivery
          {...{
            address: item.address,
            driver: item.driver,
            driverPhone: item.driver.phone,
          }}
        />
      </div>
      <div className="flex w-full flex-row space-x-5 md:flex-col-reverse md:space-x-0">
        <NeedHelp />
        <OrderSummary item={item} />
      </div>
    </>
  );
}
