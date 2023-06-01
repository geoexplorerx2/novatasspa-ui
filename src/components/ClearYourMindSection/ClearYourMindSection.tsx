import React from 'react'
import swimmingImage from '../../assets/images/swimming.png'
import { ReactComponent as Leaf } from '../../assets/icons/leaf.svg';
import { ReactComponent as OilIcon } from '../../assets/icons/OilIcon.svg'
import { ReactComponent as bodyTherapyIcon } from '../../assets/icons/BodyTherapyIcon.svg'
import { ReactComponent as FootMassageIcon } from '../../assets/icons/FootMassage.svg'
import { ReactComponent as PoolIcon } from '../../assets/icons/Pool.svg'


const ClearYourMindSection = () => {
  return (
    <div className={`relative grid stack overflow-hidden h-[914px] md:h-[722px]`}>
      <img src={swimmingImage} alt='someone swimming' className='hidden lg:inline-block w-full column h-[914px] md:h-[722px] md:h-auto  md:col-span-1 ' />
      <div
        className='lg:hidden h-[914px] bg-no-repeat bg-center' 
        style={{ backgroundImage: `url(${swimmingImage})` }}
      >

      </div>
      <div className='col-span-1 py-[67px]'>
        <div className=' z-[2] text-center'>
          <div className='inline-flex mb-[90px]'>
            <Leaf className='text-white !w-14 !h-6' />
            <Leaf className='rotate-[175deg] ml-[15.6px] text-white' />
          </div>

          <h1 className='font-normal text-white text-3xl lg:text-4xl font-gotu'>Clear Your Mind, Refresh Your Body</h1>
          <p className='text-white text-[15px] lg:text-[18px] opacity-70 mt-[30px] mx-auto font-poppins mb-[100px]'>From its medieval origins to the digital era, learn everything there <br></br> is to know about the ubiquitous lorem ipsum passage.</p>
          <div className='grid grid-cols-2 gap-10 lg:flex lg:justify-center lg:flex-wrap lg:space-x-[100px]'>
            {
              data.map(item => {
                const { label, Icon, id } = item;
                return (
                  <div className='flex flex-col justify-center items-center ' key={id}>
                    <div className='w-20 h-20 bg-white rounded-full flex justify-center items-center mb-5'>
                      <Icon className='' />
                    </div>
                    <span className='text-white'>{label}</span>

                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}


const data = [
  {
    label: "Special Oils",
    Icon: OilIcon,
    id: '1'
  },
  {
    label: "Body Therapy",
    Icon: bodyTherapyIcon,
    id: '2'
  },
  {
    label: "Foot Massage",
    Icon: FootMassageIcon,
    id: '3'
  },
  {
    label: "Pool",
    Icon: PoolIcon,
    id: '4'
  },
]

export default ClearYourMindSection