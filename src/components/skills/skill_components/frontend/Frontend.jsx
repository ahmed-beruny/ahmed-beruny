import React from 'react'
import './frontend.css'

export default function Frontend() {
  return (
    <div className='pl-skill-card'>
    <div className='skill-title'>Frontend</div>
    <div className='skill-element'>
        <span className='progress-title html'>Html</span>
    <div className='progress-line'><span></span></div>
    </div>

    <div className='skill-element css'>
        <span className='progress-title'>CSS</span>
        <div className='progress-line'><span></span></div>
    </div>

    <div className='skill-element react'>
        <span className='progress-title'>React</span>
        <div className='progress-line'><span></span></div>
    </div>

    <div className='skill-element js'>
        <span className='progress-title'>JS</span>
        <div className='progress-line'><span></span></div>
    </div>


</div>
  )
}
