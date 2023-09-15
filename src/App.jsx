import './App.css';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Blogs from './components/blogs/Blogs';

import Main from './components/main/Main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>

  );
}

export default App;