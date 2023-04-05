import React, { FC, ReactNode } from 'react';

interface ButtonWithIconProps {
  icon: any,
  handleClick: any,
  className?: string,
  data?: any
  bgColor?: string
};

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  icon,
  bgColor='bg-[#FFFFFF]',
  className = "",
  data,
  handleClick
 }) => {

  const handleClickEvent = () => {
    handleClick && handleClick();
  };

  return (
    <button
      onClick={(e: any) => handleClickEvent()}
      className={`relative group overflow-hidden space-x-2 py-1 px-3 h-[44px] w-[121px] flex items-center rounded-[25px] ${bgColor}`}>
        <img src = {icon} />
        <span className='font-poppins font-medium inline-block text-[16px] text-[#0D2C3B] leading-[24px]'>
          { data?.name }
        </span>
    </button>
  )
}

export default ButtonWithIcon;