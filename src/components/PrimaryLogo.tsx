import Image from "next/image";

export default function PrimaryLogo() {
  return (
    <div>
      <Image src="/assets/Logo.png" alt="Logo" width={350} height={180}></Image>
    </div>
  );
}
