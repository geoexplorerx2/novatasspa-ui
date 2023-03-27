import { FC } from 'react';
import ArrowRight from '../../assets/icons/right-arrow-black.png'

interface PriceListCard_Props {
    imageClass?: any
}


const PriceListCard: FC<PriceListCard_Props> = (props) => {
    const { imageClass } = props
    return (

        <div className='flex items-center cursor-pointer priceListCard mt-[30px]'>

            <img src={imageClass} alt='' className="" />
            
            <div className='ml-[30px] w-[300px]'>
                <h5 className='text-[24px] leading-[24px] whitespace-nowrap'>Pasha Hammam</h5>
                <p className='text-[#666B45] text-[16px] font-semibold mt-[5px] font-poppins'>30 min.</p>
            </div>

            <div className='flex flex-col justify-end'> {/* ml-[93px] */}
                <h1 className='text-[#423930] text-[34px] font-semibold pl-[54px] font-poppins'>$38</h1>
                <button className='text-[16px] text-[#423930] bookButton inline-flex'>
                    Book Now 
                    <img src={ArrowRight} alt='' className='w-[16px] ml-[13px] translate-y-[5px]' />
                </button>
            </div>
        </div>
    )
}

export default PriceListCard