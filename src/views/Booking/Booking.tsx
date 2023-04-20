import React, { useState } from 'react';
import ReservationBanner from '../../assets/images/reservationBanner.png'
import { Logo } from '../../lib';
import novatasspaLogo from "../../assets/logo/novatasspaLogo.svg";
import BookingForm from '../../components/BookingForm/BookingForm';
import services from '../../api/services';
import { useForm, useValidate } from '../../hooks';
import { useNavigate } from 'react-router-dom';


const Booking = () => {
  const [serverRes, setServerRes] = useState<any>();
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(_handleBooking, useValidate, 'booking');

  const server = services;
  const navigate = useNavigate();
  const activeLang = localStorage.getItem('activeLang');

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
        res.entity.code === 200 && navigate(`/${activeLang}/thank-you`);
      })
      .catch((error: any) => {
        setServerRes(error.entity);
      })
  };

  return (
    <div className=''>
      <div className='w-full h-full grid grid-cols-1 xl:grid-cols-2'>
        <img src={ReservationBanner} alt='reservation salon image' className='hidden xl:inline-block h-full'/>
        <div className='w-full h-full'>
          <img src={novatasspaLogo} alt="Novatas Logo" className='mx-auto my-7 mx-wuto' />
          <div className='w-full h-full px-5 md:px-9 '>

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