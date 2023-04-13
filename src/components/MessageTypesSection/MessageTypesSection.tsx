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

const MessageTypesSection = () => {

    const messageTypesContent = [
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38',
            image: message_1
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38',
            image: message_2
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38',
            image: message_3
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38',
            image: message_4
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38',
            image: message_5
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38',
            image: message_6
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38',
            image: message_7
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38',
            image: message_8
        },
    ]

    const messageTypesContent_2 = [
        {
            title: 'FAR EAST MASSAGES',
            sectionId: 1,
            content: [
                {
                    name: 'Hot Stone Massage',
                    price: 'per person 80',
                    duration: '50 minutes',
                    image: message_1,
                    messageId: 1
                },
                {
                    name: 'Traditional Bali Massage',
                    price: 'per person 80',
                    duration: '50 minutes',
                    image: message_2,
                    messageId: 2
                },
                {
                    name: 'Thai Massage',
                    price: 'per person 90',
                    duration: '50 minutes',
                    image: message_3,
                    messageId: 3
                },
                {
                    name: 'Blend Thai Massage',
                    price: 'per person 90',
                    duration: '50 minutes',
                    image: message_4,
                    messageId: 4
                }
            ]

        },
        {
            title: 'SPA CLASSICS',
            sectionId: 2,
            content: [
                {
                    name: 'Reflexology ',
                    price: 'per person 40',
                    duration: '30 minutes',
                    image: message_1,
                    messageId: 1
                },
                {
                    name: 'Head & Shoulders Massage',
                    price: 'per person 40',
                    duration: '30 minutes',
                    image: message_2,
                    messageId: 2
                },
                {
                    name: 'Back Massage',
                    price: 'per person 50',
                    duration: '40 minutes',
                    image: message_3,
                    messageId: 3
                },
                {
                    name: 'Classic Massage',
                    price: 'per person 65',
                    duration: '50 minutes',
                    image: message_4,
                    messageId: 4
                },
                {
                    name: 'Anti Stress Massage',
                    price: 'per person 75',
                    duration: '50 minutes',
                    image: message_5,
                    messageId: 5
                },
                {
                    name: 'Aromatherapy Massage',
                    price: 'per person 75',
                    duration: '50 minutes',
                    image: message_6,
                    messageId: 6
                }
            ]
        },
        {
            title: 'THERAPEUTIC MASSAGE',
            sectionId: 3,
            content: [
                {
                    name: 'Medical Massage',
                    price: 'per person 80',
                    duration: '50 minutes',
                    image: message_1,
                    messageId: 1
                },
                {
                    name: 'Deep Tissue Massage',
                    price: 'per person 90',
                    duration: '50 minutes',
                    image: message_2,
                    messageId: 2
                },
                {
                    name: 'Regional Trilogy Massage',
                    price: 'per person 90',
                    duration: '60 minutes',
                    image: message_3,
                    messageId: 3
                },
                {
                    name: 'Catma Signature Massage',
                    price: 'per person 90',
                    duration: '60 minutes',
                    image: message_4,
                    messageId: 4
                }
            ]
        },
    ]

    return (
        <div className='container pt-[100px]'>
            <div className='ml-[99px] z-[2] text-center'>
                <div className='inline-flex'>
                    <Leaf className='text-[#B2A285]' />
                    <Leaf className='rotate-[175deg] ml-[15.6px] text-[#B2A285]' />
                </div>

                <h1 className='font-normal text-[#B2A285] text-[64px] leading-[74px] font-gotu'>Beauty and Success Start Here</h1>
                <p className='text-[#423930] text-[18px] mt-[30px] mx-auto font-poppins'>From its medieval origins to the digital era, learn everything there <br></br> is to know about the ubiquitous lorem ipsum passage.</p>
            </div>


            {messageTypesContent_2.map(section => {
                const { title, sectionId, content } = section;

                return (
                    <>
                        {/* <h1 className='text-[#B2A285] text-[44px] font-gotu mt-[100px]'>{title}</h1> */}
                        <div className='grid grid-cols-4 gap-x-[30px] gap-y-[100px] mt-[50px] mb-[67px]'>

                            {/* {content.map((messageType, index) => {
                                const { name, price, duration, image, messageId } = messageType;

                                return (
                                    <>
                                        {index % 2 === 0 ? (
                                            <a href="/booking"><div>
                                                <h6 className='text-[#423930] text-[24px] leading-[24px] font-gotu'>{name}</h6>
                                                <div className=' flex justify-between'>
                                                    <span className='text-[#666B45] font-semibold text-[16px] leading-[20px] mt-[10px] font-poppins relative'>
                                                        {price}
                                                        <span className='top-[-3px] text-[11px] absolute'>€</span>
                                                    </span>
                                                    <button className='text-[16px] text-[#423930] bookButton inline-flex leading-[20px] mt-[10px] font-poppins '>
                                                        Book Now
                                                        <img src={ArrowRight} alt='' className='w-[16px] ml-[13px] translate-y-[2px]' />
                                                    </button>
                                                </div>
                                                <img src={image} alt='' className='mt-[14px]' />
                                            </div></a>
                                        ) : (
                                            <a href="/booking"><div>
                                                <img src={image} alt='' className='mt-0' />
                                                <h6 className='text-[#423930] text-[24px] leading-[24px] mt-[14px] font-gotu'>{name}</h6>
                                                <div className=' flex justify-between'>
                                                    <span className='text-[#666B45] font-semibold text-[16px] leading-[20px] mt-[10px] font-poppins relative'>
                                                        {price}
                                                        <span className='top-[-3px] text-[11px] absolute'>€</span>
                                                    </span>
                                                    <a href="/booking"><button className='text-[16px] text-[#423930] bookButton inline-flex leading-[20px] mt-[10px] font-poppins '>
                                                        Book Now
                                                        <img src={ArrowRight} alt='' className='w-[16px] ml-[13px] translate-y-[2px]' />
                                                    </button></a>
                                                </div>
                                            </div></a>
                                        )}
                                    </>

                                )
                            })
                            } */}
                        </div>
                    </>
                )

            })}

        </div>
    )
}

export default MessageTypesSection