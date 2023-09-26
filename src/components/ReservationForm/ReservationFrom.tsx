import React, { useState } from 'react'
import AnimatedInput from '../AnimatedInput';
import { ReactComponent as HumanAvatar } from '../../assets/icons/humanAvatar.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mailIcon.svg'
import { ReactComponent as Arrow } from '../../assets/icons/ArrowRight.svg'
import AnimatedTelInput from '../AnimatedTelInput/AnimatedTelInput';
import { useForm, useLocation, useValidate } from '../../hooks';
import services from '../../api/services';
import { useNavigate } from "react-router-dom";
import {
  TRANSLATING_ONLINE_RESERVATION_FORM,
  TRANSLATING_NAME_SURNAME,
  TRANSLATING_PHONE_NUMBER,
  TRANSLATING_EMAIL,
  TRANLATIONG_MAKE_RESERVATION,
} from '../../data/services'
const ReservationForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(_handleQuickReservation, useValidate, 'quickreservation');
  const { countryName } = useLocation();

  const [servermessage, setServerMessage] = useState<any>();
  const server = services;

  const navigate = useNavigate()
  const activeLang = localStorage.getItem('activeLang');


  function _handleQuickReservation() {

    const quick_reservation_data = {
      name_surname: values?.namesurname,
      phone: values?.phone,
      country: countryName,
      email: values?.quickreservation_email
    };

    // quick reservation
    server.quickReservation(quick_reservation_data)
      .then((res: any) => {
        let message = res.entity;
        message.code === 200 && navigate(`/${activeLang}/novatascrystal/thank-you`);

        setServerMessage(message);
      })
      .catch((error: any) => {
        let message = error.entity;
        setServerMessage(message);
      })
  };

  // const [values, setValues] = useState({
  //   nameSurname: null,
  //   email: null,
  //   phoneNo: null,


  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name?: string) => {
  //   const value = e?.target?.value ?? e;
  //   const inputName = e?.target?.name ?? name;
  //   setValues((prevState) => ({ ...prevState, [inputName]: value }))
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   console.log(values)
  // };

  return (
    <div className='md:w-[450px] p-[30px] bg-white space-y-4 md:space-y-[30px]'>
      <h3 className=' text-xl md:text-2xl font-gotu '>{TRANSLATING_ONLINE_RESERVATION_FORM}</h3>
      <div className='flex flex-col'>
        {/* <span>{servermessage && servermessage.data}</span>
        <span>{errors.namesurname}</span>
        <span>{errors.quickreservation_email}</span>
        <span>{errors.phone}</span> */}
      </div>
      <form onSubmit={handleSubmit} className='space-y-5 md:space-y-[30px]'>
        <AnimatedInput
          value={values}
          inputType='text'
          label={TRANSLATING_NAME_SURNAME}
          name='namesurname'
          onChange={handleChange}
          Icon={<HumanAvatar />}
          errors={errors}
        />
        <AnimatedTelInput
          value={values}
          inputType='telephone'
          label={TRANSLATING_PHONE_NUMBER}
          name='phone'
          onChange={handleChange}
          errors={errors}
        />
        <AnimatedInput
          value={values}
          inputType='text'
          label={TRANSLATING_EMAIL}
          name='quickreservation_email'
          onChange={handleChange}
          Icon={<MailIcon />}
          errors={errors}
        />
        <button
          onClick={handleSubmit}
          type='button'
          className='w-full flex justify-between py-4 px-[31px] bg-[#423930] text-white text-[22px] -tracking-[0.02em] leading-[28px] font-gotu'
        >
          <span>
            {TRANLATIONG_MAKE_RESERVATION}
          </span>
          <Arrow className='text-white' />
        </button>
      </form>

    </div>
  )
}

export default ReservationForm