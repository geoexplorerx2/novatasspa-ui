import React from 'react'
import { ReactComponent as Leaf } from '../../assets/icons/leaf.svg';
import message_1 from '../../assets/images/message_1.png';
import message_2 from '../../assets/images/message_2.png';
import message_3 from '../../assets/images/message_3.png';
import message_4 from '../../assets/images/message_4.png';
import message_5 from '../../assets/images/message_5.png';
import message_6 from '../../assets/images/message_6.png';
import message_7 from '../../assets/images/message_7.png';
import message_8 from '../../assets/images/message_8.png';
import ArrowRight from '../../assets/icons/right-arrow-black.png'
import { 
    TRANSLATING__BOOK__NOW , 
    TRANSLATING_MINUTE , 
    TRANSLATION_SPA_CLASSICS , 
    TRANSLATING_REFLEXOLOGY ,
    TRANSLATING_HEAD_AND_SHOLDERS_MESSAGE,
    TRANSLATING_BACK_MESSAGE,
    TRANSLATING_CLASSICS_MASSAGE,
    TRANSLATING_AROM,
    TRANSLATING_FAR_EAST_MASSAGE,
    TRANSLATING_HOS_STONE_MASSAGE,
    TRANSLATING_TRADITIONAL_BALI_MASSAGE,
    TRANSLATEING_BLEND_THAI_MASSAGE,

} from '../../data/services';
const MassageTypesSection = () => {
    const activeLang = localStorage.getItem('activeLang')

    const massageTypesContent = [
        {
            title: TRANSLATING_AROM,
            price: 'Start from 38',
            image: message_1
        },
        {
            title: TRANSLATING_AROM,
            price: 'Start from 38',
            image: message_2
        },
        {
            title: TRANSLATING_AROM,
            price: 'Start from 38',
            image: message_3
        },
        {
            title: TRANSLATING_AROM,
            price: 'Start from 38',
            image: message_4
        },
        {
            title: TRANSLATING_AROM,
            price: 'Start from 38',
            image: message_5
        },
        {
            title: TRANSLATING_AROM,
            price: 'Start from 38',
            image: message_6
        },
        {
            title: TRANSLATING_AROM,
            price: 'Start from 38',
            image: message_7
        },
        {
            title: TRANSLATING_AROM,
            price: 'Start from 38',
            image: message_8
        },
    ]

    const messageTypesContent_2 = [
        {
            title: TRANSLATING_FAR_EAST_MASSAGE,
            sectionId: 1,
            content: [
                {
                    name: TRANSLATING_HOS_STONE_MASSAGE,
                    price: 'per person 80',
                    duration: `50 ${TRANSLATING_MINUTE}`,
                    image: message_1,
                    messageId: 1
                },
                {
                    name: TRANSLATING_TRADITIONAL_BALI_MASSAGE,
                    price: 'per person 80',
                    duration: `50 ${TRANSLATING_MINUTE}`,
                    image: message_2,
                    messageId: 2
                },
                {
                    name: 'Thai Massage',
                    price: 'per person 90',
                    duration: `50 ${TRANSLATING_MINUTE}`,
                    image: message_3,
                    messageId: 3
                },
                {
                    name: TRANSLATEING_BLEND_THAI_MASSAGE,
                    price: 'per person 90',
                    duration: `50 ${TRANSLATING_MINUTE}`,
                    image: message_4,
                    messageId: 4
                }
            ]

        },
        {
            title: TRANSLATION_SPA_CLASSICS,
            sectionId: 2,
            content: [
                {
                    name: TRANSLATING_REFLEXOLOGY,
                    price: 'per person 40',
                    duration: `30 ${TRANSLATING_MINUTE}`,
                    image: message_1,
                    messageId: 1
                },
                {
                    name: TRANSLATING_HEAD_AND_SHOLDERS_MESSAGE,
                    price: 'per person 40',
                    duration: `30 ${TRANSLATING_MINUTE}`,
                    image: message_2,
                    messageId: 2
                },
                {
                    name: TRANSLATING_BACK_MESSAGE,
                    price: 'per person 50',
                    duration: `40 ${TRANSLATING_MINUTE}`,
                    image: message_3,
                    messageId: 3
                },
                {
                    name: TRANSLATING_CLASSICS_MASSAGE,
                    price: 'per person 65',
                    duration: `50 ${TRANSLATING_MINUTE}`,
                    image: message_4,
                    messageId: 4
                },
                // {
                //     name: 'Anti Stress Massage',
                //     price: 'per person 75',
                //     duration: '50 minutes',
                //     image: message_5,
                //     messageId: 5
                // },
                // {
                //     name: 'Aromatherapy Massage',
                //     price: 'per person 75',
                //     duration: '50 minutes',
                //     image: message_6,
                //     messageId: 6
                // }
            ]
        },
        // {
        //     title: 'THERAPEUTIC MASSAGE',
        //     sectionId: 3,
        //     content: [
        //         {
        //             name: 'Medical Massage',
        //             price: 'per person 80',
        //             duration: '50 minutes',
        //             image: message_1,
        //             messageId: 1
        //         },
        //         {
        //             name: 'Deep Tissue Massage',
        //             price: 'per person 90',
        //             duration: '50 minutes',
        //             image: message_2,
        //             messageId: 2
        //         },
        //         {
        //             name: 'Regional Trilogy Massage',
        //             price: 'per person 90',
        //             duration: '60 minutes',
        //             image: message_3,
        //             messageId: 3
        //         },
        //         {
        //             name: 'Catma Signature Massage',
        //             price: 'per person 90',
        //             duration: '60 minutes',
        //             image: message_4,
        //             messageId: 4
        //         }
        //     ]
        // },
    ]

    return (
        <div className='container pt-[100px] px-6 md:px-0'>
            <div className='md:ml-[99px] z-[2] text-center'>
                <div className='inline-flex'>
                    <Leaf className='text-[#B2A285]' />
                    <Leaf className='rotate-[175deg] ml-[15.6px] text-[#B2A285]' />
                </div>

                <h1 className='text-3xl font-normal text-[#B2A285] md:text-[64px] leading-[74px] font-gotu'>Beauty and Success Start Here</h1>
                <p className='text-[#423930] text-base md:text-[18px] mt-[30px] mx-auto font-poppins'>From its medieval origins to the digital era, learn everything there <br></br> is to know about the ubiquitous lorem ipsum passage.</p>
            </div>


            {messageTypesContent_2.map(section => {
                const { title, sectionId, content } = section;

                return (
                    <>
                        {/* <h1 className='text-[#B2A285] text-[44px] font-gotu mt-[100px]'>{title}</h1> */}
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[100px] mt-[50px] mb-[67px]'>

                            {content.map((messageType, index) => {
                                const { name, price, duration, image, messageId } = messageType;

                                return (
                                    <>
                                        {index % 2 === 0 ? (
                                            <a href={activeLang + "/booking"}><div>
                                                <h6 className='text-[#423930] text-[24px] leading-[24px] font-gotu'>{name}</h6>
                                                <div className=' flex justify-between flex-col md:flex-row'>
                                                    <span className='text-[#666B45] font-semibold text-[16px] leading-[20px] mt-[10px] font-poppins relative'>
                                                        {price}
                                                        <span className='top-[-3px] text-[11px] absolute'>€</span>
                                                    </span>
                                                    <button className='text-[16px] text-[#423930] bookButton inline-flex leading-[20px] mt-[10px] font-poppins '>
                                                        {TRANSLATING__BOOK__NOW}
                                                        <img src={ArrowRight} alt='' className='w-[16px] ml-[13px] translate-y-[2px]' />
                                                    </button>
                                                </div>
                                                <img src={image} alt='' className='mt-[14px]' />
                                            </div></a>
                                        ) : (
                                            <a href={activeLang + "/booking"}><div>
                                                <img src={image} alt='' className='mt-0' />
                                                <h6 className='text-[#423930] text-[24px] leading-[24px] mt-[14px] font-gotu'>{name}</h6>
                                                <div className=' flex justify-between flex-col md:flex-row items-between md:items-start'>
                                                    <div className='text-[#666B45] font-semibold text-[16px] leading-[20px] mt-[10px] font-poppins relative'>
                                                        <span>
                                                            {price}
                                                        </span>
                                                        <span className='top-[-3px] text-[11px] absolute'>€</span>
                                                    </div>
                                                    <a href="/booking">
                                                        <button className='w-full md:w-auto text-[16px] text-[#423930] bookButton inline-flex justify-between md:justify-start leading-[20px] mt-[10px] font-poppins '>
                                                            {TRANSLATING__BOOK__NOW}
                                                        <img src={ArrowRight} alt='' className='w-[16px] ml-[13px] translate-y-[2px]' />
                                                    </button>
                                                </a>
                                                </div>
                                            </div></a>
                                        )}
                                    </>

                                )
                            })
                            }
                        </div>
                    </>
                )

            })}

        </div>
    )
}

export default MassageTypesSection