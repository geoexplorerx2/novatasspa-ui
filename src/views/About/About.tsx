import React from 'react';
import { Service } from '../../components';
import { SERVICES_DATA } from '../../data/services';

const About = () => {
  return (
    <div className='container'>
      <Service data={SERVICES_DATA[0]} />
    </div>
  )
};

export default About;