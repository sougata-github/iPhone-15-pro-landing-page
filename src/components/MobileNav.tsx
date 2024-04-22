import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import { navLists } from "@/constants";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="block sm:hidden">
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-black border-none">
        <SheetHeader></SheetHeader>
        <ul className="flex flex-col pt-8 gap-8">
          {navLists.map((navItem) => (
            <li
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={navItem}
            >
              {navItem}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
