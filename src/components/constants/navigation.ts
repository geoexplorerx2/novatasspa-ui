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
    name: "Treatments",
  },
  {
    id: randomId(),
    href: "/contact",
    name: "Contact",
  }
];



export const NAVIGATION_MENU_MANAGEMENT_HOMEPAGE: NavigationItemType[] = [
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
    href: "/novatascrystal",
    name: "Novatas Crystal",
  },
  {
    id: randomId(),
    href: "/services",
    name: "Treatments",
  },
  {
    id: randomId(),
    href: "/contact",
    name: "Contact",
  }
];


