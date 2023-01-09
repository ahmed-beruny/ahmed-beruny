import React from 'react'
import './home.css'
import myImg from '../../assets/head.jpg'

export default function Home() {
  return (
    <div className='home-container' id='home'>

      <div className='home-socials'>
          <div className="socials github">
            <a href="https://github.com/ahmed-beruny"><i class="uil uil-github-alt"></i></a>
            
          </div>
          <div className="socials linkedin">
            <a href="https://www.linkedin.com/in/ahmedberuny/"><i class="uil uil-linkedin"></i></a>
          
          </div>
          <div className="socials insta">
            <a href="https://www.instagram.com/ahmedberuny/"><i class="uil uil-instagram"></i></a>
          
          </div>
          <div className="socials fb">
            <a href="https://www.facebook.com/ahmed.beruny/"><i class="uil uil-facebook-f"></i></a>
          
          </div>
          <div className="socials discord">
            <a href="https://discord.gg/KR3Gc2q6tC"><i class="uil uil-discord"></i></a>
          
          </div>
      </div>

      <div className="home-intro">

        <h1>I'm <br/>Ahmed Al Beruny</h1>
        <p>I am a computer science learner with a strong interest in software engineering and programming. I have always been drawn to the field of technology and the endless possibilities it holds for solving problems and creating new solutions. Throughout my studies and professional experience, I have developed a strong foundation in programming languages and software development, and I am eager to continue learning and growing in this field. I hope to make a meaningful impact through my work and contribute to the development of innovative and impactful software.</p>

      </div>
      <div>
        <img className='home-img' src={myImg} alt="" />
      </div>

    </div>
  )
}
