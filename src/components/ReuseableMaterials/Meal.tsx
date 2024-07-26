import Image from "next/image";
import { Button } from "@components/ui/button";

export default function Meal({
  img,
  shopImg,
  shopName,
  shopRate,
  isOpen,
}: {
  img: string;
  shopImg: string;
  shopName: string;
  shopRate: number;
  isOpen: boolean;
}) {
  return (
    <div>
      <div className="w-fit overflow-hidden rounded-lg">
        <Image alt="Item" src={img} width={280} height={280} />
      </div>
      <div className="mt-3 flex flex-row gap-2">
        <Image alt="Item" src={shopImg} width={45} height={45} />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">{shopName}</p>
          <p className="text-sm font-light text-cyellow">{shopRate}</p>
        </div>
      </div>
      <div className="mt-2">
        {!isOpen ? (
          <Button className="h-5 w-fit rounded-xl bg-[#FEF1E8] p-2 text-[13px] text-corange hover:bg-[#FEF1E8]">
            Opens tomorrow
          </Button>
        ) : (
          <Button className="h-5 w-fit rounded-xl bg-[#E4F1D8] p-2 text-[13px] text-cgreen">
            Opens now
          </Button>
        )}
      </div>
    </div>
  );
}
