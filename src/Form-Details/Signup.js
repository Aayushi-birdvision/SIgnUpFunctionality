import {useState , useEffect ,React} from'react';
import Details from "./Details";
import Forms from "./Forms";
import "./signup.css"

function Signin() {
  const initialValues ={name:"",email:"",password:"",confirmPassword:""};
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
    if (!values.name) {
      errors.name ="Name is required!";
    }
    if (!values.email) {
      errors.email ="Email is required!";
    }else if (!regex.test(values.email))
    {
      errors.email="This is not a valid email format";
    }
    if (!values.password) {
      errors.password ="Password is required!";
    }  else if (values.password.length < 4 ){
        errors.password="Password must be more than 4 characters";
    }else if (values.password.length > 8 ){
      errors.password="Password cannot exceed than 8 characters";
  }
    if (!values.cnfrmPass) {
      errors.cnfrmPass ="Confirm your password!";
    }
    if (values.password !==values.cnfrmPass) {
      errors.cnfrmPas ="Please enter the correct password";
    }
    return errors;
  }
  if( isSubmit && Object.keys(formErrors).length === 0 )   {
    return(
      <Details formValues={formValues} />
    )
  }                
  else {
    return(
      <Forms
        formValues={formValues}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit= {handleSubmit}
      />
    );
  }                        
}     
export default Signin;