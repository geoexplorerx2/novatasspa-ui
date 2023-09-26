import PriceListCard from "../PriceListCard/PriceListCard"
import SectionBackground from "../SectionBackground/SectionBackground";

import prices_list_1 from '../../assets/images/prices_list_1.png';
import prices_list_2 from '../../assets/images/prices_list_2.png';
import prices_list_3 from '../../assets/images/prices_list_3.png';
import prices_list_4 from '../../assets/images/prices_list_4.png';
import prices_list_5 from '../../assets/images/prices_list_5.png';
import {
    TRANSLATIN_CRYSTAL_PACKAGE,
    TRANSLATING_LILIUM_PACKAGE,
    TRANSLATING_OUR_PRICE_LIST,
    TRANSLATING_TURKISH_HAMMAM,
    TRANSLATING_JASMINE_HAMMAM,
} from '../../data/services'
const PricesListSection = () => {

    const pricesData = [
        {
            id: 1,
            serviceType: TRANSLATING_TURKISH_HAMMAM,
            services: [
                {
                    hamamid: 1,
                    name: TRANSLATING_JASMINE_HAMMAM,
                    time: '25 min.',
                    price: '40',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: 'Tulip Hammam',
                    time: '40 min.',
                    price: '60',
                    image: prices_list_2
                },
                {
                    hamamid: 2,
                    name: 'Lotus Hammam',
                    time: '50 min.',
                    price: '75',
                    image: prices_list_3
                }
            ]
        },
        {
            id: 2,
            serviceType: 'Hammam & Massage Packages',
            services: [
                {
                    hamamid: 1,
                    name: TRANSLATING_LILIUM_PACKAGE,
                    time: '55 min.',
                    price: '60',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: TRANSLATIN_CRYSTAL_PACKAGE,
                    time: '80 min.',
                    price: '80',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: 'Tulip Package',
                    time: '100 min.',
                    price: '110',
                    image: prices_list_3
                },
                {
                    hamamid: 4,
                    name: 'Luxury Novatas Package',
                    time: '125 min.',
                    price: '140',
                    image: prices_list_4
                },
            ]
        },
        {
            id: 3,
            serviceType: 'Spa Classics',
            services: [
                {
                    hamamid: 1,
                    name: 'Reflexology',
                    time: '25 min.',
                    price: '30',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: 'Head & shoulders Massage',
                    time: '25 min.',
                    price: '30',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: 'Back Massage',
                    time: '30 min.',
                    price: '35',
                    image: prices_list_3
                },
                {
                    hamamid: 4,
                    name: 'Classic Massage',
                    time: '50 min.',
                    price: '50',
                    image: prices_list_4
                },
                {
                    hamamid: 5,
                    name: 'Anti-Stress Massage',
                    time: '50 min.',
                    price: '65',
                    image: prices_list_5
                },
                {
                    hamamid: 6,
                    name: 'Aromatherapy Massage',
                    time: '50 min.',
                    price: '65',
                    image: prices_list_1
                },
            ]
        },
        {
            id: 4,
            serviceType: 'Far East Massage',
            services: [
                {
                    hamamid: 1,
                    name: 'Hot Stone Massage',
                    time: '50 min.',
                    price: '70',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: 'Traditional Bali Massage',
                    time: '50 min.',
                    price: '70',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: 'Blend Thai Massage',
                    time: '50 min.',
                    price: '80',
                    image: prices_list_3
                },
            ]
        },
        {
            id: 5,
            serviceType: 'Therapeutic Massage',
            services: [
                {
                    hamamid: 1,
                    name: 'Medical Massage',
                    time: '40 min.',
                    price: '70',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: 'Deep Tissue Massage',
                    time: '50 min.',
                    price: '80',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: 'Regional Trilogy Massage',
                    time: '60 min.',
                    price: '80',
                    image: prices_list_3
                },
                {
                    hamamid: 4,
                    name: 'Novatas Signature Massage',
                    time: '60 min.',
                    price: '90',
                    image: prices_list_4
                },
            ]
        },
        {
            id: 6,
            serviceType: 'Peeling Treatment',
            services: [
                {
                    hamamid: 1,
                    name: 'Coconut Peeling',
                    time: '25 min.',
                    price: '30',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: 'Grape Seeds Peeling',
                    time: '25 min.',
                    price: '30',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: 'Olive Oil Peeling',
                    time: '25 min.',
                    price: '30',
                    image: prices_list_3
                },
                {
                    hamamid: 4,
                    name: 'Rose Peeling',
                    time: '25 min.',
                    price: '30',
                    image: prices_list_4
                },
            ]
        },
    ]

    return (
        <SectionBackground backgroundDivClassNames='bg-[#F5F5F5] h-[970px]'>
            <div className='container overflow-hidden'>
                <h1 className="text-[#B2A285] text-[44px] leading-[54px] lg:pt-[60px] font-gotu mx-8 lg:mt-0 md:mt-[190px] mt-[170px]">{TRANSLATING_OUR_PRICE_LIST}</h1>

                <div className="md:grid xl:grid-cols-3 lg:grid-cols-2 flex flex-col pb-[93px] gap-[30px]">
                    {
                        pricesData.map(type => {
                            const { id, serviceType, services } = type

                            return (
                                <div>
                                    <h2 className="text-[#423930] lg:text-[24px] leading-[24px] pt-[30px] font-gotu mx-8" key={id}>{serviceType}</h2>
                                    {services.map(service => {
                                        return (
                                            <PriceListCard service={service} />
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </SectionBackground>
    )
}

export default PricesListSection