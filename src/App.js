import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Navigation } from './components/Navigation';

import './App.css';
import { useState } from 'react';

function App() {
  const [signedIn, setSignedIn ] = useState(false);

  return (
    <Router>
        <Navigation signedIn={signedIn} setSignedIn={setSignedIn}/>
        <Routes>
          <Route path='/' element={<Home  signedIn={signedIn} setSignedIn={setSignedIn}/>} />      
          <Route path='/dashboard' element={<Dashboard  signedIn={signedIn} setSignedIn={setSignedIn}/>} />
        </Routes>      
    </Router>
  );
}

export default App;
