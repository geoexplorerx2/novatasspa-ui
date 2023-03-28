import React from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import HistorySection from '../../components/HistorySection/HistorySection';
import TrustedCompaniesSection from '../../components/TrustedCompanies/TrustedCompaniesSection';
import MessageTypesSection from '../../components/MessageTypesSection/MessageTypesSection';
import PricesListSection from '../../components/PricesListSection/PricesListSection';
import ExperienceSection from './ExperienceSection';
import OurServices from './OurServices';
import ReservationSection from './ReservationSection';

const Homepage = () => {
  return (
    <div className=''>
      <HeroCarousel />
      <ExperienceSection />
      <OurServices />
      <HistorySection />
      <MessageTypesSection />
      <PricesListSection />
      <TrustedCompaniesSection />
      <ReservationSection />
    </div>
  )
};

export default Homepage; 