import React from 'react'
import './skills.css'
import Backend from './skill_components/backend/Backend'
import Database from './skill_components/database/Database'
import Frontend from './skill_components/frontend/Frontend'
import ProgrammingLanguage from './skill_components/programming_language/Programming_Language'
export default function Skills() {
  return (
    <div className='skills-container'>
      <div className='skills-title'>
        <h1>Skills</h1>
      </div>
      <div className='skill-details'>
        <Frontend />
        <Backend />
        <ProgrammingLanguage />
        <Database />
  
      </div>
      
    </div>
  )
}
