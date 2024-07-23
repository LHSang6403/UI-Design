'use client'
import SearchBar from "@/components/Search/SearchBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useHistory from "@/zustand/useHistory";
import Image from "next/image";
import Link from "next/link";
import { array } from "zod";
export default function Delivery() {
    return (
        <div className="min-h-screen-w-full m-10 items-center flex flex-col">
            <SearchBar />
            <History />
            <Button className="w-fit h-fit drop-shadow-lg shadow-yellow-400 bg-gradient-to-r from-amber-300 from-0% to-amber-500 to-100% text-black mr-4 rounded-md py-5 px-[80px] text-2xl">See more</Button>
        </div>
    )
}

function History() {
    const FoodHistory = [
        {
            id: '1',
            name: 'Endless Noodles',
            image: '/assets/delivery/delivery_item_main.png',
            items: [{
                name: 'Bun thit nuong',
                quantity: 3,
                selectedOptions: ['Pork', 'Shrimp'],
                speacialRequest: 'No onion',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            },
            {
                name: 'Pho',
                quantity: 2,
                selectedOptions: ['Beef'],
                speacialRequest: 'No bean sprouts',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            }],
            eatClean: true,
            vegetarian: false,
            orderDateTime: 'Feb 20, 2022 12:00 PM',
            deliveryDateTime: 'Feb 20, 2022 12:30 PM',
            estimatedTotal: 25.00,
            address: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
            status: 'Delivered',
            driver: {
                name: 'John Doe',
                phone: '0123456789'
            },
            deliveryFee: 5.00,
            discount: 0.00,
            tax: 0.00,
            total: 30.00,
            paymentMethod: {
                name: 'VISA',
                cardNumber: '**34',
            }

        },
        {
            id: '2',
            name: 'Endless Noodles',
            image: '/assets/delivery/delivery_item_main.png',
            items: [{
                name: 'Bun thit nuong',
                quantity: 3,
                selectedOptions: ['Pork', 'Shrimp'],
                speacialRequest: 'No onion',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            },
            {
                name: 'Pho',
                quantity: 2,
                selectedOptions: ['Beef'],
                speacialRequest: 'No bean sprouts',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            }],
            eatClean: true,
            vegetarian: false,
            orderDateTime: 'Feb 20, 2022 12:00 PM',
            deliveryDateTime: 'Feb 20, 2022 12:30 PM',
            estimatedTotal: 25.00,
            address: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
            status: 'Delivered',
            driver: {
                name: 'John Doe',
                phone: '0123456789'
            },
            deliveryFee: 5.00,
            discount: 0.00,
            tax: 0.00,
            total: 30.00,
            paymentMethod: {
                name: 'VISA',
                cardNumber: '**34',
            }

        },
        {
            id: '3',
            name: 'Endless Noodles',
            image: '/assets/delivery/delivery_item_main.png',
            items: [{
                name: 'Bun thit nuong',
                quantity: 3,
                selectedOptions: ['Pork', 'Shrimp'],
                speacialRequest: 'No onion',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            },
            {
                name: 'Pho',
                quantity: 2,
                selectedOptions: ['Beef'],
                speacialRequest: 'No bean sprouts',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            }],
            eatClean: true,
            vegetarian: false,
            orderDateTime: 'Feb 20, 2022 12:00 PM',
            deliveryDateTime: 'Feb 20, 2022 12:30 PM',
            estimatedTotal: 25.00,
            address: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
            status: 'Delivered',
            driver: {
                name: 'John Doe',
                phone: '0123456789'
            },
            deliveryFee: 5.00,
            discount: 0.00,
            tax: 0.00,
            total: 30.00,
            paymentMethod: {
                name: 'VISA',
                cardNumber: '**34',
            }

        },
        // 10 items
        {
            id: '4',
            name: 'Endless Noodles',
            image: '/assets/delivery/delivery_item_main.png',
            items: [{
                name: 'Bun thit nuong',
                quantity: 3,
                selectedOptions: ['Pork', 'Shrimp'],
                speacialRequest: 'No onion',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            },
            {
                name: 'Pho',
                quantity: 2,
                selectedOptions: ['Beef'],
                speacialRequest: 'No bean sprouts',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            }],
            eatClean: true,
            vegetarian: false,
            orderDateTime: 'Feb 20, 2022 12:00 PM',
            deliveryDateTime: 'Feb 20, 2022 12:30 PM',
            estimatedTotal: 25.00,
            address: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
            status: 'Delivered',
            driver: {
                name: 'John Doe',
                phone: '0123456789'
            },
            deliveryFee: 5.00,
            discount: 0.00,
            tax: 0.00,
            total: 30.00,
            paymentMethod: {
                name: 'VISA',
                cardNumber: '**34',
            }

        },
        {
            id: '5',
            name: 'Endless Noodles',
            image: '/assets/delivery/delivery_item_main.png',
            items: [{
                name: 'Bun thit nuong',
                quantity: 3,
                selectedOptions: ['Pork', 'Shrimp'],
                speacialRequest: 'No onion',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            },
            {
                name: 'Pho',
                quantity: 2,
                selectedOptions: ['Beef'],
                speacialRequest: 'No bean sprouts',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            }],
            eatClean: true,
            vegetarian: false,
            orderDateTime: 'Feb 20, 2022 12:00 PM',
            deliveryDateTime: 'Feb 20, 2022 12:30 PM',
            estimatedTotal: 25.00,
            address: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
            status: 'Delivered',
            driver: {
                name: 'John Doe',
                phone: '0123456789'
            },
            deliveryFee: 5.00,
            discount: 0.00,
            tax: 0.00,
            total: 30.00,
            paymentMethod: {
                name: 'VISA',
                cardNumber: '**34',
            }
        },
        {
            id: '6',
            name: 'Endless Noodles',
            image: '/assets/delivery/delivery_item_main.png',
            items: [{
                name: 'Bun thit nuong',
                quantity: 3,
                selectedOptions: ['Pork', 'Shrimp'],
                speacialRequest: 'No onion',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            },
            {
                name: 'Pho',
                quantity: 2,
                selectedOptions: ['Beef'],
                speacialRequest: 'No bean sprouts',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            }],
            eatClean: true,
            vegetarian: false,
            orderDateTime: 'Feb 20, 2022 12:00 PM',
            deliveryDateTime: 'Feb 20, 2022 12:30 PM',
            estimatedTotal: 25.00,
            address: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
            status: 'Delivered',
            driver: {
                name: 'John Doe',
                phone: '0123456789'
            },
            deliveryFee: 5.00,
            discount: 0.00,
            tax: 0.00,
            total: 30.00,
            paymentMethod: {
                name: 'VISA',
                cardNumber: '**34',
            }
        },
        {
            id: '7',
            name: 'Endless Noodles',
            image: '/assets/delivery/delivery_item_main.png',
            items: [{
                name: 'Bun thit nuong',
                quantity: 3,
                selectedOptions: ['Pork', 'Shrimp'],
                speacialRequest: 'No onion',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            },
            {
                name: 'Pho',
                quantity: 2,
                selectedOptions: ['Beef'],
                speacialRequest: 'No bean sprouts',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            }],
            eatClean: true,
            vegetarian: false,
            orderDateTime: 'Feb 20, 2022 12:00 PM',
            deliveryDateTime: 'Feb 20, 2022 12:30 PM',
            estimatedTotal: 25.00,
            address: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
            status: 'Delivered',
            driver: {
                name: 'John Doe',
                phone: '0123456789'
            },
            deliveryFee: 5.00,
            discount: 0.00,
            tax: 0.00,
            total: 30.00,
            paymentMethod: {
                name: 'VISA',
                cardNumber: '**34',
            }
        },
        {
            id: '8',
            name: 'Endless Noodles',
            image: '/assets/delivery/delivery_item_main.png',
            items: [{
                name: 'Bun thit nuong',
                quantity: 3,
                selectedOptions: ['Pork', 'Shrimp'],
                speacialRequest: 'No onion',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            },
            {
                name: 'Pho',
                quantity: 2,
                selectedOptions: ['Beef'],
                speacialRequest: 'No bean sprouts',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            }],
            eatClean: true,
            vegetarian: false,
            orderDateTime: 'Feb 20, 2022 12:00 PM',
            deliveryDateTime: 'Feb 20, 2022 12:30 PM',
            estimatedTotal: 25.00,
            address: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
            status: 'Delivered',
            driver: {
                name: 'John Doe',
                phone: '0123456789'
            },
            deliveryFee: 5.00,
            discount: 0.00,
            tax: 0.00,
            total: 30.00,
            paymentMethod: {
                name: 'VISA',
                cardNumber: '**34',
            }
        },
        {
            id: '9',
            name: 'Endless Noodles',
            image: '/assets/delivery/delivery_item_main.png',
            items: [{
                name: 'Bun thit nuong',
                quantity: 3,
                selectedOptions: ['Pork', 'Shrimp'],
                speacialRequest: 'No onion',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            },
            {
                name: 'Pho',
                quantity: 2,
                selectedOptions: ['Beef'],
                speacialRequest: 'No bean sprouts',
                price: 3.88,
                image: '/assets/delivery/delivery_item_main.png'
            }],
            eatClean: true,
            vegetarian: false,
            orderDateTime: 'Feb 20, 2022 12:00 PM',
            deliveryDateTime: 'Feb 20, 2022 12:30 PM',
            estimatedTotal: 25.00,
            address: '227 Nguyen Van Cu, District 5, Ho Chi Minh City',
            status: 'Delivered',
            driver: {
                name: 'John Doe',
                phone: '0123456789'
            },
            deliveryFee: 5.00,
            discount: 0.00,
            tax: 0.00,
            total: 30.00,
            paymentMethod: {
                name: 'VISA',
                cardNumber: '**34',
            }
        },
    ]

    const { setItem } = useHistory();

    return (
        <div className="w-full grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 place-content-around gap-10 my-10">
            {
                FoodHistory.map((item) => (
                    <Link href={`/delivery/${item.id}`} passHref onClick={() => setItem(item)}>
                        <CardItem key={item.id} item={item} />
                    </Link>
                ))
            }
        </div>
    )
}

function CardItem({ item }: { item: any }) {
    const length = item.items.length;
    console.log(length);
    return (
        <Card className="flex flex-col drop-shadow-lg shadow-yellow-300 border border-yellow-400 bg-white py-4 px-6">
            <div className="flex flex-row">
                <Image src="/assets/delivery/delivery_item_main.png" width={100} height={100} className="object-cover rounded-md" alt="Delivery Item" />
                <div className="w-full h-fitflex flex-col pl-4 flex-grow">
                    <CardHeader className="p-0">
                        <CardDescription className="text-grat-500 text-base">Order #{item.id}</CardDescription>
                        <CardTitle className="text-black text-xl font-semibold">{item.name}</CardTitle>
                        <CardDescription className="text-black text-base space-x-2"><span>Items:</span>
                            {
                                item.items.map((item: any) => (
                                    <span className="text-gray-500">
                                        {item.name} x {item.quantity}
                                    </span>
                                ))
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-2 flex-grow">
                    </CardContent>
                </div>
            </div>
            <CardFooter className="flex justify-start p-0 m-0 pt-3 bg-gray-50">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 mr-4 rounded-full">Eat Clean</Button>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full">Vegetarian</Button>
            </CardFooter>
        </Card>
    )
}