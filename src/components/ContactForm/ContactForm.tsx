import React, { FC, useEffect, useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import AnimatedInput from '../AnimatedInput';
import AnimatedTelInput from '../AnimatedTelInput/AnimatedTelInput';
import { ReactComponent as ArrowRight } from '../../assets/icons/ArrowRight.svg'

const ContactForm: FC = () => {
  const [values, setValues] = useState({
    nameSurname: null,
    email: null,
    phoneNo: null,
    message: null

  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name?: string) => {
    const value = e?.target?.value ?? e;
    const inputName = e?.target?.name ?? name;
    setValues((prevState) => ({ ...prevState, [inputName]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(values)
  }


  useEffect(() => {
    // console.log('the form values are : ', values)
  },
    [values])


  return (
    <div className='w-full xl:w-[450px] rounded-[30px] pt-[37px] pb-[30px] px-[30px] bg-white dark:bg-[#0b0b0b]' style={{"height":"min-content"}}>
        <span className='text-2xl font-normal dark:text-white'>
           Contact Form
        </span>
          <form className='w-full space-y-[30px] md:space-y-0 2xl:space-y-[30px] md:gap-4 2xl:gap-0 mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1' onSubmit={ handleSubmit } >
              <AnimatedInput value={values.nameSurname} inputType='text' label='Name, Surname' name='nameSurname' onChange={(e: any) => handleChange(e)}/>
              <AnimatedInput value={values.email} inputType='text' label='Your Email' name='email' onChange={(e: any) => handleChange(e)}/>
              <AnimatedTelInput value={values.phoneNo} inputType='text' label='Your Number' name='phoneNo' onChange={(e: any) => handleChange(e, 'phoneNo')} />
              {/* <AnimatedInput value={values.phoneNo} inputType='text' label='Phone Number' name='phoneNo' onChange={(e: any) => handleChange(e)}/> */}
              <AnimatedInput value={values.message} inputType='textArea' label='Your Message' name='message' onChange={(e: any) => handleChange(e)} wrapperClassName='h-[150px] md:col-span-3 xl:col-span-1'/>
              <button type='submit' className='w-full bg-[#423930] flex justify-between items-center px-[30px] py-3 lg:py-[18px] text-white text-base rounded-[10px] md:col-span-3 xl:col-span-1 font-gotu'> 
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