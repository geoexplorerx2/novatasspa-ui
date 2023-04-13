import React, { FC, useEffect, useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import AnimatedInput from '../AnimatedInput';
import AnimatedTelInput from '../AnimatedTelInput/AnimatedTelInput';
import { ReactComponent as ArrowRight } from '../../assets/icons/ArrowRight.svg'
import { ReactComponent as HumanAvatar } from '../../assets/icons/humanAvatar.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mailIcon.svg'
import { ReactComponent as MessageIcon } from '../../assets/icons/messageIcon.svg'



const ContactForm: FC = () => {
  const [values, setValues] = useState({
    nameSurname: '',
    email: '',
    phoneNo: '',
    message: ''

  })

  const handleChange = (event: any, type: any = '') => {
    if (type === 'telephone') setValues((value: any) => ({ ...value, 'phone': event }))
    else {
        // console.log('event::', event)
        event.persist();
        setValues((value: any) => ({ ...value, [event.target.name]: event.target.value }));
    }
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault()
    // console.log('values', values)
  }


  return (
    <div className='w-full xl:w-[450px]  p-[30px] bg-[#9FAF911A] dark:bg-[#0b0b0b] h-min'>
      <span className='text-2xl font-normal dark:text-white font-gotu'>
        Contact Form
      </span>
      <form className='w-full space-y-[30px] md:space-y-0 2xl:space-y-[30px] md:gap-4 2xl:gap-0 mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1' onSubmit={handleSubmit} >
        <AnimatedInput
          value={values.nameSurname}
          inputType='text'
          label='Name, Surname'
          name='nameSurname'
          onChange={handleChange}
          Icon={<HumanAvatar />}
          wrapperClassName='bg-white' />

        <AnimatedInput 
              value={values?.email} 
              inputType='text' 
              label='Your Email' 
              name='email' 
              onChange={handleChange} 
              Icon={<MailIcon />} 
              wrapperClassName='bg-white'/>

        <AnimatedTelInput 
              value={values?.phoneNo} 
              inputType='text' 
              label='Your Number' 
              name='phoneNo' 
              onChange={(e: any) => handleChange(e, 'telephone')}  
              wrapperClassName='bg-white'/>

        <AnimatedInput 
              value={values.message} 
              inputType='textArea' 
              label='Your Message' 
              name='message' onChange={handleChange} 
              wrapperClassName='!h-[150px] md:col-span-3 xl:col-span-1 bg-white' 
              Icon={<MessageIcon /> }/>

        <button type='submit' className='w-full bg-[#423930] flex justify-between items-center px-[30px] py-3 lg:py-[18px] text-white text-base md:col-span-3 xl:col-span-1 font-gotu'>
          <span>
            Send Form
          </span>
          <ArrowRight />
        </button>
      </form>
    </div>
  )
}

export default ContactForm