import { OrangeButton } from "../ReuseableMaterials/OrangeButton";
import { Button } from "../ui/button";

export default function RecommendBar() {
  return (
    <div className="grid w-full grid-cols-6 gap-6 px-48 lg:grid-cols-3">
      <OrangeButton className="h-8 px-9">Near me</OrangeButton>
      <OrangeButton className="h-8 px-9">Flash sale</OrangeButton>
      <OrangeButton className="h-8 px-9">Delicious Food</OrangeButton>
      <OrangeButton className="h-8 px-9">Sale off 3$</OrangeButton>
      <OrangeButton className="h-8 px-9">Price 2$</OrangeButton>
      <OrangeButton className="h-8 px-9">Price 2$</OrangeButton>
    </div>
  );
}
