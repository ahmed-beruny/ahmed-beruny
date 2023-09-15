import React from 'react'
import { useState } from 'react'
import './blogs.css'
export default function Addblogs() {

  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const formSubmit = async() => {

    const blog = {author, image, content};
    console.log(blog);

    const res = await fetch('https://myblogs-d2xr.onrender.com/api/myblogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    });

    if(res.status === 200){
      alert('Blog added successfully');
    }else{
      console.log(res);
      alert('Something went wrong');
    }
  }

  const convert64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result)
      console.log(reader.result);
    }
  }



  return (
    <div className='addBlogs'>
      <form onSubmit={
        (e) => {
          e.preventDefault();
          formSubmit();
        }
      }>
        <div className='form-group'>
          <label htmlFor='author'>Author</label>
          <input required type='text' className='form-control' id='author' placeholder='Enter Author' onChange={
            (e) => {
              setAuthor(e.target.value)
            }
          } />
        </div>

        <div className='form-group'>
          <label htmlFor='image'>Image</label>
          <input required type='file' className='form-control-file' id='image' onChange={convert64} />
        </div>

        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <textarea required className='form-control' id='content' rows='3' onChange={
            (e) => {
              setContent(e.target.value)
            }
          }></textarea>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>

        </form>
    </div>
  )
}
