import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer/Footer";
import HomeSlider from "@components/Sliders/HomeSlider";
import Template from "@app/(main)/template";
import Image from "next/image";
import Slide from "@/components/HomePageComponents/Slide";
import Sales from "@/components/HomePageComponents/Sales";
import Work from "@/components/HomePageComponents/Work";
import PopularItems from "@/components/HomePageComponents/PopularItems";
import MealsOfTheDay from "@/components/HomePageComponents/MealsOfTheDay";
import SearchByFood from "@/components/HomePageComponents/SearchByFood";

export default function Home() {
  return (
    <>
      <Header />
      <Template>
        <main className="flex min-h-screen w-full flex-col items-center gap-4">
          <Slide />
          <Sales />
          <Work />
          <PopularItems />
          <MealsOfTheDay />
          <SearchByFood />
          <Image
            alt="Banner"
            src="/assets/home/banner1.png"
            width={1660}
            height={600}
          />
          <Image
            alt="Banner"
            src="/assets/home/banner2.png"
            width={1660}
            height={600}
          />
        </main>
      </Template>
      <Footer />
    </>
  );
}
