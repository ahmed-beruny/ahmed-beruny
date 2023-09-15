import React from 'react'
import './contacts.css'
import { useForm } from 'react-hook-form';
import { useState,useEffect } from 'react';
export default function Contacts() {
 const { register, handleSubmit } = useForm();
 const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch('https://myblogs-d2xr.onrender.com/api/messages');
      const data = await res.json();
      //reverse the array to show the latest message first
      data.reverse();
      //only first 5 messages
      data.splice(5);
      setMessages(data);
    }
    getMessages();
  }, []);
  
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

    //clear form
    if(res.status === 200){
      alert('Message sent successfully');
      document.getElementById('message').value = '';
      //reload
      window.location.reload();
    }else{
      alert('Something went wrong');
    }
  };
  return (
    <div className='contacts-container' id='contact'>

      <div className='contacts-title'>
        <h1>Contacts</h1>
      </div>

      <div className='contacts-body'>
        

        <div className='contacts-left'>
        <h1>Last 5 messages</h1>
          {
            messages.map((message) => (
              <div className='message'>
                <h3>{message.name}</h3>
                <p>{message.message}</p>
              </div>
            ))
          }
        </div>

        <div className="contacts-form">
          <form onSubmit= {handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required id="name" {...register("name", { required: true })} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required id="email" {...register("email", { required: true })} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required cols="30" rows="10" {...register("message", { required: true })}></textarea>
            </div>
            <div className="form-group">
              <button type="submit" value="Send" >submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
