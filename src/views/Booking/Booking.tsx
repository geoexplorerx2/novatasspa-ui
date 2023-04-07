import React from 'react';
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
        <div className='container h-screen'>

        </div>
    )
};

export default Booking;