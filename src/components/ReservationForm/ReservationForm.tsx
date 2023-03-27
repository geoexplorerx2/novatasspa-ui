import React, { useState } from 'react'
import AnimatedInput from '../AnimatedInput';
import { ReactComponent as  HumanAvatar } from '../../assets/icons/humanAvatar.svg'
import { ReactComponent as  MailIcon } from '../../assets/icons/mailIcon.svg'

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
        
            <AnimatedInput value={values.nameSurname} inputType='text' label='Name, Surname' name='nameSurname' onChange={(e: any) => handleChange(e)} Icon={<HumanAvatar />} />
            <AnimatedInput value={values.email} inputType='text' label='E-Mail Address' name='email' onChange={(e: any) => handleChange(e)} Icon={<MailIcon />}/>
       

    </div>
  )
}

export default ReservationForm