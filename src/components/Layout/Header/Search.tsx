import Image from "next/image";

export default function Search() {
  return (
    <div className="z-20 h-5 w-5">
      <Image
        src="/assets/search.png"
        alt="Search icon"
        width={24}
        height={24}
      ></Image>
    </div>
  );
}
