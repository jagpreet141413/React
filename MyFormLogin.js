import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const MyFormLogin = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
const [show, setShow] = useState(false);
const navigate = useNavigate();
  const [email, setEmail] =useState('');
const  [password, setPassword] = useState('');
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

const handleShow = () => {
  setShow(!show)
}

  const handleChangeEmail =(e) => {
console.log(e.target.value);
setEmail(e.target.value);
  }
  const handleChangePassword =(e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

      }

  const handleLogin = () => {
    const storedData = JSON.parse(localStorage.getItem('registrationData'));

    if (storedData && storedData.email === email && storedData.password === password) {
      alert('Login successful!');
      navigate('/DashboardPage')
    } else {
      alert('Invalid email or password');
    }
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleLogin();
  };

  return (
    <div className="text-center">
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <label>
        Email:
        <input type="email" name="email"  onChange={handleChangeEmail} required />
      </label>
      <br />
      <label>
        Password:
        <input style={{margin:5}} type={show ? "text": "password"} name="password" onChange={handleChangePassword}  required /> 
      </label>        <button style={{margin:5}} onClick={handleShow}>{show? <IoIosEye />:<IoIosEyeOff />  }</button>
      
      <br />
      <button type="submit" onClick={handleLogin}  >Login</button>
      <p>Don,t have an account please Signup here <Link to='/MyForm'>Sign Up</Link></p>
      
    </form>
    </div>
  );
};

export default MyFormLogin;
