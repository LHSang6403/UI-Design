import Image from "next/image";
import { Button } from "../ui/button";

export default function SearchByFood() {
  return (
    <div className="my-10">
      <div className="mb-16 flex flex-row justify-between">
        <h1 className="text-start text-3xl font-bold">Search By Food</h1>
        <div className="flex w-fit flex-row items-center">
          <Button className="hover:bg- mb-2 text-cyellow">View All</Button>
          <Image
            src="/assets/home/left-btn.png"
            alt="Left"
            width={70}
            height={70}
            className="hover:cursor-pointer"
          ></Image>
          <Image
            src="/assets/home/left-btn.png"
            alt="Right"
            width={70}
            height={70}
            className="hover:cursor-pointer"
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 lg:grid-cols-3">
        <RoundedItem img="/assets/home/round1.png" name="Pizza" />
        <RoundedItem img="/assets/home/round1.png" name="Pizza" />
        <RoundedItem img="/assets/home/round1.png" name="Pizza" />
        <RoundedItem img="/assets/home/round1.png" name="Pizza" />
        <RoundedItem img="/assets/home/round1.png" name="Pizza" />
        <RoundedItem img="/assets/home/round1.png" name="Pizza" />
      </div>
    </div>
  );
}

const RoundedItem = ({ img, name }: { img: string; name: string }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-full">
        <Image src={img} alt="Item" width={180} height={180} />
      </div>
      <p className="mt-3 text-center text-sm font-semibold text-cblack">
        {name}
      </p>
    </div>
  );
};
