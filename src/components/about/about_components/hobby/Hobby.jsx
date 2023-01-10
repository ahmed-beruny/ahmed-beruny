import React from 'react'
import './hobby.css'
import cf from '../../../../assets/cp_logos/code-forces.ico'
import lc from '../../../../assets/cp_logos/leetcode.ico'
import cc from '../../../../assets/cp_logos/codechef.png'

export default function Hobby() {
  return (
    <div className='cp-container'>
        <div className='cp-title'>
            <h1>CP Platform</h1>
        </div>
        <div className="cp-content">
          <a href="https://codeforces.com/profile/AhmedBeruny"><img src={cf} alt="" /></a>
          <a href="https://leetcode.com/beruny10/"><img src={lc} alt="" /></a>
          <a href="https://www.codechef.com/users/beruny_1603029"><img className='cc' src={cc} alt="" /></a>
          
        </div>
    </div>
  )
}
