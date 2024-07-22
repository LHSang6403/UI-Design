import { OrangeButton } from "../ReuseableMaterials/OrangeButton";
import { Button } from "../ui/button";

export default function RecommendBar() {
    return (
        <div className="">
            <div className="grid grid-cols-6 gap-6 lg:grid-cols-3 pb-3">
                <OrangeButton className="px-9">Near me</OrangeButton>
                <OrangeButton className="px-9">Flash sale</OrangeButton>
                <OrangeButton className="px-9">Delicious Food</OrangeButton>
                <OrangeButton className="px-9">Sale off 3$</OrangeButton>
                <OrangeButton className="px-9">Price 2$</OrangeButton>
                <OrangeButton className="px-9">Price 2$</OrangeButton>
            </div>
        </div>
    );
}
