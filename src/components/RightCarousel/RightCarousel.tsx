import React, { FC } from 'react';
import OwlCarousel from 'react-owl-carousel';
import history_carousel_5 from '../../assets/images/gallery_1.png';
import history_carousel_6 from '../../assets/images/gallery_2.png';
import history_carousel_7 from '../../assets/images/gallery_3.png';
import history_carousel_8 from '../../assets/images/gallery_4.png';
import landingPageLayer from '../../assets/images/landingPageLayer.png'
import { ReactComponent as OilIcon } from '../../assets/icons/OilIcon.svg'
import { ReactComponent as MassageIcon } from '../../assets/icons/body_massage.svg'
import ButtonPrimary from '../../lib/Button/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

interface classProps {
    imageClass?: string;
    logo?: any;
    bottomMargin?: string;
    title?: string;
    body?: string;
}

const RightCarousel: FC<classProps> = (props) => {

    const { imageClass, logo, bottomMargin, title, body } = props

    const carousel_images = [
        {
            id: "1",
            name: "image_1",
            src: history_carousel_5
        },
        {
            id: "2",
            name: "image_2",
            src: history_carousel_6
        },
        {
            id: "3",
            name: "image_3",
            src: history_carousel_7
        },
        {
            id: "4",
            name: "image_4",
            src: history_carousel_8
        },
    ]

    const navigate = useNavigate();
    const activeLang = localStorage.getItem('activeLang');

    const handleBookingClick = () => {
        navigate(`/${activeLang}/booking`);
    };

    const images = carousel_images.map((item, index) => {
        return (
            <img id={item.id} alt={item.name} src={item.src} className='h-[277px] lg:h-auto' />
        )
    })

    return (
        <div className={`overflow-hidden pb-8 ${bottomMargin}`}>
            <img className={`absolute ${imageClass}`} src={landingPageLayer} alt='' />
            <div className='grid lg:grid-cols-3 mt-[100px] lg:mt-[214px] overflow-hidden pb-8 rightCarousel'>
                <div className=' grid grid-col-3 mr-[-16rem]'>
                    <div className='col-start-3 col-span-2 w-[415px] pl-[50px]'>
                        <div className='rounded-full border mt-[50px] border-[#E3E3E3] w-[66px] h-[66px] flex justify-center items-center'>
                            {/* <OilIcon className='' /> */}
                            <img src={logo} alt='' />
                        </div>
                        <div className='text-[#423930] text-[35px] font-gotu leading-[24px] mt-[43px]'>
                            {title}
                        </div>
                        <p className='text-[#423930] font-poppins text-[18px] leading-[28px] mt-[40px]'>
                            {body}
                        </p>
                        <ButtonPrimary type="button" className='lg:w-[229px] w-[178px] lg:h-[60px] h-[47px] mt-[46px] box-border border-2 border-[#9FAF91]'>
                            <a onClick={handleBookingClick}><span className="font-gotu font-normal lg:text-[22px] text-[18px] text-[#9FAF91] leading-[28px] tracking-[0.02em] whitespace-nowrap">View Details</span></a>
                            <span className="text-[#fff] ml-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4301 18.819C14.3316 18.8194 14.2339 18.8001 14.1429 18.7623C14.0519 18.7245 13.9694 18.669 13.9001 18.599C13.7606 18.4579 13.6824 18.2674 13.6824 18.069C13.6824 17.8706 13.7606 17.6801 13.9001 17.539L19.4401 11.999L13.9001 6.45901C13.7703 6.31636 13.7005 6.12921 13.7051 5.93642C13.7097 5.74364 13.7884 5.56003 13.9248 5.42374C14.0612 5.28744 14.2449 5.20893 14.4377 5.20451C14.6305 5.20009 14.8175 5.27011 14.9601 5.40001L21.0301 11.47C21.1696 11.6111 21.2478 11.8016 21.2478 12C21.2478 12.1984 21.1696 12.3889 21.0301 12.53L14.9601 18.6C14.8907 18.6698 14.8081 18.7252 14.7171 18.7628C14.6261 18.8004 14.5285 18.8195 14.4301 18.819Z" fill="#fff" />
                                    <path d="M20.33 12.75H3.5C3.30149 12.7487 3.11149 12.6693 2.97112 12.5289C2.83075 12.3885 2.75131 12.1985 2.75 12C2.75131 11.8015 2.83075 11.6115 2.97112 11.4711C3.11149 11.3307 3.30149 11.2513 3.5 11.25H20.33C20.5285 11.2513 20.7185 11.3307 20.8589 11.4711C20.9993 11.6115 21.0787 11.8015 21.08 12C21.0787 12.1985 20.9993 12.3885 20.8589 12.5289C20.7185 12.6693 20.5285 12.7487 20.33 12.75Z" fill="#fff" />
                                </svg>
                            </span>
                        </ButtonPrimary>
                    </div>
                </div>
                <div className='relative col-span-2 lg:translate-x-[120px] translate-x-[50px] mt-[63px] lg:mt-0 ' >
                    <OwlCarousel
                        // navText={[`<img src=${arrow} class='rotate-180 w-[20px] mx-auto' />`, `<img src=${arrow} class='w-[20px] mx-auto' />`]}
                        // nav={true}
                        dotData={true}
                        mouseDrag={true}
                        touchDrag={true}
                        stagePadding={0}
                        margin={68}
                        autoplay={false}
                        merge={true}
                        dots={true}
                        dotsEach={1}
                        slideBy={3}
                        loop={true}
                        responsive=
                        {
                            {
                                '1': {
                                    items: 1.5,
                                    margin: 27,
                                    dots: true
                                },
                                '1000': {
                                    items: 2,
                                    margin: 27,
                                    dots:true
                                },
                                '1921': {
                                    items: 2,
                                    dots:true
                                }
                            }
                        }
                    >
                        {images}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default RightCarousel