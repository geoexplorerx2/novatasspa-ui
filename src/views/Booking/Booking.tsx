import React from 'react';
import ReservationBanner from '../../assets/images/reservationBanner.png'
import { Logo } from '../../lib';
import novatasspaLogo from "../../assets/logo/novatasspaLogo.svg";
import BookingForm from '../../components/BookingForm/BookingForm';


const Booking = () => {
  return (
    <div className='h-screen'>
        <div className='w-full h-full flex'> 
          <img src={ReservationBanner} alt='reservation salon image' />
          <div className='w-full h-full'>
          <img src={novatasspaLogo} alt="Novatas Logo" className='mx-auto my-7 mx-wuto'/>
            <div className='w-full h-full px-[150px]'>
              
              <BookingForm />

            </div>
          </div>
        </div>
    </div>
  )
};

export default Booking;