import React from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import HistorySection from '../../components/HistorySection/HistorySection';
import MessageTypesSection from '../../components/MessageTypesSection/MessageTypesSection';
import PricesListSection from '../../components/PricesListSection/PricesListSection';
import ExperienceSection from './ExperienceSection';
import OurServices from './OurServices';

const Homepage = () => {
  return (
    <div className=''>
      <HeroCarousel />
      <ExperienceSection />
      <OurServices />
      <HistorySection />
      <MessageTypesSection />
      <PricesListSection />
    </div>
  )
};

export default Homepage; 