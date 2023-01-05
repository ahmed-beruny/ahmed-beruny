import React from 'react'
import './skills.css'
import Programming_Language from './skill_components/programming_language/Programming_Language'
export default function Skills() {
  return (
    <div className='skills-container'>
      <div className='skills-title'>
        <h1>Skills</h1>
      </div>
      <div className='skill-details'>
        <Programming_Language/>
        <Programming_Language/>
        <Programming_Language/>
        <Programming_Language/>

      </div>
      
    </div>
  )
}
