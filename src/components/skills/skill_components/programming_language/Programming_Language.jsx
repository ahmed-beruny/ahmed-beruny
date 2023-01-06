import React from 'react'
import './programming_language.css'

export default function Programming_Language() {
  return (
    <div className='pl-skill-card'>
        <div className='skill-title'>Programming Language</div>
        <div className='skill-element'>
            <span className='progress-title'>C++</span>
        <div className='progress-line'><span className='cpp'></span></div>
        </div>

        <div className='skill-element'>
            <span className='progress-title'>Javascript</span>
            <div className='progress-line'><span className='javascript'></span></div>
        </div>

        <div className='skill-element'>
            <span className='progress-title'>C#</span>
        <div className='progress-line'><span className='chash'></span></div>
        </div>

        <div className='skill-element'>
            <span className='progress-title'>Python</span>
        <div className='progress-line'><span className='python'></span></div>
        </div>

        <div className='skill-element'>
            <span className='progress-title'>Typescript</span>
        <div className='progress-line'><span className='typescript'></span></div>
        </div>
    </div>
  )
}
