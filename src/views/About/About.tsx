import React from 'react';
import { Service } from '../../components';
import HistorySectionAboutPage from '../../components/HistorySectionAboutPage/HistorySectionAboutPage';
import MessionVisionSection from '../../components/MessionVisionSection/MessionVisionSection';
import TrustedCompaniesSection from '../../components/TrustedCompanies/TrustedCompaniesSection';
import { SERVICES_DATA } from '../../data/services';

const About = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Service data={SERVICES_DATA[0]} />
      <TrustedCompaniesSection />
      <HistorySectionAboutPage />
      {/* <MessionVisionSection /> */}
    </div>
  )
};

export default About;