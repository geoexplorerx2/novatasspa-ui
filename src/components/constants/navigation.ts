import randomId from "../../common/randomId";
import { NavigationItemType } from "../../types/menus/menus";

export const NAVIGATION_MENU: NavigationItemType[] = [
  {
    id: randomId(),
    href: "/",
    name: "Home",
  },
  {
    id: randomId(),
    href: "/about",
    name: "About",
  },
  {
    id: randomId(),
    href: "/services",
    name: "Services",
  },
  {
    id: randomId(),
    href: "/contact",
    name: "Contact",
  }
];
