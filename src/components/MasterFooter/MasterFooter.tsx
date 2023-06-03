import React from 'react';
import { Logo } from '../../lib';
import novatasspaLogoLight from "../../assets/logo/novatasspaLogoLight.svg";
import { MenuItems } from '../MenuItems';
import { NAVIGATION_MENU, NAVIGATION_MENU_MANAGEMENT_HOMEPAGE } from '../constants';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import { useLocation, useNavigate } from 'react-router-dom';

const MasterFooter = () => {
  let activeLang = localStorage.getItem('activeLang');
  const location = useLocation();

  const isNovaCrystalHomepPage = location.pathname === `/${activeLang}/novatascrystal`
  const selectedMenuItems = isNovaCrystalHomepPage ? NAVIGATION_MENU : NAVIGATION_MENU_MANAGEMENT_HOMEPAGE

  const navigate = useNavigate();
  
  const handleLogoEvent = () => {
    navigate(`/${activeLang}/novatascrystal`);

    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <div className='flex md:h-[120px] bg-[#0D0D0D] z-10 relative'>
        <div className='container justify-between items-center'>

          <div onClick={() => handleLogoEvent()} className='flex justify-center md:justify-start pt-[52px] pb-[38px] md:py-[49px]'>
            <Logo img={novatasspaLogoLight} />
          </div>

          <div className='flex justify-center md:justify-end md:-mt-[63px] pb-[70px] md:pb-0'>

            <div className="items-center justify-center">
              <ul className={` grid grid-cols-2 gap-5 md:flex flex-row justify-between items-center md:space-x-2 relative`}>
                {
                  selectedMenuItems?.map((item: any) => (
                    <MenuItems key={item.id} menuItem={item} />
                  ))
                }
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className='w-full bg-[#0D0D0D] py-[76px]'>
        <div className='container flex flex-col md:flex-row justify-center md:justify-between md:items-center'>
          <p className='text-white inline-flex justify-center md:inline-block'>Kocatepe, Inside Nova Plaza Crystal Hotel Floor Minus 1, Recep Paşa Cd. No:7, 34437 Beyoğlu/İstanbul</p>
          <div className='w-full flex justify-center md:justify-end mt-4 md:mt-0'>
            <SocialMediaIcons iconClassNames='text-white' wrapperClassNames='space-x-[60px] w-min inline-block' />
          </div>
        </div>
      </div>
    </>
  )
};

export default MasterFooter;