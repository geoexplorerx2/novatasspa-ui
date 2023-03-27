import React from 'react'
import SectionBackground from '../../components/SectionBackground/SectionBackground'
import Chick from '../../assets/images/WomanLeaf.png'


const ReservationSection = () => {
  return (
    <div className='relative top-8 h-[970px]'>
      <div className='absolute z-[10] border-4 border-pink-500 w-full h-full flex justify-center items-center'>
        <h2 className='text-white font-gotu text-[64px] tracking-tighter leading-[74px]'>Make a Quick <br /> Reservation</h2>
      </div>
     
        <SectionBackground backgroundDivClassNames='h-full'>
          <div>ReservationSection</div>
          <img src={Chick} className="w-1/2 max-h-full -mt-[8px]"/>
        </SectionBackground>

      
    </div>
    
  )
}

export default ReservationSection