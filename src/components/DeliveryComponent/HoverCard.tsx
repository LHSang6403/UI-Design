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
      <HoverCardContent className="justify-left flex w-96 items-end border border-yellow-400 shadow-yellow-300 shadow-lg">
        <div className="flex w-full flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{item.name}</span>
            <span>Order #{item.id}</span>
          </div>
          <div className="flex flex-col pb-4">
            {item.items.map((item: any) => (
              <div className="flex flex-col text-gray-500 w-full pt-2">
                <div className="flex flex-row justify-between w-full pb-2">
                  <span>{item.name} </span>
                  <span>{item.quantity}</span>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full font-bold text-md">
                <div className="flex flex-row justify-between w-full pb-2">
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
  console.log(length);
  return (
    <Card className="flex flex-col border border-yellow-400 bg-white px-6 py-4 shadow-yellow-300 drop-shadow-lg">
      <div className="flex flex-row">
        <Image
          src="/assets/delivery/delivery_item_main.png"
          width={100}
          height={100}
          className="rounded-md object-cover"
          alt="Delivery Item"
        />
        <div className="h-fitflex w-full flex-grow flex-col pl-4 text-left">
          <CardHeader className="p-0">
            <CardDescription className="text-gray-500 text-base">
              Order #{item.id}
            </CardDescription>
            <CardTitle className="text-xl font-semibold text-black">
              {item.name}
            </CardTitle>
            <CardDescription className="space-x-2 text-base text-black">
              <span>Items:</span>
              {item.items.map((item: any) => (
                <span className="text-gray-500">
                  {item.name} x {item.quantity}
                </span>
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-2 flex-grow p-0"></CardContent>
        </div>
      </div>
      <CardFooter className="m-0 flex justify-start bg-gray-50 p-0 pt-3">
        <Button className="mr-4 rounded-full bg-yellow-400 text-black hover:bg-yellow-500">
          Eat Clean
        </Button>
        <Button className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500">
          Vegetarian
        </Button>
      </CardFooter>
    </Card>
  );
}
