import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";





const MyForm = () => {

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleShow = () => {
    setShow(!show)
  }
  const handleSubmit = (e) => {
    // e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const storeData = localStorage.setItem('registrationData', JSON.stringify(formData));
    if(storeData == storeData){   
    
      alert('Registration successful')

    }

    // localStorage.setItem('registrationData', JSON.stringify(formData));
    
  };

  return (
    <div className="text-center">
    <form onSubmit={handleSubmit}>
      <h2>Sign Up Form</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Password:
        <input type={show ? "text": "password"} name="password" value={formData.password} onChange={handleChange} required />
      </label> <button style={{margin:5}} onClick={handleShow}>{show? <IoIosEye />:<IoIosEyeOff />  }</button>
      
      <br />
      <label>
        Confirm Password:
        <input type={show ? "text": "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </label> <button style={{margin:5}} onClick={handleShow}>{show? <IoIosEye />:<IoIosEyeOff />  }</button>
      
      <br />
      <button type="submit">Register</button>
      <p>Already have an account please Login here <Link to='/'>Login</Link> </p>
      
    </form>
    </div>
  );
};

export default MyForm;
