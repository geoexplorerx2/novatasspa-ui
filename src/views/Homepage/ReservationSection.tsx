import React from 'react'
import SectionBackground from '../../components/SectionBackground/SectionBackground'
import Chick from '../../assets/images/WomanLeaf.png'
import ReservationForm from '../../components/ReservationForm/ReservationFrom'
import { TRANSLATING_MAKE_A_QUICK, TRANSLATING_RESERVATION } from '../../data/services'

const ReservationSection = () => {
  return (
    <div className='relative h-[970px] overflow-hidden'>
      <div className='absolute z-[10] w-full h-full flex flex-col lg:justify-center items-center mt-[69px] px-6'>
        <h2 className='text-white font-gotu text-3xl lg:text-[64px] tracking-tighter lg:leading-[74px] mb-7 text-center'>{TRANSLATING_MAKE_A_QUICK}<br className='hidden md:inline-block' /> {TRANSLATING_RESERVATION}</h2>
        <ReservationForm />
      </div>
      <div className='-skew-y-1 h-[103%] w-full overflow-hidden mt-4'>
        <SectionBackground backgroundDivClassNames='h-full !-top-4' wrapperClassNames='h-full'>

          <img src={Chick} className="hidden md:inline-block relative max-w-none md:max-w-full md:w-1/2 h-full max-h-full object-cover -translate-y-4" />

          <div className='w-1/2 h-full   md:hidden overflow-hidden 1 '>
            <img src={Chick} className="relative  max-w-none w-[217%] h-[127%] max-h-none -mt-[8px] object-cover object-[50%_-149px] translate-y-2 " />
          </div>

        </SectionBackground>

      </div>


    </div>

  )
}

export default ReservationSection