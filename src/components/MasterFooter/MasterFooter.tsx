import React from 'react';
import { Logo } from '../../lib';
import novatasspaLogoLight from "../../assets/logo/novatasspaLogoLight.svg";
import { MenuItems } from '../MenuItems';
import { NAVIGATION_MENU } from '../constants';

const MasterFooter = () => {
  return (
    <div className='flex h-[120px] bg-[#0D0D0D] z-10 relative'>
        <div className='container justify-between items-center'>

            <div className='flex justify-start py-[49px]'>
              <Logo img={ novatasspaLogoLight }  />
            </div>

            <div className='flex justify-end -mt-[63px]'>

                <div className="items-center">
                  <ul className={`flex flex-row justify-between items-center space-x-2 relative`}>
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