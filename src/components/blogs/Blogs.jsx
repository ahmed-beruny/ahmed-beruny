import React from 'react'
import Blogcart from './blog-card/Blog_card'
import './blogs.css'
export default function Blogs() {
  return (
    <div className='blogs-container' id='blogs'>
      <div className='contacts-title'>
        <h1>Blogs</h1>
      </div>

      <div className='card-container'>

        <Blogcart />
        <Blogcart />
        <Blogcart />
        <Blogcart />

      </div>

    </div>
  )
}
