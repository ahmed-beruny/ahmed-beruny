import React from 'react'
import './contacts.css'
export default function Contacts() {
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
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
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
