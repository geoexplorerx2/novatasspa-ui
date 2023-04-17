import React, { useState, useEffect, FC } from 'react'
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
import exclamationMark from '../../assets/icons/exclamation.png'
import checkMark from '../../assets/icons/checkMark.png'


interface BookingFormProps {
  handleChange?: any;
  handleSubmit?: any;
  errors?: any;
  serverRes?: any;
};

const BookingForm: FC<BookingFormProps> = ({ handleChange, handleSubmit, errors, serverRes }) => {
  // const [values, setValues] = useState({
  //     nameSurname: '',
  //     email: '',
  //     phoneNo: null,
  //     date: undefined,
  //     time: undefined,
  //     guestsCount: { maleCount: 1, femaleCount: 1}
  // })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name?: string) => {
  //     const value = e?.target?.value ?? e;
  //     const inputName = e?.target?.name ?? name;
  //     setValues((prevState) => ({ ...prevState, [inputName]: value }))
  // }

  // const handleGuestsChange = () => {

  // }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     console.log(r)
  // }

  // useEffect(() => { 
  //   console.log('the values changed: ', values)


  // }, [values])

  useEffect(() => {
    console.log('errors', errors)
  }, [errors])


  return (
    <div className='w-full p-[30px] bg-white space-y-[30px]'>
      <div className='flex flex-col'>
        {/* {serverRes?.data} */}
        {errors?.booking_name_surname && <div className='border-2 border-red-600 bg-red-600 rounded-md p-3 mb-3 w-fit text-white'><img className='w-6 inline mr-3' src={exclamationMark} alt='' />{errors?.booking_name_surname}</div>}
        {errors?.date && <div className='border-2 border-red-600 bg-red-600 rounded-md p-3 mb-3 w-fit text-white'><img className='w-6 inline mr-3' src={exclamationMark} alt='' />{errors?.date}</div>}
        {errors?.phone && <div className='border-2 border-red-600 bg-red-600 rounded-md p-3 mb-3 w-fit text-white'><img className='w-6 inline mr-3' src={exclamationMark} alt='' />{errors?.phone}</div>}
        {errors?.email && <div className='border-2 border-red-600 bg-red-600 rounded-md p-3 mb-3 w-fit text-white'><img className='w-6 inline mr-3' src={exclamationMark} alt='' />{errors?.email}</div>}
        {errors?.hammam && <div className='border-2 border-red-600 bg-red-600 rounded-md p-3 mb-3 w-fit text-white'><img className='w-6 inline mr-3' src={exclamationMark} alt='' />{errors?.hammam}</div>}
        {errors?.massages && <div className='border-2 border-red-600 bg-red-600 rounded-md p-3 mb-3 w-fit text-white'><img className='w-6 inline mr-3' src={exclamationMark} alt='' />{errors?.massages}</div>}
      </div>
      <div>
        {handleSubmit ?? handleSubmit()}
      </div>

      {serverRes?.data ? <div className='border-2 border-green-600 bg-green-600 rounded-md p-5 mb-3 w-fit text-white text-xl mx-auto'><img className='w-8 inline mr-3' src={checkMark} alt='' />Thank you</div> :

        <form onSubmit={handleSubmit} className='grid grid-cols-2 w-full gap-[30px]'>
          {/* @ts-ignore */}

          <AnimatedDateInput
            handleChange={handleChange}
            //   value={values.date} 
            // setValue={setValues} 
            label="Reservation Date"
            errors={errors}
          />

          <AnimatedTimeInput
            handleChange={handleChange}
            label="Reservation Time"
            // value={values.time}
            errors={errors}
          />

          <AnimatedInput
            // value={values.nameSurname} 
            inputType='text'
            label='Name, Surname'
            name='booking_name_surname'
            handleChange={handleChange}
            // onChange={(e: any) => handleChange(e)}
            Icon={<HumanAvatar />}
            wrapperClassName={`transition-all bg-[#F7F7F7] hover:bg-white rounded-[10px]`}
            focusStateStyles='bg-white'
            errors={errors}
          />

          <GuestsInput
            label='Guests'
            // value={values.guestsCount} 
            // handleChange={handleGuestsChange}
            handleChange={handleChange}
          />

          <AnimatedTelInput
            label={'Phone Number '}
            name='phoneNo'
            onChange={(e: any) => handleChange(e, 'phone')}
            wrapperClassName={`transition-all bg-[#F7F7F7] hover:bg-white rounded-[10px]`}
            focusStateStyles='bg-white'
            errors={errors}
          />

          <AnimatedInput
            // value={values.email} 
            inputType='text'
            label='E-Mail Address'
            name='email'
            onChange={(e: any) => handleChange(e)}
            Icon={<AtSignIcon />}
            wrapperClassName={`transition-all bg-[#F7F7F7] hover:bg-white rounded-[10px]`}
            focusStateStyles='bg-white'
            errors={errors}
          />

          <ChooseHamam onChange={handleChange} errors={errors} name='hammam' />

          <ChooseMassage onChange={handleChange} errors={errors} name='massages' />

          <button
            type='button'
            onClick={handleSubmit}
            className='w-full col-span-2 flex justify-center py-4 px-[31px] rounded-[10px] bg-[#B2A285] text-white text-[22px] -tracking-[0.02em] leading-[28px] font-gotu'
          >
            <span className=''>
              Book Now
            </span>
          </button>

        </form>
      }
    </div>
  )
}





export default BookingForm