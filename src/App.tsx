import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import Routers from './routers';

interface AppProps {
};

const App: FC<AppProps> = () => {

  return (
    <Router>
      <MasterHeader />
      <Routers />
      <FloatingWhatsApp accountName={'Nova Tas Spa'} phoneNumber={'+905417600248'} />
      <MasterFooter />
    </Router>
  );
  
};

export default App;
