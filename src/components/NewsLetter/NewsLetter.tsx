import React from 'react'
import saunaImage from '../../assets/images/sauna.png'
import AnimatedInput from '../AnimatedInput'


const NewsLetter = () => {
  return (
    <div className='container'>
        <div className='grid stack'>
            <img src={saunaImage} className='w-full' alt='sauna image'/>
            <div className='bg-black bg-opacity-[0.75] text-white flex justify-center'>
                <div className='w-full max-w-[619px]'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-4xl font-gotu'>Newsletter</h2>
                        <p className='text-xl opacity-50'>Subscribe now!</p>

                    </div>
                    <AnimatedInput label='Your Number' name='' inputType='text' wrapperClassName='w-full' labelClassNames='text-white'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter