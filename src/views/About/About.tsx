import React from 'react';
import { Service } from '../../components';
import HistorySectionAboutPage from '../../components/HistorySectionAboutPage/HistorySectionAboutPage';
import { SERVICES_DATA } from '../../data/services';

const About = () => {
  return (
    <div className='min-h-screen'>
      <Service data={SERVICES_DATA[0]} />
      <HistorySectionAboutPage />
    </div>
  )
};

export default About;