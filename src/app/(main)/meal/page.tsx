import RecommendBar from "@/components/MealPageComponent/RecommendBar";
import SearchBar from "@/components/Search/SearchBar";
import FoodSlider from "@/components/Sliders/FoodSlider/FoodSlider";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Meal() {
    return (
        <>
        <main className="flex min-h-screen-w-full flex-col items-center gap-4 justify-start">
            <div className="my-5 w-3/4">
                <SearchBar></SearchBar>
            </div>
            <RecommendBar></RecommendBar>
            <div className="grid w-3/4">
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
            <FoodSlider carousel={true} title="Delicious food near you" Foods={FoodData}></FoodSlider>
            <FoodSlider carousel={false} title="Foods at 227 Nguyen Van Cu, District 5, Ho Chi Minh City" Foods={FoodData}></FoodSlider>
        </main>
        </>
    );
}
const FoodData: Food[] = [
    {
        id: '1',
        name: 'Cheese Burger',
        image: '/assets/home/food1.png',
        location: 'Toffe\'s Cafe',
        price: 3.88
    },
    {
        id: '2',
        name: 'Cheese Burger',
        image: '/assets/home/food1.png',
        location: 'Toffe\'s Cafe',
        price: 3.88
    },
    {
        id: '3',
        name: 'Cheese Burger',
        image: '/assets/home/food1.png',
        location: 'Toffe\'s Cafe',
        price: 3.88
    },
    {
        id: '4',
        name: 'Cheese Burger',
        image: '/assets/home/food1.png',
        location: 'Toffe\'s Cafe',
        price: 3.88
    },
    {
        id: '5',
        name: 'Cheese Burger',
        image: '/assets/home/food1.png',
        location: 'Toffe\'s Cafe',
        price: 3.88
    },
    {
        id: '6',
        name: 'Cheese Burger',
        image: '/assets/home/food1.png',
        location: 'Toffe\'s Cafe',
        price: 3.88
    },    
    {
        id: '7',
        name: 'Cheese Burger',
        image: '/assets/home/food1.png',
        location: 'Toffe\'s Cafe',
        price: 3.88
    }
]