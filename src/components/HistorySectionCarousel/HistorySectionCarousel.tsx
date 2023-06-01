import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import history_carousel_5 from '../../assets/images/gallery_1.png';
import history_carousel_6 from '../../assets/images/gallery_2.png';
import history_carousel_7 from '../../assets/images/gallery_3.png';
import history_carousel_8 from '../../assets/images/gallery_4.png';
import history_carousel_9 from '../../assets/images/gallery_5.png';
import history_carousel_10 from '../../assets/images/gallery_6.png';
import history_carousel_11 from '../../assets/images/gallery_7.png';
import history_carousel_12 from '../../assets/images/gallery_8.png';
import history_carousel_13 from '../../assets/images/gallery_9.png';
import history_carousel_14 from '../../assets/images/gallery_10.png';
import history_carousel_15 from '../../assets/images/gallery_11.png';
import history_carousel_16 from '../../assets/images/gallery_12.png';
import history_carousel_17 from '../../assets/images/gallery_13.png';
import history_carousel_18 from '../../assets/images/gallery_14.png';
import history_carousel_19 from '../../assets/images/gallery_15.png';
import history_carousel_20 from '../../assets/images/gallery_16.png';
import arrow from '../../assets/icons/right-arrow-black.png';

const HistorySectionCarousel = () => {
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
        {
            id: "5",
            name: "image_1",
            src: history_carousel_9
        },
        {
            id: "6",
            name: "image_2",
            src: history_carousel_10
        },
        {
            id: "7",
            name: "image_3",
            src: history_carousel_11
        },
        {
            id: "8",
            name: "image_4",
            src: history_carousel_12
        },
        {
            id: "9",
            name: "image_1",
            src: history_carousel_13
        },
        {
            id: "10",
            name: "image_2",
            src: history_carousel_14
        },
        {
            id: "11",
            name: "image_3",
            src: history_carousel_15
        },
        {
            id: "12",
            name: "image_1",
            src: history_carousel_16
        },
        {
            id: "13",
            name: "image_2",
            src: history_carousel_17
        },
        {
            id: "14",
            name: "image_3",
            src: history_carousel_18
        },
        {
            id: "15",
            name: "image_4",
            src: history_carousel_19
        },
        {
            id: "16",
            name: "image_1",
            src: history_carousel_20
        },
    ]

    const [clickedImage, setClickedImage] = useState({ src: '', id: '' });
    const [isImageOpen, setIsImageOpen] = useState(false)
    // console.log('clicked image:', clickedImage)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.document) {
            if (isImageOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto'
            }
        }

    }, [isImageOpen])

    const handleImageClick = (e: any) => {
        setClickedImage({ src: e.target.src, id: e.target.id });
        setIsImageOpen(true)
    }

    const handleClosingGallery = () => {
        setClickedImage({ src: '', id: '' })
        setIsImageOpen(false)
    }

    const handlePrevImage = () => {
        // console.log('length', Object.entries(carousel_images).length)
        let currentId = clickedImage.id;
        // console.log('currentId', currentId)
        let prevId

        Number(currentId) >= 2 ? prevId = Number(currentId) - 2 : prevId = Object.entries(carousel_images).length - 1;

        let prevImage = carousel_images[prevId];
        prevImage = carousel_images[prevId];
        setClickedImage({ src: prevImage.src, id: prevImage.id })
    }

    const handleNextImage = () => {
        // console.log('length', Object.entries(carousel_images).length)

        let currentId = clickedImage.id;
        let nextId = Number(currentId);
        let nextImage = carousel_images[nextId];

        Number(currentId) < Object.entries(carousel_images).length ?
            setClickedImage({ src: nextImage.src, id: nextImage.id })
            :
            nextId = 0;

        nextImage = carousel_images[nextId];
        setClickedImage({ src: nextImage.src, id: nextImage.id })
    }

    const images = carousel_images.map((item, index) => {
        return (
            <img id={item.id} alt={item.name} src={item.src} className='' onClick={handleImageClick} />
        )
    })

    return (
        <>
            <div className='container relative my-[123px] pb-[123px] historySection'>
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
                        dots={false}
                        dotsEach={1}
                        slideBy={3}
                        loop={true}
                        responsive=
                        {
                            {
                                '1': {
                                    items: 1
                                },
                                '1000': {
                                    items: 2
                                },
                                '1400': {
                                    items: 3
                                }
                            }
                        }
                    >
                        {images}
                    </OwlCarousel>
                </div>

                {clickedImage.src &&
                    createPortal(
                        <div className='fixed w-screen h-screen top-0 left-0 flex justify-center bg-black bg-opacity-80 z-50'>
                            {/* X */}
                            <img onClick={handleClosingGallery} className='absolute md:w-[2vw] w-[6vw] cursor-pointer md:top-[25%] top-[25%] sm:right-[2%] lg:right-[6%] right-[9%]  translate-x-[-20%] translate-y-[20%]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVR4nO3cUU4CMRRG4SaGZ1mGPrAEdBWyxPpSdkVi4iZ+M3GIRhMyA+29LfecBUD9MqFF2qZEREREREREREREREREnSVpK+kg6SV1lqTXeWzbNHKSdpJO+ilL2nQwrs08lnPTGHdpxCQ9S/rQ/46e2JIe/iCf+xwO+wKyK/YF5PGwFyC7YC9AHgd7BbIp9grk/rHn1cXviW9ppSX2PPFN77G2U5erkXmZdG2lBfYNyOfeUm9N6+Qb/qDq2BWQp/apx1Z+DjbDroScU69dMelUnyArjaHpvDE8tr7f+/3ukT2xFQ3ZA1tRkS2xFR3ZAlsgt8cWyO2fbIFs8kWiVHqNsT+TjZ7sW3L94SEK9jEMsiN2PGQH7LjIhtggG2CDbIANsgE2yJeq9I0PaCNksA2RwTZEBtsQGWzZIcfFlj1yPGz5IcfBFv/4H/KnrMyT3RA5NXzNoTPYbpDDYxtuoMlhsR22hOVw2I6bHHMY7A627ea7x+5hE7giYHsjhzhaMR9gd0eujN3dRQEcf7PqTg90PqYek/S08ohy4Yhye+zCofv2T3bhGon22IWLUSrHVT8+l1ftU58XBRy6XV0QERERERERERERERGlyH0BBM4Nm7KQeq0AAAAASUVORK5CYII=" alt='' />

                            <div className='flex justify-center align-middle z-[-1]'>
                                <img src={clickedImage?.src} id={clickedImage?.id} alt='' className='absolute md:w-[40vw] w-[80vw] findme top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />

                                <div className='relative'>
                                    <img id='' src={arrow} onClick={handlePrevImage} className='absolute cursor-pointer min-w-[50px] p-[15px] rounded-full bg-white top-[80vh] left-[4rem] mx-auto aaaooo' alt='' />
                                    <img src={arrow} onClick={handleNextImage} className='absolute cursor-pointer rotate-180 min-w-[50px] p-[15px] rounded-full bg-white top-[80vh] right-[4rem] mx-auto' alt='' />
                                </div>
                            </div>
                        </div>
                        , document.getElementById('root') as HTMLElement)
                }
            </div>
        </>
    )
}


export default HistorySectionCarousel