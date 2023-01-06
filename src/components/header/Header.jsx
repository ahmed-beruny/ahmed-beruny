import React from 'react'
import { Link } from 'react-scroll'
import './header.css'

export default function Header() {
  return (
    <div className='header-container'>

      <div className='nav-bar'>

      <div className="logo">
        BERUNY
      </div>

      <div className="nav-bar-center">
        <div className="nav-item"> <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link> </div>
        <div className="nav-item"><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></div>
        <div className="nav-item"><Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></div>
        <div className="nav-item"><Link activeClass="active" to="works" spy={true} smooth={true} offset={50} duration={500}>Works</Link></div>
        <div className="nav-item"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></div>
      </div>

      <div className="toggle">
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>

    </div>


      <h1 className='head-text'>. . .</h1>
    </div>
  )
}