import React from 'react'
import SectionBackground from '../../components/SectionBackground/SectionBackground'
import Chick from '../../assets/images/WomanLeaf.png'
import ReservationForm from '../../components/ReservationForm/ReservationForm'


const ReservationSection = () => {
  return (
    <div className='relative top-32 h-[970px]'>
      <div className='absolute z-[10] border-4 border-pink-500 w-full h-full flex flex-col justify-center items-center'>
        <h2 className='text-white font-gotu text-[64px] tracking-tighter leading-[74px] mb-7'>Make a Quick <br /> Reservation</h2>
        <ReservationForm />
      </div>
     
        <SectionBackground backgroundDivClassNames='h-full'>
         
          <img src={Chick} className="w-1/2 max-h-full -mt-[8px]"/>
        </SectionBackground>

      
    </div>
    
  )
}

export default ReservationSection