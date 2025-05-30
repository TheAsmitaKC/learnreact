import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (!user || formdata.password !== user.password || formdata.email !== user.email) {
      toast.error("Email or Password do not match!");
      return;
    }

    toast.success("User logged in!");
  };

  return (
    <div className="containerbox">
      <div className="form-box">
      <ToastContainer position="top-right" />
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formdata.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          <p className="para">Don't have an account? <a href="/">Register</a></p>
        </form>
      </div>
   
    </div>
  );
};

export default Login;
