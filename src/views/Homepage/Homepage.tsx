import React from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import HistorySection from '../../components/HistorySection/HistorySection';
import TrustedCompaniesSection from '../../components/TrustedCompanies/TrustedCompaniesSection';
import MassageTypesSection from '../../components/MassageTypesSection/MassageTypesSection';
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
      {/* <MassageTypesSection /> */}
      <PricesListSection />
      <TrustedCompaniesSection />
      <ReservationSection />
    </div>
  )
};

export default Homepage; 