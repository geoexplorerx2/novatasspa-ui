import React from 'react';
import ReservationBanner from '../../assets/images/reservationBanner.png'
import ReservationForm from '../../components/ReservationFrom/ReservationForm';
import { Logo } from '../../lib';
import novatasspaLogo from "../../assets/logo/novatasspaLogo.svg";


const Booking = () => {
  return (
    <div className='h-screen'>
        <div className='w-full h-full flex'> 
          <img src={ReservationBanner} alt='reservation salon image' />
          <div className='w-full h-full border border-pink-500'>
          <img src={novatasspaLogo} alt="Novatas Logo" className='mx-auto my-7 mx-wuto'/>
            <div className='w-full h-full px-[150px]'>
              
              <ReservationForm />

            </div>
          </div>
        </div>
    </div>
  )
};

export default Booking;