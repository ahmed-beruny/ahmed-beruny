import React from 'react'
import './backend.css'

export default function Backend() {
  return (
    <div className='pl-skill-card'>
    <div className='skill-title'>Backend & DB</div>
    <div className='skill-element'>
        <span className='progress-title '>.NET</span>
    <div className='progress-line'><span className='dotnet'></span></div>
    </div>

    <div className='skill-element '>
        <span className='progress-title'>Node js</span>
        <div className='progress-line'><span className='nodejs'></span></div>
    </div>

    <div className='skill-element'>
        <span className='progress-title'>My SQL</span>
    <div className='progress-line'><span className='mysql'></span></div>
    </div>

    <div className='skill-element'>
        <span className='progress-title'>MongoDB</span>
        <div className='progress-line'><span className='mongodb'></span></div>
    </div>

    <div className='skill-element'>
        <span className='progress-title'>Google Firebase</span>
        <div className='progress-line'><span className='firebase'></span></div>
    </div>


</div>
  )
}
