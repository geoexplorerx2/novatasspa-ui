import React from 'react'
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

    const images = carousel_images.map((item, index) => {
        return (
            <img src={item.src} alt={item.name} className='' />
        )
    })

    return (
        <>
        <div className='container relative mt-[123px] pb-[123px]'>
            <div className='relative ' >
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
        </div>
        </>
    )
}


export default HistorySectionCarousel