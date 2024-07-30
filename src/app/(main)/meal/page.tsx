import SearchByFood from "@/components/HomePageComponents/SearchByFood";
import RecommendBar from "@/components/MealPageComponent/RecommendBar";
import SearchBar from "@/components/Search/SearchBar";
import Image from "next/image";
import FoodSlider from "@/components/Sliders/FoodSlider/FoodSlider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Template from "@app/(main)/template";
import Dialog from "@/components/Modal/ShoppingModal";

export default function Meal() {
  async function onClose() {
    "use server";
    console.log("Modal has closed");
  }

  async function onOk() {
    "use server";
    console.log("Ok was clicked");
  }
  return (
    <>
      <Template>
        <Dialog title="Example Modal" onClose={onClose} onOk={onOk}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            eligendi odio ipsa nostrum dolores voluptas architecto tempore nulla
            voluptatibus vel, placeat explicabo exercitationem id officia
            laborum doloremque blanditiis earum accusamus.
          </p>
        </Dialog>
        <main className="min-h-screen-w-full flex flex-col items-center gap-6">
          <div className="grid w-full px-48">
            <Breadcrumb className="justify-self-start">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>Meals</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="w-full px-48">
            <SearchBar></SearchBar>
          </div>
          <RecommendBar></RecommendBar>

          <FoodSlider
            carousel={true}
            title="Delicious food near you"
            Foods={FoodDataSlider}
          ></FoodSlider>
          <FoodSlider
            carousel={false}
            title="Foods at 227 Nguyen Van Cu, District 5, Ho Chi Minh City"
            Foods={FoodDataMenu}
          ></FoodSlider>
          <div className="w-full px-48">
            <SearchByFood></SearchByFood>
          </div>
          <Image
            alt="Banner"
            src="/assets/home/banner1.png"
            width={1660}
            height={600}
          />
        </main>
      </Template>
    </>
  );
}
const FoodDataSlider: Food[] = [
  {
    id: "1",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "2",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "3",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "4",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "5",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "6",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "7",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "8",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
];
const FoodDataMenu: Food[] = [
  {
    id: "1",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "2",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "3",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "4",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "5",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "6",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "7",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "8",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "9",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "10",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "11",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "12",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "13",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "14",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
  {
    id: "7",
    name: "Cheese Burger",
    image: "/assets/home/food1.png",
    location: "Toffe's Cafe",
    price: 3.88,
  },
];
