import React from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import HistorySection from '../../components/HistorySection/HistorySection';
import ExperienceSection from './ExperienceSection';
import OurServices from './OurServices';

const Homepage = () => {
  return (
    <div className=''>
      <HeroCarousel />
      <ExperienceSection />
      <OurServices />
      <HistorySection />
    </div>
  )
};

export default Homepage; 