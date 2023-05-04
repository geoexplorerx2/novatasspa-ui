import React from 'react'
import saunaImage from '../../assets/images/sauna.png'
import AnimatedInput from '../AnimatedInput'
import { ReactComponent as MailIcon } from '../../assets/icons/mailIcon.svg'


const NewsLetter = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    }
  return (
    <div className='container mb-[250px]'>
        <div className='grid stack'>
            <img src={saunaImage} className='w-full' alt='sauna image'/>
            <div className='bg-black bg-opacity-[0.75] text-white flex justify-center pt-9'>
                <div className='w-full max-w-[619px] flex flex-col items-start space-y-4'>
                    <div className='flex flex-col items-start space-y-[10px]'>
                        <h2 className='text-4xl font-gotu'>Newsletter</h2>
                        <p className='text-xl opacity-50'>Subscribe now!</p>

                    </div>
                    <form className='w-full' onSubmit={handleSubmit}>

                    <AnimatedInput label='Your Number' inputType='text' wrapperClassName='w-full' labelClassNames='text-white text-[14px]' Icon={<MailIcon className='text-white'/>} focusStateStyles='border-white'/>
                    <button type='submit' className='bg-[#B2A285] w-full mt-6 py-6'> Register </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter