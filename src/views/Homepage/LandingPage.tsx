import React from 'react';
import ClearYourMindSection from '../../components/ClearYourMindSection/ClearYourMindSection';
import MessageTypesSection from '../../components/MessageTypesSection/MessageTypesSection';

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
        <MessageTypesSection />
        <ClearYourMindSection />
    </div>
  )
};

export default LandingPage;