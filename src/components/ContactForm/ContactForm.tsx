import React, { FC, useEffect, useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import AnimatedInput from '../AnimatedInput';
import AnimatedTelInput from '../AnimatedTelInput/AnimatedTelInput';
import { ReactComponent as ArrowRight } from '../../assets/icons/ArrowRight.svg'
import { ReactComponent as HumanAvatar } from '../../assets/icons/humanAvatar.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mailIcon.svg'
import { ReactComponent as MessageIcon } from '../../assets/icons/messageIcon.svg'
import { useForm, useLocation, useValidate } from '../../hooks';
import services from '../../api/services';
import { useNavigate } from 'react-router-dom';
import {TRANSLATING_NAME_SURNAME} from '../../data/services'

const ContactForm: FC = () => {
  // const [values, setValues] = useState({
  //   nameSurname: '',
  //   email: '',
  //   phoneNo: '',
  //   message: ''

  // });

  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(_handleQuickReservation, useValidate, 'contactForm');
  const { countryName } = useLocation();
  
  const [servermessage, setServerMessage] = useState<any>();
  const server = services;
  const navigate = useNavigate()
  const activeLang = localStorage.getItem('activeLang');

  // const handleChange = (event: any, type: any = '') => {
  //   if (type === 'telephone') setValues((value: any) => ({ ...value, 'phone': event }))
  //   else {
  //     // console.log('event::', event)
  //     event.persist();
  //     setValues((value: any) => ({ ...value, [event.target.name]: event.target.value }));
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   // e.preventDefault()
  //   // console.log('values', values)
  // };

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
        setServerMessage(message);
        navigate(`/${activeLang}/novatascrystal/thank-you`)
      })
      .catch((error: any) => {
        let message = error.entity;
        setServerMessage(message);
      })
  };

  return (
    <div className='w-full xl:w-[450px]  p-[30px] bg-[#9FAF911A] dark:bg-[#0b0b0b] h-min'>
      <span className='text-2xl font-normal dark:text-white font-gotu'>
        Contact Form
      </span>
      {/* <div className='flex flex-col'>
        <span>{servermessage && servermessage.data}</span>
        <span>{errors.namesurname}</span>
        <span>{errors.quickreservation_email}</span>
        <span>{errors.phone}</span>
      </div> */}
      <form className='w-full space-y-[30px] md:space-y-0 2xl:space-y-[30px] md:gap-4 2xl:gap-0 mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1' >
        <AnimatedInput
          // value={values.nameSurname}
          inputType='text'
          label={TRANSLATING_NAME_SURNAME}
          name='namesurname'
          onChange={handleChange}
          Icon={<HumanAvatar />}
          wrapperClassName='bg-white'
          errors={errors}
          />

        <AnimatedTelInput
          // value={values?.phoneNo}
          inputType='text'
          label='Your Number'
          name='phone'
          onChange={(e: any) => handleChange(e, 'telephone')}
          wrapperClassName='bg-white'
          errors={errors}
           />

        <AnimatedInput
          // value={values?.email}
          inputType='text'
          label='Your Email'
          name='quickreservation_email'
          onChange={handleChange}
          Icon={<MailIcon />}
          wrapperClassName='bg-white'
          errors={errors}
          />


        {/* <AnimatedInput
          value={values.message}
          inputType='textArea'
          label='Your Message'
          name='message' onChange={handleChange}
          wrapperClassName='!h-[150px] md:col-span-3 xl:col-span-1 bg-white'
          Icon={<MessageIcon />} /> */}

        <button
          onClick={handleSubmit}
          type='button'
          className='w-full bg-[#423930] flex justify-between items-center px-[30px] py-3 lg:py-[18px] text-white text-base md:col-span-3 xl:col-span-1 font-gotu'
        >
          <span>
            Send Form
          </span>
          <ArrowRight />
        </button>
      </form>
    </div>
  )
};

export default ContactForm