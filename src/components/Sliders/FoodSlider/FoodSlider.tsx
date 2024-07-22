import Item from "@components/ReuseableMaterials/Item";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function FoodSlider({title, Foods}: {title: string, Foods: Food[]}) {
  return (
    <div className="px-48">
      <h1 className="mx-auto mb-10 text-start text-3xl font-bold">
        {title}
      </h1>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Foods.map((food, index) => (
          <CarouselItem key={index} className="basis-1/5">
            <Item key={index}
            img={food.image}
            name={food.name}
            location={food.location}
            price={food.price}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}
