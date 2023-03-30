import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import Routers from './routers';

interface AppProps {
};

const App: FC<AppProps> = () => {

  return (
    <Router>
      <MasterHeader />
      <Routers />
      <MasterFooter />
    </Router>
  );
  
};

export default App;
