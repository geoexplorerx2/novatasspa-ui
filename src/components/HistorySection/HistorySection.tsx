import vid_thumbnail from '../../assets/images/vid_thumbnail.png';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import arrow from '../../assets/icons/right-arrow-white.png';
import HistorySectionCarousel from '../HistorySectionCarousel/HistorySectionCarousel';
import LetterTape from '../LetterTape/LetterTape';
import SectionBackground from '../SectionBackground/SectionBackground';
import ButtonPrimary from '../../lib/Button/ButtonPrimary';
import { ReactComponent as Leaf } from '../../assets/icons/leaf.svg';
import { useNavigate } from 'react-router-dom';

const HistorySection = () => {
    const navigate = useNavigate();
    const activeLang = localStorage.getItem('activeLang');

    const handleBookingClick = () => {
        navigate(`/${activeLang}/booking`);
    };

    return (
        <SectionBackground wrapperClassNames='lg:h-[1050px] h-[950px] mt-[162px] mb-[252px]' backgroundDivClassNames='bg-[#B2A285]' >
            <LetterTape wrapperClassName='absolute flex justify-center items-center opacity-10 overflow-hidden top-[-62px] z-[-1]' />

            <div className='flex flex-col-reverse justify-center items-center  container'>

                <div className='block min-[393px]:translate-y-[-62px] max-w:[80vw] lg:max-w-full mt-[42px] xl:mt-0'>
                    <VideoPlayer />
                </div>

                <div className='min-[393px]:ml-[151px] lg:mt-[142px] mt-[64px] px-4 mx-auto'>
                    <div className='flex space-x-4 min-[393px]:display-hidden'>
                        <Leaf className='text-white' />
                        <Leaf className='text-white rotate-[175deg]' />
                    </div>
                    <h1 className='xl:text-[64px] text-[30px] xl:leading-[74px] leading-[30px] text-white font-gotu pt-[23px] xl:pt-0'>Harmonize Your Body and Soul</h1>
                    <p className='mt-[30px] text-[18px] max-[393px]:text-[15px] leading-[28px] text-white font-poppins'>Whenever you need a place to relax between your hectic schedule or to indulge in some real pampering, don't forget to reserve your spot at the Novatas Spa!</p>

                    <ButtonPrimary onClick={handleBookingClick} type="button" className='w-[229px] h-[60px] max-[393px]:w-[178px] max-[393px]:h-[47px] mt-[30px] box-border border-2 border-[#fff]'>
                        <a ><span className="font-gotu font-normal text-[22px] text-[#fff] max-[393px]:leading-[28px] tracking-[0.02em] max-[393px]:text-[16px] ">Book Now</span></a>
                        <span className="text-[#fff] ml-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4301 18.819C14.3316 18.8194 14.2339 18.8001 14.1429 18.7623C14.0519 18.7245 13.9694 18.669 13.9001 18.599C13.7606 18.4579 13.6824 18.2674 13.6824 18.069C13.6824 17.8706 13.7606 17.6801 13.9001 17.539L19.4401 11.999L13.9001 6.45901C13.7703 6.31636 13.7005 6.12921 13.7051 5.93642C13.7097 5.74364 13.7884 5.56003 13.9248 5.42374C14.0612 5.28744 14.2449 5.20893 14.4377 5.20451C14.6305 5.20009 14.8175 5.27011 14.9601 5.40001L21.0301 11.47C21.1696 11.6111 21.2478 11.8016 21.2478 12C21.2478 12.1984 21.1696 12.3889 21.0301 12.53L14.9601 18.6C14.8907 18.6698 14.8081 18.7252 14.7171 18.7628C14.6261 18.8004 14.5285 18.8195 14.4301 18.819Z" fill="#fff" />
                                <path d="M20.33 12.75H3.5C3.30149 12.7487 3.11149 12.6693 2.97112 12.5289C2.83075 12.3885 2.75131 12.1985 2.75 12C2.75131 11.8015 2.83075 11.6115 2.97112 11.4711C3.11149 11.3307 3.30149 11.2513 3.5 11.25H20.33C20.5285 11.2513 20.7185 11.3307 20.8589 11.4711C20.9993 11.6115 21.0787 11.8015 21.08 12C21.0787 12.1985 20.9993 12.3885 20.8589 12.5289C20.7185 12.6693 20.5285 12.7487 20.33 12.75Z" fill="#fff" />
                            </svg>
                        </span>
                    </ButtonPrimary>
                </div>

            </div>

            <HistorySectionCarousel />
        </SectionBackground>

    )
}

export default HistorySection