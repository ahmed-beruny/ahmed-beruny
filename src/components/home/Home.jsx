import React from 'react'
import './home.css'
import myImg from '../../assets/head.jpg'

export default function Home() {
  return (
    <div className='home-container'>

      <div className='home-socials'>
          <div className="socials github">
            <i class="uil uil-github-alt"></i>
          </div>
          <div className="socials linkedin">
          <i class="uil uil-linkedin"></i>
          </div>
          <div className="socials insta">
          <i class="uil uil-instagram"></i>
          </div>
          <div className="socials fb">
          <i class="uil uil-facebook-f"></i>
          </div>
          <div className="socials discord">
          <i class="uil uil-discord"></i>
          </div>
      </div>

      <div className="home-intro">

        <h1>Ahmed Al Beruny</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa neque alias rerum placeat officiis quia delectus libero ex rem laborum.</p>

      </div>
      <div>
        <img className='home-img' src={myImg} alt="" />
      </div>

    </div>
  )
}
