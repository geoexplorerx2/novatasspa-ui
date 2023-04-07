import React, { useState, useEffect } from 'react'
import AnimatedInput from '../AnimatedInput';
import AnimatedTelInput from '../AnimatedTelInput/AnimatedTelInput';
import { ReactComponent as Arrow } from '../../assets/icons/ArrowRight.svg'
import { ReactComponent as HumanAvatar } from '../../assets/icons/human-avatar.svg'
import { ReactComponent as AtSignIcon } from '../../assets/icons/at-sign-icon.svg'
import AnimatedDateInput from '../AnimatedDateInput/AnimatedDateInput';
import AnimatedTimeInput from '../AnimatedTimeInput/AnimatedTimeInput';
import GuestsInput from '../GuestsInput/GuestsInput';
import ChooseHamam from '../ChooseHammam/ChooseHammam';
import ChooseMassage from '../ChooseMasssageType/ChooseMassageType';


const BookingForm = () => {
    const [values, setValues] = useState({
        nameSurname: '',
        email: '',
        phoneNo: null,
        date: undefined,
        time: undefined,
        guestsCount: { maleCount: 1, femaleCount: 1}
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name?: string) => {
        const value = e?.target?.value ?? e;
        const inputName = e?.target?.name ?? name;
        setValues((prevState) => ({ ...prevState, [inputName]: value }))
    }

    const handleGuestsChange = () => {

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
                <AnimatedInput value={values.nameSurname} inputType='text' label='Name, Surname' name='nameSurname' onChange={(e: any) => handleChange(e)} Icon={<HumanAvatar />}  wrapperClassName={`transition-all bg-[#F7F7F7] hover:bg-white rounded-[10px]`} focusStateStyles='bg-white'/>
                <GuestsInput label='Guests' value={values.guestsCount} handleChange={handleGuestsChange}/>
                <AnimatedTelInput label={'Phone Number '} name='phoneNo' onChange={(e: any) => handleChange(e, 'phoneNo')} wrapperClassName={`transition-all bg-[#F7F7F7] hover:bg-white rounded-[10px]`} focusStateStyles='bg-white'/>
                <AnimatedInput value={values.email} inputType='text' label='E-Mail Address' name='email' onChange={(e: any) => handleChange(e)} Icon={<AtSignIcon />} wrapperClassName={`transition-all bg-[#F7F7F7] hover:bg-white rounded-[10px]`} focusStateStyles='bg-white'/>
                <ChooseHamam />
                <ChooseMassage />
                <button type='submit' className='w-full col-span-2 flex justify-center py-4 px-[31px] rounded-[10px] bg-[#B2A285] text-white text-[22px] -tracking-[0.02em] leading-[28px] font-gotu'>
                    <span className=''>
                        Book Now
                    </span>
                </button>
            </form>

        </div>
    )
}





export default BookingForm