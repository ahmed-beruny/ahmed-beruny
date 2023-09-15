import './App.css';

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