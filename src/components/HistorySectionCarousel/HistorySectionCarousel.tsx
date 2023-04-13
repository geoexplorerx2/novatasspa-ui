import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import history_carousel_1 from '../../assets/images/history_carousel_1.png';
import history_carousel_2 from '../../assets/images/history_carousel_2.png';
import history_carousel_3 from '../../assets/images/history_carousel_3.png';
import history_carousel_4 from '../../assets/images/history_carousel_4.png';
import arrow from '../../assets/icons/right-arrow-black.png';

const HistorySectionCarousel = () => {
    const carousel_images = [
        {
            id: "1",
            name: "image_1",
            src: history_carousel_1
        },
        {
            id: "2",
            name: "image_2",
            src: history_carousel_2
        },
        {
            id: "3",
            name: "image_3",
            src: history_carousel_3
        },
        {
            id: "4",
            name: "image_4",
            src: history_carousel_4
        },
    ]

    const [clickedImage, setClickedImage] = useState('');

    const handleImageClick = (e: any) => {
        setClickedImage(e.target.src);
    }

    const handleClosingGallery = () => {
        setClickedImage('')
    }

    const images = carousel_images.map((item, index) => {
        return (
            <img src={item.src} alt={item.name} className='zzz' onClick={handleImageClick} />
        )
    })

    return (
        <>
            <div className='container relative mt-[123px] pb-[123px]'>
                <div className='relative' >
                    <OwlCarousel
                        navText=
                        {[`<img src=${arrow} class='rotate-180 w-[20px] mx-auto' />`, `<img src=${arrow} class='w-[20px] mx-auto' />`]}
                        nav={true}
                        mouseDrag={true}
                        touchDrag={true}
                        stagePadding={0}
                        margin={30}
                        autoplay={true}
                        merge={true}
                        dots={true}
                        dotsEach={1}
                        slideBy={1}
                        loop={true}
                        responsive=
                        {
                            {
                                '1': {
                                    items: 1
                                },
                                '1025': {
                                    items: 3
                                },
                                '1919': {
                                    items: 3
                                }
                            }

                        }
                    >
                        {images}
                    </OwlCarousel>
                </div>

                {clickedImage &&
                    createPortal(
                        <div className='fixed w-screen h-screen top-0 left-0 flex justify-center bg-black bg-opacity-80 z-50'>
                            <img src={clickedImage} alt='' className='fixed w-full max-w-[850px] top-[20%] findme' />
                            <img onClick={handleClosingGallery} className='absolute w-[60px] top-[9rem] right-[4rem] cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVR4nO3cUU4CMRRG4SaGZ1mGPrAEdBWyxPpSdkVi4iZ+M3GIRhMyA+29LfecBUD9MqFF2qZEREREREREREREREREnSVpK+kg6SV1lqTXeWzbNHKSdpJO+ilL2nQwrs08lnPTGHdpxCQ9S/rQ/46e2JIe/iCf+xwO+wKyK/YF5PGwFyC7YC9AHgd7BbIp9grk/rHn1cXviW9ppSX2PPFN77G2U5erkXmZdG2lBfYNyOfeUm9N6+Qb/qDq2BWQp/apx1Z+DjbDroScU69dMelUnyArjaHpvDE8tr7f+/3ukT2xFQ3ZA1tRkS2xFR3ZAlsgt8cWyO2fbIFs8kWiVHqNsT+TjZ7sW3L94SEK9jEMsiN2PGQH7LjIhtggG2CDbIANsgE2yJeq9I0PaCNksA2RwTZEBtsQGWzZIcfFlj1yPGz5IcfBFv/4H/KnrMyT3RA5NXzNoTPYbpDDYxtuoMlhsR22hOVw2I6bHHMY7A627ea7x+5hE7giYHsjhzhaMR9gd0eujN3dRQEcf7PqTg90PqYek/S08ohy4Yhye+zCofv2T3bhGon22IWLUSrHVT8+l1ftU58XBRy6XV0QERERERERERERERGlyH0BBM4Nm7KQeq0AAAAASUVORK5CYII=" alt=''/>
                        </div>
                        , document.getElementById('root') as HTMLElement)
                }
            </div>
        </>
    )
}


export default HistorySectionCarousel