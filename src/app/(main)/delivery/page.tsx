"use client";
import SearchBar from "@/components/Search/SearchBar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useHistory from "@/zustand/useHistory";
import Image from "next/image";
import Link from "next/link";
import { array } from "zod";
import { HoverCardDelivery } from "@/components/DeliveryComponent/HoverCard";
import { DriverPopover } from "@/components/DeliveryComponent/DriverPopOver";

export default function Delivery() {
  return (
    <div className="min-h-screen-w-full mx-10 mt-3 flex flex-col items-center">
      <SearchBar />
      <History />
      <Button className="mr-4 h-fit w-fit rounded-md bg-gradient-to-r from-amber-300 from-0% to-amber-500 to-100% text-black shadow-yellow-400 drop-shadow-lg">
        See more
      </Button>
    </div>
  );
}

function History() {
  const FoodHistory = [
    {
      id: "1",
      name: "Endless Noodles",
      image: "/assets/delivery/delivery_item_main.png",
      items: [
        {
          name: "Bun thit nuong",
          quantity: 3,
          selectedOptions: ["Pork", "Shrimp"],
          speacialRequest: "No onion",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
        {
          name: "Pho",
          quantity: 2,
          selectedOptions: ["Beef"],
          speacialRequest: "No bean sprouts",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
      ],
      eatClean: true,
      vegetarian: false,
      orderDateTime: "Feb 20, 2022 12:00 PM",
      deliveryDateTime: "Feb 20, 2022 12:30 PM",
      estimatedTotal: 25.0,
      address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City",
      status: "Delivered",
      driver: {
        name: "John Doe",
        phone: "0123456789",
      },
      deliveryFee: 5.0,
      discount: 0.0,
      tax: 0.0,
      total: 30.0,
      paymentMethod: {
        name: "VISA",
        cardNumber: "**34",
      },
    },
    {
      id: "2",
      name: "Endless Noodles",
      image: "/assets/delivery/delivery_item_main.png",
      items: [
        {
          name: "Bun thit nuong",
          quantity: 3,
          selectedOptions: ["Pork", "Shrimp"],
          speacialRequest: "No onion",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
        {
          name: "Pho",
          quantity: 2,
          selectedOptions: ["Beef"],
          speacialRequest: "No bean sprouts",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
      ],
      eatClean: true,
      vegetarian: false,
      orderDateTime: "Feb 20, 2022 12:00 PM",
      deliveryDateTime: "Feb 20, 2022 12:30 PM",
      estimatedTotal: 25.0,
      address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City",
      status: "Delivered",
      driver: {
        name: "John Doe",
        phone: "0123456789",
      },
      deliveryFee: 5.0,
      discount: 0.0,
      tax: 0.0,
      total: 30.0,
      paymentMethod: {
        name: "VISA",
        cardNumber: "**34",
      },
    },
    {
      id: "3",
      name: "Endless Noodles",
      image: "/assets/delivery/delivery_item_main.png",
      items: [
        {
          name: "Bun thit nuong",
          quantity: 3,
          selectedOptions: ["Pork", "Shrimp"],
          speacialRequest: "No onion",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
        {
          name: "Pho",
          quantity: 2,
          selectedOptions: ["Beef"],
          speacialRequest: "No bean sprouts",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
      ],
      eatClean: true,
      vegetarian: false,
      orderDateTime: "Feb 20, 2022 12:00 PM",
      deliveryDateTime: "Feb 20, 2022 12:30 PM",
      estimatedTotal: 25.0,
      address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City",
      status: "Delivered",
      driver: {
        name: "John Doe",
        phone: "0123456789",
      },
      deliveryFee: 5.0,
      discount: 0.0,
      tax: 0.0,
      total: 30.0,
      paymentMethod: {
        name: "VISA",
        cardNumber: "**34",
      },
    },
    // 10 items
    {
      id: "4",
      name: "Endless Noodles",
      image: "/assets/delivery/delivery_item_main.png",
      items: [
        {
          name: "Bun thit nuong",
          quantity: 3,
          selectedOptions: ["Pork", "Shrimp"],
          speacialRequest: "No onion",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
        {
          name: "Pho",
          quantity: 2,
          selectedOptions: ["Beef"],
          speacialRequest: "No bean sprouts",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
      ],
      eatClean: true,
      vegetarian: false,
      orderDateTime: "Feb 20, 2022 12:00 PM",
      deliveryDateTime: "Feb 20, 2022 12:30 PM",
      estimatedTotal: 25.0,
      address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City",
      status: "Delivered",
      driver: {
        name: "John Doe",
        phone: "0123456789",
      },
      deliveryFee: 5.0,
      discount: 0.0,
      tax: 0.0,
      total: 30.0,
      paymentMethod: {
        name: "VISA",
        cardNumber: "**34",
      },
    },
    {
      id: "5",
      name: "Endless Noodles",
      image: "/assets/delivery/delivery_item_main.png",
      items: [
        {
          name: "Bun thit nuong",
          quantity: 3,
          selectedOptions: ["Pork", "Shrimp"],
          speacialRequest: "No onion",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
        {
          name: "Pho",
          quantity: 2,
          selectedOptions: ["Beef"],
          speacialRequest: "No bean sprouts",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
      ],
      eatClean: true,
      vegetarian: false,
      orderDateTime: "Feb 20, 2022 12:00 PM",
      deliveryDateTime: "Feb 20, 2022 12:30 PM",
      estimatedTotal: 25.0,
      address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City",
      status: "Delivered",
      driver: {
        name: "John Doe",
        phone: "0123456789",
      },
      deliveryFee: 5.0,
      discount: 0.0,
      tax: 0.0,
      total: 30.0,
      paymentMethod: {
        name: "VISA",
        cardNumber: "**34",
      },
    },
    {
      id: "6",
      name: "Endless Noodles",
      image: "/assets/delivery/delivery_item_main.png",
      items: [
        {
          name: "Bun thit nuong",
          quantity: 3,
          selectedOptions: ["Pork", "Shrimp"],
          speacialRequest: "No onion",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
        {
          name: "Pho",
          quantity: 2,
          selectedOptions: ["Beef"],
          speacialRequest: "No bean sprouts",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
      ],
      eatClean: true,
      vegetarian: false,
      orderDateTime: "Feb 20, 2022 12:00 PM",
      deliveryDateTime: "Feb 20, 2022 12:30 PM",
      estimatedTotal: 25.0,
      address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City",
      status: "Delivered",
      driver: {
        name: "John Doe",
        phone: "0123456789",
      },
      deliveryFee: 5.0,
      discount: 0.0,
      tax: 0.0,
      total: 30.0,
      paymentMethod: {
        name: "VISA",
        cardNumber: "**34",
      },
    },
    {
      id: "7",
      name: "Endless Noodles",
      image: "/assets/delivery/delivery_item_main.png",
      items: [
        {
          name: "Bun thit nuong",
          quantity: 3,
          selectedOptions: ["Pork", "Shrimp"],
          speacialRequest: "No onion",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
        {
          name: "Pho",
          quantity: 2,
          selectedOptions: ["Beef"],
          speacialRequest: "No bean sprouts",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
      ],
      eatClean: true,
      vegetarian: false,
      orderDateTime: "Feb 20, 2022 12:00 PM",
      deliveryDateTime: "Feb 20, 2022 12:30 PM",
      estimatedTotal: 25.0,
      address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City",
      status: "Delivered",
      driver: {
        name: "John Doe",
        phone: "0123456789",
      },
      deliveryFee: 5.0,
      discount: 0.0,
      tax: 0.0,
      total: 30.0,
      paymentMethod: {
        name: "VISA",
        cardNumber: "**34",
      },
    },
    {
      id: "8",
      name: "Endless Noodles",
      image: "/assets/delivery/delivery_item_main.png",
      items: [
        {
          name: "Bun thit nuong",
          quantity: 3,
          selectedOptions: ["Pork", "Shrimp"],
          speacialRequest: "No onion",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
        {
          name: "Pho",
          quantity: 2,
          selectedOptions: ["Beef"],
          speacialRequest: "No bean sprouts",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
      ],
      eatClean: true,
      vegetarian: false,
      orderDateTime: "Feb 20, 2022 12:00 PM",
      deliveryDateTime: "Feb 20, 2022 12:30 PM",
      estimatedTotal: 25.0,
      address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City",
      status: "Delivered",
      driver: {
        name: "John Doe",
        phone: "0123456789",
      },
      deliveryFee: 5.0,
      discount: 0.0,
      tax: 0.0,
      total: 30.0,
      paymentMethod: {
        name: "VISA",
        cardNumber: "**34",
      },
    },
    {
      id: "9",
      name: "Endless Noodles",
      image: "/assets/delivery/delivery_item_main.png",
      items: [
        {
          name: "Bun thit nuong",
          quantity: 3,
          selectedOptions: ["Pork", "Shrimp"],
          speacialRequest: "No onion",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
        {
          name: "Pho",
          quantity: 2,
          selectedOptions: ["Beef"],
          speacialRequest: "No bean sprouts",
          price: 3.88,
          image: "/assets/delivery/delivery_item_main.png",
        },
      ],
      eatClean: true,
      vegetarian: false,
      orderDateTime: "Feb 20, 2022 12:00 PM",
      deliveryDateTime: "Feb 20, 2022 12:30 PM",
      estimatedTotal: 25.0,
      address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City",
      status: "Delivered",
      driver: {
        name: "John Doe",
        phone: "0123456789",
      },
      deliveryFee: 5.0,
      discount: 0.0,
      tax: 0.0,
      total: 30.0,
      paymentMethod: {
        name: "VISA",
        cardNumber: "**34",
      },
    },
  ];

  const { setItem } = useHistory();

  return (
    <div className="my-6 grid w-full grid-cols-3 place-content-around gap-6 lg:grid-cols-2 md:grid-cols-1">
      {FoodHistory.map((item) => (
        <Link
          href={`/delivery/${item.id}`}
          passHref
          onClick={() => setItem(item)}
        >
          <HoverCardDelivery key={item.id} item={item} />
        </Link>
      ))}
    </div>
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
            <CardDescription className="text-grat-500 text-base">
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
