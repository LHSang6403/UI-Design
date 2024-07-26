import Meal from "@components/ReuseableMaterials/Meal";
import { Button } from "@components/ui/button";

export default function MealsOfTheDay() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mx-auto mb-10 text-center text-3xl font-bold">
        Meals of the day
      </h1>
      <div className="grid grid-cols-4 gap-x-4 gap-y-8 lg:grid-cols-2">
        <Meal
          img="/assets/home/food1.png"
          shopImg="/assets/home/shop1.png"
          shopName="Foodworld"
          shopRate={4.5}
          isOpen={true}
        />
        <Meal
          img="/assets/home/food1.png"
          shopImg="/assets/home/shop1.png"
          shopName="Foodworld"
          shopRate={4.5}
          isOpen={false}
        />
        <Meal
          img="/assets/home/food1.png"
          shopImg="/assets/home/shop1.png"
          shopName="Foodworld"
          shopRate={4.5}
          isOpen={true}
        />
        <Meal
          img="/assets/home/food1.png"
          shopImg="/assets/home/shop1.png"
          shopName="Foodworld"
          shopRate={4.5}
          isOpen={false}
        />
        <Meal
          img="/assets/home/food1.png"
          shopImg="/assets/home/shop1.png"
          shopName="Foodworld"
          shopRate={4.5}
          isOpen={true}
        />
        <Meal
          img="/assets/home/food1.png"
          shopImg="/assets/home/shop1.png"
          shopName="Foodworld"
          shopRate={4.5}
          isOpen={false}
        />
        <Meal
          img="/assets/home/food1.png"
          shopImg="/assets/home/shop1.png"
          shopName="Foodworld"
          shopRate={4.5}
          isOpen={false}
        />
        <Meal
          img="/assets/home/food1.png"
          shopImg="/assets/home/shop1.png"
          shopName="Foodworld"
          shopRate={4.5}
          isOpen={true}
        />
      </div>
      <Button className="mx-auto mt-10 rounded-lg bg-gradient-to-l from-[#FFB624] to-[#FF9F11] px-6 text-white shadow-md">
        View all
      </Button>
    </div>
  );
}
