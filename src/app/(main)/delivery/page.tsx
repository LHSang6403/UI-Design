"use client";
import { HoverCardDelivery } from "@/components/DeliveryComponent/HoverCard";
import SearchBar from "@/components/Search/SearchBar";
import { Button } from "@/components/ui/button";
import useHistory from "@/zustand/useHistory";
import Link from "next/link";

export default function Delivery() {
  return (
    <div className="min-h-screen-w-full mx-10 flex flex-col items-center">
      <SearchBar />
      <History />
      <Button className="h-fit w-fit rounded-md bg-gradient-to-r from-amber-300 from-0% to-amber-500 to-100% text-base text-black shadow-yellow-400 drop-shadow-lg">
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
      status: "delivered",
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
      status: "inConfirm",
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
      status: "inProgress",
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
      status: "delivered",
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
      status: "delivered",
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
      status: "delivered",
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
      status: "delivered",
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
      status: "delivered",
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
      status: "delivered",
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
    <div className="max-w-screen-lg my-6 grid w-full grid-cols-4 place-items-center gap-5 lg:grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1">
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
