import React from 'react'
import swimmingImage from '../../assets/images/swimming.png'
import { ReactComponent as Leaf } from '../../assets/icons/leaf.svg';
import { ReactComponent as OilIcon } from '../../assets/icons/OilIcon.svg'


const ClearYourMindSection = () => {
  return (
    <div className='relative grid stack'>
      <img src={swimmingImage} alt='someone swimming' className='w-full column col-span-1' />
      <div className='col-span-1 py-[67px]'>
        <div className='ml-[99px] z-[2] text-center'>
          <div className='inline-flex mb-[90px]'>
            <Leaf className='text-white !w-14 !h-6' />
            <Leaf className='rotate-[175deg] ml-[15.6px] text-white' />
          </div>

          <h1 className='font-normal text-white text-4xl font-gotu'>Clear Your Mind, Refresh Your Body</h1>
          <p className='text-white text-[18px] opacity-70 mt-[30px] mx-auto font-poppins mb-[100px]'>From its medieval origins to the digital era, learn everything there <br></br> is to know about the ubiquitous lorem ipsum passage.</p>
          <div className='flex justify-center space-x-[100px]'>
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
    Icon: OilIcon,
    id: '2'
  },
  {
    label: "Foot Massage",
    Icon: OilIcon,
    id: '3'
  },
  {
    label: "Pool",
    Icon: OilIcon,
    id: '4'
  },
]

export default ClearYourMindSection