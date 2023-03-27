import PriceListCard from "../PriceListCard/PriceListCard"
import SectionBackground from "../SectionBackground/SectionBackground";

import prices_list_1 from '../../assets/images/prices_list_1.png';
import prices_list_2 from '../../assets/images/prices_list_2.png';
import prices_list_3 from '../../assets/images/prices_list_3.png';
import prices_list_4 from '../../assets/images/prices_list_4.png';
import prices_list_5 from '../../assets/images/prices_list_5.png';

const PricesListSection = () => {
    return (
        <SectionBackground backgroundDivClassNames='bg-[#F5F5F5] h-[970px] ' >
            <div className='container'>
                <h1 className="text-[#B2A285] text-[44px] leading-[54px] pt-[124px] font-gotu">Our Price List</h1>


                <div className="grid grid-cols-3 pb-[93px] "> {/* gap-x-[30px]  */}
                    <div className="">
                        <h2 className="text-[#423930] text-[24px] leading-[24px] pt-[30px] font-gotu">The Turkish Hammam</h2>
                        <PriceListCard imageClass={prices_list_1} />
                        <PriceListCard imageClass={prices_list_2} />
                        <PriceListCard imageClass={prices_list_3} />
                        <PriceListCard imageClass={prices_list_4} />
                        <PriceListCard imageClass={prices_list_5} />
                    </div>
                    <div className="mx-[30px]">
                        <h2 className="text-[#423930] text-[24px] leading-[24px] pt-[30px] font-gotu">The Turkish Hammam</h2>
                        <PriceListCard imageClass={prices_list_1} />
                        <PriceListCard imageClass={prices_list_2} />
                        <PriceListCard imageClass={prices_list_3} />
                        <PriceListCard imageClass={prices_list_4} />
                        <PriceListCard imageClass={prices_list_5} />
                    </div>
                    <div className="mx-[30px]">
                        <h2 className="text-[#423930] text-[24px] leading-[24px] pt-[30px] font-gotu">The Turkish Hammam</h2>
                        <PriceListCard imageClass={prices_list_1} />
                        <PriceListCard imageClass={prices_list_2} />
                        <PriceListCard imageClass={prices_list_3} />
                        <PriceListCard imageClass={prices_list_4} />
                        <PriceListCard imageClass={prices_list_5} />
                    </div>
                </div>
            </div>
        </SectionBackground>
    )
}

export default PricesListSection