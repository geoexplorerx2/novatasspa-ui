import React, { FC, useState } from 'react'
import { ReactComponent as CaldleAndFlower } from '../../assets/icons/candleFlower.svg'


const OurServices: FC = () => {
    return (
        <div className='container -mt-[430px]'>
            <h2 className='text-white text-[64px] font-gotu leading-[74px] tracking-tighter mb-12'>Our <br /> Services</h2>
            <div className='grid grid-cols-4 gap-[30px]'>
                {ServicesData.map(service => <ServiceCard service={service} />)}
            </div>
        </div>
    )
}

interface ServiceType {
    title: string,
    description: string,
    price: number,
    Icon: any,
    id: string
}

interface ServiceCardProps {
    service: ServiceType
}

const ServiceCard: FC<ServiceCardProps> = (props) => {
    const { service: { description, Icon, id, price, title } } = props
    const [ isHovered, setIsHovered ] = useState(false)
    return (
        <div className={`border border-[#EEEEEE] py-[42px] px-[35px] space-y-[30px] transition-all ${isHovered ? 'bg-[#423930]' : 'bg-white'}`} key={id} onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)} }>
            <div className='flex justify-between'>
                <Icon className={`${isHovered ? 'text-white' : ''}`}/>
                <div>
                    <div className={`flex justify-end ${isHovered ? 'text-white' : ''}`}>
                        <span className='font-medium text-2xl mr-1'>
                            {price}
                        </span>
                        <span className='text-xs inline-block font-medium'>$</span>
                    </div>
                    <div className='flex space-x-4'>
                        <span className='text-white flex items-center cursor-pointer font-gotu'>Book Now</span>
                        <span className='text-white'> &gt;</span>
                    </div>
                </div>
            </div>

            <h3 className={`font-gotu text-[34px] leading-[34px] tracking-tighter w-1/2 ${isHovered ? 'text-white' : ''}`}>{title}</h3>
            <p className={`${isHovered ? 'text-white' : ''}`}>{description}</p>

        </div>
    )
}



const ServicesData: ServiceType[] = [
    {
        title: 'Pasha Hammam',
        description: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
        Icon: CaldleAndFlower,
        price: 38,
        id: '1'
    },
    {
        title: 'Pasha Hammam',
        description: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
        Icon: CaldleAndFlower,
        price: 38,
        id: '1'
    },
    {
        title: 'Pasha Hammam',
        description: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
        Icon: CaldleAndFlower,
        price: 38,
        id: '1'
    },
    {
        title: 'Pasha Hammam',
        description: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
        Icon: CaldleAndFlower,
        price: 38,
        id: '1'
    },
    {
        title: 'Pasha Hammam',
        description: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
        Icon: CaldleAndFlower,
        price: 38,
        id: '1'
    },
    {
        title: 'Pasha Hammam',
        description: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
        Icon: CaldleAndFlower,
        price: 38,
        id: '1'
    },
    {
        title: 'Pasha Hammam',
        description: 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.',
        Icon: CaldleAndFlower,
        price: 38,
        id: '1'
    },
]


export default OurServices