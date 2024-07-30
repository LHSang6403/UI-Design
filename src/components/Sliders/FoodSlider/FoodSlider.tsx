import Item from "@components/ReuseableMaterials/Item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FoodSlider({
  title,
  Foods,
  carousel,
}: {
  title: string;
  Foods: Food[];
  carousel: boolean;
}) {
  return (
    <div className="w-full px-48">
      <h1 className="mx-auto mb-5 text-start text-2xl font-bold">{title}</h1>
      {!carousel ? (
        <div className="grid grid-cols-5 gap-4">
          {Foods.map((food, index) => (
            <Item
              key={index}
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
          className="flex w-full flex-col"
        >
          <div className="flex">
            <CarouselPrevious className="bg-corange" />
            <CarouselNext className="bg-corange" />
          </div>
          <CarouselContent>
            {Foods.map((food, index) => (
              <CarouselItem key={index} className="basis-1/5">
                <Item
                  key={index}
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
