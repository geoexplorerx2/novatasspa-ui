import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img_1 from '../../assets/images/image_1.png';
import img_2 from '../../assets/images/image_2.png';
import img_3 from '../../assets/images/image_3.png';
import { ReactComponent as Leaf } from '../../assets/icons/leaf.svg';
import arrow from '../../assets/icons/right-arrow-white.png';
import ButtonPrimary from '../../lib/Button/ButtonPrimary';
import { useNavigate } from 'react-router-dom';
import {
    TRANSLATING__BOOK__NOW,
    TRANSLATEING__HEADER_NOVATASSPA,
    TRANSLATING__BODY__NOVATASSPA,
} from '../../data/services';
const HeroCarousel = () => {
    const navigate = useNavigate();
    const carouselContent = [
        {
            id: 1,
            header:  TRANSLATEING__HEADER_NOVATASSPA ,
            body: TRANSLATING__BODY__NOVATASSPA,
            image: { img_2 }
        },
        // {
        //     id: 2,
        //     header: 'It’s Time to Find Yourself Again',
        //     body: 'Take a break from your busy life & come relax at Novatas Crystal Spa! Book your session & relieve your stress today!',
        //     image: { img_2 }
        // },
        // {
        //     id: 3,
        //     header: 'It’s Time to Find Yourself Again',
        //     body: 'Take a break from your busy life & come relax at Novatas Crystal Spa! Book your session & relieve your stress today!',
        //     image: { img_2 }
        // },
    ]

    const theContent = carouselContent.map(item => {
        const activeLang = localStorage.getItem('activeLang');
        const { id, header, body, image } = item;

        const handleBookingClick = () => {
            navigate(`/${activeLang}/booking`);
        };

        return (
            <div key={id} className='item '>
                <div className='flex flex-col-reverse md:flex-row justify-center md:items-center items-start relative'>

                    <img src={img_1} alt='' className='absolute max-w-[316px] top-[24rem] lg:top-[60px] md:top-[10px] lg:right-0 right-[-8px] mx-[10%] lg:max-w-[1320px] md:max-w-[1020px] z-[2]' />

                    <div className='relative max-[393px]:translate-y-[-100px]'>
                        <img src={img_2} alt='' className='lg:max-w-[622px] md:max-w-[350px] max-w-[225px] z-[-2] mt-[22px] mx-[10%]' />
                        <img src={img_3} alt='' className='absolute lg:top-[545px] lg:left-[365px] lg:w-[463px] w-[50px] bottom-[17px] mx-[10%]' />
                    </div>

                    <div className='sm:ml-[99px] z-[2] pt-[25px] lg:pt-0 text-center lg:text-left'>
                        <div className='inline-flex max-[393px]:text-center lg:mt-0 mt-[25px]'>
                            <Leaf className='text-[#B2A285] ' />
                            <Leaf className='rotate-[175deg] ml-[15.6px] text-[#B2A285]' />
                        </div>

                        <h1 className='font-normal text-[#B2A285] lg:text-[64px] lg:leading-[74px] font-gotu mt-[25px] lg:mt-0 text-[30px] leading-[40px]'>{header}</h1>
                        <p className='text-[#423930] lg:text-[18px] mt-[30px] font-poppins text-[15px]'>{body}</p>

                        <a onClick={handleBookingClick}>
                            <ButtonPrimary type="button" className='lg:w-[229px] lg:h-[60px] w-[178px] h-[46px] box-border border-2 border-[#423930] bg-[turquoise] mt-[30px] opacity-80'>
                                <span className="font-gotu lg:text-[22px] leading-[28px] tracking-[0.02em] text-[16px] text-[#423930] font-bold">{TRANSLATING__BOOK__NOW}</span>
                                <span className="text-[#423930] ml-2">
                                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4301 18.819C14.3316 18.8194 14.2339 18.8001 14.1429 18.7623C14.0519 18.7245 13.9694 18.669 13.9001 18.599C13.7606 18.4579 13.6824 18.2674 13.6824 18.069C13.6824 17.8706 13.7606 17.6801 13.9001 17.539L19.4401 11.999L13.9001 6.45901C13.7703 6.31636 13.7005 6.12921 13.7051 5.93642C13.7097 5.74364 13.7884 5.56003 13.9248 5.42374C14.0612 5.28744 14.2449 5.20893 14.4377 5.20451C14.6305 5.20009 14.8175 5.27011 14.9601 5.40001L21.0301 11.47C21.1696 11.6111 21.2478 11.8016 21.2478 12C21.2478 12.1984 21.1696 12.3889 21.0301 12.53L14.9601 18.6C14.8907 18.6698 14.8081 18.7252 14.7171 18.7628C14.6261 18.8004 14.5285 18.8195 14.4301 18.819Z" fill="#423930" />
                                        <path d="M20.33 12.75H3.5C3.30149 12.7487 3.11149 12.6693 2.97112 12.5289C2.83075 12.3885 2.75131 12.1985 2.75 12C2.75131 11.8015 2.83075 11.6115 2.97112 11.4711C3.11149 11.3307 3.30149 11.2513 3.5 11.25H20.33C20.5285 11.2513 20.7185 11.3307 20.8589 11.4711C20.9993 11.6115 21.0787 11.8015 21.08 12C21.0787 12.1985 20.9993 12.3885 20.8589 12.5289C20.7185 12.6693 20.5285 12.7487 20.33 12.75Z" fill="#423930" />
                                    </svg> */}
                                    <img className='w-6 ml-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuElEQVR4nO3XsQrCQAwG4MQXyo3JmLyYk+Ii2sUu6juKqKNyHQpWBHG5Bv4PsnXIf4HLlQgAAAAAmnKTVWi5hkq3JFpQNm5yCSvPobSc0oVwK9sxQNIQHCaHSYgzQjTAmMRMMCaRbhJhsg6Vx9vHcy2V7jNpXeWtG7Pfqm7uL++RHBNwKztKgt2kz/rMYDTfCOPkG2GcfCuusp8sqmOWq3IQJve0zVeuZeMmt/pvnK55AAAAAKC/vQDyP3CQhpJqeQAAAABJRU5ErkJggg=="></img>
                                </span>
                            </ButtonPrimary>
                        </a>

                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='container relative overflow-hidden'>
            {/* <OwlCarousel className='owl-theme'
                // nav
                margin={15}
                mouseDrag={false}
                touchDrag={false}
                stagePadding={15}
                autoplay={true}
                merge={true}
                dots={false}
                slideBy={0}
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

                }> */}

            {theContent}
            {/* </OwlCarousel> */}
        </div>
    )
}

export default HeroCarousel;