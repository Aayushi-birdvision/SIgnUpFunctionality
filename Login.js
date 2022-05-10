import React from 'react'
import "./login.css";

const Login = () => {
  return (
   <div className="container">
      <h1>LOGIN</h1>
      <form action=" ">
        <div className='email'>
          <label htmlfor="email"> Email</label>
          <input type="email" className="email" id="email"/>
        </div>
        <div className='pass'>
          <label htmlfor="password"> Password</label>
          <input type="password" className="pass" id="pass"/>
        </div><br />
        <button type="submit" className="signup">Sign up</button>
      </form>
    </div>
  );
}

export default Login ;