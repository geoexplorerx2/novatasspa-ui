import React, { FC } from 'react'
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
    return (
        <div className='border border-[#EEEEEE] py-[42px] px-[35px] space-y-[30px] bg-white' key={id}>
            <div className='flex justify-between'>
                <Icon />
                <div>
                    <span className='font-medium text-2xl mr-1'>
                        {price}
                    </span>
                    <span className='text-xs inline-block -translate-y-1/2 font-medium'>$</span>
                </div>
            </div>

            <h3 className='font-gotu text-[34px] leading-[34px] tracking-tighter w-1/2'>{title}</h3>
            <p>{description}</p>

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