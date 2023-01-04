import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header-container'>

      <div className='nav-bar'>

      <div className="logo">
        BERUNY
      </div>

      <div className="nav-bar-center">
        <div className="nav-item">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Skills</div>
        <div className="nav-item">Services</div>
        <div className="nav-item">Contacts</div>
      </div>

      <div className="toggle">
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>

    </div>


      <h4 className='head-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illum quisquam, eligendi vel repellat eveniet.</h4>
    </div>
  )
}

