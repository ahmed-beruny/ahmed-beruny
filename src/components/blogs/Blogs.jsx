import React from 'react'
import { useState, useEffect } from 'react'
import Blogcart from './blog-card/Blog_card'
//import Addblogs from './Addblogs'
import Popup from '../popup/Popup'
import './blogs.css'
export default function Blogs() {
  const [showPopup, setShowPopup] = React.useState(false)
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch('https://myblogs-d2xr.onrender.com/api/myblogs');
      const data = await res.json();
      //reverse the array to show the latest blog first
      data.reverse();
      //only first 4 blogs
      //data.splice(10);
      setBlogs(data);
    }
    getBlogs();
  }, []);
  return (
    <div className='blogs-container' id='blogs'>
      <div className='contacts-title'>
        <h1>Blogs</h1>

        <button className='add-blog-btn' onClick={()=>setShowPopup(true)}>Write Something</button>

        <Popup trigger={showPopup} setTrigger = {
          setShowPopup
        }>
          {/* <Addblogs /> */}
          
        </Popup>
      </div>

      <div className='card-container'>

        {
          blogs.map((blog) => (
            <Blogcart blog={blog} />
          ))
        }

        {/* <Blogcart />
        <Blogcart />
        <Blogcart />
        <Blogcart /> */}

      </div>

    </div>
  )
}
