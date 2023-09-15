import React from 'react'
import Header from '../header/Header';
import Skills from '../skills/Skills';
import About from '../about/About';
import Contacts from '../contacts/Contacts';
import Footer from '../footer/Footer';
import Home from '../home/Home';

export default function Main() {
  return (
    <div>
        <Header />
        <Home />
        <Skills />
        <About />
        <Contacts />
        <Footer />
    </div>
  )
}
