import './App.css';

import {useEffect} from 'react';

import Blogs from './components/blogs/Blogs';

import Main from './components/main/Main';
import ReactGa from 'react-ga4';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactGa.initialize('G-RYN7V761TD');



function App() {

  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
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