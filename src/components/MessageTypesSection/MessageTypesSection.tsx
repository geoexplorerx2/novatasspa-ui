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

const MessageTypesSection = () => {

    const messageTypesContent = [
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38 $',
            image: { message_1 }
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38 $',
            image: { message_2 }
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38 $',
            image: { message_3 }
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38 $',
            image: ''
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38 $',
            image: ''
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38 $',
            image: ''
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38 $',
            image: ''
        },
        {
            title: 'Aromatherapy Massage',
            price: 'Start from 38 $',
            image: ''
        },
    ]

    return (
        <div className='container pt-[100px]'>
            <div className='ml-[99px] z-[2] text-center'>
                <div className='inline-flex'>
                    <Leaf className='text-[#B2A285]' />
                    <Leaf className='rotate-[175deg] ml-[15.6px] text-[#B2A285]' />
                </div>

                <h1 className='font-normal text-[#B2A285] text-[64px] leading-[74px]'>Beauty and Success Start Here</h1>
                <p className='text-[#423930] text-[18px] mt-[30px] mx-auto'>From its medieval origins to the digital era, learn everything there <br></br> is to know about the ubiquitous lorem ipsum passage.</p>
            </div>

            <div className='grid grid-cols-4 grid-rows-2 gap-x-[30px] gap-y-[100px]'>

                {messageTypesContent.map(card => {
                    const { title, price, image } = card;

                    for (let x = 0; x <= 8; x++) {
                        if (x % 2 === 0) {
                            return (
                                <div className='border'>
                                    <h6 className='text-[#423930] text-[24px] leading-[24px]'>Aromatherapy Massage</h6>
                                    <p className='text-[#666B45] font-semibold text-[16px] leading-[20px] mt-[10px]'>Start from 38 $</p>
                                    <img src={message_1} alt='' className='mt-[14px]' />
                                </div>
                            ) 
                    }
                }
                })}

                <div className='border'>
                    <h6 className='text-[#423930] text-[24px] leading-[24px]'>Aromatherapy Massage</h6>
                    <p className='text-[#666B45] font-semibold text-[16px] leading-[20px] mt-[10px]'>Start from 38 $</p>
                    <img src={message_1} alt='' className='mt-[14px]' />
                </div>
                <div className='border'>
                    <img src={message_1} alt='' className='mt-0' />
                    <h6 className='text-[#423930] text-[24px] leading-[24px] mt-[14px]'>Aromatherapy Massage</h6>
                    <p className='text-[#666B45] font-semibold text-[16px] leading-[20px] mt-[10px]'>Start from 38 $</p>
                </div>
                <div className='border'>1</div>
                <div className='border'>1</div>
                <div className='border'>1</div>
                <div className='border'>1</div>
                <div className='border'>1</div>
                <div className='border'>1</div>
            </div>
        </div>
    )
}

export default MessageTypesSection