import React, { FC, ReactNode } from 'react';
import {ReactComponent as World} from '../../assets/icons/languageIcon.svg';

interface ButtonWithIconProps {
  icon: any,
  handleClick: any,
  className?: string,
  data?: any
  bgColor?: string,
  textClassNames?: string
};

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  icon,
  bgColor='bg-[#FFFFFF]',
  className = "",
  data,
  handleClick,
  textClassNames,
 }) => {

  const handleClickEvent = () => {
    handleClick && handleClick();
  };

  const isPathLandingPage = window.location.pathname === '/' ? true : false;

  return (
    <button
      onClick={(e: any) => handleClickEvent()}
      className={`relative group overflow-hidden space-x-2 py-1 px-3 h-[44px] w-[121px] flex items-center rounded-[25px] ${isPathLandingPage ? '': 'bg-white'} ${bgColor}`}>
        {/* <img src = {icon} /> */}
        <World className={`${isPathLandingPage ? 'text-white': 'text-[#423930]'}`} />
        <span className={`${textClassNames} ${isPathLandingPage ? 'text-white': 'text-[#423930]'} font-poppins font-medium inline-block text-[16px] text-[#0D2C3B] leading-[24px]`}>
          { data?.name }
        </span>
    </button>
  )
}

export default ButtonWithIcon;