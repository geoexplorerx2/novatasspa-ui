import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/Map/Map';
import SocialmediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import { ReactComponent as PhoneCallIcon } from '../../assets/icons/phoneCallIcon.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mailIcon.svg'
import GoogleMap from '../../components/Map/GoogleMap';
import {TRANSLATING_PHONE_NUMBER} from '../../data/services'


const Contact = () => {
  return (
    <div className='container xl:h-screen'>
      <div className='container grid grid-cols-1 xl:grid-cols-3 gap-x-[30px] lg:mt-4 my-[30px] lg:px-9 2xl:px-0 '>
        <div className='flex flex-col w-full col-span-2 justify-between'>
          {/* <Map wrapperClassNames='col-span-2' /> */}
          <GoogleMap wrapperClassNames='col-span-2 h-[400px]'/>
          <div className='grid xl:grid-cols-5 grid-cols-1 mb-[25px] px-5 md:px-0'>

            <div className='w-full flex flex-col md:flex-row md:justify-between md:space-x-[38px] col-span-3 mt-9 mx-auto'>
              <div className='flex space-x-5 items-center mb-5'>
                <PhoneCallIcon />
                <div className='flex flex-col items-start just'>
                  <span className='text-sm font-normail text-black opacity-50'>
                    {TRANSLATING_PHONE_NUMBER}
                  </span>
                  <span>
                    <a href='tel:+905417600248' className='font-semibold text-[#0D0D0D] lg:text-lg text-sm'>
                      +90 541 760 0248
                    </a>
                  </span>
                </div>
              </div>
              <div className='flex space-x-5 items-center'>
                <MailIcon />
                <div className='flex flex-col items-start just'>
                  <span className='text-sm font-normail text-black opacity-50'>
                    Contact E-Mail
                  </span>
                  <span>
                    <a href='mailto:info@novatas.com' className='font-semibold text-[#0D0D0D] lg:text-lg text-sm'>
                      info@novatasspa.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-span-2 mt-9'>
              <SocialmediaIcons />
            </div>
          </div>

        </div>
        <div className='px-5 lg:px-0 w-full col-span-2 xl:col-span-1 mt-[30px] lg:mt-4 2xl:mt-0'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
};

export default Contact;