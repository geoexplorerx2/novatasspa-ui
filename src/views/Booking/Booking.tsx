import React, { useEffect, useState } from 'react';
import ReservationBanner from '../../assets/images/reservationBanner.png'
import { Logo } from '../../lib';
import novatasspaLogo from "../../assets/logo/novatasspaLogo.svg";
import BookingForm from '../../components/BookingForm/BookingForm';
import services from '../../api/services';
import { useForm, useLocation, useValidate } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { DateInputProps } from '@mantine/dates';
import { addLeadingZeros } from '../../common/AddLeadingZeros';


const Booking = () => {
  const [serverRes, setServerRes] = useState<any>();
  const [country, setCountry] = useState(null);
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(_handleBooking, useValidate, 'booking');

  const { countryName } = useLocation();
  const server = services;
  const navigate = useNavigate();
  const activeLang = localStorage.getItem('activeLang');

  function _handleBooking() {

    const getDateFormat = (date: any) => {
      return addLeadingZeros(date[2], 2) + '-' + addLeadingZeros(date[0], 2) + '-' + addLeadingZeros(date[1], 2);
    };

    const booking_data = {
      reservation_date: getDateFormat(new Date(values?.date).toLocaleDateString().split('/')), //'2023-03-30'
      reservation_time: values?.time,
      name_surname: values?.booking_name_surname,
      phone: values?.phone,
      country: countryName,
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
        res.entity.code === 200 && navigate(`/${activeLang}/novatascrystal/thank-you`);
      })
      .catch((error: any) => {
        setServerRes(error.entity);
      })
  };

  return (
    <div className=''>
      <div className='w-full h-full grid grid-cols-1 xl:grid-cols-2'>
        <img src={ReservationBanner} alt='reservation salon image' className='hidden xl:inline-block h-full object-cover' />
        <div className='w-full h-full'>
          {/* <img src={novatasspaLogo} alt="Novatas Logo" className='mx-auto my-7 mx-wuto' /> */}
          <div className='w-full h-full px-5 md:px-9 '>

            <BookingForm
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              serverRes={serverRes}
            />

          </div>
        </div>
      </div>
    </div>
  )
};

export default Booking;