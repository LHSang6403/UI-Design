import PrimaryLogo from "@components/PrimaryLogo";
import Dropdown from "@components/Layout/Header/Dropdown";
import NavBar from "@components/Layout/Header/NavBar";
import ThemeButton from "@components/Theme/ThemeButton";
import SearchBar from "@components/Search/SearchBar";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <div className="flex h-16 w-full flex-row justify-around gap-3 px-10 xl:justify-between sm:px-4">
            <div className="mr-4 flex items-center">
                <PrimaryLogo />
            </div>
            <nav className="flex w-full max-w-[1300px] flex-row items-center justify-around gap-6 xl:hidden">
                <div className="w-full"></div>
                <NavBar />
                <div className="w-full">
                    <SearchBar />
                </div>
            </nav>
            <div className="flex items-center gap-2">
                <Button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                    >
                        <path
                            d="M6 18C6 19.1 5.1 20 4 20C2.9 20 2.01 19.1 2.01 18C2.01 16.9 2.9 16 4 16C5.1 16 6 16.9 6 18ZM14 16C12.9 16 12.01 16.9 12.01 18C12.01 19.1 12.9 20 14 20C15.1 20 16 19.1 16 18C16 16.9 15.1 16 14 16ZM14.396 11C14.851 10.9999 15.2923 10.8447 15.6472 10.56C16.0021 10.2753 16.2493 9.87813 16.348 9.434L18 3H4V2C4 1.46957 3.78929 0.960859 3.41421 0.585786C3.03914 0.210714 2.53043 0 2 0H0V2H2V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H16C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H4V11H14.396Z"
                            fill="#FFA101"
                        />
                    </svg>
                </Button>
                <ThemeButton />
                <Dropdown />
            </div>
        </div>
    );
}
