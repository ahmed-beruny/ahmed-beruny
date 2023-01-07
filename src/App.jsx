import './App.css';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <About />
      <Contacts />
      <Footer />
      
    </div>
  );
}

export default App;