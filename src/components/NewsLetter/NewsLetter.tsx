import React from 'react'
import saunaImage from '../../assets/images/sauna.png'
import saunaMobileImage from '../../assets/images/SaunaVertical.png'
import AnimatedInput from '../AnimatedInput'
import { ReactComponent as MailIcon } from '../../assets/icons/mailIcon.svg'


const NewsLetter = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    }
  return (
    <div className='container mb-[200px] lg:mb-[250px] px-[30px] lg:px-0'>
        <div className='grid stack'>
            <img src={saunaImage} className='w-full hidden lg:inline-block' alt='sauna image'/>
            <div
        className='lg:hidden h-[345px] bg-no-repeat bg-center bg-cover' 
        style={{ backgroundImage: `url(${saunaMobileImage})` }}
          />
            <div className='bg-black bg-opacity-[0.55] lg:bg-opacity-[0.75] text-white flex justify-center pt-9'>
                <div className='w-full max-w-[619px] flex flex-col items-start space-y-8 lg:space-y-4'>
                    <div className='w-full lg:w-auto flex flex-col items-center lg:items-start space-y-[10px] '>
                        <h2 className='text-3xl lg:text-4xl font-gotu'>Newsletter</h2>
                        <p className='text-xl opacity-50'>Subscribe now!</p>

                    </div>
                    <form className='w-full px-4' onSubmit={handleSubmit}>

                    <AnimatedInput label='Your Number' inputType='text' wrapperClassName='w-full !h-[54px] lg:!h-[70px]' labelClassNames='text-white text-[14px]' focusStateLabelClassNames='!translate-y-2' Icon={<MailIcon className='text-white'/>} focusStateStyles='border-white'/>
                    <button type='submit' className='bg-[#B2A285] w-full mt-6 py-4 lg:py-6'> Register </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter