import React from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import HistorySection from '../../components/HistorySection/HistorySection';

const Homepage = () => {
  return (
    <div className='container h-screen'>
        <HeroCarousel />
        <HistorySection />
    </div>
  )
};

export default Homepage;