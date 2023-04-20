import React, { useState } from 'react'
import AnimatedInput from '../AnimatedInput';
import { ReactComponent as HumanAvatar } from '../../assets/icons/humanAvatar.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mailIcon.svg'
import { ReactComponent as Arrow } from '../../assets/icons/ArrowRight.svg'
import AnimatedTelInput from '../AnimatedTelInput/AnimatedTelInput';
import { useForm, useValidate } from '../../hooks';
import services from '../../api/services';


const ReservationForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(_handleQuickReservation, useValidate, 'quickreservation');

  const [servermessage, setServerMessage] = useState<any>();
  const server = services;


  function _handleQuickReservation() {

    const quick_reservation_data = {
      name_surname: values?.namesurname,
      phone: values?.phone,
      country: 'Turkey',
      email: values?.quickreservation_email
    };

    // quick reservation
    server.quickReservation(quick_reservation_data)
      .then((res: any) => {
        let message = res.entity;
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
      <h3 className=' text-xl md:text-2xl font-gotu '>Online Reservation Form</h3>
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
          label='Name, Surname'
          name='namesurname'
          onChange={handleChange}
          Icon={<HumanAvatar />}
          errors={errors}
        />
        <AnimatedTelInput
          value={values} 
          inputType='telephone'
          label={'Phone Number'}
          name='phone'
          onChange={handleChange}
          errors={errors}
        />
        <AnimatedInput
          value={values} 
          inputType='text'
          label='E-Mail Address'
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
            Make Reservation
          </span>
          <Arrow className='text-white' />
        </button>
      </form>

    </div>
  )
}

export default ReservationForm