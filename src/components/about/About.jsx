import React from 'react'
import './about.css'
import Education from './about_components/education/Education'
import Hobby from './about_components/hobby/Hobby'
export default function About() {
  return (
    <div className='about-container' id='about'>
      <div className='about-title'>
        <h1>About</h1>
      </div>
      <div className='about-detail-container'>

        <Education />
        <Hobby />

      </div>
      
    </div>
  )
}
