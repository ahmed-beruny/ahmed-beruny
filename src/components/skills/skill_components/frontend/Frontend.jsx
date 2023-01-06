import React from 'react'
import './frontend.css'

export default function Frontend() {
  return (
    <div className='pl-skill-card'>
    <div className='skill-title'>Frontend</div>
    <div className='skill-element'>
        <span className='progress-title'>Html</span>
    <div className='progress-line'><span className='html'></span></div>
    </div>

    <div className='skill-element'>
        <span className='progress-title'>CSS</span>
        <div className='progress-line'><span className='css'></span></div>
    </div>

    <div className='skill-element'>
        <span className='progress-title'>React</span>
        <div className='progress-line'><span className='react'></span></div>
    </div>

    <div className='skill-element'>
        <span className='progress-title'>JS</span>
        <div className='progress-line'><span className='js'></span></div>
    </div>
    
    <div className='skill-element'>
        <span className='progress-title'>ASP.Net</span>
        <div className='progress-line'><span className='asp'></span></div>
    </div>


</div>
  )
}
