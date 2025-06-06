import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const register = () => {
    const navigate = useNavigate()
const [formdata, setformdata]=useState({
name:"",
email:"",
password:""
})
const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
function handlesubmit(e){
e.preventDefault();
localStorage.setItem("user",JSON.stringify(formdata))
const userdata = localStorage.getItem("user");  
if(userdata ){
const user = JSON.parse(userdata)
if(user.name && user.email && user.password){
    toast.success("Registered successfully ! Redirecting to Login")
 setTimeout(()=>{
    navigate("/login")
 },3000)
}
else{
    toast.error("No data found")
}
}

}

  return (
 <>
 <div className="containerbox">
    <div className='form-box'>
     <ToastContainer position="top-right"/>
        <form onSubmit={handlesubmit}  >
        <h1>Create Account</h1>
        <input type="text"  placeholder='Enter your name' name='name' value={formdata.name} onChange={handlechange}/>
        <input type="text" placeholder='Enter your email ' name='email' value={formdata.email} onChange={handlechange}/>
        <input type="text"  placeholder='Enter your password' name='password' value={formdata.password} onChange={handlechange}/>
        <button type='submit' >Register</button>
        <p className='paralogin'>Already have an account ? <a href="/login">Login</a></p>
        
        </form>
   

 </div>
 </div>
 </>
  )
}

export default register