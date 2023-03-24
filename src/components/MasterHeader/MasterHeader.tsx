import React from 'react';
import { Logo } from '../../lib';
import novatasspaLogo from "../../assets/logo/novatasspaLogo.svg";
import hamburgermenu from "../../assets/icons/hamburgermenu.svg";
import languageIcon from "../../assets/icons/languageIcon.svg";

const MasterHeader = () => {
  return (
    <div className='sticky top-0 z-1000'>
        <div className="h-[123px] container py-5 relative flex justify-between items-center overflow-hidden">
            <div className="flex justify-start">
                <div className='flex space-x-[20px] cursor-pointer'>
                    <div className=''>
                       <img src={hamburgermenu} />
                    </div>
                    <div className='font-poppins font-medium text-[12px] text-[#423930] leading-[14px] tracking-[0.02em] mt-[5px] cursor-pointer'>
                        Menu
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
               <Logo img={ novatasspaLogo }  />
            </div>

            <div className="flex justify-end space-x-[20px] cursor-pointer">
                <div className='font-poppins font-medium text-[12px] text-[#423930] leading-[14px] tracking-[0.02em] mt-[5px] cursor-pointer'>
                    English   
                </div>
                <div className=''>
                    <img src={languageIcon} />
                </div>
            </div>
        </div>
        <div className='h-[1px] bg-[#666B45] opacity-10'></div>
    </div>
  )
};

export default MasterHeader;