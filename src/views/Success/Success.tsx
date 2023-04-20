import React from 'react'
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';

const Success = () => {
  return (
    <div className='h-screen container mt-[7rem]'>
      <h1 className='text-[40px] font-bold font-poppins'>Thank you !</h1>
      <p className='text-[25px] mt-5'>Thank you for getting in touch! We appreciate you contacting us. Our Customer Service Representative will get back to you soon! Have a great day!</p>

      <div className='w-[50%] md:w-[15rem] mt-10'>
        <SocialMediaIcons />
      </div>
    </div>
  )
};

export default Success;