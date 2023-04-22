import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers'

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if(inputType === 'name') {
      setName (inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    setErrorMessage('');

    console.log(message, name, email)

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid or empty name');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <div className='p-5'>
      <h3>Contact</h3>
      <div className='col-lg-5 col-sm-12'>
        <form className="form">
          <label className='pt-3' for = 'name'>Name</label>
          <input
            value = {name}
            name = "name"
            onChange={handleInputChange}
            type = "text"
            placeholder=" name"
          />

          <label className='pt-3' for = 'email'>Email</label>
          <input
            value = {email}
            name = "email"
            onChange={handleInputChange}
            type = "email"
            placeholder="email"
          />

          <label className='pt-3' for = 'message'>Message</label>
          <textarea
            // className='mb-4 message-box'
            className='message-box'
            value = {message}
            name = "message"
            onChange = {handleInputChange}
            type = "text"
            placehol
            placeholder="message"
          />
          <button
            className='btn btn-secondary w-25 mt-2' 
            type="button"
            onClick={handleFormSubmit}
            >Submit</button>
        </form>
      </div>
      
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

  export default Contact;