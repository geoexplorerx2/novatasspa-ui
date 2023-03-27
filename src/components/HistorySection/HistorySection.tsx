import vid_thumbnail from '../../assets/images/vid_thumbnail.png';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import arrow from '../../assets/icons/right-arrow-white.png';
import HistorySectionCarousel from '../HistorySectionCarousel/HistorySectionCarousel';
import LetterTape from '../LetterTape/LetterTape';

const HistorySection = () => {
    return (
        <>
            <LetterTape />
            <div className='bg-[#B2A285] pt-[142px]'>
                <div className='grid grid-cols-2 container'>
                    <div className='block'>
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
            </div>
        </>

    )
}

export default HistorySection