import React from 'react'
import './contacts.css'
import { useForm } from 'react-hook-form';
export default function Contacts() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = async(data) => {
    // Send email using serverless function or email service provider API
    
    console.log(data);

    const res = await fetch('https://myblogs-d2xr.onrender.com/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });



  };
  return (
    <div className='contacts-container' id='contact'>

      <div className='contacts-title'>
        <h1>Contacts</h1>
      </div>

      <div className='contacts-body'>

        <div className='contacts-left'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus consequatur vel libero!
        </div>

        <div className="contacts-form">
          <form onSubmit= {handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" {...register("name", { required: true })} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" {...register("email", { required: true })} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" {...register("message", { required: true })}></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Send" />
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
