import React from 'react';
import ReservationBanner from '../../assets/images/reservationBanner.png'
import { Logo } from '../../lib';
import novatasspaLogo from "../../assets/logo/novatasspaLogo.svg";
import BookingForm from '../../components/BookingForm/BookingForm';
import services from '../../api/services';
import { useForm, useValidate } from '../../hooks';



 

const Booking = () => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useForm(_handleBooking, useValidate, 'booking');

    const server = services;

    function _handleBooking() {

        const booking_data = {
            reservation_date: '2023-03-30',
            reservation_time: '10:20',
            name_surname: '',
            phone: '',
            country: '',
            email: '',
            massage_package: '',
            hammam_package: '',
            male_pax: '',
            female_pax: ''
        };

        // booking
        server.booking(booking_data)
            .then((res: any) => {
                // console.log({ res });
            })
            .catch((error: any) => {
                // console.log({error});
            })
    };

    return (
      <div className=''>
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