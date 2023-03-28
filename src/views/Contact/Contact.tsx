import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/Map/Map';

const Contact = () => {
  return (
    <div className='container h-screen'>
         <div className='container grid grid-cols-1 xl:grid-cols-3 gap-x-[30px] lg:mt-4 my-[30px] lg:px-9 2xl:px-0'>
          <Map wrapperClassNames='col-span-2'/>
          <div className='px-5 lg:px-0 w-full col-span-2 xl:col-span-1 mt-[30px] lg:mt-4 2xl:mt-0'>
            <ContactForm />
          </div>
        </div>
    </div>
  )
};

export default Contact;