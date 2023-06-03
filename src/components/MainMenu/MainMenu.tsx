// import { Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/20/solid'
import React, { FC, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavigationItemType } from '../../types/menus/menus'
import { NAVIGATION_MENU, NAVIGATION_MENU_MANAGEMENT_HOMEPAGE } from '../constants/navigation'
import { ReactComponent as Hamburgermenu} from "../../assets/icons/hamburgermenu.svg";
import { ReactComponent as CrossIcon } from '../../assets/icons/cross.svg'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'



interface MenuItem {
  item: NavigationItemType,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuItem: FC<MenuItem> = (props) => {
  const { item, setIsMenuOpen } = props

  const [isActive, setIsActive] = useState(false)
  let activeLang = localStorage.getItem('activeLang');

  const { href, id, name, targetBlank } = item

  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === `/`
 
  useEffect(() => {
   
    if(isHomepage && item.href === '/') {
      setIsActive(true)
      
    }else{
      setIsActive(location.pathname === `/${activeLang}${item.href}`)

    }

  }, [location])

  const handleNavigation = (item: NavigationItemType) => {
    // goToPage(item.href);

    navigate(`${item.href != '/' ? (activeLang + item.href) : item.href}`);
    setIsMenuOpen(false);
  };

  return (
    <li key={item.id} onClick={() => { handleNavigation(item) }} className={`font-medium lg:text-[30px] text-[20px] font-gotu md:text-[34px] md:tracking-tighter lg:leading-[74px] leading-[40px] cursor-pointer ${isActive ? '' : '!text-[#B3916E]'}`}>
      {name}
    </li>
  )
}


const MainMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const drawerRef = useRef<any>()
  const openButtonRef = useRef<any>()
  const location = useLocation();

  const handleClick = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  };

  const eventClickOutsideDrawer = (event: MouseEvent) => {
    // console.log('the clicked event: ', event.target)
    if (!drawerRef.current) return;

    // click inside
    if (drawerRef.current.contains(event.target as Node) || openButtonRef.current.contains(event.target)) {

      return;
    }

    // click outside
    setIsMenuOpen(false);
  };



  useEffect(() => {
    if (eventClickOutsideDrawer) {
      document.removeEventListener("click", eventClickOutsideDrawer);
    }
    document.addEventListener("click", eventClickOutsideDrawer);
    return () => {
      document.removeEventListener("click", eventClickOutsideDrawer);
    };
  }, []);

  useEffect(() => {
    // console.log('the isMenuOpen: ', isMenuOpen)
    if (typeof window != 'undefined' && window.document) {
      if (isMenuOpen) {

        // document.body.style.height = '100vh'
        // document.body.style.overflowY = 'hidden';
        // document.body.style.position = 'fixed';
        // document.body.style.width = '100vw'
        // document.body.style.top = `-${window.scrollY}px`;
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'relative'

      }
      if (!isMenuOpen) {
        // document.body.style.height = 'unset'
        // document.body.style.overflowY = 'unset';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = 'auto'
        document.body.style.overflow = 'auto'
      }
    }
  }, [isMenuOpen])

  const isPathLandingPage = window.location.pathname === '/' ? true : false;
  let activeLang = localStorage.getItem('activeLang');

  const isNovaCrystalHomepPage = location.pathname === `/${activeLang}/novatascrystal`
  const selectedMenuItems = isNovaCrystalHomepPage ? NAVIGATION_MENU : NAVIGATION_MENU_MANAGEMENT_HOMEPAGE

  return (
    <div className=''>
      <div className='' onClick={handleClick} ref={openButtonRef}>
        {/* {
          isMenuOpen 
          ?
          <span className='font-medium text-xl'>X</span>
          :  */}
        <div className='flex space-x-[20px] cursor-pointer'>
          <div className=''>
            <Hamburgermenu className={`${isPathLandingPage ? 'text-white': '#423930'}`} />
          </div>
          <div className={`font-gotu hidden md:inline-block font-medium text-[12px] ${isPathLandingPage ? 'text-white': '#423930'} leading-[14px] tracking-[0.02em] mt-[5px] cursor-pointer`}>
            Menu
          </div>

        </div>
        {/* }  */}
      </div>
      {
        createPortal(
          // <Transition
          //     show={isMenuOpen}
          //     enter="transition-[transform_,_opacity] duration-500"
          //     enterFrom="opacity-50 -translate-x-[100%]"
          //     enterTo="opacity-100 translate-x-0"
          //     leave="duration-500 transition-[transform_,_opacity]"
          //     leaveFrom="opacity-100 translate-x-0"
          //     leaveTo="opacity-0 -translate-x-[100%]"
          //     className={`absolute left-0 h-screen w-full min-w-[250px] z-[100] bg-[#FFF6E6] `}
          //     style={{top: `${window.pageYOffset + 88}px`}}
          //     ref={drawerRef}
          // >
          <div className={`main-menu fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-80 z-[1001] transition-all ${isMenuOpen ? 'opacity-100 translate-x-0' : ' opacity-50 -translate-x-[100%]'}`}>
            <div className='w-full max-w-[945px] h-full mobileMenuShadow bg-white' ref={drawerRef} >

              <div className='container md:ml-64 h-10 p-4 text-gray-600 py-14'>
                <div className='flex space-x-5 ' onClick={handleCloseMenu}>
                  <CrossIcon />
                  <span className='h-9 text-xs font-poppins font-medium inline-block mt-1'> CLOSE </span>

                </div>
              </div>
              <div className='lg:pt-8 pt-0 px-5 md:ml-64 '>
                <ul className='space-y-[10px] lg:space-y-[20px]'>
                  {
                    selectedMenuItems.map(menuItem => {
                      return (
                        <MenuItem item={menuItem} setIsMenuOpen={setIsMenuOpen} />
                      )
                    })
                  }

                </ul>
                <SocialMediaIcons wrapperClassNames='space-x-[60px] w-full pr-7 md:pr-0 md:w-min mt-[67px] mt-8 absolute  md:bottom-[52px]' />
              </div>


            </div>

          </div>
          // </Transition>
          , document.body

        )
      }

    </div>
  )
}

export default MainMenu