import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const FilterByYear = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-2 h-12 border-black px-8 py-1 rounded-lg">
        Year
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col gap-2">
          {" "}
          <Link href="/" className="pl-2">
            All
          </Link>
          <Link href="/year/2016" className="pl-2">
            2016
          </Link>
          <Link href="/year/2017" className="pl-2">
            2017
          </Link>
          <Link href="/year/2018" className="pl-2">
            2018
          </Link>
          <Link href="/year/2019" className="pl-2">
            2019
          </Link>
          <Link href="/year/2020" className="pl-2">
            2020
          </Link>
          <Link href="/year/2021" className="pl-2">
            2021
          </Link>
          <Link href="/year/2022" className="pl-2">
            2022
          </Link>
          <Link href="/year/2023" className="pl-2">
            2023
          </Link>
          <Link href="/year/2024" className="pl-2">
            2024
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterByYear;
