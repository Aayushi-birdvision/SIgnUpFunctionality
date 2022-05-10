import {useState , useEffect ,React} from'react';

function Signin() {
  const initialValues ={fname:"",email:"",password:"",confirmPassword:""};
  const[formValues,setFormValues]=useState(initialValues);
  const[formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const handleChange =(e) =>{
    const {name,value}=e.target;
    setFormValues({...formValues,[name]:value});
  };
  const handleSubmit=(e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate =(values) => {
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      errors.fname ="Name is required!";
    }
    if (!values.email) {
      errors.email ="Email is required!";
    }else if (!regex.test(values.email)){
      errors.email="This is not a valid email format";
    }
    if (!values.password) {
      errors.password ="Password is required!";
    }  else if (values.password.length < 4 ){
        errors.password="Password must be more than 4 characters";
    }else if (values.password.length > 8 ){
      errors.password="Password cannot exceed than 8 characters";
  }
    if (!values.confirmPassword) {
      errors.confirmPassword ="Confirm your password!";
    }
    if (values.password !==values.confirmPassword) {
      errors.confirmPassword ="Please enter the correct p";
    }
    return errors;
  };
  return(
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ?(
        <div>
          <h1>Successfully Signed In</h1>
          <p>Name:{formValues.fname}</p>
          <p>Email:{formValues.email}</p>
          <p>Password:{formValues.password}</p>
         <p>Confirm Password:{formValues.confirmPassword}</p>
        </div>
        ):(
       <div className="section">
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
        <div className="divider"></div>
          <div className="form">
          <div className="field">
            <label>Name</label>
            <input 
              type="text" 
              name="fname" 
              placeholder='Enter your name' 
              value={formValues.fname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.fname}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="email" 
              name="email" 
              placeholder='Enter your email' 
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password" 
              name="password" 
              placeholder='Enter your password' 
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <label>Confirm password</label>
            <input
              type="password"
              name="confirmPassword" placeholder='Confirm your password' 
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.confirmPassword}</p>
          <button className="btn-blue" type="submit">Sign up</button>
        </div>
      </form>
    </div>
       
  )

}           
</div>
  
  );
}     
export default Signin;