import { Transition } from '@headlessui/react';
import { Popover } from '@headlessui/react';
import React, { FC, Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import Button from '../../lib/Button/Button';
import ButtonWithIcon from '../../lib/Button/ButtonWithIcon';
import languageIcon from "../../assets/icons/languageIcon.svg";
import { Languages } from '../constants/Languages';
import { pathname } from '../../data/pathname';
import { routename } from '../../data/pathname';
import { Link } from 'react-router-dom';
interface LanguagePickerProps {
    bgColor?: string;
    openDropdownMenu: any,
    setOpenDropdownMenu: any,
    icon: ReactNode;
    classAsProp?: string,
    activeLang?: string,
    handleLan?: any,
};

const LanguagePicker: FC<LanguagePickerProps> = ({ bgColor, openDropdownMenu, setOpenDropdownMenu, icon, classAsProp, activeLang, handleLan }) => {
    // const [activeLang, setActiveLang] = useState<any>(Languages[0]);

    const containerRef = useRef<HTMLDivElement>(null);

    const eventClickOutsideDiv = (event: MouseEvent) => {
        if (!containerRef.current) return;

        // click inside
        if (!openDropdownMenu || containerRef.current.contains(event.target as Node)) {
            return;
        }

        // click outside
        setOpenDropdownMenu(false);
    };

    useEffect(() => {
        if (eventClickOutsideDiv) {
            document.removeEventListener("click", eventClickOutsideDiv);
        }
        openDropdownMenu && document.addEventListener("click", eventClickOutsideDiv);
        return () => {
            document.removeEventListener("click", eventClickOutsideDiv);
        };
    }, [openDropdownMenu]);



    return (

        <Popover
            as="div"
            className={`menu-item menu-dropdown`}
            ref={containerRef}
        >
            {({ open, close }: any) => (
                <>
                    <Popover.Button
                        as={'div'}
                        className="focus-visible focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    // ref={popoverButtonRef}
                    >
                        <ButtonWithIcon
                            icon={languageIcon}
                            data={activeLang}
                            className="" // inline-block
                            bgColor={`${bgColor} !w-auto md:!w-[121px]`}
                            // handleClick={(opened: boolean) => setOpenDropdownMenu(!openDropdownMenu)}
                            handleClick={() => { }}
                            textClassNames="hidden md:inline-block"
                        />
                        {/* <div className=''>
                            <img src={languageIcon} alt='' />
                        </div> */}
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        appear
                        enter="transition ease-out duration-150"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 "
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 "
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            static
                            className={`sub-menu will-change-transform transform w-[260px] right-7 absolute ${classAsProp}`}
                        >
                            {({ close }) => (
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm bg-white dark:bg-neutral-900 py-2 grid grid-cols-2 gap-2">

                                    {
                                        Languages?.map((lang: any) => (
                                            <div className="flex justify-arround mx-2 ">
                                                <Button
                                                    rounded=""
                                                    className={`${activeLang == lang.id ? 'bg-[#3944b3] text-[white] ' : 'bg-[#fff] text-[#000]'} rounded-[8px] hover:border-[#423930]  border-2 border-[rgba(57, 68, 179, 20%)]  flex justify-arround w-[106px] h-[50px] dark:text-white`}
                                                    onClick={() => {
                                                        handleLan(lang)
                                                        close()
                                                        if (routename.length == 4) {
                                                            <Link to={`/`}></Link>
                                                            console.log('routename is :', `${routename[0]}/${routename[1]}/${routename[2]}/${routename[3]}`)
                                                        } else {
                                                            <Link to={`/${lang.id}/${routename[4]}`}></Link>
                                                            console.log('routename is :', `${routename[0]}/${routename[1]}/${routename[2]}/${lang.id}/${routename[4]}`)
                                                            // window.location.href = `${routename[0]}/${routename[1]}/${routename[2]}/${lang.id}/${routename[4]}`
                                                        }


                                                    }}
                                                >
                                                    {lang.name}
                                                </Button>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
};

export default LanguagePicker