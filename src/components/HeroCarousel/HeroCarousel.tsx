import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img_1 from '../../assets/images/image_1.png';
import img_2 from '../../assets/images/image_2.png';
import img_3 from '../../assets/images/image_3.png';
import {ReactComponent as Leaf} from '../../assets/icons/leaf.svg';
import arrow from '../../assets/icons/right-arrow.png';

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
                        <img src={img_3} alt='' className='absolute top-[545px] left-[365px] !w-[463px] z-[3]' />
                    </div>

                    <div className='ml-[99px] z-[2]'>
                        <div className='inline-flex'>
                            <Leaf  className='text-[#B2A285]'/>
                            <Leaf  className='rotate-[175deg] ml-[15.6px] text-[#B2A285]'/>
                        </div>

                        <h1 className='font-normal text-[#B2A285] text-[64px] leading-[74px] font-gotu'>{header}</h1>
                        <p className='text-[#423930] text-[18px] mt-[30px] font-poppins'>{body}</p>
                        <button className='border-2 border-[#423930] mt-[30px]'>
                            <div className='py-[16px] px-[31px] text-[#423930] text-[22px]'>
                                <span className='font-gotu'>Learn More </span>
                                <img src={arrow} alt='' className='!inline !h-[25px] ml-[26.75px]' />
                            </div>
                        </button>
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
                autoplay={false}
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