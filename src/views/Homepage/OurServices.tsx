import React, { FC, useState } from 'react'
import { servicesVersion } from 'typescript'
import { ReactComponent as CaldleAndFlower } from '../../assets/icons/candleFlower.svg'
import { ReactComponent as Wave } from '../../assets/icons/wave.svg'
import { useNavigate } from 'react-router-dom'
import {
    TRANSLATING__BOOK__NOW,
    TRANSLATIN_POPULAR_PACKAGE,
    TRANSLATEING_OUR,
    TRANSLATING_MIN_PER_PERSON,
    TRANSLATIN_LUXURY_NOVATASSPA_PACKAGE,
    TRANSLATING_LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION,
    TRANSLATING_TULIP_PACKAGE,
    TRANSLATING_LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION_2,
    TRANSLATIN_LEARN_MORE,
    TRANSLATIN_CRYSTAL_PACKAGE,
    TRANSLATING_CRYSTAL_PACKAGE_DESCRIPTION,
    TRANSLATING_LILIUM_PACKAGE,
    TRANSLATING_LILIUM_PACKAGE_DESCRIPTION,
} from '../../data/services';

const OurServices: FC = () => {
    return (
        <div className='container -mt-[188px] md:-mt-[430px] overflow-hidden lg:overflow-visible'>
            <h2 className='text-white text-3xl md:text-[64px] font-gotu md:leading-[74px] md:tracking-tighter mb-5 lg:mb-12 px-9 md:px-0'>{TRANSLATEING_OUR} <br className='hidden md:inline-block' /> {TRANSLATIN_POPULAR_PACKAGE}</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-[30px] px-9 md:px-0'>
                {ServicesData.map(service => <ServiceCard service={service} />)}
            </div>
        </div>
    )
}

interface ServiceType {
    title: string,
    description: string,
    info: any,
    duration: string,
    price: string,
    Icon: any,
    id: string
}

interface ServiceCardProps {
    service: ServiceType
}

const ServiceCard: FC<ServiceCardProps> = (props) => {
    const {
        service: {
            description,
            info,
            duration,
            Icon,
            id,
            price,
            title } } = props;

    const [isHovered, setIsHovered] = useState(false);
    const [learnMore, setLearnMore] = useState(false);

    const activeLang = localStorage.getItem('activeLang');
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate(`/${activeLang}/booking`);
    };

    const LearnMoreFunc = (e: any) => {
        e.stopPropagation();
        setLearnMore(!learnMore)
    };

    return (
        <a onClick={handleBookingClick}><div className={`hover:shadow-2xl hover:shadow-grey-600 z-[1] relative border cursor-pointer border-[#EEEEEE] py-[42px] px-[35px] space-y-[30px] transition-all ${isHovered ? 'bg-[#423930]' : 'bg-white'}`} key={id} onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} >
            <div className='flex justify-between'>
                <Icon className={`${isHovered ? 'text-white' : 'text-[#423930]'}`} />
                <div>
                    <div className={`flex justify-end ${isHovered ? 'text-white' : ''}`}>
                        <span className='font-medium text-2xl mr-1'>
                            € {price}
                        </span>
                        {/* <span className='text-xs inline-block font-medium'>€</span> */}
                    </div>
                    <p className={`flex justify-end ${isHovered ? 'text-white' : ''} text-black`}>{duration} {TRANSLATING_MIN_PER_PERSON}</p>
                    <div className={`${isHovered ? 'text-white' : 'text-black'} flex space-x-4`}>
                        <span className={`flex items-center cursor-pointer font-gotu`}>{TRANSLATING__BOOK__NOW}</span>
                        <span className=''> &gt;</span>
                    </div>
                </div>
            </div>

            <h3 className={`font-gotu text-[34px] leading-[34px] tracking-tighter w-1/2 ${isHovered ? 'text-white' : ''}`}>{title}</h3>
            <p className={`${isHovered ? 'text-white' : ''} ${learnMore ? 'line-clamp-10' : 'line-clamp-5'}`}>{description}</p><span className={`underline z-[2] ${isHovered ? 'text-white' : ''}`} onClick={e => LearnMoreFunc(e)}>{TRANSLATIN_LEARN_MORE}</span>
            {
                info.length > 0 ?
                    <ul>
                        {info.map((li: string) => {
                            return (
                                <li className={`${isHovered ? 'text-white' : ''}`}>- {li}</li>
                            )
                        })}
                    </ul>
                    : ''
            }

            {
                isHovered && <Wave className='absolute top-0 right-0 !mt-0' />
            }
        </div></a>
    )
}



const ServicesData: ServiceType[] = [
    // {
    //     title: 'Luxury Hamam',
    //     description: 'A luxurious combination of a Turkish bath and a massage session that involves a body scrub, full body foam , head shoulders-back foam massage,honey and milk body care,facial clay mask,hot stone massage and reflexology massage.',
    //     info: [],
    //     duration: '90',
    //     Icon: CaldleAndFlower,
    //     price: '200',
    //     id: '1'
    // },
    // {
    //     title: 'VIP Hamam',
    //     description: 'A deluxe Turkish bath session that involves a traditional body scrub, relaxing foam, body peeling and an anti-stress massage.',
    //     info: [
    //         'Body Scrub', 'Body Peeling', 'Anti-Stress Massage' 
    //     ],
    //     duration: '80',
    //     Icon: CaldleAndFlower,
    //     price: '150',
    //     id: '2'
    // },
    // {
    //     title: 'Sultan Hamam',
    //     description: 'A revitalizing Turkish bath session that involves a traditional body scrub, foam massage, body mask made from honey and milk.',
    //     info: [
    //         'Body Scrub', 'All Body Foam', 'Foam Massage', 'All Body Honey', 'Milk Body Care'
    //     ],
    //     duration: '50',
    //     Icon: CaldleAndFlower,
    //     price: '100 ',
    //     id: '3'
    // },
    // {
    //     title: 'Shahrazad Hamam',
    //     description: 'A rejuvenating Turkish bath session that involves a traditional body scrub, followed by a head & shoulders foam massage.',
    //     info: [
    //         'Body Scrub', 'Foam Massage', 'All Body Foam'
    //     ],
    //     duration: '50',
    //     Icon: CaldleAndFlower,
    //     price: '80',
    //     id: '4'
    // },
    {
        title: TRANSLATIN_LUXURY_NOVATASSPA_PACKAGE,
        description: TRANSLATING_LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION,
        info: [
        ],
        duration: '125',
        Icon: CaldleAndFlower,
        price: '140',
        id: '5'
    },
    {
        title: TRANSLATING_TULIP_PACKAGE,
        description: TRANSLATING_LUXURY_NOVATASSPA_PACKAGE_DESCRIPTION_2,
        info: [
        ],
        duration: '100',
        Icon: CaldleAndFlower,
        price: '110',
        id: '6'
    },
    {
        title: TRANSLATIN_CRYSTAL_PACKAGE,
        description: TRANSLATING_CRYSTAL_PACKAGE_DESCRIPTION,
        info: [
        ],
        duration: '80',
        Icon: CaldleAndFlower,
        price: '80',
        id: '7'
    },
    {
        title: TRANSLATING_LILIUM_PACKAGE,
        description: TRANSLATING_LILIUM_PACKAGE_DESCRIPTION,
        info: [
        ],
        duration: '55',
        Icon: CaldleAndFlower,
        price: '60',
        id: '8'
    },
]


export default OurServices