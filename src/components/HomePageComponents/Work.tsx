import Image from "next/image";

export default function Work() {
  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-[#FFF9EC] to-white py-10">
      <h1 className="mx-auto text-3xl font-bold text-corange">
        How does it work
      </h1>
      <div className="mt-10 grid grid-cols-4 gap-4">
        <Image
          alt="Work"
          src="/assets/home/work1.png"
          width={250}
          height={250}
        />
        <Image
          alt="Work"
          src="/assets/home/work2.png"
          width={250}
          height={250}
        />
        <Image
          alt="Work"
          src="/assets/home/work3.png"
          width={250}
          height={250}
        />
        <Image
          alt="Work"
          src="/assets/home/work4.png"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}
