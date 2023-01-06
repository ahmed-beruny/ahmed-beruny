import React from 'react'
import './education.css'

export default function Education() {
  return (
    <div className='education-container'>
        <div className="title">
            <h1>Education</h1>
        </div>
            <div className='education'>
            <div className="school">
                <h3>School</h3>
                <a href="https://rcs.edu.bd/" target="_blank"><h2>Rajshahi Collegiate School</h2></a>
            </div>
            <div className="college">
                <h3>College</h3>
                <a href="http://rc.edu.bd/" target="_blank"><h2>Rajshahi College</h2></a>
                
            </div>

            <div className="university">
                <h3>University</h3>
                <a href="https://www.ruet.ac.bd/" target="_blank"><h2>Rajshahi University of Engineering & Technology</h2></a>
                
            </div>
        </div>
    </div>
  )
}
