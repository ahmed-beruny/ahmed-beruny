import './App.css';

import React, {useEffect} from 'react';

import Blogs from './components/blogs/Blogs';

import Main from './components/main/Main';
import ReactGa from 'react-ga4';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactGa.initialize('G-RYN7V761TD');



function App() {

  useEffect(() => {
    ReactGa.send({ hitType: 'pageview', page: window.location.pathname });
  }
  );


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>

  );
}

export default App;