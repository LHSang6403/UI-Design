import Item from "@components/ReuseableMaterials/Item";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function FoodSlider({title, Foods, carousel}: {title: string, Foods: Food[], carousel: boolean}) {
  return (
    <div className="px-48 w-full mt-5">
      <h1 className="mx-auto mb-10 text-start text-3xl font-bold">
        {title}
      </h1>
      { !carousel ? (
        <div className="grid grid-cols-5 gap-4">
           {Foods.map((food, index) => (
            <Item key={index}
            img={food.image}
            name={food.name}
            location={food.location}
            price={food.price}
            />
        ))}
        </div>
      ) : (
        <Carousel
        opts={{
          align: "start",
        }}
        className="w-full flex flex-col"
      >
          <div className="flex">
              <CarouselPrevious className="bg-corange"/>
              <CarouselNext className="bg-corange"/>
          </div>
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
      </Carousel>
      )}
    </div>
  );
}
