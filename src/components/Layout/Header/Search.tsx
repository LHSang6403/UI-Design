import Image from "next/image";

export default function Search() {
  return (
    <div className="z-20 h-10 w-10">
      <Image
        src="/assets/search.png"
        alt="Search icon"
        width={30}
        height={30}
      ></Image>
    </div>
  );
}
