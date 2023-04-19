import React, { useState } from 'react';
import ReservationBanner from '../../assets/images/reservationBanner.png'
import { Logo } from '../../lib';
import novatasspaLogo from "../../assets/logo/novatasspaLogo.svg";
import BookingForm from '../../components/BookingForm/BookingForm';
import services from '../../api/services';
import { useForm, useValidate } from '../../hooks';



const Booking = () => {
  const [serverRes, setServerRes] = useState<any>();
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(_handleBooking, useValidate, 'booking');

  const server = services;

  function _handleBooking() {

    const booking_data = {
      reservation_date: new Date(values?.date).toLocaleDateString().replaceAll('/', '-'), //'2023-03-30'
      reservation_time: values?.time,
      name_surname: values?.booking_name_surname,
      phone: values?.phone,
      country: 'Turkey',
      email: values?.email,
      massage_package: Object.keys(values?.massages).filter(key => values?.massages[key] == true),
      hammam_package: Object.keys(values?.hammam).filter(key => values?.hammam[key] == true),
      male_pax: values?.guests.maleCount,
      female_pax: values?.guests.femaleCount
    };

    // booking
    server.booking(booking_data)
      .then((res: any) => {
        setServerRes(res?.entity);
      })
      .catch((error: any) => {
        setServerRes(error.entity);
      })
  };

  return (
    <div className=''>
      <div className='w-full h-full flex'>
        <img src={ReservationBanner} alt='reservation salon image' className='hidden lg:inline-block'/>
        <div className='w-full h-full'>
          <img src={novatasspaLogo} alt="Novatas Logo" className='mx-auto my-7 mx-wuto' />
          <div className='w-full h-full px-5 md:px-9 lg:px-[150px]'>

            <BookingForm
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              serverRes = { serverRes}
            />

          </div>
        </div>
      </div>
    </div>
  )
};

export default Booking;