import React, { useState } from 'react'
import AnimatedInput from '../AnimatedInput';
import { ReactComponent as  HumanAvatar } from '../../assets/icons/humanAvatar.svg'
import { ReactComponent as  MailIcon } from '../../assets/icons/mailIcon.svg'
import { ReactComponent as Arrow } from '../../assets/icons/ArrowRight.svg'
import AnimatedTelInput from '../AnimatedTelInput/AnimatedTelInput';
 

const ReservationForm = () => {

    const [ values, setValues ] = useState({
        nameSurname: null,
        email: null,
        phoneNo: null,
        
  
      })
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name?: string) => {
        const value = e?.target?.value ?? e;
        const inputName = e?.target?.name ?? name;
        setValues((prevState) => ({...prevState, [inputName] : value }))
      }
  
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log(values)
      }
    
  
  return (
    <div className='w-[450px] p-[30px] bg-white space-y-[30px]'>
        <h3 className='text-2xl font-gotu '>Online Reservation Form</h3>
        <form onSubmit={handleSubmit} className='space-y-[30px]'>
                <AnimatedInput value={values.nameSurname} inputType='text' label='Name, Surname' name='nameSurname' onChange={(e: any) => handleChange(e)} Icon={<HumanAvatar />} />
                <AnimatedInput value={values.email} inputType='text' label='E-Mail Address' name='email' onChange={(e: any) => handleChange(e)} Icon={<MailIcon />}/>
                <AnimatedTelInput label={'Phone Number '} />
                <button type='submit' className='w-full flex justify-between py-4 px-[31px] bg-[#423930] text-white text-[22px] -tracking-[0.02em] leading-[28px] font-gotu'>
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