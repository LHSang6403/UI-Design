import Image from "next/image";
import { Button } from "../ui/button";

export default function SaleItem({
  img,
  name,
  hour,
}: {
  img: string;
  name: string;
  hour: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-lg">
        <Image src={img} alt="Sale" width={280} height={280} />
      </div>
      <p className="mt-2">{name}</p>
      <Button className="mt-1 h-8 w-fit bg-[#FEF1E8] text-[0.72rem] text-corange hover:bg-[#FEF1E8]">
        {hour} Hours Remaining
      </Button>
    </div>
  );
}
