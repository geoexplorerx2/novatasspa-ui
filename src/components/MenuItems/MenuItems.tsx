import React, { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavigationItemType } from "../../types/menus/menus";

interface MenuItemsProps {
  menuItem: NavigationItemType;
  textClassNames?: string;
};

const MenuItems: FC<MenuItemsProps> = ({
  menuItem,
  textClassNames,
}) => {

  const urlNavigate = useNavigate();
  let activeLang = localStorage.getItem('activeLang');

  const handleNavLink = (item: NavigationItemType) => {
    urlNavigate(`${item.href != '/' ? activeLang+'/'+item.href : item.href}`);
  };

  const RenderItem = (item: NavigationItemType) => {
    return (
      <div className="flex items-center justify-center md:jusitfy-start" onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})}>
        <NavLink
          // exact
          // strict
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={`inline-flex items-center xl:text-xs whitespace-nowrap px-[.1vw]`}
          to={`${item.href != '/' ? activeLang + item.href : item.href}`}
          onClick={(e: any) => { handleNavLink(item) }}
        >
          <span className={`font-poppins font-normal lg:text-[20px] text-[15px] text-[#FFFFFF] md:px-4 leading-[14px] tracking-[0.02em] text-center md:text-left`}>
            {item.name}
          </span>
        </NavLink>
      </div>
    );
  };

  return <li className="menu-item nav-item relative">{RenderItem(menuItem)}</li>;
};

export default MenuItems;