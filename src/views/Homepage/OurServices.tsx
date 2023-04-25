import React, { FC, useState } from 'react'
import { servicesVersion } from 'typescript'
import { ReactComponent as CaldleAndFlower } from '../../assets/icons/candleFlower.svg'
import { ReactComponent as Wave } from '../../assets/icons/wave.svg'
import { useNavigate } from 'react-router-dom'


const OurServices: FC = () => {
    return (
        <div className='container -mt-[188px] md:-mt-[430px] overflow-hidden lg:overflow-visible'>
            <h2 className='text-white text-3xl md:text-[64px] font-gotu md:leading-[74px] md:tracking-tighter mb-5 lg:mb-12 px-9 md:px-0'>Our <br className='hidden md:inline-block' /> Popular Packages</h2>
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
    const { service: { description, info, duration, Icon, id, price, title } } = props
    const [isHovered, setIsHovered] = useState(false);
    const [learnMore, setLearnMore] = useState(false)
    const activeLang = localStorage.getItem('activeLang');
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate(`/${activeLang}/booking`);
    };

    const LearnMoreFunc = (e: any) => {
        e.stopPropagation();
        setLearnMore(!learnMore)
    }

    return (
        <a onClick={handleBookingClick}><div className={`hover:shadow-xl hover:shadow-grey-500/40 z-[1] relative border cursor-pointer border-[#EEEEEE] py-[42px] px-[35px] space-y-[30px] transition-all ${isHovered ? 'bg-[#423930]' : 'bg-white'}`} key={id} onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }} >
            <div className='flex justify-between'>
                <Icon className={`${isHovered ? 'text-white' : 'text-[#423930]'}`} />
                <div>
                    <div className={`flex justify-end ${isHovered ? 'text-white' : ''}`}>
                        <span className='font-medium text-2xl mr-1'>
                            € {price}
                        </span>
                        {/* <span className='text-xs inline-block font-medium'>€</span> */}
                    </div>
                    <p className={`flex justify-end ${isHovered ? 'text-white' : ''} text-black`}>{duration} minutes per person</p>
                    <div className={`${isHovered ? 'text-white' : 'text-black'} flex space-x-4`}>
                        <span className={`flex items-center cursor-pointer font-gotu`}>Book Now</span>
                        <span className=''> &gt;</span>
                    </div>
                </div>
            </div>

            <h3 className={`font-gotu text-[34px] leading-[34px] tracking-tighter w-1/2 ${isHovered ? 'text-white' : ''}`}>{title}</h3>
            <p className={`${isHovered ? 'text-white' : ''} ${learnMore ? 'line-clamp-10' : 'line-clamp-5'}`}>{description}</p><span className={`underline z-[2] ${isHovered ? 'text-white' : ''}`} onClick={e => LearnMoreFunc(e)}>Learn More</span>
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
        title: 'Luxury Novatas Package',
        description: 'After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by a honey and milk body care treatment which will leave your body smooth and refreshed. After the honey and milk body care treatment a rejuvenating facial clay mask will be applied. The session will continue with a relaxing Foot & Hand Massage and end with our Novatas Signature Massage, which is an individualistic muscle-relaxing and stress-relieving massage that is designed specifically for you and is carried out with your choice of %100 natural aromatic oils. Our massage therapists will analyze what your body needs, and apply a combination of techniques among hot stone, reflexology, anti-stress or Thai massages, to meet those needs accordingly.',
        info: [
        ],
        duration: '125',
        Icon: CaldleAndFlower,
        price: '140',
        id: '5'
    },
    {
        title: 'Tulip Package',
        description: 'After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by a Peeling Treatment, which you can choose among grape seed extract, olive oil, coconut or rose peeling. After the peeling treatment, an Aromatherapy Massage, which is a delicate massage technique that uses 100% organic and natural essential oils prepared from aromatic Mediterranean herbs will be carried out by our professional massage therapists.',
        info: [
        ],
        duration: '100',
        Icon: CaldleAndFlower,
        price: '110',
        id: '6'
    },
    {
        title: 'Crystal Package',
        description: 'After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles and a relaxing head-shoulders-back foam massage. This will be followed by an Anti-Stress Massage which is an effective massage therapy that focuses on releasing tension from the connective muscle tissues; relaxing the muscles and especially the nervous system, by applying slow, rhythmic and light strokes as well as moderate finger pressure.',
        info: [
        ],
        duration: '80',
        Icon: CaldleAndFlower,
        price: '80',
        id: '7'
    },
    {
        title: 'Lilium Package',
        description: 'After a 10-min rest in the steam room, which will help to loosen up tense muscles, soften the skin and open the pores, the session continues with an exfoliating body scrub, a full body foam, where you will be covered in a cloud of silky foam bubbles. This will be followed by a Reflexology session which is a traditional Chinese massage therapy that focuses on relieving stress in the body by working specifically on the feet. It aims to bring about a state of relaxation and to keep qi-vital energy flowing through the body, for maintaining balance and perfect health.',
        info: [
        ],
        duration: '55',
        Icon: CaldleAndFlower,
        price: '60',
        id: '8'
    },
]


export default OurServices