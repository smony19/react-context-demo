import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Navigation } from './components/Navigation';

import './App.css';
import { useState } from 'react';

export const userContext = createContext();

function App() {
  const [signedIn, setSignedIn ] = useState(false);

  return (
    <Router>
        <userContext.Provider value={[signedIn, setSignedIn]}>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />      
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>      
        </userContext.Provider>
    </Router>
  );
}

export default App;
