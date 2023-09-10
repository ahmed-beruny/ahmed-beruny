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
        <div className="nav-item"><Link activeClass="active" to="blogs" spy={true} smooth={true} offset={50} duration={500}>Blogs</Link></div>
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


      <h2 className='head-text'><h1>Hello . . !</h1><br/><div className='texts'>I am thrilled that you have taken the time to visit and learn more about my work. Please take a look around and feel free to reach out with any questions or comments you may have.</div></h2>
    </div>
  )
}