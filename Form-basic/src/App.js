import React from "react";
import "./../index.css";
import {useState,useEffect} from  'react';





export default function Signup() {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);



    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };

    const handleLastNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
        }));
    };
    
    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };
    


    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
        }






  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
      
        { submitted &&  <div class='success-message'>Success! Thank you for registering</div>}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        
        {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
  
        {submitted && !values.lastName && <span id='last-name-error'>Please enter a last name</span>}        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        
        {submitted && !values.email && <span id='email-error'>Please enter an email address</span>}        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
