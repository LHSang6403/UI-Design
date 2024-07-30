import Image from "next/image";
import { OrangeButton } from "./OrangeButton";

export default function Item({
  img,
  name,
  location,
  price,
}: {
  img: string;
  name: string;
  location: string;
  price: number;
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-lg">
        <Image alt="Item" src={img} width={220} height={220} />
      </div>
      <p className="mt-2 text-sm font-semibold">{name}</p>
      <div className="flex items-center text-sm text-cyellow">
        <Image
          alt="Item"
          src="/assets/fooditem/cook.png"
          width={22}
          height={22}
          className="mr-0.5"
        ></Image>
        <span>{location}</span>
      </div>
      <div className="mt-0.5 flex justify-between">
        <p className="text-sm font-medium">${price}</p>
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 8V13H16"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          20 minutes
        </p>
      </div>
      <OrangeButton className="mt-0.5 h-8 w-full shadow-md">
        Order Now
      </OrangeButton>
    </div>
  );
}
