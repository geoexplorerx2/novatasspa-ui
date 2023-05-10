import React from 'react';
import RightCarousel from '../../components/RightCarousel/RightCarousel';
import LeftCarousel from '../../components/LeftCarousel/LeftCarousel';
import OilIcon from '../../assets/icons/OilIcon.svg'
import MassageIcon from '../../assets/icons/body_massage.svg'
import PoolIcon from '../../assets/icons/swimming_pool.svg'
import { ClearYourMindSection, HeroSection, InstagramImages, MassageTypesSection, NewsLetter } from '../../components';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      {/* <MassageTypesSection />
      <ClearYourMindSection /> */}
      <RightCarousel title='Special Oils' body='From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.' logo={OilIcon}  />
      <LeftCarousel  title='Body Therapy' body='From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.' logo={MassageIcon}  />
      <RightCarousel title='Pool' body='From its medieval ori gins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.' imageClass='hidden' logo={PoolIcon} bottomMargin='lg:mb-[250px]' />
      <NewsLetter />
      {/* <InstagramImages /> */}
    </>
  )
};

export default LandingPage;