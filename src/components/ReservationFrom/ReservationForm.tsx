import React, { useState, useEffect } from 'react'
import AnimatedInput from '../AnimatedInput';
import AnimatedTelInput from '../AnimatedTelInput/AnimatedTelInput';
import { ReactComponent as Arrow } from '../../assets/icons/ArrowRight.svg'
import { ReactComponent as HumanAvatar } from '../../assets/icons/humanAvatar.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mailIcon.svg'
import { DateInput } from '../../lib';
import { DateValue } from '@mantine/dates';
import AnimatedDateInput from '../AnimatedDateInput/AnimatedDateInput';
import AnimatedTimeInput from '../AnimatedTimeInput/AnimatedTimeInput';


const ReservationForm = () => {
    const [values, setValues] = useState({
        nameSurname: null,
        email: null,
        phoneNo: null,
        date: undefined,
        time: undefined
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name?: string) => {
        const value = e?.target?.value ?? e;
        const inputName = e?.target?.name ?? name;
        setValues((prevState) => ({ ...prevState, [inputName]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(values)
    }

    useEffect(() => {
      console.log('the values changed: ', values)
    
      
    }, [values])
    

    return (
        <div className='w-full p-[30px] bg-white space-y-[30px]'>
            <form onSubmit={handleSubmit} className='grid grid-cols-2 w-full gap-[30px]'>
                {/* @ts-ignore */}
                <AnimatedDateInput value={values.date} setValue={setValues} label="Reservation Date"/>
                <AnimatedTimeInput handleChange={handleChange} label="Reservation Time" value={values.time}/>
                <AnimatedInput value={values.nameSurname} inputType='text' label='Name, Surname' name='nameSurname' onChange={(e: any) => handleChange(e)} Icon={<HumanAvatar />} />
                <AnimatedInput value={values.email} inputType='text' label='E-Mail Address' name='email' onChange={(e: any) => handleChange(e)} Icon={<MailIcon />} />
                <AnimatedTelInput label={'Phone Number '} name='phoneNo' onChange={(e: any) => handleChange(e, 'phoneNo')} />
                {/* <button type='submit' className='w-full flex justify-between py-4 px-[31px] bg-[#423930] text-white text-[22px] -tracking-[0.02em] leading-[28px] font-gotu'>
                    <span>
                        Make Reservation
                    </span>
                    <Arrow className='text-white' />
                </button> */}
            </form>

        </div>
    )
}





export default ReservationForm