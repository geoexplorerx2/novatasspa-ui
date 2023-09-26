import { FC } from 'react';
import ArrowRight from '../../assets/icons/right-arrow-black.png'
import { useNavigate } from 'react-router-dom';
import { TRANSLATING__BOOK__NOW } from '../../data/services';
interface PriceListCard_Props {
    service?: any,
}


const PriceListCard: FC<PriceListCard_Props> = (props) => {
    const { service } = props;
    const navigate = useNavigate();
    let activeLang = localStorage.getItem('activeLang');

    const handleBookingClick = () => {
        navigate(`/${activeLang}/booking`);
    };

    return (

        <a 
        //   href={`${activeLang}/booking`} 
          onClick={handleBookingClick}
        >
            <div className='flex items-center cursor-pointer priceListCard mt-[30px] mx-8' key={service.hamamid}>

            <img src={service.image} alt='' className="" />
            
            <div className='ml-[30px] w-[300px]'>
                <h5 className='lg:text-[20px] leading-[24px] sm:w-[150px] w-[80px] hry text-[12px]'>{service.name}</h5>
                <p className='text-[#666B45] lg:text-[16px] s:text-[12px] text-[10px] font-semibold mt-[5px] font-poppins'>{service.time}</p>
            </div>

            <div className='flex flex-col justify-end ml-[30px]'>
                <h1 className='text-[#423930] text-[34px] font-semibold font-poppins relative xl:justify-start md:justify-center'>
                    <span className='lg:text-[26px] sm:text-[20px] text-[14px] '>€ {service.price}</span>
                    {/* <span className='absolute top-0 lg:text-[24px] sm:text-[18px] text-[12px]'>€</span> */}
                </h1>
                <button className='sm:text-[13px] text-[10px] font-medium text-[#423930] bookButton inline-flex w-[200px] xl:justify-start md:justify-center'>
                    {TRANSLATING__BOOK__NOW} 
                    <img src={ArrowRight} alt='' className='w-[16px] ml-[13px] translate-y-[1px]' />
                </button>
            </div>
        </div></a>
    )
}

export default PriceListCard