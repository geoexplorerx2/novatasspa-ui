import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img_1 from '../../assets/images/image_1.png';
import img_2 from '../../assets/images/image_2.png';
import img_3 from '../../assets/images/image_3.png';
import { ReactComponent as Leaf } from '../../assets/icons/leaf.svg';
import arrow from '../../assets/icons/right-arrow.png';
import ButtonPrimary from '../../lib/Button/ButtonPrimary';

const HeroCarousel = () => {

    const carouselContent = [
        {
            id: 1,
            header: 'Beauty and Success Start Here',
            body: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
            image: { img_2 }
        },
        {
            id: 2,
            header: 'Beauty and Success Start Here',
            body: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
            image: { img_2 }
        },
        {
            id: 3,
            header: 'Beauty and Success Start Here',
            body: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
            image: { img_2 }
        },
    ]

    const theContent = carouselContent.map(item => {

        // img src is not assignable to type string ?
        const { id, header, body, image } = item;

        return (
            <div key={id} className='item'>
                <div className='flex flex-row justify-center items-center relative'>

                    <img src={img_1} alt='' className='absolute top-[60px] right-0 max-w-[1320px] z-[2]' />
                    <div className='relative'>
                        <img src={img_2} alt='' className='max-w-[622px] z-[-2] mt-[22px]' />
                        <img src={img_3} alt='' className='absolute top-[545px] left-[365px] !w-[463px]' />
                    </div>

                    <div className='ml-[99px] z-[2]'>
                        <div className='inline-flex'>
                            <Leaf className='text-[#B2A285]' />
                            <Leaf className='rotate-[175deg] ml-[15.6px] text-[#B2A285]' />
                        </div>

                        <h1 className='font-normal text-[#B2A285] text-[64px] leading-[74px] font-gotu'>{header}</h1>
                        <p className='text-[#423930] text-[18px] mt-[30px] font-poppins'>{body}</p>

                        <a href='/booking'>
                            <ButtonPrimary type="button" className='w-[229px] h-[60px] box-border border-2 border-[#423930] mt-[30px]'>
                                <span className="font-gotu font-normal text-[22px] text-[#423930] leading-[28px] tracking-[0.02em]">Book Now</span>
                                <span className="text-[#423930] ml-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4301 18.819C14.3316 18.8194 14.2339 18.8001 14.1429 18.7623C14.0519 18.7245 13.9694 18.669 13.9001 18.599C13.7606 18.4579 13.6824 18.2674 13.6824 18.069C13.6824 17.8706 13.7606 17.6801 13.9001 17.539L19.4401 11.999L13.9001 6.45901C13.7703 6.31636 13.7005 6.12921 13.7051 5.93642C13.7097 5.74364 13.7884 5.56003 13.9248 5.42374C14.0612 5.28744 14.2449 5.20893 14.4377 5.20451C14.6305 5.20009 14.8175 5.27011 14.9601 5.40001L21.0301 11.47C21.1696 11.6111 21.2478 11.8016 21.2478 12C21.2478 12.1984 21.1696 12.3889 21.0301 12.53L14.9601 18.6C14.8907 18.6698 14.8081 18.7252 14.7171 18.7628C14.6261 18.8004 14.5285 18.8195 14.4301 18.819Z" fill="#423930" />
                                        <path d="M20.33 12.75H3.5C3.30149 12.7487 3.11149 12.6693 2.97112 12.5289C2.83075 12.3885 2.75131 12.1985 2.75 12C2.75131 11.8015 2.83075 11.6115 2.97112 11.4711C3.11149 11.3307 3.30149 11.2513 3.5 11.25H20.33C20.5285 11.2513 20.7185 11.3307 20.8589 11.4711C20.9993 11.6115 21.0787 11.8015 21.08 12C21.0787 12.1985 20.9993 12.3885 20.8589 12.5289C20.7185 12.6693 20.5285 12.7487 20.33 12.75Z" fill="#423930" />
                                    </svg>
                                </span>
                            </ButtonPrimary>
                        </a>

                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='container relative'>
            <OwlCarousel className='owl-theme'
                // nav
                margin={15}
                mouseDrag={false}
                touchDrag={true}
                stagePadding={15}
                autoplay={true}
                merge={true}
                dots={true}
                slideBy={1}
                dotsEach={1}
                loop={true}
                responsive={
                    {
                        '1': {
                            items: 1
                        },
                        '1025': {
                            items: 1
                        }
                    }

                }>

                {theContent}
            </OwlCarousel>
        </div>
    )
}

export default HeroCarousel;