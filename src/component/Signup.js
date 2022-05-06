import React from "react";
import   "./signup.css";

function Signup() {
  return (
   <>
    <div className="container">
     <h1>Sign Up</h1>
      <form action=" ">
        <div className="form-1">
          <label htmlfor="name"> Name</label>
          <input type="text" name="fname" id="name"/>
        </div>
        <div className="form-2">
          <label htmlfor="email"> Email</label>
          <input type="email" name="email" id="email"/>
        </div>
        <div className="form-3">
         <label htmlfor="password"> Password</label>
         <input type="password" name="pass" id="pass"/>
        </div>
        <div className="form-4">
          <label htmlfor="confirm password"> Confirm password</label>
          <input type="password" name="pass" id="pass"/>
        </div>
        <button type="submit" class="signup">SIGN UP</button>  
      </form>
   </div> 
   </>
  ); 
}

export default Signup;