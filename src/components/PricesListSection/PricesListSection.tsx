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
    TRANSLATING_MINUTE,
    TRANSLATING_TULIP_HAMMAM,
    TRANSLATION_SPA_CLASSICS,
    TRANSLATING_REFLEXOLOGY,
    TRANSLATING_HEAD_AND_SHOLDERS_MESSAGE,
    TRANSLATING_BACK_MESSAGE,
    TRANSLATING_CLASSICS_MASSAGE,
    TRANSLATING_ANTI_STRESS_MASSAGE,
    TRANSLATING_AROM,
    TRANSLATING_FAR_EAST_MASSAGE,
    TRANSLATING_HOS_STONE_MASSAGE,
    TRANSLATING_LOTUS_HAMMAM,
    TRANSLATING_HAMMAM_AND_MASSAGE_PACKEGE,
    TRANSLATING_TRADITIONAL_BALI_MASSAGE,
    TRANSLATEING_BLEND_THAI_MASSAGE,
    TRANSLATING_THERAPEUTIC_MESSAGE,
    TRANSLATING_MEDICAL_MASSAGE,
    TRANSLATING_DEEP_TISSUE_MASSAGE,
    TRANSLATING_REGIONAL_TRILOGY_MASSAGE,
    TRANSLATEING_NOVATAS_SIGNATURE_MASSAGE,
    TRANSLATING_PEELING_TREATMENT,
    TRANSLATING_COCONUT_PEELING,
    TRANSLATING_GRAPE_SEEDS_PEELING,
    TRANSLATING_OLIVE_OIL_PEELING,
    TRANSLATIONG_ROSE_PEELING,
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
                    time: `25 ${TRANSLATING_MINUTE}`,
                    price: '40',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: TRANSLATING_TULIP_HAMMAM,
                    time: `40 ${TRANSLATING_MINUTE}`,
                    price: '60',
                    image: prices_list_2
                },
                {
                    hamamid: 2,
                    name: TRANSLATING_LOTUS_HAMMAM,
                    time: `50 ${TRANSLATING_MINUTE}`,
                    price: '75',
                    image: prices_list_3
                }
            ]
        },
        {
            id: 2,
            serviceType: TRANSLATING_HAMMAM_AND_MASSAGE_PACKEGE,
            services: [
                {
                    hamamid: 1,
                    name: TRANSLATING_LILIUM_PACKAGE,
                    time: `55 ${TRANSLATING_MINUTE}`,
                    price: '60',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: TRANSLATIN_CRYSTAL_PACKAGE,
                    time: `80 ${TRANSLATING_MINUTE}`,
                    price: '80',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: 'Tulip Package',
                    time: `100 ${TRANSLATING_MINUTE}`,
                    price: '110',
                    image: prices_list_3
                },
                {
                    hamamid: 4,
                    name: 'Luxury Novatas Package',
                    time: `125 ${TRANSLATING_MINUTE}`,
                    price: '140',
                    image: prices_list_4
                },
            ]
        },
        {
            id: 3,
            serviceType: TRANSLATION_SPA_CLASSICS,
            services: [
                {
                    hamamid: 1,
                    name: TRANSLATING_REFLEXOLOGY,
                    time: `25 ${TRANSLATING_MINUTE}`,
                    price: '30',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: TRANSLATING_HEAD_AND_SHOLDERS_MESSAGE,
                    time: `25 ${TRANSLATING_MINUTE}`,
                    price: '30',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: TRANSLATING_BACK_MESSAGE,
                    time: `30 ${TRANSLATING_MINUTE}`,
                    price: '35',
                    image: prices_list_3
                },
                {
                    hamamid: 4,
                    name: TRANSLATING_CLASSICS_MASSAGE,
                    time: `50 ${TRANSLATING_MINUTE}`,
                    price: '50',
                    image: prices_list_4
                },
                {
                    hamamid: 5,
                    name: TRANSLATING_ANTI_STRESS_MASSAGE,
                    time: `50 ${TRANSLATING_MINUTE}`,
                    price: '65',
                    image: prices_list_5
                },
                {
                    hamamid: 6,
                    name: TRANSLATING_AROM,
                    time: `50 ${TRANSLATING_MINUTE}`,
                    price: '65',
                    image: prices_list_1
                },
            ]
        },
        {
            id: 4,
            serviceType: TRANSLATING_FAR_EAST_MASSAGE,
            services: [
                {
                    hamamid: 1,
                    name: TRANSLATING_HOS_STONE_MASSAGE,
                    time: `50 ${TRANSLATING_MINUTE}`,
                    price: '70',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: TRANSLATING_TRADITIONAL_BALI_MASSAGE,
                    time: `50 ${TRANSLATING_MINUTE}`,
                    price: '70',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: TRANSLATEING_BLEND_THAI_MASSAGE,
                    time: `50 ${TRANSLATING_MINUTE}`,
                    price: '80',
                    image: prices_list_3
                },
            ]
        },
        {
            id: 5,
            serviceType: TRANSLATING_THERAPEUTIC_MESSAGE,
            services: [
                {
                    hamamid: 1,
                    name: TRANSLATING_MEDICAL_MASSAGE,
                    time: `40 ${TRANSLATING_MINUTE}`,
                    price: '70',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: TRANSLATING_DEEP_TISSUE_MASSAGE,
                    time: `50 ${TRANSLATING_MINUTE}`,
                    price: '80',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: TRANSLATING_REGIONAL_TRILOGY_MASSAGE,
                    time: `60 ${TRANSLATING_MINUTE}`,
                    price: '80',
                    image: prices_list_3
                },
                {
                    hamamid: 4,
                    name: TRANSLATEING_NOVATAS_SIGNATURE_MASSAGE,
                    time: `60 ${TRANSLATING_MINUTE}`,
                    price: '90',
                    image: prices_list_4
                },
            ]
        },
        {
            id: 6,
            serviceType: TRANSLATING_PEELING_TREATMENT,
            services: [
                {
                    hamamid: 1,
                    name: TRANSLATING_COCONUT_PEELING,
                    time: `25 ${TRANSLATING_MINUTE}`,
                    price: '30',
                    image: prices_list_1
                },
                {
                    hamamid: 2,
                    name: TRANSLATING_GRAPE_SEEDS_PEELING,
                    time: `25 ${TRANSLATING_MINUTE}`,
                    price: '30',
                    image: prices_list_2
                },
                {
                    hamamid: 3,
                    name: TRANSLATING_OLIVE_OIL_PEELING,
                    time: `25 ${TRANSLATING_MINUTE}`,
                    price: '30',
                    image: prices_list_3
                },
                {
                    hamamid: 4,
                    name: TRANSLATIONG_ROSE_PEELING,
                    time: `25 ${TRANSLATING_MINUTE}`,
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