import React from 'react';
import { Logo } from '../../lib';
import novatasspaLogoLight from "../../assets/logo/novatasspaLogoLight.svg";
import { MenuItems } from '../MenuItems';
import { NAVIGATION_MENU } from '../constants';

const MasterFooter = () => {
  return (
    <div className='flex md:h-[120px] bg-[#0D0D0D] z-10 relative'>
        <div className='container justify-between items-center'>

            <div className='flex justify-center md:justify-start pt-[52px] pb-[38px] md:py-[49px]' onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})}>
              <Logo img={ novatasspaLogoLight }  />
            </div>

            <div className='flex justify-center md:justify-end md:-mt-[63px] pb-[70px] md:pb-0'>

                <div className="items-center justify-center">
                  <ul className={` grid grid-cols-2 gap-5 md:flex flex-row justify-between items-center md:space-x-2 relative`}>
                    {
                      NAVIGATION_MENU?.map((item: any) => (
                        <MenuItems key={item.id} menuItem={item} />
                      ))
                    }
                  </ul>
                </div>

            </div>
        </div>
    </div>
  )
};

export default MasterFooter;