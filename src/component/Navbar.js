import { NavLink } from "react-router-dom";
const Navbar = () => {
  const getActiveStyle =({isActive})=> (isActive ? {background0Color:'red'} : undefined);
  return (
    <ul>
      <li><NavLink to="/Home" style={({getActiveStyle})}>HOME</NavLink></li>
      <li><NavLink to="/Signup" style={({getActiveStyle})}>SIGN UP</NavLink></li>
      <li><NavLink to="/Login" style={({getActiveStyle})}>LOGIN</NavLink></li>
      <li><NavLink to="/DynamicTable" style={({getActiveStyle})}>TABLE</NavLink></li>
      <li><NavLink to="/user" style={({getActiveStyle})}>USERS</NavLink></li>      
    </ul>  
  );
}

export default Navbar;   