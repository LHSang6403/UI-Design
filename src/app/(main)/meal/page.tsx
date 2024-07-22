import RecommendBar from "@/components/MealPageComponent/RecommendBar";
import SearchBar from "@/components/Search/SearchBar";
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
        </main>
        </>
    );
}