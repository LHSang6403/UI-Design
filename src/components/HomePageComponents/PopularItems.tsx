import Item from "@components/ReuseableMaterials/Item";

export default function PopularItems() {
  return (
    <div className="py-10">
      <h1 className="mx-auto mb-10 text-center text-3xl font-bold">
        Popular Item
      </h1>
      <div className="grid grid-cols-5 gap-4 lg:grid-cols-2">
        <Item
          img="/assets/home/food1.png"
          name="Cheese Burger"
          location="Toffe's Cafe"
          price={3.88}
        />
        <Item
          img="/assets/home/food1.png"
          name="Cheese Burger"
          location="Toffe's Cafe"
          price={3.88}
        />
        <Item
          img="/assets/home/food1.png"
          name="Cheese Burger"
          location="Toffe's Cafe"
          price={3.88}
        />
        <Item
          img="/assets/home/food1.png"
          name="Cheese Burger"
          location="Toffe's Cafe"
          price={3.88}
        />
        <Item
          img="/assets/home/food1.png"
          name="Cheese Burger"
          location="Toffe's Cafe"
          price={3.88}
        />
      </div>
    </div>
  );
}
