import './App.css';

import Blogs from './components/blogs/Blogs';

import Main from './components/main/Main';
import ReactGa from 'react-ga';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactGa.initialize('UA-182379039-1');
ReactGa.set({ page: window.location.pathname });
ReactGa.pageview(window.location.pathname + window.location.search);



function App() {

  ReactGa.event({
    category: 'User',
    action: 'User opened the website'
  });

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