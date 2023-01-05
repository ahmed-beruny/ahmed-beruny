import React from 'react'
import './database.css'
export default function Database() {
  return (
    <div className='pl-skill-card'>
    <div className='skill-title'>Database</div>
    <div className='skill-element'>
        <span className='progress-title mysql'>My SQL</span>
    <div className='progress-line'><span></span></div>
    </div>

    <div className='skill-element mongodb'>
        <span className='progress-title'>MongoDB</span>
        <div className='progress-line'><span></span></div>
    </div>

    <div className='skill-element firebase'>
        <span className='progress-title'>Google Firebase</span>
        <div className='progress-line'><span></span></div>
    </div>


</div>
  )
}
