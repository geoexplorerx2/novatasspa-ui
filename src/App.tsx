import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import Routers from './routers';

interface AppProps {
};

const App: FC<AppProps> = () => {
  const GTAG_MANAGER_ID: any = process.env.REACT_APP_GTAGMANAGER_ID;
  const tagManagerArgs = {
    gtmId: GTAG_MANAGER_ID
  };

  TagManager.initialize(
    tagManagerArgs
  );


  useLayoutEffect(() => {
    localStorage.setItem('activeLang', 'en')
  }, [])

  
  return (
    <Router>
      <MasterHeader />
      <Routers />
      <FloatingWhatsApp
        accountName={'Nova Tas Spa'}
        phoneNumber={'+905417600248'}
      />
      <MasterFooter />
    </Router>
  );

};

export default App;
