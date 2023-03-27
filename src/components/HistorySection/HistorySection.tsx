import vid_thumbnail from '../../assets/images/vid_thumbnail.png';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import arrow from '../../assets/icons/right-arrow-white.png';
import HistorySectionCarousel from '../HistorySectionCarousel/HistorySectionCarousel';
import LetterTape from '../LetterTape/LetterTape';
import SectionBackground from '../SectionBackground/SectionBackground';

const HistorySection = () => {
    return (
        <SectionBackground wrapperClassNames='h-[1050px] mt-[162px] mb-[252px]' backgroundDivClassNames='bg-[#B2A285]' >
            <LetterTape wrapperClassName='absolute flex opacity-10 overflow-hidden top-[-62px] z-[-1]' />
                <div className='grid grid-cols-2 container'>
                    <div className='block trasnlate-y-[-62px]'>
                        <VideoPlayer />
                    </div>
                    <div className='ml-[151px] mt-[142px]'>
                        <h1 className='text-[64px] leading-[74px] text-white'>Beauty and Success Start Here</h1>
                        <p className='mt-[30px] text-[18px] leading-[28px] text-white'>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                        <button className='border-2 border-white mt-[30px]'>
                            <div className='py-[16px] px-[31px] text-white text-[22px]'>
                                <span>Learn More </span>
                                <img src={arrow} alt='' className='!inline !h-[25px] ml-[26.75px]' />
                            </div>
                        </button>
                    </div>
                </div>

                <HistorySectionCarousel />
        </SectionBackground>

    )
}

export default HistorySection