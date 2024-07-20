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
      <p className="mt-2 font-semibold">{name}</p>
      <p className="text-sm text-cyellow">{location}</p>
      <p className="text-sm font-medium">${price}</p>
      <OrangeButton className="mt-2 w-full shadow-md">Order Now</OrangeButton>
    </div>
  );
}
