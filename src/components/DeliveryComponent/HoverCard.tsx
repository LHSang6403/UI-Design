import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

export function HoverCardDelivery({ item }: { item: any }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="align-left flex items-start">
          <CardItem item={item} />
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="justify-left flex w-96 items-end border border-yellow-400 shadow-lg shadow-yellow-300">
        <div className="flex w-full flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{item.name}</span>
            <span>Order #{item.id}</span>
          </div>
          <div className="flex flex-col pb-4">
            {item.items.map((item: any) => (
              <div className="flex w-full flex-col pt-2 text-gray-500">
                <div className="flex w-full flex-row justify-between pb-2">
                  <span>{item.name} </span>
                  <span>{item.quantity}</span>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="text-md flex w-full flex-col font-bold">
            <div className="flex w-full flex-row justify-between pb-2">
              <span>Total </span>
              <span>${item.total}</span>
            </div>
            <hr />
          </div>
          <Button className="flex h-fit w-full items-center rounded-md bg-amber-500 px-4 py-2 text-sm text-white shadow-yellow-400 drop-shadow-lg transition-colors hover:bg-amber-600 sm:w-auto sm:text-base">
            <span className="sm:text-sx text-base md:text-sm">Reorder</span>
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function CardItem({ item }: { item: any }) {
  const length = item.items.length;
  return (
    <Card className="flex h-fit w-fit flex-col border border-yellow-400 bg-white px-6 py-4 shadow-yellow-300 drop-shadow-lg">
      <div className="flex flex-row justify-center items-center">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={"/assets/delivery/delivery_item_main.png"}
            alt="Delivery Item"
            width={140}
            height={140}
          />
        </div>
        <div className="h-fit flex w-full flex-grow flex-col pl-4 text-left">
          <CardHeader className="p-0">
            <CardDescription className="text-xs text-gray-500">
              Order #{item.id}
            </CardDescription>
            <CardTitle className="text-sm font-semibold text-black">
              {item.name}
            </CardTitle>
            <CardDescription className="space-x-2 text-xs text-black">
              <span>Items:</span>
              {item.items.map((item: any) => (
                <span className="text-gray-500">
                  {item.name} x {item.quantity}
                </span>
              ))}
            </CardDescription>
          </CardHeader>
        </div>
      </div>
      <CardFooter className="flex justify-start space-x-2 p-0 pt-2 md:pt-1">
        <Button className="h-fit rounded-full bg-yellow-400 text-xs text-black hover:bg-yellow-500">
          Eat Clean
        </Button>
        <Button className="h-fit rounded-full bg-yellow-400 text-xs text-black hover:bg-yellow-500">
          Vegetarian
        </Button>
      </CardFooter>
    </Card>
  );
}
