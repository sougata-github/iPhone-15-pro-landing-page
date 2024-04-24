import { navLists } from "@/constants";

import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header
      id="navbar"
      className="w-full py-5 sm:px-10 px-5 flex justify-between items-center"
    >
      <nav className="flex w-full screen-max-width">
        <img
          src="/assets/images/apple.svg"
          alt="Apple"
          width={18}
          height={18}
          className="cursor-pointer"
        />
        <ul className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((navItem) => (
            <li
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={navItem}
            >
              {navItem}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-5 max-sm:justify-end max-sm:flex-1 cursor-pointer">
          <img
            src="/assets/images/search.svg"
            alt="search"
            width={18}
            height={18}
          />
          <img src="/assets/images/bag.svg" alt="bag" width={18} height={18} />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
