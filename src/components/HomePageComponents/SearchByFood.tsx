import Image from "next/image";

export default function SearchByFood() {
  return (
    <div className="my-10">
      <h1 className="mb-16 text-start text-3xl font-bold">Search By Food</h1>
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
