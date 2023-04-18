import { FC } from 'react';
import ArrowRight from '../../assets/icons/right-arrow-black.png'

interface PriceListCard_Props {
    service?: any,
}


const PriceListCard: FC<PriceListCard_Props> = (props) => {
    const { service } = props
    return (

        <a href="/booking"><div className='flex items-center cursor-pointer priceListCard mt-[30px]' key={service.hamamid}>

            <img src={service.image} alt='' className="" />
            
            <div className='ml-[30px] w-[300px]'>
                <h5 className='md:text-[24px] leading-[24px] text-[20px] '>{service.name}</h5>
                <p className='text-[#666B45] md:text-[16px] text-[15px] font-semibold mt-[5px] font-poppins'>{service.time}</p>
            </div>

            <div className='flex flex-col justify-end '>
                <h1 className='text-[#423930] text-[34px] font-semibold pl-[54px] font-poppins relative'>
                    <span className='md:text-[34px] text-[24px]'>{service.price}</span>
                    <span className='absolute top-0 md:text-[34px] text-[18px]'>€</span>
                </h1>
                <button className='text-[13px] font-medium text-[#423930] bookButton inline-flex w-[200px]'>
                    Book Now 
                    <img src={ArrowRight} alt='' className='w-[16px] ml-[13px] translate-y-[1px]' />
                </button>
            </div>
        </div></a>
    )
}

export default PriceListCard