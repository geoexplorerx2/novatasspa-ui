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
import { 
  TRANSLATING__BOOK__NOW,
  TRANSLATING_NAME_SURNAME, 
  TRANSLATING_PHONE_NUMBER,
  TRANSLATING_EMAIL,
} from '../../data/services';

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
  // }s

  // useEffect(() => { 
  //   console.log('the values changed: ', values)


  // }, [values])

  // useEffect(() => {
  //   console.log('errors', errors)
  // }, [errors])

  // console.log('serverRes', serverRes)


  return (
    <div className='w-full bg-white space-y-[30px]'>
      <div className='flex flex-col pt-5 text-red-700'>
        {serverRes?.data}
        {/* {errors?.booking_name_surname && <div className='border-2 border-red-600 bg-red-600 rounded-md p-3 mb-3 w-fit text-white'><img className='w-6 inline mr-3' src={exclamationMark} alt='' />{errors?.booking_name_surname}</div>}*/}
      </div>
      <div>
        {handleSubmit ?? handleSubmit()}
      </div>

      {serverRes?.data?.code === '200' ?

        <div className='flex flex-col items-center space-y-[20px] px-5'>
          <h2 className='text-[black] text-[28px] font-semibold'>
            Thank you for your Booking !
          </h2>
          <p className='text-lg text-center max-w-[500px]'>
            {serverRes?.data}
          </p>
        </div>
        :
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-8'>
           
        {/* @ts-ignore */}
          <AnimatedDateInput
            handleChange={handleChange}
            //   value={values.date} 
            // setValue={setValues} 
            label="Reservation Date"
            errors={errors}
            wrapperClassNames='col-span-2 md:col-span-1'
          />

          <AnimatedTimeInput
            handleChange={handleChange}
            label="Reservation Time"
            // value={values.time}
            errors={errors}
            wrapperClassNames='col-span-2 md:col-span-1'
          />

          <AnimatedInput
            // value={values.nameSurname} 
            inputType='text'
            label={TRANSLATING_NAME_SURNAME}
            name='booking_name_surname'
            handleChange={handleChange}
            // onChange={(e: any) => handleChange(e)}
            Icon={<HumanAvatar />}
            wrapperClassName={`transition-all bg-[#F7F7F7] hover:bg-white rounded-[10px] col-span-2 md:col-span-1`}
            focusStateStyles='bg-white'
            errors={errors}
            
          />

          <GuestsInput
            label='Guests'
            // value={values.guestsCount} 
            // handleChange={handleGuestsChange}
            handleChange={handleChange}
            errors={errors}
            wrapperClassNames='col-span-2 md:col-span-1 col-span-2 md:col-span-1'
          />

          <AnimatedTelInput
            label={TRANSLATING_PHONE_NUMBER}
            name='phone'
            onChange={(e: any) => handleChange(e, 'phone')}
            wrapperClassName={`transition-all bg-[#F7F7F7] hover:bg-white rounded-[10px] col-span-2 md:col-span-1`}
            focusStateStyles='bg-white'
            errors={errors}
          />

          <AnimatedInput
            // value={values.email} 
            inputType='text'
            label={TRANSLATING_EMAIL}
            name='email'
            onChange={(e: any) => handleChange(e)}
            Icon={<AtSignIcon />}
            wrapperClassName={`transition-all bg-[#F7F7F7] hover:bg-white rounded-[10px] col-span-2 md:col-span-1`}
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
              {TRANSLATING__BOOK__NOW}
            </span>
          </button>
          </div>
         

        </form>
      }
    </div>
  )
}





export default BookingForm