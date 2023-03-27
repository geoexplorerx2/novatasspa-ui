import React from 'react'
import SectionBackground from '../../components/SectionBackground/SectionBackground'
import massageImage from '../../assets/images/massageImage.png'
import {ReactComponent as ArrowRight} from '../../assets/icons/ArrowRight.svg'
import twelve from '../../assets/icons/twelve.svg'
import {ReactComponent as Leaf} from '../../assets/icons/leaf.svg';

const ExperienceSection = () => {
  return (
    <div> 
        <SectionBackground wrapperClassNames='h-[1050px] my-20'>
            <div className='container grid grid-cols-2'>
                <div className='h-full w-full max-w-[600px] flex flex-col space-y-[30px] items-start justify-center'>
                    <div className='flex space-x-4'>
                        <Leaf className='text-white'/>
                        <Leaf className='text-white rotate-[175deg]'/>
                    </div>
                    <h2 className='text-white text-[64px] font-gotu leading-[74px] tracking-tighter'>Beauty and Success Start Here</h2>
                    <p className='text-white text-lg '>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                    <button className='flex justify-between border border-white text-white px-8 py-4'>Learn More <ArrowRight className='ml-[30px]'/> </button>
                </div>
                <div className='relative w-[690px] h-[767px] -top-[53px]'>
                    <img src={massageImage} alt="massaging image" className=''/>
                    <div className='absolute -left-8 bottom-[30px] bg-white py-14 px-12'> 
                        <img src={twelve} alt='twelve' />
                        <span className='text-'>Years<br /> Experience</span>
                     </div>
                </div>
            </div>
        </SectionBackground>
    </div>
  )
}

export default ExperienceSection