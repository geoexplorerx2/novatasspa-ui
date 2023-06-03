import React, { useState } from 'react';
import { Logo } from '../../lib';
import { ReactComponent as NovatasspaLogo } from "../../assets/logo/novatasspaLogo.svg";
import hamburgermenu from "../../assets/icons/hamburgermenu.svg";
import languageIcon from "../../assets/icons/languageIcon.svg";
import world from '../../assets/icons/languageIcon.svg';
import MainMenu from '../MainMenu/MainMenu';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import { Languages } from '../constants/Languages';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const MasterHeader = () => {

    const [activeLang, setActiveLang] = useState<any>(Languages[0].name);
    const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate(`/${activeLang}/booking`);
    };

    const origin = window.location.origin;
    const currentpage_uri = window.location.pathname.split('/');
    const pageuri = currentpage_uri.length > 2 && currentpage_uri.slice(2).join('/');

    const isPathLandingPage = window.location.pathname === '/' ? true : false;
    let _activeLang = localStorage.getItem('activeLang');

    const handleLan = (lang: any) => {
        setActiveLang(lang);
        localStorage.setItem('activeLang', lang?.id);

        if (pageuri) {
            let dynamicUrl = lang?.id + '/' + pageuri;
            navigate(dynamicUrl);
        };
    };

    const handleLogo = () => {
        navigate(`/${_activeLang}/novatascrystal`);
    };

    return (
        <div className='relative z-10'>
            <div className="h-[123px] container py-5 px-5 md:px-0 grid grid-cols-3 justify-items-center content-center overflow-hidden z-[9999999]">
                <div className="flex justify-start justify-self-start">
                    {/* <div className='flex space-x-[20px] cursor-pointer'>
                    <div className=''>
                       <img src={hamburgermenu} />
                    </div>
                    <div className='font-poppins font-medium text-[12px] text-[#423930] leading-[14px] tracking-[0.02em] mt-[5px] cursor-pointer'>
                        Menu
                    </div>
                    
                </div> */}
                    <MainMenu />
                </div>

                <div 
                  className="flex justify-center cursor-pointer" 
                  onClick={() => handleLogo()}
                >
                    <NovatasspaLogo 
                      className={`${isPathLandingPage ? 'text-white' : '#423930'}`} 
                    />
                </div>

                {/* <div className="flex justify-end space-x-[20px] cursor-pointer">
                <div className='font-poppins font-medium text-[12px] text-[#423930] leading-[14px] tracking-[0.02em] mt-[5px] cursor-pointer'>
                    English   
                </div>
                <div className=''>
                    <img src={languageIcon} />
                </div>
            </div> */}
            <div className='hidden md:flex justify-end flex-row justify-self-end'>
                <Link to={`/${activeLang}/booking`}>
                    <button className={`${isPathLandingPage ? 'block' : 'hidden'} mr-[38px] py-2 px-3 text-[14px] leading-[28px] text-white border-[1px] border-white`}>
                        Request Appoinment
                    </button>
                </Link>
                <LanguagePicker
                    // bgColor="bg-[#FFFFFF]"
                    openDropdownMenu={openDropdownMenu}
                    setOpenDropdownMenu={setOpenDropdownMenu}
                    icon={world}
                    classAsProp='pt-3'
                    activeLang={activeLang}
                    handleLan={handleLan}
                />
            </div>
            </div>
            <div className='h-[1px] bg-[#666B45] opacity-10'></div>
        </div>
    )
};

export default MasterHeader;